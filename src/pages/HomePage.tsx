import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { hero, now, photos, skills, socials } from '../content';

const Hero = () => (
  <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pt-32">
    <div className="glow" />
    <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
      <Reveal>
        <p className="eyebrow mb-4">{hero.eyebrow}</p>
        <h1 className="mb-6 text-5xl md:text-6xl">
          Building AI systems that <span className="serif">actually ship.</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg">{hero.bio}</p>
        <div className="mb-8 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Get in touch <ArrowRight size={16} /></Link>
          <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Download size={16} /> Download resume
          </a>
        </div>
        <div className="flex gap-5 text-[var(--fg-3)]">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--fg)]"><Github size={20} /></a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--fg)]"><Linkedin size={20} /></a>
          <a href={`mailto:${socials.email}`} aria-label="Email" className="hover:text-[var(--fg)]"><Mail size={20} /></a>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="justify-self-center md:justify-self-end">
        <div className="card card-violet w-64 overflow-hidden p-2 md:w-72">
          <img src={profileImg} alt="Syafino Yunalfian" className="aspect-square w-full rounded-2xl object-cover" />
        </div>
      </Reveal>
    </div>
    <Reveal delay={0.3} className="relative mx-auto mt-14 max-w-5xl">
      <p className="eyebrow">{hero.status}</p>
    </Reveal>
  </section>
);

const Now = () => (
  <Section eyebrow="Now" title={<>What I'm <span className="serif">working on.</span></>}>
    <div className="grid gap-4 md:grid-cols-3">
      {now.map((n, i) => (
        <Reveal key={n.title} delay={i * 0.08}>
          <div className={`card ${n.tint} h-full p-6`}>
            <p className="eyebrow mb-3">0{i + 1}</p>
            <h3 className="mb-2 text-lg">{n.title}</h3>
            <p className="text-sm">{n.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const PhotoGrid = ({ label, items }: { label: string; items: typeof photos }) =>
  items.length === 0 ? null : (
    <div className="mb-8">
      <p className="eyebrow mb-4">{label}</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.src} delay={i * 0.05} className={p.wide ? 'md:col-span-2' : ''}>
            <figure className="card h-full overflow-hidden">
              <img src={p.src} alt={p.caption} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm text-[var(--fg-2)]">{p.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );

const Life = () =>
  photos.length === 0 ? null : (
    <Section eyebrow="Life" title={<>Outside the <span className="serif">terminal.</span></>}>
      <PhotoGrid label="Travel" items={photos.filter((p) => p.group === 'travel')} />
      <PhotoGrid label="Hackathons" items={photos.filter((p) => p.group === 'hackathon')} />
    </Section>
  );

const Skills = () => (
  <Section eyebrow="Skills" title={<>The <span className="serif">toolbox.</span></>}>
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <div className="card h-full p-6">
            <h3 className="mb-4 text-base">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const CTA = () => (
  <section className="px-6 pb-24 pt-4">
    <Reveal className="mx-auto max-w-5xl">
      <div className="card card-sky flex flex-wrap items-center justify-between gap-6 p-8 md:p-10">
        <div>
          <p className="eyebrow mb-2">Contact</p>
          <h2 className="text-2xl md:text-3xl">Want to build something? <span className="serif">Let's talk.</span></h2>
        </div>
        <Link to="/contact" className="btn-primary">Get in touch <ArrowRight size={16} /></Link>
      </div>
    </Reveal>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <Now />
    <Life />
    <Skills />
    <CTA />
  </>
);

export default HomePage;
