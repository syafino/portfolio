import { useEffect, useRef } from 'react';
import Head from './Head';
import { gsap, reducedMotion } from '../fx/scroll';
import { layers } from '../content';

const widths = ['100%', '86%', '72%', '58%'];

// 450vh pinned inverted pyramid; scroll reveals one layer per quarter.
const Layers = () => {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const bars = gsap.utils.toArray<HTMLElement>('.layer-bar', wrap.current);
      const panels = gsap.utils.toArray<HTMLElement>('.layer-panel', wrap.current);
      gsap.set(bars, { opacity: 0.2, y: 24 });
      gsap.set(panels, { opacity: 0, y: 20 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: wrap.current, start: 'top top', end: 'bottom bottom', scrub: 0.5 } });
      bars.forEach((bar, i) => {
        const at = 0.05 + (i / bars.length) * 0.85;
        tl.to(bar, { opacity: 1, y: 0, duration: 0.1, ease: 'none' }, at)
          .set(bar, { attr: { 'data-active': 'true' } }, at)
          .to(panels[i], { opacity: 1, y: 0, duration: 0.08, ease: 'none' }, at + 0.02);
        if (i > 0) {
          tl.set(bars[i - 1], { attr: { 'data-active': 'false' } }, at)
            .to(panels[i - 1], { opacity: 0, y: -20, duration: 0.06, ease: 'none' }, at);
        }
      });
      tl.to({}, { duration: 0.1 });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={wrap} id="work" className="relative bg-black md:h-[450vh]">
      <div className="px-[5vw] py-[12vh] md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:py-0">
        <Head eyebrow="How I work">Four layers, <span className="serif">bottom up.</span></Head>
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="flex flex-col items-center gap-3">
            {layers.map((l, i) => (
              <div key={l.n} data-active={i === 0} className="layer-bar flex items-center justify-between px-5 py-4" style={{ width: widths[i] }}>
                <span className="eyebrow">Layer {l.n}</span>
                <span className="text-[clamp(0.95rem,1.1vw,1.2rem)] font-medium">{l.title}</span>
              </div>
            ))}
          </div>
          <div className="relative md:min-h-[14rem]">
            {layers.map((l) => (
              <div key={l.n} className="layer-panel mb-8 md:absolute md:inset-0 md:mb-0">
                <p className="eyebrow mb-3">Layer {l.n}</p>
                <h3 className="mb-3 text-[clamp(1.4rem,2vw,2rem)]">{l.title}</h3>
                <p className="mb-5 max-w-md">{l.text}</p>
                <div className="flex flex-wrap gap-2">{l.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layers;
