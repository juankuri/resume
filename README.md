# Juan Kuri — Resume Website

This is my resume website: a bilingual, static site that presents my experience, projects, technical skills, and downloadable CVs.

Live site: [juankuri.pages.dev](juankuri.pages.dev)

## Why? What for?

I chose Astro instead of a client-rendered framework because the site is primarily resume content. The result is HTML generated at build time, with only small interactive behaviors where they provide clear value.

### One presentation, two localized resumes

Spanish and English pages use the same `ResumePage` component and typed content model. This keeps layout changes consistent across both languages without duplicating page markup.

### Content separated from presentation

Resume content lives in `src/data/resume.ts`, while components handle structure and CSS handles presentation. Updating experience, projects, or skills does not require editing the page template.

### Direct access for recruiters

The site provides language switching, downloadable one-page English and Spanish CVs, semantic section navigation, contact copying, and responsive layouts for desktop and mobile.

### Performance-conscious assets

The profile image is served as optimized WebP with declared dimensions and high priority because it is part of the initial viewport. The site is statically generated and has no client-side framework runtime.

## Stack

Astro · TypeScript · HTML · CSS · npm · Cloudflare Pages

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Author 

**Juan Pablo Kuri Ricárdez** — Software Engineering student focused on practical system design and fullstack development.

[LinkedIn](https://www.linkedin.com/in/juankuri/) 
