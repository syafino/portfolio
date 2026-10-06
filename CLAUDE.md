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

**Single page**, no router, styled as an Instagram profile. `src/App.tsx` renders the sidebar / bottom nav, profile header, highlights, tab bar and 3-column grid. The active tab lives in `location.hash` (`#posts`, `#reposts`, `#tagged`); legacy paths (`/experience`, `/projects`, others) are mapped to a tab on load. `vercel.json` rewrites everything to `/`.

**Content**: All copy lives in `src/content.ts`: `profile`, `socials`, `highlights`, and three `Post[]` lists. `posts` = experience (Posts tab), `tagged` = projects (Tagged tab), `reposts` = achievements (Reposts tab). Captions are first-person and conversational. Edit that file, not the components. A post's `image` is optional: photos go in `public/photos/` and are referenced as `/photos/<name>` (filenames are case-sensitive on Vercel); without one the tile is a generated gradient with the title. Resume PDF is `public/resume.pdf`.

**Components**: `src/Post.tsx` exports `Tile` (grid cell) and `Viewer` (post modal on a native `<dialog>`: two-pane on desktop, full-screen on mobile, prev/next with arrow keys).

**Styling**: Tailwind 4. Instagram color tokens are defined in `@theme` in `src/index.css` (`bg`, `fg`, `muted`, `line`, `link`, `hover`, `blue`) and overridden under `prefers-color-scheme: dark`. No Instagram logo or wordmark: the sidebar shows the username in a script font.

**Deps**: `lucide-react` only. No animation libraries.

## Key Config

- **TypeScript**: Strict mode, ES2022 target, bundler module resolution
- **Vite plugins**: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **ESLint**: Flat config extending TS-ESLint recommended + React Hooks + React Refresh
