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

**Content**: All copy lives in `src/content.ts`: `profile`, `socials`, `highlights`, and three `Post[]` lists. `posts` = experience (Posts tab), `tagged` = projects (Tagged tab), `reposts` = achievements (Reposts tab). Captions are first-person and conversational. Edit that file, not the components. A post's `image` is optional: photos go in `public/photos/` and are referenced as `/photos/<name>` (filenames are case-sensitive on Vercel); without one the tile is a generated gradient with the title. `image` may also be an array: the first is the grid tile and the post opens as a swipeable carousel. Resume PDF is `public/resume.pdf`.

**Components**: `src/Post.tsx` exports `Tile` (grid cell) and `Viewer` (post modal on a native `<dialog>`: two-pane on desktop, full-screen on mobile, prev/next with arrow keys).

**Highlights**: `src/Story.tsx` opens the highlight circles (and the Resume nav item) as Instagram-style stories on a native `<dialog>`: progress bars that auto-advance after 8s (paused on hover/press), tap left/right, and link stickers. Stories come from `highlights` in `src/content.ts`; one with an `image` shows it with the stickers above, one without is a gray card with `text` and stickers. `public/photos/resume.jpg` is a render of `resume.pdf` and must be regenerated when the PDF changes (command is in `content.ts`). A post's optional `banner` renders as a headline strip above its photo (used on reposts).

**Messages**: `src/Chat.tsx` is an Instagram-DM-style AI chat (floating pill on desktop, panel, expandable to full screen; opened from the pill, the header Message button or the Messages nav item). It POSTs the conversation to `/api/chat` and renders the streamed plain-text reply. `api/chat.ts` is a Vercel serverless function (Web `POST` handler) that builds its system prompt from `src/content.ts` and calls Claude through `@anthropic-ai/sdk`; it needs `ANTHROPIC_API_KEY` set in Vercel (and in `.env.local` for dev, see `.env.example`). It validates the conversation (max 20 messages, 1000 chars each, strict user/assistant alternation) and never returns upstream error details. `vite.config.ts` has a small `dev-api` plugin that serves the same handler under `npm run dev`. `src/content.ts` must stay free of React/icon imports because the function imports it.

**Styling**: Tailwind 4. Instagram color tokens are defined in `@theme` in `src/index.css` (`bg`, `fg`, `muted`, `line`, `link`, `hover`, `blue`) and overridden under `prefers-color-scheme: dark`. No Instagram logo or wordmark: the sidebar shows the username in a script font.

**Deps**: `lucide-react`, `@anthropic-ai/sdk` (server only). No animation libraries.

## Key Config

- **TypeScript**: Strict mode, ES2022 target, bundler module resolution
- **Vite plugins**: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **ESLint**: Flat config extending TS-ESLint recommended + React Hooks + React Refresh
