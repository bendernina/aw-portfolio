# AW Portfolio

A static, multi-page videographer portfolio built with [Astro](https://astro.build): a home page plus five project pages (`/off-the-beaten-path`, `/streets-come-alive`, `/memories-in-motion`, `/lost-in-the-scroll`, `/empower`).

## Run

```bash
npm install
npm run dev       # http://localhost:4321 with hot reload
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

Requires Node 18.17+.

## Deploy

`dist/` is plain static HTML/CSS/JS. Any static host works:

- **Netlify / Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- **Vercel:** framework preset "Astro" (auto-detected).
- **Anything else:** upload the contents of `dist/`. Pages are emitted as `/<slug>/index.html`, so clean URLs work without rewrites.

## Structure

```
src/
  data/site.js          all copy, links and media URLs (edit content here)
  styles/global.css     tokens, type scale, 12-col grid, shared utilities
  layouts/Base.astro    <head>, header, footer, grain overlay, script entry
  components/           Header, Logo, Roll (hover text swap), TriLink, SectionLabel,
                        Contact, Footer, Video, Grain, Icons
  pages/index.astro     home: hero, about, clients ticker, awards, works, contact
  pages/[slug].astro    project template, generated from `projects` in site.js
  scripts/main.js       appear-on-scroll, parallax, ticker sizing, mobile menu,
                        offscreen video pausing, contact form
public/
  fonts/                Inter 400/500/700 and IBM Plex Mono 500 (SIL OFL)
  images/grain.png      generated noise texture
```

## Behaviour

- **Breakpoints:** ≥1440, 1280–1439, 720–1279, <720 (12-column grid, 12px gutter, 32px / 24px margins).
- **Motion:** hero name rises on load; sections fade/slide in once on scroll; hero video and footer image parallax; clients ticker scrolls at 80px/s; animated film grain; text-roll, arrow and fill hovers. All motion is disabled under `prefers-reduced-motion`.
- **Header** uses `mix-blend-mode: difference` so it stays legible over video and light imagery; on mobile it becomes a full-screen menu.
- **Contact form** has no backend: submitting opens the visitor's mail client with a pre-filled message to the address in `site.js`. To use a form service (Formspree, Netlify Forms, etc.), set the form's `action` in `src/components/Contact.astro` and remove `initForm()` from `main.js`.

## Content and media notes

- Videos are royalty-free Pexels clips loaded from their original CDNs; the footer photo is loaded from its original URL. For production, download the media you are licensed to use into `public/` and point `site.js` at the local copies.
- Body copy in `site.js` is placeholder text. Replace it with your own.
