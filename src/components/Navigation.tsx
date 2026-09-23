import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { socials } from '../content';

const items = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const link = (item: (typeof items)[number], mobile = false) => (
    <Link
      key={item.path}
      to={item.path}
      onClick={() => setOpen(false)}
      className={`eyebrow transition-colors hover:text-[var(--fg)] ${pathname === item.path ? 'text-[var(--fg)]' : ''} ${mobile ? 'block py-2' : ''}`}
    >
      {item.name}
    </Link>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="text-[15px] font-semibold tracking-tight">Syafino Yunalfian</Link>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((i) => link(i))}
          <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-1.5 !text-xs">
            Resume
          </a>
        </div>

        <button aria-label="Menu" className="text-[var(--fg-2)] md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-[var(--border)] bg-black px-6 py-4 md:hidden">
          {items.map((i) => link(i, true))}
          <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="eyebrow block py-2">Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
