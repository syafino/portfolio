import { ArrowUpRight, Github, Youtube } from 'lucide-react';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { projects, socials } from '../content';

const ProjectsPage = () => (
  <Section eyebrow="Projects" title={<>Things I've <span className="serif">built.</span></>} lead="A selection of shipped work, hackathon entries, and one event I ran.">
    <div className="grid gap-4 md:grid-cols-3 md:grid-flow-dense">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.tint ? "md:col-span-2" : ""}>
          <div className={`card ${p.tint ?? ''} flex h-full flex-col p-6`}>
            {p.award && <p className="eyebrow mb-3 text-[var(--fg-2)]">{p.award}</p>}
            <h3 className="mb-2 text-lg">{p.title}</h3>
            <p className="mb-5 flex-1 text-sm">{p.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            {(p.code || p.demo) && (
              <div className="flex gap-4 text-sm text-[var(--fg-2)]">
                {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--fg)]"><Github size={14} /> Code</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--fg)]"><Youtube size={14} /> Demo</a>}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
    <Reveal className="mt-10">
      <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
        View all on GitHub <ArrowUpRight size={16} />
      </a>
    </Reveal>
  </Section>
);

export default ProjectsPage;
