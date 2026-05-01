# Hamza Hussain Shah — Portfolio (Next.js 15)

A fully responsive, SEO-optimized portfolio built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

## Stack
- **Next.js 15** — App Router, server components, image optimization
- **React 19** — latest
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first styling
- **next/font** — self-hosted Google Fonts (Space Grotesk + Space Mono)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx       # SEO metadata, fonts, JSON-LD
  page.tsx         # composes home sections
  globals.css      # Tailwind base + global styles
  sitemap.ts       # /sitemap.xml
  robots.ts        # /robots.txt
  manifest.ts      # PWA manifest
components/
  Navbar.tsx       # responsive nav with mobile menu
  Hero.tsx         # hero with animated background grid
  Stats.tsx
  Skills.tsx       # animated skill bars on scroll
  Projects.tsx     # list of project cards
  ProjectCard.tsx  # reusable card (phones / wide / single layouts)
  About.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx       # IntersectionObserver-based scroll reveal
  SectionHeader.tsx
lib/
  data.ts          # single source of truth: projects, skills, links
public/images/     # all project screenshots
```

## SEO & best practices
- App Router metadata API with OpenGraph + Twitter cards
- JSON-LD `Person` structured data
- Auto-generated `sitemap.xml`, `robots.txt`, and PWA `manifest.json`
- Canonical URL, theme color, viewport
- Skip-to-content link for a11y
- `prefers-reduced-motion` honored
- `next/image` with AVIF/WebP and responsive `sizes`
- `next/font` for zero-CLS, self-hosted fonts

## Customization
Edit `lib/data.ts` to update projects, skills, stats, social links, and bio.
The site URL/email lives in `SITE` at the top of that file.
