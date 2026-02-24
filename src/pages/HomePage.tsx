import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Brain,
  Server,
  Smartphone,
} from 'lucide-react';
import profileImg from '../assets/images/DBF9B645-2228-486E-AB08-E38893911C26.png';

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
              <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px', borderRadius: 100, fontSize: 15, gap: 8 }}>
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-secondary" style={{ padding: '14px 28px', borderRadius: 100, fontSize: 15 }}>
                View projects
              </Link>
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

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
    </>
  );
};

export default HomePage;
