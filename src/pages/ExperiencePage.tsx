import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { experience } from '../content';

const ExperiencePage = () => (
  <Section eyebrow="Experience" title={<>Where I've <span className="serif">worked.</span></>}>
    <ol className="relative ml-2 border-l border-[var(--border)]">
      {experience.map((e, i) => (
        <li key={e.company} className="pb-12 pl-8 last:pb-0">
          <span className="absolute -left-[5px] mt-2 h-[9px] w-[9px] rounded-full bg-[var(--fg-3)]" />
          <Reveal delay={i * 0.05}>
            <p className="eyebrow mb-2">{e.dates} · {e.where}</p>
            <h3 className="text-xl">{e.role}</h3>
            <p className="mb-4 text-base text-[var(--fg)]">{e.company}</p>
            <ul className="space-y-2">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[var(--fg-2)]">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--fg-3)]" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default ExperiencePage;
