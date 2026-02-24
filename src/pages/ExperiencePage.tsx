const ExperiencePage = () => {
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
      title: 'Technical Lead, Backend',
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
    <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: '#1a1a1a', marginBottom: 40 }}>Experience</h1>

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

export default ExperiencePage;
