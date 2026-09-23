import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Youtube } from 'lucide-react';
import Head from './Head';
import { fadeUp } from '../fx/reveal';
import { projects, socials } from '../content';

const Projects = () => {
  const grid = useRef<HTMLDivElement>(null);
  useEffect(() => fadeUp(grid.current!.querySelectorAll('.card')), []);

  return (
    <section id="projects" className="relative bg-black px-[5vw] py-[12vh]">
      <Head eyebrow="Projects" lead="A selection of shipped work, hackathon entries, and one event I ran.">Things I've <span className="serif">built.</span></Head>
      <div ref={grid} className="grid gap-4 md:grid-flow-dense md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className={`card ${p.tint ?? ''} flex flex-col p-[clamp(18px,1.6vw,28px)] ${p.tint ? 'md:col-span-2' : ''}`}>
            {p.award && <p className="eyebrow mb-4 text-[var(--fg-2)]">{p.award}</p>}
            {p.stat && <p className="stat mb-4">{p.stat}</p>}
            <h3 className="mb-2 text-[clamp(1.1rem,1.3vw,1.4rem)]">{p.title}</h3>
            <p className="mb-6 flex-1 text-[var(--fs-sm)] md:text-[0.95rem]">{p.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            {(p.code || p.demo) && (
              <div className="flex gap-4 text-sm text-[var(--fg-2)]">
                {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Github size={14} /> Code</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Youtube size={14} /> Demo</a>}
              </div>
            )}
          </div>
        ))}
      </div>
      <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-10">View all on GitHub <ArrowUpRight size={14} /></a>
    </section>
  );
};

export default Projects;
