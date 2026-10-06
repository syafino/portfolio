// All site copy lives here. Edit this file, not the components.
//
// Photos: drop files into public/photos/ and set `image: '/photos/<name>'` on a post.
// Pass an array of paths to make the post a carousel.
// Posts without an image render a generated gradient tile.
// Vercel's filesystem is case-sensitive, so the filename here must match exactly.

export const socials = {
  github: 'https://github.com/syafino',
  linkedin: 'https://linkedin.com/in/syafino-yunalfian',
  email: 'mailto:syafino2@illinois.edu',
  phone: 'tel:+13123839339',
  resume: '/resume.pdf',
};

export const profile = {
  username: 'syafino',
  name: 'Syafino Yunalfian',
  category: 'AI Engineer',
  bio: [
    'Co-founder @ Sylmu · VP & AI Systems Lead @ Agentic AI UIUC',
    "CS & Statistics @ UIUC '27",
    'I build agents, RAG pipelines and automation that runs in production, not just in demos',
    '📍 Champaign, IL',
  ],
  link: { label: 'github.com/syafino', href: socials.github },
  gpa: '3.88',
};

// Highlights open as stories. `image` fills the story with link stickers above it;
// without one the story is a gray card with `text` and the stickers.
// ponytail: resume.jpg is a render of the PDF, so re-run this when resume.pdf changes:
// sips -s format jpeg -s formatOptions 88 --resampleHeight 2200 public/resume.pdf --out public/photos/resume.jpg
type Sticker = { label: string; href: string; download?: boolean };
export const highlights: { label: string; image?: string; text?: string; links: Sticker[] }[] = [
  { label: 'Resume', image: '/photos/resume.jpg', links: [{ label: 'Download PDF', href: socials.resume, download: true }] },
  { label: 'GitHub', image: '/photos/github.jpg', links: [{ label: 'github.com/syafino', href: socials.github }] },
  { label: 'LinkedIn', image: '/photos/linkedin.jpg', links: [{ label: 'linkedin.com/in/syafino-yunalfian', href: socials.linkedin }] },
  {
    label: 'Email',
    text: 'Get in touch',
    links: [
      { label: 'syafino2@illinois.edu', href: socials.email },
      { label: '+1 (312) 383 9339', href: socials.phone },
      { label: 'linkedin.com/in/syafino-yunalfian', href: socials.linkedin },
      { label: 'github.com/syafino', href: socials.github },
    ],
  },
];

// Messages: an AI stand-in that answers from this file (see api/chat.ts).
export const chat = {
  status: 'AI assistant · answers from my portfolio',
  greeting: "Hey! I'm an AI version of Syafino. Ask me about my work, projects or what I'm up to.",
  suggestions: ['What are you working on right now?', 'Tell me about your projects', 'What did you do at Elara Health?'],
  error: "That didn't go through. Try again, or email me at syafino2@illinois.edu.",
};

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date?: string;
  banner?: string; // headline strip shown above the photo (used on reposts)
  image?: string | string[]; // several = swipeable carousel, first one is the grid tile
  caption: string;
  tags: string[];
  links?: Sticker[];
};

// Posts tab: experience, newest first.
export const posts: Post[] = [
  {
    slug: 'sylmu',
    image: '/photos/sylmu.jpg',
    title: 'Sylmu',
    subtitle: 'Co-founder',
    date: 'Now',
    // TODO: say what Sylmu does and when it started
    caption: "New chapter: I'm now a co-founder at Sylmu. Heads down building, more on this soon.",
    tags: ['startup', 'cofounder'],
  },
  {
    slug: 'elara',
    image: '/photos/elara.jpg',
    title: 'Elara Health',
    subtitle: 'San Francisco, CA',
    date: 'May 2026 – Aug 2026',
    caption:
      "Spent my summer in San Francisco as an AI engineer intern at Elara Health. Four months of building record-replay automation with an AI fallback for healthcare portals like Availity, Integra CUE and Modio.\n\nA big chunk of it was teaching the workflows to tell found, not found and portal error apart, so a run could keep going through payer candidates instead of giving up early. I also built the controls for long-running runs: traversal history, editable candidate lists, result screens and a stop button.\n\nThe part I didn't expect to enjoy this much was sitting in on sales, customer and investor calls and turning what I heard into what we built next.",
    tags: ['AI agents', 'automation', 'healthcare', 'internship'],
  },
  {
    slug: 'agentic-ai',
    image: ['/photos/agentic-ai-1.jpg', '/photos/agentic-ai-2.jpg'],
    title: 'Agentic AI @ UIUC',
    subtitle: 'Champaign, IL',
    date: 'Jan 2026 – Present',
    caption:
      "Hey, this is me as Vice President & AI Systems Lead at Agentic AI @ UIUC, the largest AI club on campus. I've been doing this since January 2026.\n\nI run lectures and workshops so students can learn AI and actually use it in their own projects. On the build side I made a RAG pipeline for clinically grounded answers you can trace back to a source, and a multi-agent system with a patient simulation agent and automated scheduling.\n\nWe run inference on Groq to keep it fast, and host local models with Ollama so there's no API bill and the data stays private.",
    tags: ['LangChain', 'Qdrant', 'PubMedBERT', 'Groq', 'Ollama'],
  },
  {
    slug: 'garg',
    image: '/photos/garg.jpg',
    title: 'Garg Research Group',
    subtitle: 'UIUC · Champaign, IL',
    date: 'Sep 2025 – May 2026',
    caption:
      "Nine months as a software engineer and automation research assistant at the Garg Research Group at UIUC.\n\nI built and deployed the full-stack software for a device that takes the cement R3 reactivity test from 7 days down to 30 minutes. That meant a Raspberry Pi doing real-time camera analysis with OpenCV, Wi-Fi setup through its own hotspot, MQTT between the device and the cloud, and a live dashboard that tracks all 5 stages of the process.\n\nProbably the most hardware I've ever touched for a software job.",
    tags: ['React', 'Node.js', 'PostgreSQL', 'Raspberry Pi', 'OpenCV', 'MQTT', 'GCP'],
  },
  {
    slug: 'acm',
    image: '/photos/acm.jpg',
    title: 'ACM SIG Mobile',
    subtitle: 'Champaign, IL',
    date: 'Aug 2025 – Present',
    caption:
      "Leading the backend for an 8-person team at ACM SIG Mobile since August 2025. We're building a student services app for UIUC.\n\nI designed the PostgreSQL schema, and a lot of my time goes into mentoring: Flutter and Dart, ER diagrams, and how to design a REST API that doesn't fall apart later.",
    tags: ['Flutter', 'Dart', 'PostgreSQL', 'REST API'],
  },
  {
    slug: 'cimb',
    title: 'CIMB Niaga Bank',
    subtitle: 'Jakarta, Indonesia',
    date: 'Jul 2022 – Aug 2022',
    image: '/photos/cimb.jpg',
    caption:
      'Throwback to my very first internship: two months as a data analysis intern at CIMB Niaga in Jakarta.\n\nI dug through transaction data in Excel and pandas to find trends for investment decisions, built the charts and reports that tracked market performance, and kept an eye on financial news for the portfolio team.',
    tags: ['Python', 'pandas', 'Excel', 'data analysis'],
  },
];

// Tagged tab: projects.
export const tagged: Post[] = [
  {
    slug: 'text-to-sql',
    title: 'Text-to-SQL Evaluation Agent',
    subtitle: '2nd place · Berkeley AgentX',
    caption:
      "Built this for the Berkeley AgentX Hackathon and it took 2nd place out of 40,000+ participants.\n\nIt's a sandboxed framework that grades text-to-SQL agents on safety, syntax, schema and logic. It checks for hallucinations before anything executes, spins up reproducible Postgres environments in Docker, and sorts every failure into an error taxonomy. You can use it from the web or the CLI.",
    tags: ['Python', 'PostgreSQL', 'sqlglot', 'Docker', 'LLM'],
    links: [{ label: 'Code', href: 'https://github.com/ashcastelinocs124/text-2-sql-agent' }],
  },
  {
    slug: 'mcp-memory',
    title: 'MCP Server: AI Memory & Reasoning',
    subtitle: '2nd place · Claude UIUC Hackathon',
    caption:
      'What if your AI actually remembered you? This is an MCP server that gives a model persistent long-term memory, so it can build a structured profile of the user and recall the right context later. Took 2nd place at the Claude UIUC Hackathon.',
    tags: ['TypeScript', 'Node.js', 'JSON-RPC'],
    links: [{ label: 'Code', href: 'https://github.com/Build-for-fun/claude-hackathon' }],
  },
  {
    slug: 'buildathon',
    title: 'Agentic AI Buildathon',
    subtitle: 'Organizer · ~200 competitors',
    caption:
      'This one I organized instead of competing in. I led planning and execution for a business-focused Agentic AI buildathon with around 200 competitors, sponsored by Google and GIES. We partnered with campus AI orgs and the Big Ten AI Conference so business students had an easy way into agentic AI.',
    tags: ['Event Strategy', 'Sponsorship', 'Community'],
  },
  {
    slug: 'pwst',
    title: 'Physical World Scarcity Terminal',
    subtitle: 'Python · FastAPI · PostGIS',
    caption:
      'Think Bloomberg terminal, but for water, energy and logistics. PWST watches physical-world signals to catch disruptions before they hit markets.\n\nUnder the hood it pulls from 8+ external APIs through an async pipeline, validates everything with Pydantic, stores time series in PostGIS, refreshes on a Celery + Redis queue, and correlates events in real time with VADER sentiment.',
    tags: ['Python', 'FastAPI', 'Streamlit', 'PostGIS', 'Celery', 'Redis', 'Docker'],
    links: [{ label: 'Code', href: 'https://github.com/syafino/Physical-World-Scarcity-Terminal' }],
  },
  {
    slug: 'aceit',
    title: 'AceIt: Interview Teleprompter',
    subtitle: 'Python · Tkinter',
    caption:
      'Made this because I kept looking away from the camera in interviews. AceIt is an invisible floating overlay that puts your bullet points right next to your webcam, so you keep eye contact the whole time.',
    tags: ['Python', 'Tkinter', 'CLI'],
    links: [{ label: 'Code', href: 'https://github.com/syafino/AceIt' }],
  },
  {
    slug: 'framelight',
    title: 'Framelight: AI Camera Assistant',
    subtitle: 'PyTorch · React Native',
    caption:
      'Framelight helps you frame a better photo while you are still taking it. The models run on-device and give real-time visual guidance on composition, right in the camera view.',
    tags: ['PyTorch', 'TensorFlow', 'OpenCV', 'React Native'],
    links: [{ label: 'Demo', href: 'https://youtu.be/dxQS8v8iZco' }],
  },
  {
    slug: 'healthcare-assistant',
    title: 'Multi-Agent Healthcare Assistant',
    subtitle: 'LangGraph · RAG',
    caption:
      'A multi-agent pipeline that uses GPT-5 and MedPaLM with RAG to give personalized healthcare guidance. Each agent has its own job and they hand off to each other through LangGraph.',
    tags: ['Python', 'LangGraph', 'RAG', 'Flask'],
  },
  {
    slug: 'pokesight',
    title: 'PokéSight: Smart Pokémon Map',
    subtitle: 'FastAPI · PostgreSQL · GCP',
    caption:
      'Gotta find them all, efficiently. PokéSight is a data-driven web app for searching Pokémon strategically by type, rarity and stats.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'GCP'],
    links: [{ label: 'Code', href: 'https://github.com/syafino/Pokesight' }],
  },
  {
    slug: 'checkers',
    title: 'C++ Web Apps: Checkers',
    subtitle: 'Scholarship awarded',
    caption:
      'An old one I still like: a web checkers game with a C++ backend, served over CGI from a Linux server with AJAX on the front. It ended up earning me a scholarship.',
    tags: ['C++', 'HTML', 'JavaScript', 'Linux'],
  },
];

// Reposts tab: achievements.
export const reposts: Post[] = [
  {
    slug: 'win-agentx',
    banner: '🥈 2nd place · Berkeley AgentX Hackathon',
    title: 'Berkeley AgentX Hackathon',
    subtitle: '🥈 2nd place · 40,000+ participants',
    caption:
      'Still a little unreal. Our Text-to-SQL Evaluation Agent took 2nd place at the Berkeley AgentX Hackathon, out of more than 40,000 participants.',
    tags: ['hackathon', 'AgentX', 'Berkeley'],
    links: [{ label: 'Code', href: 'https://github.com/ashcastelinocs124/text-2-sql-agent' }],
  },
  {
    slug: 'win-claude',
    banner: '🥈 2nd place · Claude UIUC Hackathon',
    image: '/photos/claude-hackathon.jpg',
    title: 'Claude UIUC Hackathon',
    subtitle: '🥈 2nd place',
    caption:
      '2nd place at the Claude UIUC Hackathon with our MCP server for persistent AI memory and reasoning. Great weekend, very little sleep.',
    tags: ['hackathon', 'Claude', 'MCP'],
    links: [{ label: 'Code', href: 'https://github.com/Build-for-fun/claude-hackathon' }],
  },
  {
    slug: 'win-math',
    banner: '🥇 Gold medal · National Math Olympiad',
    image: '/photos/math-gold.jpg',
    title: 'Math Gold Medal',
    subtitle: '🥇 Olimpiade Sains Siswa Indonesia',
    date: 'Feb 2022',
    caption: 'Before the code there was math. Gold medal at the national level in Mathematics at the Olimpiade Sains Siswa Indonesia back in February 2022, and it is still one of the wins I am proudest of.',
    tags: ['math', 'goldmedal', 'olympiad'],
  },
  {
    slug: 'win-deans-list',
    banner: "Dean's List & Honors · UIUC",
    title: "Dean's List & Honors",
    subtitle: 'UIUC · GPA 3.88',
    caption:
      "Made the Dean's List at UIUC and I'm part of the Honors Program, holding a 3.88 GPA in Computer Science & Statistics.",
    tags: ['UIUC', 'deanslist', 'honors'],
  },
  {
    slug: 'win-buildathon',
    banner: 'Organizer · Agentic AI Buildathon',
    title: 'Agentic AI Buildathon',
    subtitle: 'Organizer · ~200 competitors',
    caption:
      'We pulled it off. Around 200 competitors showed up to the Agentic AI Buildathon I helped organize, with Google and GIES as sponsors.',
    tags: ['buildathon', 'AgenticAI', 'UIUC'],
  },
  {
    slug: 'win-scholarship',
    banner: 'Scholarship awarded',
    image: ['/photos/scholarship-1.jpg', '/photos/scholarship-2.jpg'],
    title: 'Scholarship',
    subtitle: 'Parkland College honors projects',
    date: 'Fall 2024',
    caption: 'Two honors projects from my time at Parkland College: a paper on the history and basics of Fourier series, and a checkers game with a C++ backend. A checkers game turning into a scholarship is not a sentence I expected to write.',
    tags: ['scholarship', 'honors', 'cpp', 'math'],
    links: [
      { label: 'Fourier paper', href: 'https://spark.parkland.edu/ah/341' },
      { label: 'Checkers', href: 'https://spark.parkland.edu/ah/340' },
    ],
  },
];
