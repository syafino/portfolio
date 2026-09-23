import { useEffect, useRef, type ReactNode } from 'react';
import { splitReveal } from '../fx/reveal';

const Head = ({ eyebrow, children, lead }: { eyebrow: string; children: ReactNode; lead?: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => splitReveal(ref.current), []);
  return (
    <div className="mb-[clamp(2rem,6vh,4rem)] max-w-4xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 ref={ref}>{children}</h2>
      {lead && <p className="mt-5 max-w-xl text-[clamp(1rem,1.1vw,1.2rem)]">{lead}</p>}
    </div>
  );
};

export default Head;
