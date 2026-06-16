# Inievo Technologies — Next.js Frontend

Next.js rewrite of the [Inievo Reflex corporate website](https://github.com/abumdselim/inievo), preserving the same design system, routes, content, and UI behavior.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (hero carousel, all homepage sections) |
| `/services` | Enterprise services hub |
| `/projects` | Portfolio + case study previews |
| `/projects/the-chattala` | Case study |
| `/projects/puc-pro` | Case study |
| `/company` | About page |
| `/contact` | Qualified lead form |
| `/industries/edtech` | EdTech industry landing |

## Getting started

```bash
cd inievo-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

SVG tech logos are in `public/generated/`. PNG/WebP marketing assets (hero banners, project thumbnails, client logos) are referenced from the original Reflex app and should be generated from the Python source:

```bash
# In the original repo (requires Python 3.12+ and uv)
uv run python -m inievo_web.tools.generate_assets
# Then copy assets/generated/* to inievo-web/public/generated/
```

Until then, images fall back to Cloudinary (logo/favicon) and Simple Icons CDN (tech logos).

## Content sync

Site copy is ported from `inievo_web/constants.py`. To re-sync:

```bash
node scripts/convert-constants.mjs
```

Then verify `src/lib/constants-supplement.ts` for any values the script skips.

## Forms

Lead and newsletter submissions are stored locally in `data/leads.json` and `data/subscribers.json` via API routes. Replace with your production backend (CRM, email, database) as needed.

## Original source

Reference clone: `../_source_inievo/` (Reflex/Python)
