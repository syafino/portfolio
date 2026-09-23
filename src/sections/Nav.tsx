import { useState, type MouseEvent } from 'react';
import { nav, socials } from '../content';
import { scrollTo } from '../fx/scroll';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const go = (href: string) => (e: MouseEvent) => { e.preventDefault(); setOpen(false); scrollTo(href); };

  return (
    <header className="nav-in fixed inset-x-0 top-[1.8vh] z-50 mx-auto w-[96%] max-w-[1600px]">
      <nav className="nav-bar relative flex items-center justify-between px-[clamp(14px,1.4vw,24px)] py-[clamp(8px,0.85vh,12px)]">
        <a href="#top" onClick={go('#top')} className="text-[15px] font-semibold tracking-tight">Syafino Yunalfian</a>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[2.4vw] md:flex">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={go(n.href)} className="nav-link">{n.name}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">Resume</a>
            <a href="#contact" onClick={go('#contact')} className="btn-primary">Get in touch</a>
          </div>
          <button aria-label="Menu" data-open={open} onClick={() => setOpen(!open)} className="burger flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md border border-white/15 md:hidden">
            <span /><span />
          </button>
        </div>
      </nav>

      <div className={`grid transition-all duration-300 md:hidden ${open ? 'mt-2 grid-rows-[1fr] opacity-100' : 'pointer-events-none mt-0 grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="nav-bar flex flex-col bg-black p-6">
            {nav.map((n, i) => (
              <a key={n.href} href={n.href} onClick={go(n.href)} style={{ transitionDelay: `${i * 50}ms` }}
                className={`nav-link flex items-center justify-between border-b border-white/[0.06] py-3 transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                <span className="flex items-center gap-6"><span className="text-[var(--fg-3)]">{i}</span>{n.name}</span>
                <span>→</span>
              </a>
            ))}
            <div className="mt-5 flex flex-col gap-2">
              <a href="#contact" onClick={go('#contact')} className="btn-primary w-full">Get in touch</a>
              <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
