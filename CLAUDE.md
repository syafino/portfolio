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

**Routing**: Client-side via React Router DOM in `src/App.tsx`. All routes rewrite to `/` on Vercel (SPA config in `vercel.json`).

**Content**: All copy lives in `src/content.ts` (hero, now, photos, faq, skills, about, education, experience, projects, socials). Edit that file, not the pages. Photos go in `public/photos/` and are referenced as `/photos/<name>`; filenames are case-sensitive on Vercel. Resume PDF is `public/resume.pdf`.

**Pages** (`src/pages/`): `HomePage` (hero, Now, Life photo gallery, Skills, CTA), `AboutPage` (bio, education, Ask-me FAQ via native `<details>`), `ProjectsPage` (3-col dense bento; tinted cards span 2), `ExperiencePage` (timeline), `ContactPage`.

**Shared components** (`src/components/`): `Navigation` (fixed header with mobile menu, Resume button), `Footer`, `Section` (eyebrow + headline wrapper), `Reveal` (IntersectionObserver fade-up, no animation library). `App.tsx` has a `ScrollToTop` on route change.

**No state management library** — only local `useState` for UI toggles. No API calls or backend; all content is static.

## Styling

Dark theme modeled on memorable.sh. Tailwind utilities + custom classes in `src/index.css`: `.eyebrow` (mono uppercase label), `.serif` (italic accent inside headlines), `.card` + `.card-sky/-violet/-peach/-mint` tints, `.btn-primary`, `.btn-secondary`, `.tag`, `.glow`, `.reveal`. Tokens are CSS vars on `:root` (`--bg`, `--bg-card`, `--fg`, `--fg-2`, `--fg-3`, `--border`, accent colors). Fonts via Google Fonts: Geist (body), Geist Mono (labels/tags), Instrument Serif italic (accents). No inline `style` objects; use Tailwind classes.

## Key Config

- **TypeScript**: Strict mode, ES2022 target, bundler module resolution
- **Vite plugins**: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **ESLint**: Flat config extending TS-ESLint recommended + React Hooks + React Refresh
