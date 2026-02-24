import { MapPin, GraduationCap, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: '#1a1a1a', marginBottom: 32 }}>About</h1>
        
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

        {/* Education Section */}
        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1a1a1a', marginBottom: 32 }}>Education</h2>

          <div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>University of Illinois at Urbana-Champaign</h3>
            <p style={{ fontSize: 15, color: '#555', marginBottom: 4 }}>B.S. Computer Science & Statistics</p>
            <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>Expected May 2027 · Dean's List · Honors Program</p>

            <p style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>Relevant coursework:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                'Applied Machine Learning',
                'Text-Information Systems',
                'Database Systems',
                'Computer Systems',
                'Data Structures & Algorithms',
                'Linear Algebra',
              ].map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
