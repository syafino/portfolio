import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Head from './Head';
import { photos } from '../content';

const pad = (n: number) => String(n).padStart(2, '0');

// Horizontal snap carousel with an index counter, like the agent-type cards.
const Life = () => {
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  if (photos.length === 0) return null;

  const step = () => (track.current!.firstElementChild?.clientWidth ?? 0) + 16;
  const onScroll = () => setI(Math.round(track.current!.scrollLeft / step()));
  const by = (d: number) => track.current!.scrollBy({ left: d * step(), behavior: 'smooth' });

  return (
    <section id="life" className="relative bg-black py-[12vh] pl-[5vw]">
      <div className="flex flex-wrap items-end justify-between gap-6 pr-[5vw]">
        <Head eyebrow="Life">Outside the <span className="serif">terminal.</span></Head>
        <div className="mb-[clamp(2rem,6vh,4rem)] flex items-center gap-4">
          <span className="mono text-[var(--fs-sm)] text-[var(--fg-3)]">{pad(i + 1)} / {pad(photos.length)}</span>
          <button aria-label="Previous" onClick={() => by(-1)} className="btn-secondary !px-3"><ArrowLeft size={14} /></button>
          <button aria-label="Next" onClick={() => by(1)} className="btn-secondary !px-3"><ArrowRight size={14} /></button>
        </div>
      </div>
      <div ref={track} onScroll={onScroll} data-lenis-prevent className="snap flex gap-4 overflow-x-auto pr-[5vw]">
        {photos.map((p) => (
          <figure key={p.src} className="card w-[78vw] shrink-0 overflow-hidden sm:w-[46vw] md:w-[31vw]">
            <img src={p.src} alt={p.caption} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="p-4">
              <p className="eyebrow mb-1">{p.group === 'hackathon' ? 'Hackathons' : 'Travel'}</p>
              <p className="text-sm text-[var(--fg)]">{p.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Life;
