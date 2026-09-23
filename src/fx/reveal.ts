import { gsap, SplitText, reducedMotion } from './scroll';

// Headline: split into chars, each word masked, chars rise in.
export const splitReveal = (el: HTMLElement | null, trigger?: HTMLElement | null) => {
  if (!el || reducedMotion) return () => {};
  const split = new SplitText(el, { type: 'words,chars', wordsClass: 'split-word', charsClass: 'split-char' });
  const tween = gsap.from(split.chars, {
    yPercent: 110, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.018,
    scrollTrigger: { trigger: trigger ?? el, start: 'top 85%', once: true },
  });
  return () => { tween.scrollTrigger?.kill(); tween.kill(); split.revert(); };
};

// Blocks: fade and rise when scrolled into view.
export const fadeUp = (els: Element[] | NodeListOf<Element>, stagger = 0.08) => {
  const list = Array.from(els);
  if (!list.length || reducedMotion) return () => {};
  const tweens = list.map((el, i) =>
    gsap.from(el, {
      y: 28, opacity: 0, duration: 0.7, ease: 'power2.out', delay: (i % 3) * stagger,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    }),
  );
  return () => tweens.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); });
};
