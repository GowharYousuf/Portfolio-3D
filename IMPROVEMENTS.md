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

Copy `.env.example` to `.env.local` and supply all three public EmailJS configuration values to enable sending. Use an EmailJS template that accepts `from_name`, `to_name`, `from_email`, `to_email`, and `message`. Configure domain restrictions in your EmailJS account. Never put private keys in Vite environment variables.

## Hosting

Vite generates the static site in `dist/`. The `.openai/hosting.json` file binds this copy to its Sites deployment. The original GitHub repository is retained as the Git origin; publishing this copy to Sites does not push changes to GitHub.
