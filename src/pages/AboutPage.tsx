import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { about, education, faq } from '../content';

const AboutPage = () => (
  <>
    <Section eyebrow="About" title={<>A bit <span className="serif">about me.</span></>}>
      <Reveal className="max-w-2xl space-y-5">
        {about.paragraphs.map((p) => <p key={p} className="text-base md:text-lg">{p}</p>)}
        <div className="flex flex-wrap gap-2 pt-2">
          {about.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </Reveal>
    </Section>

    <Section eyebrow="Education" title={<>Where I <span className="serif">study.</span></>}>
      <Reveal>
        <div className="card card-peach p-6 md:p-8">
          <h3 className="text-xl">{education.school}</h3>
          <p className="mt-1 text-base text-[var(--fg)]">{education.degree}</p>
          <p className="mt-1 text-sm">{education.meta}</p>
          <p className="eyebrow mt-6 mb-3">Coursework</p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((c) => <span key={c} className="tag">{c}</span>)}
          </div>
        </div>
      </Reveal>
    </Section>

    <Section eyebrow="Ask me" title={<>Questions I <span className="serif">get a lot.</span></>}>
      <Reveal className="card divide-y divide-[var(--border)] overflow-hidden">
        {faq.map((f) => (
          <details key={f.q} className="faq px-6 py-4">
            <summary className="flex items-center justify-between text-base font-medium">{f.q}</summary>
            <p className="pt-3 text-sm">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  </>
);

export default AboutPage;
