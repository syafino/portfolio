import { useEffect, useRef, useState } from 'react';
import Head from './Head';
import { gsap, ScrollTrigger, reducedMotion, scrollTo } from '../fx/scroll';
import { experience } from '../content';

// 280vh pinned terminal with a tab per role; scrolling or clicking a step switches tabs.
const Experience = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const st = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const role = experience[active];

  useEffect(() => {
    if (reducedMotion) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      st.current = ScrollTrigger.create({
        trigger: wrap.current, start: 'top top', end: 'bottom bottom',
        onUpdate: (s) => {
          const i = Math.min(experience.length - 1, Math.floor(s.progress * experience.length));
          setActive((p) => (p === i ? p : i));
        },
      });
      return () => { st.current = null; };
    });
    return () => mm.revert();
  }, []);

  const pick = (i: number) => {
    const t = st.current;
    if (t) scrollTo(t.start + ((i + 0.5) / experience.length) * (t.end - t.start));
    else setActive(i);
  };

  return (
    <div ref={wrap} id="experience" className="relative bg-black md:h-[280vh]">
      <div className="px-[5vw] py-[12vh] md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:py-0">
        <Head eyebrow="Experience">Where I've <span className="serif">worked.</span></Head>
        <div className="grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-start">
          <div className="terminal overflow-hidden rounded-[clamp(14px,1.4vw,24px)] border border-white/15">
            <div className="flex flex-wrap gap-1 border-b border-white/10 bg-white/[0.03] px-3 py-2">
              {experience.map((e, i) => (
                <button key={e.slug} onClick={() => pick(i)} className={`rounded px-3 py-1 text-[var(--fs-xs)] transition-colors ${i === active ? 'bg-white/10 text-white' : 'text-[var(--fg-3)] hover:text-[var(--fg-2)]'}`}>
                  {e.slug}.md
                </button>
              ))}
            </div>
            <div className="min-h-[18rem] p-[clamp(14px,1.4vw,24px)] md:min-h-[24rem]">
              <div><span className="prompt">$ </span>cat {role.slug}.md</div>
              <div className="mt-3 text-white"># {role.role} — {role.company}</div>
              <div className="text-[var(--fg-3)]">{role.dates} · {role.where}</div>
              <ul className="mt-4 space-y-2">
                {role.bullets.map((b) => <li key={b} className="flex gap-3 text-[var(--fg-2)]"><span className="shrink-0 text-[var(--fg-3)]">-</span><span>{b}</span></li>)}
              </ul>
            </div>
          </div>
          <ol className="flex flex-col">
            {experience.map((e, i) => (
              <li key={e.slug}>
                <button onClick={() => pick(i)} className={`flex w-full gap-5 border-l py-4 pl-5 text-left transition-colors duration-300 ${i === active ? 'border-white text-white' : 'border-white/10 text-[var(--fg-3)] hover:text-[var(--fg-2)]'}`}>
                  <span className="eyebrow mt-1 shrink-0" style={{ color: 'inherit' }}>0{i + 1}</span>
                  <span>
                    <span className="block text-[clamp(1rem,1.2vw,1.3rem)] font-medium">{e.role}</span>
                    <span className="block text-[var(--fs-sm)] opacity-80">{e.company} · {e.dates}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
