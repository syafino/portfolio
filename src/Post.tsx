import { useEffect, useRef, useState } from 'react';
import { Bookmark, Copy, ChevronLeft, ChevronRight, Heart, MessageCircle, Send, X } from 'lucide-react';
import { profile, socials, type Post } from './content';
import avatar from './assets/profile.jpg';

const gradients = [
  'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
  'linear-gradient(135deg, #405de6, #833ab4, #c13584)',
  'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)',
  'linear-gradient(135deg, #0095f6, #515bd4)',
  'linear-gradient(135deg, #11998e, #0095f6)',
  'linear-gradient(135deg, #dd2a7b, #515bd4)',
];

const images = (post: Post) => [post.image ?? []].flat();

const Banner = ({ post }: { post: Post }) =>
  post.banner ? <div className="bg-black p-[min(4cqw,14px)] text-center text-[min(5.5cqw,20px)] leading-tight font-bold text-white">{post.banner}</div> : null;

const Media = ({ post, contain }: { post: Post; contain?: boolean }) =>
  post.image ? (
    <div className="@container flex h-full w-full flex-col">
      <Banner post={post} />
      <img src={images(post)[0]} alt={post.title} loading="lazy" className={`min-h-0 w-full flex-1 ${contain ? 'object-contain' : 'object-cover'}`} />
    </div>
  ) : (
    <div className="@container h-full w-full" style={{ background: gradients[[...post.slug].reduce((a, c) => a + c.charCodeAt(0), 0) % gradients.length] }}>
      <div className="flex h-full flex-col items-center justify-center gap-[3cqw] p-[8cqw] text-center text-white">
        <span className="text-[8cqw] leading-tight font-bold">{post.title}</span>
        <span className="text-[4.5cqw] opacity-90">{post.subtitle}</span>
      </div>
    </div>
  );

const Carousel = ({ post }: { post: Post }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const all = images(post);
  const slide = (by: number) => ref.current!.scrollBy({ left: by * ref.current!.clientWidth, behavior: 'smooth' });
  const arrow = 'absolute top-1/2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-black';

  return (
    <div className="@container flex h-full w-full flex-col">
      <Banner post={post} />
      <div className="relative min-h-0 flex-1">
      <div ref={ref} onScroll={(e) => setAt(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))} className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none]">
        {all.map((src, i) => (
          <img key={src} src={src} alt={`${post.title}, photo ${i + 1} of ${all.length}`} className="h-full w-full shrink-0 snap-center object-contain" />
        ))}
      </div>
      {at > 0 && <button onClick={() => slide(-1)} aria-label="Previous photo" className={`${arrow} left-2`}><ChevronLeft size={18} /></button>}
      {at < all.length - 1 && <button onClick={() => slide(1)} aria-label="Next photo" className={`${arrow} right-2`}><ChevronRight size={18} /></button>}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
        {all.map((src, i) => <span key={src} className={`size-1.5 rounded-full ${i === at ? 'bg-white' : 'bg-white/40'}`} />)}
      </div>
      </div>
    </div>
  );
};

export const Tile = ({ post, onOpen }: { post: Post; onOpen: () => void }) => (
  <button onClick={onOpen} aria-label={post.title} className="group relative aspect-[4/5] cursor-pointer overflow-hidden">
    <Media post={post} />
    {images(post).length > 1 && <Copy size={18} className="absolute top-2 right-2 -scale-x-100 text-white drop-shadow" />}
    <span className="absolute inset-0 flex items-center justify-center bg-black/40 p-2 text-center text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
      {post.image && post.title}
    </span>
  </button>
);

const hashtag = (t: string) => '#' + t.toLowerCase().replace(/[^\p{L}\p{N}+]/gu, '');

type ViewerProps = { list: Post[]; index: number | null; setIndex: (i: number | null) => void };

export const Viewer = ({ list, index, setIndex }: ViewerProps) => {
  const ref = useRef<HTMLDialogElement>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const post = index === null ? null : list[index];

  useEffect(() => {
    const d = ref.current!;
    if (post && !d.open) d.showModal();
    if (!post && d.open) d.close();
  }, [post]);

  const go = (by: number) => { if (index !== null && list[index + by]) setIndex(index + by); };
  const share = () => navigator.clipboard.writeText(location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });

  const head = post && (
    <div className="flex items-center gap-3 border-b border-line p-3.5">
      <img src={avatar} alt="" className="size-8 rounded-full object-cover" />
      <div className="min-w-0 flex-1 leading-tight">
        <div className="font-semibold">{profile.username}</div>
        <div className="truncate text-xs">{post.subtitle}</div>
      </div>
      <button onClick={() => setIndex(null)} aria-label="Close" className="cursor-pointer md:hidden"><X /></button>
    </div>
  );
  const arrow = 'fixed top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-black';

  return (
    <dialog
      ref={ref}
      onClose={() => setIndex(null)}
      onClick={(e) => e.target === ref.current && setIndex(null)}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); }}
      className="m-auto h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-bg text-fg backdrop:bg-black/65 md:h-[min(90vh,820px)] md:w-[min(92vw,1100px)] md:overflow-hidden md:rounded"
    >
      {post && index !== null && (
        <div className="flex min-h-full flex-col md:h-full md:flex-row">
          <div className="md:hidden">{head}</div>
          <div className="aspect-square bg-black md:aspect-auto md:min-w-0 md:flex-1">{images(post).length > 1 ? <Carousel key={post.slug} post={post} /> : <Media post={post} contain />}</div>
          <div className="flex flex-col md:w-[400px] md:border-l md:border-line">
            <div className="hidden md:block">{head}</div>
            <div className="order-2 flex items-start gap-3 p-3.5 md:order-1 md:flex-1 md:overflow-y-auto">
              <img src={avatar} alt="" className="size-8 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="whitespace-pre-line"><span className="font-semibold">{profile.username}</span> {post.caption}</p>
                <p className="mt-3 text-link">{post.tags.map(hashtag).join(' ')}</p>
                {post.links && (
                  <div className="mt-4 flex gap-2">
                    {post.links.map((l) => (
                      <a key={l.href} href={l.href} download={l.download} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`rounded-lg px-4 py-1.5 font-semibold ${l.download ? 'bg-blue text-white' : 'bg-hover'}`}>{l.label}{l.href.startsWith('http') ? ' ↗' : ''}</a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="order-1 border-line px-3.5 pt-3 pb-1 md:order-2 md:border-t md:pb-4">
              <div className="flex items-center gap-4">
                <button onClick={() => setLiked({ ...liked, [post.slug]: !liked[post.slug] })} aria-label="Like" aria-pressed={!!liked[post.slug]} className="cursor-pointer">
                  <Heart className={liked[post.slug] ? 'fill-[#ff3040] text-[#ff3040]' : ''} />
                </button>
                <a href={socials.email} aria-label="Message me"><MessageCircle /></a>
                <button onClick={share} aria-label="Copy link" className="cursor-pointer"><Send /></button>
                <a href={socials.resume} download aria-label="Download resume" className="ml-auto"><Bookmark /></a>
              </div>
              <p className="mt-2 text-xs text-muted" aria-live="polite">{copied ? 'Link copied' : post.date}</p>
            </div>
          </div>
          {index > 0 && <button onClick={() => go(-1)} aria-label="Previous" className={`${arrow} left-2`}><ChevronLeft size={20} /></button>}
          {index < list.length - 1 && <button onClick={() => go(1)} aria-label="Next" className={`${arrow} right-2`}><ChevronRight size={20} /></button>}
          <button onClick={() => setIndex(null)} aria-label="Close" className="fixed top-3 right-4 hidden cursor-pointer text-white md:block"><X size={28} /></button>
        </div>
      )}
    </dialog>
  );
};
