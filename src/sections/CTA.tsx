import { useEffect, useRef } from 'react';
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import AsciiCanvas from '../fx/AsciiCanvas';
import { splitReveal } from '../fx/reveal';
import { reducedMotion } from '../fx/scroll';
import { cta, socials } from '../content';

// Full-screen closer; glow blobs drift toward the cursor (normalized -1..1, lerp 0.08).
const CTA = () => {
  const wrap = useRef<HTMLElement>(null);
  const h = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const clean = splitReveal(h.current);
    const el = wrap.current!;
    if (reducedMotion) return clean;
    const target = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = clamp(((e.clientX - r.left) / r.width - 0.5) * 2);
      target.y = clamp(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    const leave = () => { target.x = 0; target.y = 0; };
    let raf = 0;
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.08; cur.y += (target.y - cur.y) * 0.08;
      el.style.setProperty('--mx', cur.x.toFixed(3)); el.style.setProperty('--my', cur.y.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); clean(); };
  }, []);

  const blob = (color: string, size: string, pos: string, k: number) => (
    <div className={`glow-blob ${size} ${pos}`} style={{ background: color, transform: `translate(calc(var(--mx, 0) * ${k}px), calc(var(--my, 0) * ${k}px))` }} />
  );

  return (
    <section ref={wrap} id="contact" className="relative isolate flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-black px-[5vw]">
      <AsciiCanvas className="absolute inset-0 -z-10" colorStops={['#7cf2c4', '#b19fff', '#38bdf8']} glowColor="#7cf2c4" idleOpacity={0.22} activeOpacity={0.7} />
      {blob('rgba(177,159,255,0.35)', 'h-[40vw] w-[40vw]', 'left-[10%] top-[10%]', 60)}
      {blob('rgba(124,242,196,0.25)', 'h-[30vw] w-[30vw]', 'right-[8%] top-[30%]', -45)}
      {blob('rgba(255,147,103,0.22)', 'h-[26vw] w-[26vw]', 'bottom-[5%] left-[35%]', 35)}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <p className="eyebrow mb-5">Contact</p>
        <h2 ref={h} className="mb-6">{cta.title} <span className="serif">{cta.accent}</span></h2>
        <p className="mb-9 max-w-2xl text-[clamp(1rem,1.15vw,1.2rem)]">{cta.text}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`mailto:${socials.email}`} className="btn-primary">Email me <ArrowUpRight size={14} /></a>
          <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Download size={14} /> Resume</a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Github size={14} /> GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Linkedin size={14} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
