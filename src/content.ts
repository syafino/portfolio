// All site copy lives here. Edit this file, not the pages.
//
// Photos: drop files into public/photos/ and reference them below as '/photos/<name>'.
// Vercel's filesystem is case-sensitive, so the filename here must match exactly.

export const socials = {
  github: 'https://github.com/syafino',
  linkedin: 'https://linkedin.com/in/syafino-yunalfian',
  email: 'syafino2@illinois.edu',
  phone: '+1 (312) 383 9339',
  phoneHref: 'tel:+13123839339',
  resume: '/resume.pdf',
};

export const hero = {
  eyebrow: 'Computer Science & Statistics @ UIUC · Class of 2027',
  bio: "AI engineer intern at Elara Health and Vice President & AI Systems Lead at Agentic AI @ UIUC. I build agents, RAG pipelines, and automation that runs in production, not just in demos. 2x hackathon runner-up. Math gold medalist.",
  status: 'Now · AI Engineer Intern @ Elara Health · VP @ Agentic AI',
};

export const now = [
  {
    tint: 'card-sky',
    title: 'Elara Health',
    text: 'Building record-replay automation loops with AI fallback for healthcare portal workflows across Availity, Integra CUE, and Modio.',
  },
  {
    tint: 'card-violet',
    title: 'Agentic AI @ UIUC',
    text: 'Running lectures and workshops at the largest AI club on campus, and shipping a multi-agent healthcare system with patient simulation and scheduling.',
  },
  {
    tint: 'card-mint',
    title: 'Next',
    text: 'Aiming for a CS PhD at UIUC. I want to work on systems that make advanced AI usable and trustworthy.',
  },
];

export type Photo = { src: string; caption: string; group: 'travel' | 'hackathon'; wide?: boolean };

export const photos: Photo[] = [
  // Travel & life. Add as many as you like; set wide: true for a 2-column tile.
  // { src: '/photos/tokyo.jpg', caption: 'Tokyo, 2025', group: 'travel', wide: true },
  // { src: '/photos/campus.jpg', caption: 'Grainger, late night', group: 'travel' },

  // Hackathons (uncomment once the files exist in public/photos/)
  // { src: '/photos/agentx.jpg', caption: '2nd place · Berkeley AgentX · 40,000+ participants', group: 'hackathon' },
  // { src: '/photos/claude-hackathon.jpg', caption: '2nd place · Claude UIUC Hackathon', group: 'hackathon' },
];

export const faq = [
  { q: 'Where are you from?', a: 'TODO' },
  { q: 'Why AI?', a: 'TODO' },
  { q: 'What do you do outside of code?', a: 'TODO' },
  { q: 'What are you looking for next?', a: 'TODO' },
];

export const skills = [
  { title: 'Programming', items: ['Java', 'Python', 'TypeScript/JavaScript', 'SQL', 'NoSQL (MongoDB & Neo4j)', 'C/C++'] },
  { title: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'LangGraph', 'NLP', 'Claude Code', 'Codex'] },
  { title: 'Backend, Cloud & Systems', items: ['Node.js', 'FastAPI/Flask', 'Docker', 'Git', 'PostgreSQL', 'PostGIS', 'Redis', 'Celery', 'REST API Design', 'Async Python', 'Linux', 'GCP', 'AWS', 'QDrant', 'Pinecone', 'Supabase'] },
  { title: 'Web & Mobile', items: ['React.js', 'React Native', 'Flutter', 'HTML/CSS', 'MQTT', 'Raspberry Pi'] },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science and Statistics student at the University of Illinois at Urbana-Champaign with a passion for building systems that automate repetitive tasks.",
    "I build practical AI systems that actually run, not just papers or demos. This summer I'm an AI engineer intern at Elara Health, building automation loops with AI fallback for healthcare portals. At Agentic AI @ UIUC I'm Vice President & AI Systems Lead, where I ship RAG-based apps, optimize embeddings, and host local LLMs with Ollama to cut API costs and boost privacy.",
    "I've built everything from on-device CV models for Framelight, a real-time mobile composition assistant, to a persistent MCP memory server that won 2nd place at the Claude UIUC Hackathon, and a Text-to-SQL evaluation agent that took 2nd place at the Berkeley AgentX Hackathon.",
    'My toolbox is Python, PyTorch, TensorFlow, LangChain, FastAPI, React Native, TypeScript, Docker, and Postgres. I care about performance, reproducibility, and deployment.',
    "I'm aiming for a PhD in Computer Science at UIUC, and I want to work on systems that make advanced AI usable and trustworthy.",
  ],
  tags: ['Champaign, IL', 'Class of 2027', "Dean's List", 'GPA 3.88'],
};

export const education = {
  school: 'University of Illinois at Urbana-Champaign',
  degree: 'B.S. Computer Science & Statistics',
  meta: "Expected May 2027 · GPA 3.88/4.00 · Dean's List · Honors Program",
  coursework: ['Applied Machine Learning', 'Text-Information Systems', 'Database Systems', 'Computer Systems', 'Data Structures & Algorithms', 'Linear Algebra', 'Discrete Math', 'Calculus'],
};

export const experience = [
  {
    company: 'Elara Health, Inc',
    role: 'AI Engineer Intern',
    where: 'San Francisco, CA',
    dates: 'May 2026 – Aug 2026',
    bullets: [
      'Built record-replay automation loops with AI fallback for healthcare portal workflows, connecting carry-set handoff, chain mapping, and loop runner logic across Availity, Integra CUE, and Modio',
      'Developed eligibility classifiers and error-handling logic to distinguish found, not-found, and portal-error states, allowing workflows to traverse payer candidates without premature aborts',
      'Designed and tested UI + workflow controls for long-running automation, including traversal history, editable candidate lists, terminal result screens, and stop controls for AI-assisted runs',
      'Conducted sales and customer calls to understand workflow pain points and translate feedback into iterative product and automation improvements',
      'Participated in investor calls and product discussions, synthesizing customer feedback and market insights to inform product direction',
    ],
  },
  {
    company: 'Agentic AI @ UIUC',
    role: 'Vice President & AI Systems Lead',
    where: 'Champaign, IL',
    dates: 'Jan 2026 – Present',
    bullets: [
      'Held lectures and workshops for students to learn about AI and apply it to their own projects at the largest AI club on campus',
      'Built a domain-specific RAG pipeline (LangChain, Qdrant, PubMedBERT, BGE) for clinically grounded, source-traceable LLM responses',
      'Developed a multi-agent system with a patient simulation agent and automated scheduling, backed by persistent user context',
      'Optimized inference with Groq for near-instant, zero-cost, high-throughput healthcare queries',
      'Orchestrated local LLM hosting via Ollama, eliminating external API costs while keeping data private',
    ],
  },
  {
    company: 'Garg Research Group · UIUC',
    role: 'Software Engineer & Automation Research Assistant',
    where: 'Champaign, IL',
    dates: 'Sep 2025 – May 2026',
    bullets: [
      'Built and deployed full-stack automation software for a device that reduced cement R3 reactivity test time from 7 days to 30 minutes using React.js, Node.js, PostgreSQL, and Python',
      'Integrated Raspberry Pi with real-time camera analysis (OpenCV), automated data acquisition, and Wi-Fi provisioning through a custom hotspot interface',
      'Deployed GCP Cloud SQL for experiment data management, enabling MQTT-based device communication and secure user tracking via GUI; frontend deployed on Vercel',
      'Architected cloud-deployed MQTT relay backend (Express.js + Socket.io on Fly.io) with a real-time 5-stage process monitoring dashboard and Google OAuth 2.0',
    ],
  },
  {
    company: 'ACM SIG Mobile',
    role: 'Technical Lead, Backend',
    where: 'Champaign, IL',
    dates: 'Aug 2025 – Present',
    bullets: [
      'Lead backend development for an 8-member team, mentoring on Flutter, Dart, Android Studio, and widget-based UI',
      'Designed relational database architecture (PostgreSQL) for a UIUC student services app; mentored UML/ER diagrams and RESTful API patterns',
    ],
  },
  {
    company: 'CIMB Niaga Bank',
    role: 'Data Analysis Intern',
    where: 'Jakarta, Indonesia',
    dates: 'Jul 2022 – Aug 2022',
    bullets: [
      'Analyzed transaction datasets using Excel and Python (pandas) to identify trends and support investment decisions',
      'Created data visualizations and reports tracking market performance; monitored financial news for portfolio insights',
    ],
  },
];

export type Project = {
  title: string;
  award?: string;
  tint?: string;
  description: string;
  tech: string[];
  code?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: 'Text-to-SQL Evaluation Agent',
    award: '2nd place · Berkeley AgentX · 40,000+ participants',
    tint: 'card-sky',
    description: 'Sandboxed SQL-evaluation framework (safety, syntax, schema, logic) with pre-execution hallucination checks, reproducible Dockerized Postgres environments, multi-dimensional scoring, automated error taxonomy, and web/CLI interfaces for observable, testable agent evaluations.',
    tech: ['Python', 'PostgreSQL', 'sqlglot', 'Docker', 'LLM'],
    code: 'https://github.com/ashcastelinocs124/text-2-sql-agent',
  },
  {
    title: 'MCP Server: AI Memory & Reasoning',
    award: '2nd place · Claude UIUC Hackathon',
    tint: 'card-violet',
    description: 'Persistent long-term AI memory system enabling structured user profiling and contextual recall.',
    tech: ['TypeScript', 'Node.js', 'JSON-RPC'],
    code: 'https://github.com/Build-for-fun/claude-hackathon',
  },
  {
    title: 'Agentic AI Buildathon',
    award: 'Organizer · ~200 competitors · Google & GIES sponsors',
    tint: 'card-peach',
    description: 'Led planning and execution of a business-focused Agentic AI buildathon, partnering with campus AI organizations and the Big Ten AI Conference to give business students an accessible path into agentic AI.',
    tech: ['Event Strategy', 'Sponsorship', 'Community'],
  },
  {
    title: 'Physical World Scarcity Terminal (PWST)',
    description: 'Bloomberg-style terminal that monitors water, energy, and logistics signals to detect disruptions before they hit markets. Distributed async pipeline ingesting 8+ external APIs with Pydantic validation, PostGIS time-series storage, a Celery + Redis refresh queue, and real-time event correlation with VADER sentiment.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'PostGIS', 'Celery', 'Redis', 'Docker'],
    code: 'https://github.com/syafino/Physical-World-Scarcity-Terminal',
  },
  {
    title: 'AceIt: Interview Teleprompter',
    description: 'Invisible floating overlay that displays bullet points near your webcam so you maintain eye contact during interviews.',
    tech: ['Python', 'Tkinter', 'CLI'],
    code: 'https://github.com/syafino/AceIt',
  },
  {
    title: 'Framelight: AI Camera Assistant',
    description: 'On-device ML models for real-time visual guidance in mobile photo composition.',
    tech: ['PyTorch', 'TensorFlow', 'OpenCV', 'React Native'],
    demo: 'https://youtu.be/dxQS8v8iZco',
  },
  {
    title: 'Multi-Agent Healthcare Assistant',
    description: 'Multi-agent ML pipelines using GPT-5 and MedPaLM APIs with RAG for personalized healthcare guidance.',
    tech: ['Python', 'LangGraph', 'RAG', 'Flask'],
  },
  {
    title: 'PokéSight: Smart Pokémon Map',
    description: 'Data-driven web app for strategic Pokémon search based on type, rarity, and stats.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'GCP'],
    code: 'https://github.com/syafino/Pokesight',
  },
  {
    title: 'C++ Web Apps: Checkers',
    award: 'Scholarship awarded',
    description: 'Desktop-focused web game using CGI hosted on Linux servers with AJAX and a C++ backend.',
    tech: ['C++', 'HTML', 'JavaScript', 'Linux'],
  },
];
