// Cursor-reactive ASCII field on a 2D canvas. Value noise drives a character ramp;
// the pointer leaves a velocity trail, clicks send ripples, colors lerp across three stops.

export type AsciiConfig = {
  colorStops: [string, string, string];
  glowColor?: string;
  idleOpacity?: number;
  activeOpacity?: number;
  amplitude?: number;
};

const RAMP = ' .:-+x*X80#@%$S';
const CELL_W = 14;
const CELL_H = 18;
const TRAIL_LIFE = 450;
const RIPPLE_LIFE = 1000;
const COLOR_STEPS = 32;
const GLOW_R = 220;

type Trail = { x: number; y: number; vx: number; vy: number; born: number };
type Ripple = { x: number; y: number; born: number };

const hash = (x: number, y: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
};
const smooth = (t: number) => t * t * (3 - 2 * t);
const noise = (x: number, y: number) => {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = smooth(x - xi), yf = smooth(y - yi);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
};

const parse = (c: string): [number, number, number] => {
  const ctx = document.createElement('canvas').getContext('2d')!;
  ctx.fillStyle = c;
  const h = ctx.fillStyle as string; // normalized to #rrggbb
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
};

export class AsciiField {
  private ctx: CanvasRenderingContext2D;
  private atlas: HTMLCanvasElement | null = null;
  private cols = 0;
  private rows = 0;
  private dpr = 1;
  private trail: Trail[] = [];
  private ripples: Ripple[] = [];
  private mouse = { x: -9999, y: -9999, t: 0 };
  private last = { x: 0, y: 0, t: 0 };
  private raf = 0;
  private lastFrame = 0;
  private born = performance.now();
  private running = false;
  private cfg: Required<AsciiConfig> = {
    colorStops: ['#38bdf8', '#b19fff', '#ff9367'],
    glowColor: '#ffffff',
    idleOpacity: 0.35,
    activeOpacity: 1,
    amplitude: 1,
  };
  private reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
  }

  configure(c: AsciiConfig) {
    const defined = Object.fromEntries(Object.entries(c).filter(([, v]) => v !== undefined));
    this.cfg = { ...this.cfg, ...defined };
    this.atlas = null;
  }

  resize() {
    const { width, height } = this.canvas.getBoundingClientRect();
    this.dpr = Math.min(devicePixelRatio || 1, 1.5);
    this.canvas.width = Math.max(1, width * this.dpr);
    this.canvas.height = Math.max(1, height * this.dpr);
    this.cols = Math.ceil(width / CELL_W);
    this.rows = Math.ceil(height / CELL_H);
    this.atlas = null;
    if (!this.running) this.draw(performance.now());
  }

  track(x: number, y: number) {
    const now = performance.now();
    const dt = Math.max(1, now - this.last.t);
    if (this.last.t) this.trail.push({ x, y, vx: ((x - this.last.x) / dt) * 16, vy: ((y - this.last.y) / dt) * 16, born: now });
    if (this.trail.length > 48) this.trail.shift();
    this.last = { x, y, t: now };
    this.mouse = { x, y, t: now };
  }

  press(x: number, y: number) {
    this.ripples.push({ x, y, born: performance.now() });
  }

  leave() {
    this.mouse = { x: -9999, y: -9999, t: 0 };
    this.last.t = 0;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.born = performance.now();
    const loop = (t: number) => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(loop);
      if (t - this.lastFrame < 30) return; // ~30fps
      this.lastFrame = t;
      this.draw(t);
      if (this.reduced) this.stop();
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private buildAtlas() {
    const s = this.dpr;
    const atlas = document.createElement('canvas');
    atlas.width = RAMP.length * CELL_W * s;
    atlas.height = COLOR_STEPS * CELL_H * s;
    const ctx = atlas.getContext('2d')!;
    ctx.scale(s, s);
    ctx.font = `12px "Geist Mono", ui-monospace, monospace`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const [a, b, c] = this.cfg.colorStops.map(parse);
    for (let i = 0; i < COLOR_STEPS; i++) {
      const t = i / (COLOR_STEPS - 1);
      const [p, q, k] = t < 0.5 ? [a, b, t * 2] : [b, c, (t - 0.5) * 2];
      const rgb = p.map((v, j) => Math.round(v + (q[j] - v) * k));
      ctx.fillStyle = `rgb(${rgb.join(',')})`;
      for (let j = 1; j < RAMP.length; j++) ctx.fillText(RAMP[j], j * CELL_W + CELL_W / 2, i * CELL_H + CELL_H / 2);
    }
    this.atlas = atlas;
  }

  private draw(now: number) {
    if (!this.atlas) this.buildAtlas();
    const { ctx, cols, rows, dpr, cfg } = this;
    const s = dpr;
    const time = now * 0.00018;
    const appear = Math.min(1, (now - this.born) / 1200);
    const active = this.mouse.t ? Math.max(0, 1 - (now - this.mouse.t) / 1500) : 0;
    const alpha = (cfg.idleOpacity + (cfg.activeOpacity - cfg.idleOpacity) * active) * appear;

    this.trail = this.trail.filter((p) => now - p.born < TRAIL_LIFE);
    this.ripples = this.ripples.filter((r) => now - r.born < RIPPLE_LIFE);
    const trail = this.trail.map((p) => ({
      x: p.x, y: p.y,
      w: (0.16 + Math.min(Math.hypot(p.vx, p.vy), 20) / 20) * (1 - (now - p.born) / TRAIL_LIFE),
    }));
    const ripples = this.ripples.map((r) => {
      const k = (now - r.born) / RIPPLE_LIFE;
      return { x: r.x, y: r.y, r: 40 + k * 420, w: 1 - k };
    });

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.globalAlpha = alpha;
    const mx = this.mouse.x, my = this.mouse.y;
    const glow = ctx.createRadialGradient(mx * s, my * s, 0, mx * s, my * s, GLOW_R * s);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = c * CELL_W + CELL_W / 2, py = r * CELL_H + CELL_H / 2;
        let v = (noise(c * 0.09 + time * 2, r * 0.12 + time) * 0.7 + noise(c * 0.3 - time, r * 0.35) * 0.3) * cfg.amplitude;
        v = v * 0.55 - 0.11;
        for (const p of trail) {
          const d = Math.hypot(px - p.x, py - p.y);
          if (d < 160) v += p.w * (1 - d / 160) * 1.4;
        }
        for (const q of ripples) {
          const d = Math.abs(Math.hypot(px - q.x, py - q.y) - q.r);
          if (d < 18) v += q.w * (1 - d / 18) * 0.7;
        }
        const dm = Math.hypot(px - mx, py - my);
        if (dm < GLOW_R) v += (1 - dm / GLOW_R) * 0.35 * active;
        if (v <= 0.06) continue;
        const ci = Math.min(RAMP.length - 1, Math.max(1, Math.floor(v * (RAMP.length - 1))));
        const ki = Math.min(COLOR_STEPS - 1, Math.floor(Math.min(1, v) * (COLOR_STEPS - 1)));
        ctx.drawImage(this.atlas!, ci * CELL_W * s, ki * CELL_H * s, CELL_W * s, CELL_H * s, c * CELL_W * s, r * CELL_H * s, CELL_W * s, CELL_H * s);
      }
    }
    if (active > 0) {
      glow.addColorStop(0, cfg.glowColor);
      glow.addColorStop(1, 'transparent');
      ctx.globalAlpha = 0.12 * active * appear;
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    ctx.globalAlpha = 1;
  }
}
