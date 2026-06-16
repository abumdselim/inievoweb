# Inievo Technologies — Corporate Website

Production Next.js frontend for [Inievo Technologies](https://inievo.com): enterprise services, portfolio case studies, industry landing pages, blog, and lead capture. Rewritten from the original [Reflex/Python site](https://github.com/abumdselim/inievo) with the same design system, routes, content, and UI behavior.

## Live deployment

This repository is connected to **Vercel**. Pushes to `main` trigger an automatic production deployment.

| Environment | Branch | Trigger |
|-------------|--------|---------|
| Production | `main` | Push or merge to `main` |
| Preview | Other branches / PRs | Pull request or branch push |

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (hero carousel, homepage sections) |
| `/services` | Enterprise services hub |
| `/services/[slug]` | Individual service landing pages |
| `/projects` | Portfolio and case study previews |
| `/projects/[slug]` | Case study detail pages |
| `/company` | About page |
| `/contact` | Qualified lead form |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/industries` | Industries hub |
| `/industries/[slug]` | Industry landing pages (e.g. EdTech) |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms and conditions |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run generate:assets` | Generate placeholder SVG assets |
| `npm run generate:hero-assets` | Generate hero banner assets |
| `npm run generate:blog-thumbnails` | Generate blog thumbnail images |

## Deploy on Vercel

Vercel auto-detects this as a Next.js project. No custom build command or output directory is required.

1. Import this GitHub repository in the [Vercel dashboard](https://vercel.com/new).
2. Leave **Framework Preset** as Next.js and **Root Directory** as the repo root.
3. Add optional environment variables (see below).
4. Deploy. Subsequent pushes to `main` redeploy production automatically.

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID (defaults to the Inievo site ID if unset) |

Set these in **Vercel → Project → Settings → Environment Variables**.

## Assets

SVG tech logos live in `public/generated/`. PNG/WebP marketing assets (hero banners, project thumbnails, client logos) can be generated from the original Python source:

```bash
# In the original Reflex repo (Python 3.12+ and uv)
uv run python -m inievo_web.tools.generate_assets
# Copy assets/generated/* to public/generated/
```

Until full assets are copied locally, images fall back to Cloudinary (logo/favicon) and the Simple Icons CDN (tech logos).

## Content sync

Site copy is ported from `inievo_web/constants.py` in the Reflex source. To re-sync:

```bash
node scripts/convert-constants.mjs
```

Then verify `src/lib/constants-supplement.ts` for any values the script skips.

## Forms and API routes

Lead and newsletter submissions are handled by API routes under `src/app/api/`:

- `POST /api/leads` — contact / qualified lead form
- `POST /api/newsletter` — newsletter signup
- `POST /api/blog/comments` — blog comments

Locally, submissions are stored in `data/leads.json` and `data/subscribers.json`. On Vercel, the filesystem is ephemeral; wire these routes to a persistent backend (CRM, email provider, or database) for production use.

## Project structure

```
src/
├── app/              # App Router pages and API routes
├── components/       # UI, layout, SEO, analytics
└── lib/              # Constants, SEO helpers, utilities
public/
└── generated/        # Static marketing and tech logos
scripts/              # Asset and content conversion scripts
```

## Original source

The Reflex/Python reference implementation lives outside this repo. See the [inievo](https://github.com/abumdselim/inievo) repository for the legacy stack.

## License

Private — Inievo Technologies.
