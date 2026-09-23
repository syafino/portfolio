import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { socials } from '../content';

const ContactPage = () => (
  <Section
    eyebrow="Contact"
    title={<>Get in <span className="serif">touch.</span></>}
    lead="Interested in collaborating or just want to chat about AI, model optimization, or weird dataset problems?"
  >
    <div className="grid gap-4 md:grid-cols-2">
      <Reveal>
        <a href={`mailto:${socials.email}`} className="card card-sky block p-6">
          <Mail size={20} className="mb-4 text-[var(--fg-3)]" />
          <p className="eyebrow mb-1">Email</p>
          <p className="text-base text-[var(--fg)]">{socials.email}</p>
        </a>
      </Reveal>
      <Reveal delay={0.08}>
        <a href={socials.phoneHref} className="card card-mint block p-6">
          <Phone size={20} className="mb-4 text-[var(--fg-3)]" />
          <p className="eyebrow mb-1">Phone</p>
          <p className="text-base text-[var(--fg)]">{socials.phone}</p>
        </a>
      </Reveal>
    </div>
    <Reveal delay={0.16} className="mt-8 flex flex-wrap items-center gap-3">
      <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Github size={16} /> GitHub</a>
      <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Linkedin size={16} /> LinkedIn</a>
      <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Download size={16} /> Resume</a>
    </Reveal>
  </Section>
);

export default ContactPage;
