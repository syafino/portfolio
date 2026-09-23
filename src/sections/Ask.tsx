import Head from './Head';
import { faq } from '../content';

const Ask = () => (
  <section id="ask" className="relative bg-black px-[5vw] py-[12vh]">
    <Head eyebrow="Ask me">Questions I <span className="serif">get a lot.</span></Head>
    <div className="card max-w-4xl divide-y divide-white/[0.06] overflow-hidden">
      {faq.map((f, i) => (
        <details key={f.q} className="faq px-6 py-5">
          <summary className="flex items-center justify-between gap-6 text-[clamp(1rem,1.15vw,1.2rem)] font-medium">
            <span className="flex items-center gap-5"><span className="eyebrow">0{i + 1}</span>{f.q}</span>
            <span className="plus">+</span>
          </summary>
          <p className="pt-4 pl-[3.4rem] text-[0.95rem]">{f.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export default Ask;
