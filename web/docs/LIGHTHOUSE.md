# Lighthouse audit guide

Target **≥ 90** on all four categories (Performance, Accessibility, Best Practices, SEO) for the key marketing routes below.

> **Note:** Numeric scores are validated on a **Vercel preview** or local production build (`npm run build && npm run start`). CLI runs are optional; Chrome DevTools Lighthouse is the preferred manual workflow.

---

## Pages to test

| Route | Purpose |
|-------|---------|
| `/` | Homepage — hero LCP, scroll header, full section stack |
| `/work/puc-pro` | Case study — hero image, sidebar, long-form content |
| `/work/the-chattala` | Case study — same layout pattern as PUC Pro |
| `/blog` | Blog listing — Supabase fetch, filter UI, card grid |

Optional follow-up: one published `/blog/[slug]` post if content exists in Supabase.

---

## Manual audit steps (Chrome DevTools)

1. **Production-like build**
   - Local: `cd web && npm run build && npm run start` → open `http://localhost:3000`
   - Or use a **Vercel preview URL** after P7 deploy (recommended for final sign-off).

2. **Open Lighthouse**
   - Chrome → DevTools (F12) → **Lighthouse** tab
   - Mode: **Navigation**
   - Device: run **Mobile** and **Desktop** separately for `/` at minimum; Mobile for all four routes is acceptable for sign-off
   - Categories: Performance, Accessibility, Best Practices, SEO (all checked)
   - Click **Analyze page load**

3. **Record scores** in `PHASE_CHECKLIST.md` fix log or a PR comment when Vercel preview is available.

4. **Repeat** for each route in the table above (hard refresh or incognito between runs if caching skews results).

---

## Optional CLI (local only)

Requires a running server on port 3000:

```bash
cd web
npm run build && npm run start
```

In a second terminal:

```bash
npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=./lighthouse-home-desktop.json
npx lighthouse http://localhost:3000/work/puc-pro --output=json --output-path=./lighthouse-puc-pro.json
npx lighthouse http://localhost:3000/work/the-chattala --output=json --output-path=./lighthouse-chattala.json
npx lighthouse http://localhost:3000/blog --output=json --output-path=./lighthouse-blog.json
```

Add `--view` to open the HTML report. Do **not** commit large JSON artifacts unless the team wants baseline snapshots in-repo.

---

## Pre-audit checklist (already optimized)

These items were addressed in prior P6 tasks and should help meet the ≥ 90 target:

### P6-T4 — Images
- [x] Hero profile: `next/image` with `priority` and responsive `sizes`
- [x] Cloudinary signatures: removed `unoptimized`; AVIF/WebP via `next.config.ts`
- [x] Venture logo and case-study mockups: explicit `sizes` / `quality`
- [x] GitHub stats and dynamic blog covers remain native `<img>` where URLs are external

### P5-T3 — SEO / semantics
- [x] Homepage sr-only `<h1>` for document outline without visual change

### P1-T7 / globals — Motion & touch
- [x] `prefers-reduced-motion: reduce` disables non-essential animations
- [x] Touch targets (hamburger, nav links, footer) ≥ 44px where applicable

### P6-T5 — Accessibility pass
- [x] Hamburger: `aria-label`, `aria-expanded`, `aria-controls="navMenu"`
- [x] Mobile nav: `aria-label`, `aria-hidden` when closed
- [x] Desktop nav: `aria-label="Main navigation"`
- [x] Skip link → `#main-content` in root layout

### P6-T1 / P6-T2 / P6-T3 — Crawlers & RUM
- [x] `sitemap.ts`, `robots.ts`, default OG + Person JSON-LD
- [x] `@vercel/analytics` + `@vercel/speed-insights` (production RUM post-deploy)

---

## If a category scores below 90

| Category | Common fixes |
|----------|----------------|
| **Performance** | Confirm hero `priority`; check LCP element; reduce unused JS on blog; verify Cloudinary transforms |
| **Accessibility** | Color contrast on muted text; heading order on blog posts; form labels if forms added |
| **Best Practices** | HTTPS on preview; no console errors; secure cookies on `/studio` only |
| **SEO** | `meta` description present; canonical via `getSiteUrl()`; blog posts have `generateMetadata` |

After deploy, use **Vercel Speed Insights** (P6-T3) for real-user Core Web Vitals alongside lab Lighthouse runs.

---

## Status

- **Code & docs:** P6-T5 complete (audit guide + a11y pass)
- **Numeric scores:** pending Vercel preview verification
