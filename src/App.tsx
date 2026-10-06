import { useEffect, useState } from 'react';
import { FileText, FolderGit2, Grid3x3, House, Repeat2, Send, SquareUser, Trophy } from 'lucide-react';
import { highlights, posts, profile, reposts, socials, tagged } from './content';
import { Tile, Viewer } from './Post';
import avatar from './assets/profile.png';

const tabs = [
  { id: 'posts', label: 'Posts', icon: Grid3x3, list: posts },
  { id: 'reposts', label: 'Reposts', icon: Repeat2, list: reposts },
  { id: 'tagged', label: 'Tagged', icon: SquareUser, list: tagged },
];

const nav = [
  { label: 'Home', icon: House, href: '#posts' },
  { label: 'Projects', icon: FolderGit2, href: '#tagged' },
  { label: 'Achievements', icon: Trophy, href: '#reposts' },
  { label: 'Messages', icon: Send, href: socials.email },
  { label: 'Resume', icon: FileText, href: socials.resume },
];

const stats = [
  { n: posts.length, label: 'posts', href: '#posts' },
  { n: tagged.length, label: 'projects', href: '#tagged' },
  { n: profile.gpa, label: 'GPA' },
];

// Old multi-page URLs still land on the right tab.
const legacy: Record<string, string> = { '/projects': '#tagged', '/experience': '#posts' };
if (location.pathname !== '/') history.replaceState(null, '', '/' + (legacy[location.pathname] ?? ''));

const readTab = () => tabs.find((t) => '#' + t.id === location.hash) ?? tabs[0];

const App = () => {
  const [tab, setTab] = useState(readTab);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const on = () => setTab(readTab());
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);

  const bio = (
    <div className="leading-[18px]">
      <div className="font-semibold">{profile.name}</div>
      <div className="text-muted">{profile.category}</div>
      {profile.bio.map((line) => <div key={line}>{line}</div>)}
      <a href={profile.link.href} target="_blank" rel="noreferrer" className="font-semibold text-link">{profile.link.label}</a>
    </div>
  );
  const statItems = stats.map((s) => (
    <li key={s.label}>
      <a href={s.href} className="flex flex-col items-center md:flex-row md:gap-1">
        <span className="font-semibold">{s.n}</span>
        <span className="text-muted md:text-fg">{s.label}</span>
      </a>
    </li>
  ));

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t border-line bg-bg md:inset-y-0 md:right-auto md:w-[72px] md:flex-col md:justify-start md:gap-1 md:border-t-0 md:border-r md:px-3 md:py-2 xl:w-[244px]">
        <a href="#posts" onClick={() => scrollTo(0, 0)} className="hidden px-3 pt-6 pb-5 font-script text-3xl md:block">
          <span className="xl:hidden">s</span>
          <span className="hidden xl:inline">{profile.username}</span>
        </a>
        {nav.map(({ label, icon: Icon, href }) => (
          <a key={label} href={href} aria-label={label} target={href.startsWith('/') ? '_blank' : undefined} onClick={href === '#posts' ? () => scrollTo(0, 0) : undefined} className="flex items-center gap-4 rounded-lg p-3 hover:bg-hover">
            <Icon />
            <span className="hidden text-base xl:inline">{label}</span>
          </a>
        ))}
        <a href="#posts" aria-label="Profile" onClick={() => scrollTo(0, 0)} className="flex items-center gap-4 rounded-lg p-3 hover:bg-hover">
          <img src={avatar} alt="" className="size-6 rounded-full object-cover ring-2 ring-fg" />
          <span className="hidden text-base font-bold xl:inline">Profile</span>
        </a>
      </nav>

      <div className="sticky top-0 z-10 flex h-11 items-center justify-center border-b border-line bg-bg text-base font-semibold md:hidden">{profile.username}</div>

      <main className="pb-14 md:ml-[72px] md:pb-0 xl:ml-[244px]">
        <div className="mx-auto max-w-[935px] md:px-5 md:pt-8">
          <header className="flex items-center gap-6 p-4 md:items-start md:gap-0 md:p-0 md:pb-11">
            <div className="shrink-0 md:flex md:w-[290px] md:justify-center">
              <div className="story-ring rounded-full p-[3px]">
                <img src={avatar} alt={profile.name} className="size-[77px] rounded-full border-[3px] border-bg object-cover md:size-[150px]" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <h1 className="text-xl">{profile.username}</h1>
                <div className="flex gap-2 font-semibold">
                  <a href={socials.linkedin} target="_blank" rel="noreferrer" className="rounded-lg bg-blue px-5 py-1.5 text-white">Follow</a>
                  <a href={socials.email} className="rounded-lg bg-hover px-5 py-1.5">Message</a>
                </div>
              </div>
              <ul className="my-5 hidden gap-10 text-base md:flex">{statItems}</ul>
              <div className="hidden md:block">{bio}</div>
            </div>
          </header>
          <div className="px-4 pb-5 md:hidden">{bio}</div>

          <div className="flex gap-4 overflow-x-auto px-4 pb-4 md:gap-9 md:px-11 md:pb-11">
            {highlights.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex shrink-0 flex-col items-center gap-2 text-xs font-semibold">
                <span className="rounded-full border border-line p-[3px]">
                  <span className="flex size-14 items-center justify-center rounded-full bg-hover md:size-[77px]"><Icon /></span>
                </span>
                {label}
              </a>
            ))}
          </div>

          <ul className="flex justify-around border-t border-line py-3 text-center md:hidden">{statItems}</ul>

          <div className="flex border-t border-line md:justify-center md:gap-14">
            {tabs.map(({ id, label, icon: Icon }) => (
              <a key={id} href={'#' + id} aria-current={tab.id === id} className={`-mt-px flex flex-1 items-center justify-center gap-1.5 border-t py-3 text-xs font-semibold tracking-wider uppercase md:flex-none md:py-4 ${tab.id === id ? 'border-fg' : 'border-transparent text-muted'}`}>
                <Icon className="size-6 md:size-3.5" />
                <span className="hidden md:inline">{label}</span>
                <span className="sr-only md:hidden">{label}</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-0.5 md:gap-1">
            {tab.list.map((post, i) => <Tile key={post.slug} post={post} onOpen={() => setOpen(i)} />)}
          </div>

          <footer className="px-4 py-10 text-center text-xs text-muted">
            © {new Date().getFullYear()} {profile.name} · A portfolio, not affiliated with Instagram
          </footer>
        </div>
      </main>

      <Viewer list={tab.list} index={open} setIndex={setOpen} />
    </>
  );
};

export default App;
