import { useEffect, useRef } from 'react';
import Head from './Head';
import { fadeUp } from '../fx/reveal';
import { numbers } from '../content';

const Numbers = () => {
  const grid = useRef<HTMLDivElement>(null);
  useEffect(() => fadeUp(grid.current!.querySelectorAll('.card')), []);
  return (
    <section className="relative bg-black px-[5vw] py-[12vh]">
      <Head eyebrow="Highlights">By the <span className="serif">numbers.</span></Head>
      <div ref={grid} className="grid gap-4 md:grid-cols-3">
        {numbers.map((n, i) => (
          <div key={n.title} className={`card ${['card-sky', 'card-violet', 'card-mint'][i]} p-[clamp(18px,1.6vw,28px)]`}>
            <p className="stat mb-6">{n.stat}</p>
            <h3 className="mb-2 text-[clamp(1.05rem,1.2vw,1.3rem)]">{n.title}</h3>
            <p className="text-[var(--fs-sm)] md:text-[0.95rem]">{n.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
