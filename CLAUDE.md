# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS 4. Deployed on Vercel.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — TypeScript check + Vite production build (`tsc -b && vite build`)
- `npm run lint` — ESLint (flat config, TS/TSX files only)
- `npm run preview` — Preview production build locally

## Architecture

**Single page**, no router. `src/App.tsx` renders the sections in order and maps legacy paths (`/about`, `/projects`, `/experience`, `/contact`) to section anchors on load. `vercel.json` rewrites everything to `/`.

**Content**: All copy lives in `src/content.ts` (hero, terminal lines, layers, experience, projects, photos, numbers, faq, cta, nav, socials). Edit that file, not the sections. Photos go in `public/photos/` and are referenced as `/photos/<name>`; filenames are case-sensitive on Vercel. Resume PDF is `public/resume.pdf`.

**Sections** (`src/sections/`, page order): `Nav` (floating bar, mobile menu), `Hero` (270vh sticky stage: view A with `TerminalCard` tilts away, view B rises in), `Layers` (450vh sticky inverted pyramid, desktop only), `Experience` (280vh sticky terminal with tabs, scroll or click switches roles, desktop only), `Projects` (dense 3-col bento), `Life` (snap carousel, hidden until `photos` has entries), `Numbers`, `Ask` (native `<details>`), `CTA` (full-screen, cursor-following glow blobs), `Footer`. `Head` is the shared eyebrow + split-reveal headline.

**Effects** (`src/fx/`): `ascii.ts` is a 2D-canvas ASCII field (value noise, pointer trail, click ripples, three color stops; pauses offscreen/hidden; static under reduced motion) wrapped by `AsciiCanvas.tsx`. `scroll.ts` sets up Lenis + GSAP ScrollTrigger/SplitText and exports `scrollTo`. `reveal.ts` has `splitReveal` (char stagger) and `fadeUp`.

**Deps**: `gsap` (ScrollTrigger + SplitText, free since 3.13), `lenis`, `lucide-react`. No Three.js: the ASCII effect is plain canvas. Pinned sections use CSS `sticky` plus GSAP scrubbed timelines, gated to `min-width: 768px` with `gsap.matchMedia`.

## Key Config

- **TypeScript**: Strict mode, ES2022 target, bundler module resolution
- **Vite plugins**: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **ESLint**: Flat config extending TS-ESLint recommended + React Hooks + React Refresh
