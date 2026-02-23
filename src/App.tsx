import { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  Code2,
  Brain,
  Server,
  Smartphone,
  MapPin,
  GraduationCap,
  Menu,
  X,
  Youtube,
  Award,
} from 'lucide-react';
import './index.css';
import profileImg from './assets/images/DBF9B645-2228-486E-AB08-E38893911C26.png';

// Navigation
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50, 
      background: 'rgba(255,255,255,0.9)', 
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a' }}>
          Syafino Yunalfian
        </a>

        <div style={{ display: 'flex', gap: 32 }} className="hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555' }}
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '16px 24px' }} className="md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ display: 'block', padding: '8px 0', color: '#555', fontSize: 15 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero
const Hero = () => {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 400px', minWidth: 0 }}>
            <p style={{ fontSize: 14, color: '#777', marginBottom: 12, fontWeight: 500 }}>
              Computer Science & Statistics @ UIUC
            </p>
            <h1 style={{ fontSize: 44, fontWeight: 600, color: '#1a1a1a', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Building AI systems<br />that actually ship.
            </h1>
            <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.7, maxWidth: 520 }}>
              I lead AI Systems at Agentic AI, where I build RAG apps, optimize embeddings, and run local LLMs. 2x hackathon winner. Math gold medalist.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
              <a href="#contact" className="btn-primary" style={{ padding: '14px 28px', borderRadius: 100, fontSize: 15, gap: 8 }}>
                Get in touch <ArrowRight size={16} />
              </a>
              <a href="#projects" className="btn-secondary" style={{ padding: '14px 28px', borderRadius: 100, fontSize: 15 }}>
                View projects
              </a>
            </div>

            <div style={{ display: 'flex', gap: 20 }}>
              {[
                { icon: Github, href: 'https://github.com/syafino' },
                { icon: Linkedin, href: 'https://linkedin.com/in/syafino-yunalfian' },
                { icon: Mail, href: 'mailto:syafino2@illinois.edu' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-link">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 260, height: 260, borderRadius: 24, overflow: 'hidden', background: '#f5f5f5' }}>
              <img src={profileImg} alt="Syafino Yunalfian" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About
const About = () => {
  return (
    <section id="about" className="section-alt" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 32 }}>About</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8 }}>
            I'm a Computer Science and Statistics student at the University of Illinois at Urbana-Champaign with a passion for building systems that automate repetitive tasks.
          </p>
          <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8 }}>
            I build practical AI systems that actually run, not just papers or demos. Right now I lead AI Systems at Agentic AI, where I ship RAG-based apps, optimize embeddings, and host local LLMs with Ollama to cut API costs and boost privacy.
          </p>
          <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8 }}>
            I've built everything from on-device CV models for Framelight, a real-time mobile composition assistant, to a persistent MCP memory server that won 2nd place at the Claude UIUC hackathon, and 2nd place at Berkeley AgentX Hackathon.
          </p>
          <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8 }}>
            My toolbox is Python, PyTorch, TensorFlow, LangChain, FastAPI, React Native, TypeScript, Docker, and Postgres. I care about performance, reproducibility, and deployment.
          </p>
          <p style={{ fontSize: 16, color: '#444', lineHeight: 1.8 }}>
            I'm aiming for a PhD in Computer Science at UIUC, and I want to work on systems that make advanced AI usable and trustworthy.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
          <span className="tag"><MapPin size={12} style={{ marginRight: 6 }} />Champaign, IL</span>
          <span className="tag"><GraduationCap size={12} style={{ marginRight: 6 }} />Class of 2027</span>
          <span className="tag"><Award size={12} style={{ marginRight: 6 }} />Dean's List</span>
        </div>
      </div>
    </section>
  );
};

// Skills
const Skills = () => {
  const categories = [
    { title: 'Languages', icon: Code2, items: ['Python', 'TypeScript/JS', 'SQL', 'C/C++'] },
    { title: 'AI/ML', icon: Brain, items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenCV', 'RAG'] },
    { title: 'Backend', icon: Server, items: ['Node.js', 'FastAPI', 'Docker', 'PostgreSQL', 'GCP'] },
    { title: 'Frontend', icon: Smartphone, items: ['React', 'React Native', 'Flutter', 'Tailwind'] },
  ];

  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 40 }}>Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {categories.map((cat) => (
            <div key={cat.title} className="card" style={{ padding: 24 }}>
              <cat.icon size={20} style={{ color: '#777', marginBottom: 12 }} />
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a', marginBottom: 16 }}>{cat.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.items.map((item) => (
                  <li key={item} style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects
const Projects = () => {
  const projects = [
    {
      title: 'MCP Server: AI Memory & Reasoning',
      description: 'Persistent long-term AI memory system enabling structured user profiling and contextual recall.',
      tech: ['TypeScript', 'Node.js', 'JSON-RPC'],
      github: 'https://github.com/Build-for-fun/claude-hackathon',
      award: '2nd Place — Claude Hackathon',
    },
    {
      title: 'Text-to-SQL Evaluation Agent',
      description: 'Sandboxed SQL-evaluation framework with pre-execution hallucination checks and multi-dimensional scoring.',
      tech: ['Python', 'PostgreSQL', 'Docker', 'LLM'],
      github: 'https://github.com/ashcastelinocs124/text-2-sql-agent',
      award: '2nd Place — Berkeley AgentX (40K+ participants)',
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
      github: 'https://github.com/syafino/Pokesight',
    },
    {
      title: 'C++ Web Apps: Checkers',
      description: 'Desktop-focused web game using CGI hosted on Linux servers with AJAX and C++ backend.',
      tech: ['C++', 'HTML', 'JavaScript', 'Linux'],
      award: 'Scholarship Awarded',
    },
  ];

  return (
    <section id="projects" className="section-alt" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>Projects</h2>
        <p style={{ fontSize: 15, color: '#666', marginBottom: 40 }}>A selection of things I've built.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map((project) => (
            <div key={project.title} className="card" style={{ padding: 24, background: '#fff' }}>
              {project.award && (
                <span className="award-badge" style={{ marginBottom: 12 }}>
                  <Award size={12} />
                  {project.award}
                </span>
              )}
              <h3 style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>{project.title}</h3>
              <p style={{ fontSize: 14, color: '#555', marginBottom: 16, lineHeight: 1.6 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {project.tech.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: 12, padding: '4px 10px' }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Github size={14} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Youtube size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://github.com/syafino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            View all on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Experience
const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead, AI Systems',
      company: 'Agentic AI @ UIUC',
      period: 'Jan 2026 – Present',
      description: [
        'Architected and deployed a RAG-based AI system using Python and LangChain to ground LLM outputs in verified medical data',
        'Orchestrated local LLM hosting via Ollama, optimizing for high-reasoning performance while eliminating external API costs',
        'Directed roadmap encompassing web scraping, vector embedding optimization, and full-stack UI integration',
      ],
    },
    {
      title: 'Software Engineer & Automation Research Assistant',
      company: 'Garg Research Group · UIUC',
      period: 'Sep 2025 – Present',
      description: [
        'Developed GUI and automation software for a device that accelerates cement R3 reactivity test time from 7 days to 30 minutes',
        'Integrated Raspberry Pi with real-time data acquisition using React.js, Node.js, PostgreSQL, Python, MQTT; built image analysis pipeline with OpenCV',
        'Architected cloud-deployed MQTT relay backend (Express.js + Socket.io on Fly.io) with real-time 5-stage process monitoring dashboard and Google OAuth 2.0',
      ],
    },
    {
      title: 'Backend Lead (Exec)',
      company: 'ACM SIG Mobile',
      period: 'Aug 2025 – Present',
      description: [
        'Lead backend development for 8-member team, mentoring on Flutter, Dart, Android Studio, and widget-based UI',
        'Designed relational database architecture (PostgreSQL) for UIUC student services app; mentored UML/ER diagrams and RESTful API patterns',
      ],
    },
    {
      title: 'Data Analysis Intern',
      company: 'CIMB Niaga Bank',
      period: 'Jul 2022 – Aug 2022',
      description: [
        'Analyzed transaction datasets using Excel and Python (pandas) to identify trends and support investment decisions',
        'Created data visualizations and reports tracking market performance; monitored financial news for portfolio insights',
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 40 }}>Experience</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {experiences.map((exp) => (
            <div key={exp.title + exp.company}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>{exp.title}</h3>
                  <p style={{ fontSize: 15, color: '#555' }}>{exp.company}</p>
                </div>
                <p style={{ fontSize: 14, color: '#888' }}>{exp.period}</p>
              </div>
              <ul style={{ margin: '12px 0 0 0', padding: 0, listStyle: 'none' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ fontSize: 15, color: '#555', marginBottom: 6, paddingLeft: 16, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ccc' }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education
const Education = () => {
  const coursework = [
    'Applied Machine Learning',
    'Text-Information Systems',
    'Database Systems',
    'Computer Systems',
    'Data Structures & Algorithms',
    'Linear Algebra',
  ];

  return (
    <section id="education" className="section-alt" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 32 }}>Education</h2>

        <div>
          <h3 style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>University of Illinois at Urbana-Champaign</h3>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 4 }}>B.S. Computer Science & Statistics</p>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>Expected May 2027 · Dean's List · Honors Program</p>

          <p style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>Relevant coursework:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {coursework.map((c) => (
              <span key={c} className="tag">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact
const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 12 }}>Get in touch</h2>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 32 }}>
          Interested in collaborating or just want to chat about AI, model optimization, or weird dataset problems?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', marginBottom: 40 }} className="sm:flex-row sm:justify-center">
          <a
            href="mailto:syafino2@illinois.edu"
            className="card"
            style={{ padding: '16px 24px', display: 'inline-flex', alignItems: 'center', gap: 12 }}
          >
            <Mail size={18} style={{ color: '#777' }} />
            <span style={{ color: '#1a1a1a' }}>syafino2@illinois.edu</span>
          </a>
          <a
            href="tel:+13123839339"
            className="card"
            style={{ padding: '16px 24px', display: 'inline-flex', alignItems: 'center', gap: 12 }}
          >
            <Phone size={18} style={{ color: '#777' }} />
            <span style={{ color: '#1a1a1a' }}>+1 (312) 383 9339</span>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          {[
            { icon: Github, href: 'https://github.com/syafino', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/syafino-yunalfian', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer style={{ padding: '32px 24px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 14, color: '#888' }}>
          © {new Date().getFullYear()} Syafino Yunalfian
        </p>
      </div>
    </footer>
  );
};

// App
function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
