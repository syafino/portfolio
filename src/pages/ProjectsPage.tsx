import { Github, Youtube, ExternalLink, Award } from 'lucide-react';

const ProjectsPage = () => {
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
    <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>Projects</h1>
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

export default ProjectsPage;
