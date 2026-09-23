import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = { eyebrow: string; title: ReactNode; children: ReactNode; lead?: string };

const Section = ({ eyebrow, title, lead, children }: Props) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-5xl">
      <Reveal className="mb-10">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {lead && <p className="mt-3 max-w-xl text-base">{lead}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
