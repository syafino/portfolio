import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { ArrowRight, Check, Copy, Download } from 'lucide-react';
import AsciiCanvas from '../fx/AsciiCanvas';
import TerminalCard from './TerminalCard';
import { gsap, reducedMotion, scrollTo } from '../fx/scroll';
import { splitReveal } from '../fx/reveal';
import { hero, socials } from '../content';

const Hero = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const cleanSplit = splitReveal(h1.current);
    if (reducedMotion) return cleanSplit;
    const ctx = gsap.context(() => {
      gsap.from('.hero-in', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.25 });
      gsap.set(b.current, { opacity: 0, y: 80, pointerEvents: 'none' });
      gsap.timeline({ scrollTrigger: { trigger: wrap.current, start: 'top top', end: 'bottom bottom', scrub: 0.3 } })
        .to(a.current, { scale: 0.85, rotateX: 12, y: -80, opacity: 0, ease: 'none', duration: 0.4 }, 0)
        .set(a.current, { pointerEvents: 'none' }, 0.4)
        .set(b.current, { pointerEvents: 'auto' }, 0.4)
        .to(b.current, { opacity: 1, y: 0, ease: 'none', duration: 0.3 }, 0.45);
    }, wrap);
    return () => { ctx.revert(); cleanSplit(); };
  }, []);

  const copy = () => {
    navigator.clipboard?.writeText(socials.email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
  };
  const go = (href: string) => (e: MouseEvent) => { e.preventDefault(); scrollTo(href); };

  return (
    <div ref={wrap} id="top" className="relative h-[220vh] md:h-[270vh]">
      <div className="sticky top-0 isolate h-screen overflow-hidden [perspective:950px]">
        <AsciiCanvas className="absolute inset-0" colorStops={['#38bdf8', '#b19fff', '#ff9367']} glowColor="#b19fff" idleOpacity={0.32} />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[60%] bg-linear-to-r from-black/85 via-black/45 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42vh] bg-linear-to-t from-black via-black/75 to-transparent" />

        {/* View A */}
        <div ref={a} className="absolute inset-0 z-10 flex origin-center items-center px-[5vw] pt-[12vh] pb-[6vh] [transform-style:preserve-3d] will-change-transform md:pt-[8vh]">
          <div className="grid w-full items-center gap-[6vh] lg:grid-cols-[minmax(0,34vw)_1fr] lg:gap-[5vw]">
            <div className="flex min-w-0 flex-col items-start">
              <span className="hero-in mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 mono text-[var(--fs-xs)] uppercase tracking-[0.12em] text-[var(--fg-2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />{hero.eyebrow}
              </span>
              <h1 ref={h1} className="mb-6 text-[clamp(2.5rem,5vw,5.5rem)]">Building AI systems that <span className="serif">actually ship.</span></h1>
              <p className="hero-in mb-8 max-w-[34rem] text-[clamp(1rem,1.15vw,1.2rem)]">{hero.bio}</p>
              <div className="hero-in flex flex-wrap gap-3">
                <a href="#contact" onClick={go('#contact')} className="btn-primary">Get in touch <ArrowRight size={14} /></a>
                <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Download size={14} /> Download resume</a>
              </div>
            </div>
            <div className="hero-in w-full min-w-0">
              <div className="w-full rounded-[clamp(14px,1.4vw,24px)] border border-white/20 bg-zinc-950/80 p-[clamp(8px,0.9vw,14px)] shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-colors hover:border-white/30">
                <div className="relative aspect-video w-full overflow-hidden rounded-[10px] border border-white/10 bg-[#060608]">
                  <TerminalCard />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-linear-to-b from-white/[0.04] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View B */}
        <div ref={b} className="absolute inset-0 z-10 flex flex-col justify-between px-[5vw] pt-[15vh] pb-[4.5vh]">
          <div className="max-w-[70vw] max-md:max-w-full">
            <h1 className="mb-4">Syafino Yunalfian.<br /><span className="serif text-[var(--h2)] text-[var(--fg-2)]">Currently shipping at Elara Health.</span></h1>
            <div className="mt-8 inline-flex items-center gap-4 rounded-md border border-white/15 bg-black/60 px-4 py-3 mono text-[var(--fs-sm)]">
              <span><span className="text-[var(--mint)]">$ </span>mail {socials.email}</span>
              <button onClick={copy} aria-label="Copy email" className="text-[var(--fg-3)] hover:text-white">{copied ? <Check size={14} /> : <Copy size={14} />}</button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="eyebrow">Live at</span>
              {['Elara Health', 'Agentic AI @ UIUC', 'Garg Research Group'].map((n) => <span key={n} className="text-[clamp(0.95rem,1.1vw,1.2rem)] font-medium text-[var(--fg)]">{n}</span>)}
            </div>
          </div>
          <p className="eyebrow text-neutral-300">Scroll to continue</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
