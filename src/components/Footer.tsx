import { Github, Linkedin, Mail } from 'lucide-react';
import { socials } from '../content';

const Footer = () => (
  <footer className="border-t border-[var(--border)] px-6 py-8">
    <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-[var(--fg-3)]">© {new Date().getFullYear()} Syafino Yunalfian</p>
      <div className="flex gap-5 text-[var(--fg-3)]">
        <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--fg)]"><Github size={18} /></a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--fg)]"><Linkedin size={18} /></a>
        <a href={`mailto:${socials.email}`} aria-label="Email" className="hover:text-[var(--fg)]"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
