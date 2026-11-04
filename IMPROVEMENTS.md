# Interactive portfolio

## Run locally

Use Node.js 18 or newer, then run `npm ci` and `npm run dev`.
Run `npm run build` for production and `npm run preview` to inspect the build.

## Changes

- Responsive Three.js laptop built from geometry: no model or texture downloads for the hero.
- Drag rotation, automatic orbit, pause/play, lighting choices, and camera reset.
- On-demand rendering, capped pixel density, offscreen suspension, reduced-motion support, and a WebGL fallback.
- Responsive hero, mobile menu, Escape/outside-click dismissal, section tracking, skip link, and visible keyboard focus.
- Project filters, technology/name search, result counts, empty state, and show more.
- Contact validation and accessible status feedback. Without EmailJS credentials, the form opens a clearly labeled email draft instead of failing.
- Existing biography, career, education, projects, and social links retained from the source repository.

## EmailJS

The reference contact layout uses the original ribbon-wrapped Earth and a star field, loaded near the viewport. All 19 projects now have bundled images; newly drawn concept illustrations are labeled in the image and alt text.

The floating music player plays an original ambient electronic composition called Neon Circuit using Web Audio. It requests automatic playback on opening; where browsers require a gesture, Enter the universe starts it. Visitors may enter without sound or pause and adjust volume. Playback suspends in a hidden tab and resumes on return unless manually paused. No external audio service or music download is needed.

A fantasy welcome dialog prepares the lazy-loaded 3D workspace and shows its actual loading state, with immediate entry available. The site and entrance have canvas starfields with reduced-motion support and no pointer interception.

The entrance now launches a vector spacecraft with a synthesized engine effect, exhaust trail and cloud transition before revealing the portfolio. Reduced-motion mode uses a short fade. The silent-entry option has been removed; sound controls remain on the site. A spaceship replaces the visible native page scrollbar, follows scrolling, and supports pointer dragging, rail clicks, Arrow keys, Page Up/Down, Home and End.

Copy `.env.example` to `.env.local` and supply all three public EmailJS configuration values to enable sending. Use an EmailJS template that accepts `from_name`, `to_name`, `from_email`, `to_email`, and `message`. Configure domain restrictions in your EmailJS account. Never put private keys in Vite environment variables.

## Hosting

## Resume-led exploration

The welcome screen now starts its launch after a one-second countdown with no entry buttons. Sound starts where autoplay is allowed; otherwise the first page interaction resumes music. Page-landmark and scrollbar focus styles are scoped to eliminate full-height edge outlines, and ship dragging prevents accidental text selection. The skills workbench adds core technology cards, category filters, cross-category search, selectable skill context, and project/experience links.

Content is aligned with the supplied Gowhar Yousuf resume: Frontend Engineer positioning, React Query, Node.js, Vercel, listed engineering practices, hospital insurance work, and SQLAlchemy for Task Inventory. The original PDF is bundled unchanged at `/gowhar-yousuf-resume.pdf`.

The project universe links three interactive Three.js planets to resume-grounded project summaries. Small task, subscription-total, and merchandise-cart demonstrations use explicit sample data in browser-local state; they are concept demos, not connections to production applications.

Mission Control provides section navigation, quick-view switching, and resume download. Quick view can also be entered from the welcome screen. Career constellation stars select each role, and a satellite discovery reveals the listed MCA program.

Vite generates the static site in `dist/`. The `.openai/hosting.json` file binds this copy to its Sites deployment. The original GitHub repository is retained as the Git origin; publishing this copy to Sites does not push changes to GitHub.
