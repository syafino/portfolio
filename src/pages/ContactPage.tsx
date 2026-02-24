import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: '#1a1a1a', marginBottom: 12 }}>Get in touch</h1>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 32 }}>
          Interested in collaborating or just want to chat about AI, model optimization, or weird dataset problems?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', marginBottom: 40 }}>
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

export default ContactPage;
