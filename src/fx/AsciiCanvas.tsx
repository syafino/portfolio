import { useEffect, useRef } from 'react';
import { AsciiField, type AsciiConfig } from './ascii';

type Props = AsciiConfig & { className?: string };

const AsciiCanvas = ({ className = '', colorStops, glowColor, idleOpacity, activeOpacity, amplitude }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const fieldRef = useRef<AsciiField | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const field = new AsciiField(canvas);
    fieldRef.current = field;

    const local = (e: PointerEvent | Touch) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      return x >= 0 && y >= 0 && x <= r.width && y <= r.height ? { x, y } : null;
    };
    const move = (e: PointerEvent) => { const p = local(e); if (p) field.track(p.x, p.y); else field.leave(); };
    const down = (e: PointerEvent) => { const p = local(e); if (p) field.press(p.x, p.y); };
    const touch = (e: TouchEvent) => { const p = e.touches[0] && local(e.touches[0]); if (p) field.track(p.x, p.y); };
    const leave = () => field.leave();

    let visible = false;
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !document.hidden) field.start(); else field.stop();
    });
    io.observe(canvas);
    const vis = () => (document.hidden || !visible ? field.stop() : field.start());
    const ro = new ResizeObserver(() => field.resize());
    ro.observe(canvas);

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('touchmove', touch, { passive: true });
    document.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', vis);
    return () => {
      fieldRef.current = null;
      field.stop(); io.disconnect(); ro.disconnect();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('touchmove', touch);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', vis);
    };
  }, []);

  useEffect(() => {
    fieldRef.current?.configure({ colorStops, glowColor, idleOpacity, activeOpacity, amplitude });
  }, [colorStops, glowColor, idleOpacity, activeOpacity, amplitude]);

  return <canvas ref={ref} aria-hidden className={`block h-full w-full ${className}`} />;
};

export default AsciiCanvas;
