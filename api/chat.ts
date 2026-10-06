import Anthropic from '@anthropic-ai/sdk';
import { chat, posts, profile, reposts, socials, tagged, type Post } from '../src/content.js';

// 'claude-haiku-4-5' is about 4x cheaper; if you switch, remove `output_config`, `betas` and `fallbacks` below.
const MODEL = 'claude-opus-5-5';
const MAX_MESSAGES = 20;
const MAX_CHARS = 1000;

const section = (name: string, list: Post[]) =>
  `## ${name}\n\n` + list.map((p) => [
    `### ${p.title} (${p.subtitle})`,
    p.date && `Dates: ${p.date}`,
    p.caption,
    `Tags: ${p.tags.join(', ')}`,
    ...(p.links ?? []).map((l) => `${l.label}: ${l.href}`),
  ].filter(Boolean).join('\n')).join('\n\n');

const system = `You are the AI assistant on ${profile.name}'s portfolio site, answering visitors in the site's Instagram-style direct messages. Visitors are mostly recruiters, engineers and classmates who want to know what ${profile.name} has done.

Speak as ${profile.name} in the first person, in a relaxed, friendly DM voice. Keep replies short, usually one to three sentences, in plain text with no markdown, because they render in small chat bubbles. If someone asks whether they are talking to the real person, say you are an AI stand-in that answers from the portfolio.

Everything you know about ${profile.name} is in the profile below. When a question goes beyond it, say you don't have that detail here and point them to email (${socials.email.replace('mailto:', '')}) or LinkedIn (${socials.linkedin}) rather than guessing, since visitors may act on what you say. You are here to talk about ${profile.name} and their work; for unrelated requests, such as writing code or essays, say that's not what this chat is for and steer back.

# Profile

Name: ${profile.name} (@${profile.username})
Role: ${profile.category}
GPA: ${profile.gpa}
${profile.bio.join('\n')}
GitHub: ${socials.github}
LinkedIn: ${socials.linkedin}
Resume: ${socials.resume} on this site

${section('Experience', posts)}

${section('Projects', tagged)}

${section('Achievements', reposts)}`;

type Turn = { role: 'user' | 'assistant'; content: string };

const parse = (body: unknown): Turn[] | null => {
  const list = (body as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(list) || list.length < 1 || list.length > MAX_MESSAGES) return null;
  const ok = list.every((m, i) =>
    (m?.role === 'user' || m?.role === 'assistant') &&
    typeof m.content === 'string' && m.content.trim().length > 0 &&
    // Replies are capped by max_tokens, visitor messages by MAX_CHARS.
    m.content.length <= (m.role === 'user' ? MAX_CHARS : 8000) &&
    m.role === (i % 2 ? 'assistant' : 'user'));
  return ok && list.length % 2 ? list.map(({ role, content }) => ({ role, content })) : null;
};

const text = (body: string, status = 200) => new Response(body, { status, headers: { 'content-type': 'text/plain; charset=utf-8' } });

export async function POST(request: Request) {
  const messages = parse(await request.json().catch(() => null));
  if (!messages) return text("That's the limit for one chat here. Email me to keep talking!", 400);

  const encoder = new TextEncoder();
  return new Response(new ReadableStream({
    async start(out) {
      let sent = false;
      try {
        const stream = new Anthropic().beta.messages.stream({
          model: MODEL,
          max_tokens: 2000,
          output_config: { effort: 'low' },
          betas: ['server-side-fallback-2026-07-01'],
          fallbacks: 'default',
          system,
          messages,
        });
        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            out.enqueue(encoder.encode(event.delta.text));
            sent = true;
          }
        }
        const final = await stream.finalMessage();
        // A refusal or an empty turn would otherwise leave the visitor with a blank bubble.
        if (!sent) out.enqueue(encoder.encode(final.stop_reason === 'refusal' ? "Sorry, I can't help with that one." : chat.error));
      } catch (error) {
        // Details stay in the server log; the visitor only ever sees the generic line.
        if (error instanceof Anthropic.RateLimitError) console.error('chat: rate limited');
        else if (error instanceof Anthropic.AuthenticationError) console.error('chat: ANTHROPIC_API_KEY missing or invalid');
        else if (error instanceof Anthropic.APIError) console.error(`chat: API error ${error.status}`, error.message);
        else console.error('chat:', error);
        if (!sent) out.enqueue(encoder.encode(chat.error));
      }
      out.close();
    },
  }), { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' } });
}
