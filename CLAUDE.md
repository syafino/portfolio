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

**Pages** (`src/pages/`): `HomePage`, `AboutPage`, `ProjectsPage`, `ExperiencePage`, `ContactPage` — each is a self-contained page component with static/hardcoded data.

**Shared components** (`src/components/`): `Navigation` (fixed header with mobile menu) and `Footer`.

**No state management library** — only local `useState` for UI toggles. No API calls or backend; all content is static.

## Styling

Hybrid approach: Tailwind CSS utilities + custom CSS classes defined in `src/index.css` (`.card`, `.btn-primary`, `.btn-secondary`, `.tag`, `.award-badge`, etc.). Color palette uses CSS custom properties (e.g. `--color-text`, `--color-bg`). Font: Inter via Google Fonts. Many components also use inline `style` props.

## Key Config

- **TypeScript**: Strict mode, ES2022 target, bundler module resolution
- **Vite plugins**: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **ESLint**: Flat config extending TS-ESLint recommended + React Hooks + React Refresh
