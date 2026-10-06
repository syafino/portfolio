import { useEffect, useRef } from 'react';
import { Download, Link, Mail, Phone, X } from 'lucide-react';
import { highlights, profile } from './content';
import avatar from './assets/profile.jpg';

const icon = (href: string, download?: boolean) => (download ? Download : href.startsWith('mailto:') ? Mail : href.startsWith('tel:') ? Phone : Link);

const Story = ({ index, setIndex }: { index: number | null; setIndex: (i: number | null) => void }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const story = index === null ? null : highlights[index];

  useEffect(() => {
    const d = ref.current!;
    if (story && !d.open) d.showModal();
    if (!story && d.open) d.close();
  }, [story]);

  // Like Instagram: stepping past the last highlight closes the viewer.
  const go = (by: number) => { if (index !== null) setIndex(highlights[index + by] ? index + by : by > 0 ? null : index); };

  const stickers = story?.links.map((l) => {
    const Icon = icon(l.href, l.download);
    return (
      <a key={l.href} href={l.href} download={l.download} target={l.download || !l.href.startsWith('http') ? undefined : '_blank'} rel="noreferrer" className="relative z-10 flex max-w-full items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[15px] font-bold tracking-wide text-[#0095f6] uppercase shadow-lg">
        <Icon size={20} strokeWidth={3} className="shrink-0" />
        <span className="truncate">{l.label}</span>
      </a>
    );
  });

  return (
    <dialog
      ref={ref}
      onClose={() => setIndex(null)}
      onClick={(e) => (e.target as HTMLElement).dataset.backdrop && setIndex(null)}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); }}
      className="h-dvh max-h-none w-screen max-w-none bg-[#1a1a1a] text-white"
    >
      {story && index !== null && (
        <div data-backdrop="1" className="flex h-full items-center justify-center">
          <div className={`story relative flex aspect-[9/16] h-full max-w-full flex-col overflow-hidden md:h-[min(94vh,900px)] md:rounded-lg ${story.image ? 'bg-black' : 'bg-neutral-500'}`}>
            <div className="flex gap-1 px-2 pt-2">
              {highlights.map((h, i) => (
                <div key={h.label} className="h-0.5 flex-1 overflow-hidden rounded bg-white/35">
                  {i <= index && <div key={index} onAnimationEnd={() => go(1)} className={`h-full bg-white ${i === index ? 'story-bar' : ''}`} />}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5 p-3">
              <img src={avatar} alt="" className="size-8 rounded-full object-cover" />
              <span className="font-semibold">{profile.username}</span>
              <span className="text-white/70">{story.label}</span>
              <button onClick={() => setIndex(null)} aria-label="Close" className="ml-auto cursor-pointer"><X size={28} /></button>
            </div>
            {story.image && <div className="flex flex-wrap justify-center gap-2 px-3 pb-3">{stickers}</div>}
            <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-6">
              {story.image ? <img src={story.image} alt={story.label} className="absolute inset-0 h-full w-full object-contain" /> : (
                <>
                  <p className="pb-2 text-2xl font-bold">{story.text}</p>
                  {stickers}
                </>
              )}
              <button onClick={() => go(-1)} aria-label="Previous highlight" className="absolute inset-y-0 left-0 w-1/3 cursor-pointer" />
              <button onClick={() => go(1)} aria-label="Next highlight" className="absolute inset-y-0 right-0 w-2/3 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default Story;
