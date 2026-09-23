import type { MouseEvent } from 'react';
import { nav, socials } from '../content';
import { scrollTo } from '../fx/scroll';

const Footer = () => {
  const go = (href: string) => (e: MouseEvent) => { e.preventDefault(); scrollTo(href); };
  const col = (title: string, items: { name: string; href: string; ext?: boolean }[]) => (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            {i.ext
              ? <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-[var(--fg-2)] hover:text-white">{i.name}</a>
              : <a href={i.href} onClick={go(i.href)} className="text-[var(--fg-2)] hover:text-white">{i.name}</a>}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-black px-[5vw] pt-[10vh] pb-[3vh]">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-[15px] font-semibold">Syafino Yunalfian</p>
          <p className="mt-2 max-w-xs text-sm">AI engineer. CS & Statistics at UIUC, class of 2027.</p>
        </div>
        {col('Pages', nav)}
        {col('Elsewhere', [
          { name: 'GitHub', href: socials.github, ext: true },
          { name: 'LinkedIn', href: socials.linkedin, ext: true },
          { name: 'Email', href: `mailto:${socials.email}`, ext: true },
        ])}
        {col('Resume', [{ name: 'Download PDF', href: socials.resume, ext: true }])}
      </div>
      <p className="mt-[8vh] select-none text-[clamp(3rem,11vw,12rem)] font-semibold leading-none tracking-[-0.05em] text-white/[0.06]">Syafino</p>
      <div className="mt-6 flex flex-wrap justify-between gap-4 border-t border-white/[0.06] pt-4 mono text-[var(--fs-xs)] text-[var(--fg-3)]">
        <span>© {new Date().getFullYear()} Syafino Yunalfian</span>
        <span>Champaign, IL</span>
      </div>
    </footer>
  );
};

export default Footer;
