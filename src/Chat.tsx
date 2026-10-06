import { useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2, Send, X } from 'lucide-react';
import { chat, profile } from './content';
import avatar from './assets/profile.jpg';

type Turn = { role: 'user' | 'assistant'; content: string };
export type ChatState = 'closed' | 'open' | 'full';

const Chat = ({ state, setState }: { state: ChatState; setState: (s: ChatState) => void }) => {
  const [turns, setTurns] = useState<Turn[]>([{ role: 'assistant', content: chat.greeting }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }); }, [turns, state]);

  const send = async (content: string) => {
    if (!content.trim() || busy) return;
    const next: Turn[] = [...turns, { role: 'user', content: content.trim() }];
    const reply = (text: string) => setTurns([...next, { role: 'assistant', content: text }]);
    reply('');
    setInput('');
    setBusy(true);
    try {
      // The greeting is local only: the API conversation starts at the visitor's first message.
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ messages: next.slice(1) }) });
      if (!res.body || (!res.ok && res.status !== 400)) throw new Error(`chat ${res.status}`);
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let text = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply((text += value));
      }
      if (!text) throw new Error('empty reply');
    } catch {
      reply(chat.error);
    }
    setBusy(false);
  };

  if (state === 'closed')
    return (
      <button onClick={() => setState('open')} className="fixed right-6 bottom-6 z-10 hidden cursor-pointer items-center gap-3 rounded-full border border-line bg-bg px-5 py-3 text-base font-semibold shadow-lg md:flex">
        <Send /> Messages
        <img src={avatar} alt="" className="size-6 rounded-full object-cover" />
      </button>
    );

  const full = state === 'full';
  return (
    <section aria-label="Messages" className={`fixed inset-0 z-20 flex flex-col bg-bg ${full ? 'md:left-[72px] md:border-l md:border-line xl:left-[244px]' : 'md:inset-auto md:right-6 md:bottom-0 md:h-[520px] md:w-[360px] md:rounded-t-xl md:border md:border-line md:shadow-2xl'}`}>
      <header className="flex items-center gap-3 border-b border-line px-4 py-3">
        <img src={avatar} alt="" className="size-8 rounded-full object-cover" />
        <div className="min-w-0 flex-1 leading-tight">
          <div className="font-semibold">{profile.username}</div>
          <div className="truncate text-xs text-muted">{chat.status}</div>
        </div>
        <button onClick={() => setState(full ? 'open' : 'full')} aria-label={full ? 'Shrink' : 'Expand'} className="hidden cursor-pointer md:block">
          {full ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
        <button onClick={() => setState('closed')} aria-label="Close messages" className="cursor-pointer"><X /></button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className={`mx-auto flex min-h-full flex-col gap-1 p-4 ${full ? 'max-w-2xl' : ''}`} aria-live="polite">
          <div className="flex flex-col items-center gap-1 py-6 text-center">
            <img src={avatar} alt="" className="size-20 rounded-full object-cover" />
            <div className="mt-2 text-base font-semibold">{profile.name}</div>
            <div className="text-xs text-muted">{profile.username} · {chat.status}</div>
          </div>
          {turns.map((t, i) => (
            <div key={i} className={`max-w-[78%] rounded-[18px] px-3 py-2 break-words whitespace-pre-wrap ${t.role === 'user' ? 'self-end bg-[#3797f0] text-white' : 'self-start bg-hover'}`}>
              {t.content || <span className="animate-pulse">…</span>}
            </div>
          ))}
          {turns.length === 1 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {chat.suggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className="cursor-pointer rounded-full border border-line px-3 py-1.5 text-left hover:bg-hover">{s}</button>
              ))}
            </div>
          )}
          <div ref={end} />
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); send(input); }} className={`m-3 flex items-center gap-2 rounded-full border border-line px-4 py-2 focus-within:border-muted ${full ? 'mx-auto w-[calc(100%-1.5rem)] max-w-2xl' : ''}`}>
        <input value={input} onChange={(e) => setInput(e.target.value)} maxLength={1000} placeholder="Message..." aria-label="Message" className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted" />
        {input.trim() && <button disabled={busy} className="cursor-pointer font-semibold text-blue disabled:opacity-50">Send</button>}
      </form>
    </section>
  );
};

export default Chat;
