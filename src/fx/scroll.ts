import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

export const initScroll = () => {
  if (reducedMotion || lenis) return () => {};
  lenis = new Lenis({ autoRaf: false, lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (t: number) => lenis?.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => { gsap.ticker.remove(tick); lenis?.destroy(); lenis = null; };
};

export const scrollTo = (target: string | number, offset = 0) => {
  if (lenis) lenis.scrollTo(target, { offset, duration: 1.2 });
  else if (typeof target === 'number') window.scrollTo({ top: target + offset });
  else document.querySelector(target)?.scrollIntoView();
};

export { gsap, ScrollTrigger, SplitText };
