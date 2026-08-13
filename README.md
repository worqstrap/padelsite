# Shayaan Padel

Astro website for Shayaan's padel coaching in Nairobi, Kenya. Coaching is offered exclusively at Ace Padel, Aga Khan Sports Centre.

## Local preview

```sh
npm install
npm run dev
```

Astro serves the local site at `http://localhost:4321` by default.

## Production build

```sh
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Netlify deployment

This repository includes `netlify.toml`, so a linked Netlify site will use the correct build command, publish directory, Node version, security headers, image caching, and legacy redirects automatically.

To publish updates to `https://padelsiteshayaan.netlify.app`, either:

1. connect this repository to that Netlify site and push the production branch; or
2. authenticate Netlify CLI, link the site, and run `netlify deploy --prod`.

Never commit a Netlify access token. Configure authentication in Netlify or the deployment environment.

## Content that still needs verified assets

- Replace `public/images/padel-court-placeholder.svg` with approved Shayaan and Ace Padel photography.
- Add Shayaan's verified WhatsApp number in `src/data/site.ts`.
- Add court venues only after checking their details with primary club sources.
- Replace testimonial and coaching-video placeholders only with approved real content.
