# Implementation Guide — Abu Md. Selim Portfolio Migration

> **Repository path:** `d:\Failed\New folder\abumdselim`  
> **Production domain:** `selimc.tech` (see `CNAME`)  
> **Companion doc:** `PHASE_CHECKLIST.md` — task status, verification workflow, sign-off  
> **Design constraints:** `DESIGN_RULES.md` — **must read before any UI work**

---

## 1. Executive summary

Migrate the static portfolio (`index.html`, `style.css`, case studies, blog) to **Next.js 16** (App Router) with **Supabase** for blog/CMS data and **Vercel Hobby** for hosting. Preserve the dark editorial aesthetic and two non-negotiable interaction rules from `DESIGN_RULES.md`:

1. **Hero image on desktop:** `object-fit: contain` (full image, no crop).
2. **Header:** hidden on load; fades in after scrolling past ~60% of hero height; then fixed.

The Next.js app lives in **`web/`** during migration so the legacy static site remains deployable until cutover.

---

## 2. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Vercel Hobby (selimc.tech)                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Next.js 15 App Router (`web/`)                      │   │
│  │  • RSC for marketing pages                           │   │
│  │  • Server Components fetch Supabase (blog)           │   │
│  │  • Route Handlers / Server Actions for Studio auth   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
         │                              │
         ▼                              ▼
   Cloudinary (images)          Supabase (PostgreSQL)
   GitHub APIs (stats)           posts table + RLS
```

### Stack decisions (defaults — no approval needed)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 16 (App Router), TypeScript | `create-next-app` installed v16.2.9; App Router matches P0–P8 plan |
| Styling | Global CSS + CSS modules (no Tailwind in P0) | Mirrors existing `style.css` tokens; avoids rewrite |
| Fonts | `next/font` — Inter + Playfair Display | Same as current Google Fonts links |
| CMS | Supabase `posts` table (existing) | Already wired in `blog.html` / `studio.html` |
| Studio auth | Server-side secret (env) + session cookie | Replaces client-side passphrase |
| Images | Cloudinary URLs (existing) + `next/image` where beneficial | Already used across site |
| Analytics | `@vercel/speed-insights`, `@vercel/analytics` | Already on `index.html` |
| Deploy | Vercel Hobby, root = `web/` | Free tier sufficient for portfolio |

### Target route map

| Legacy | Next.js route | Notes |
|--------|---------------|-------|
| `index.html` | `/` | Single-page sections + hash nav |
| `puc-pro.html` | `/work/puc-pro` | Case study |
| `the-chattala.html` | `/work/the-chattala` | Case study |
| `blog.html` | `/blog` | Supabase listing |
| `blog-post.html?slug=` | `/blog/[slug]` | Dynamic post |
| `studio.html` | `/studio` | Protected CMS (P4) |

---

## 3. Phase roadmap (P0–P8)

### P0 — Foundation

**Goal:** Runnable Next.js scaffold, env template, design tokens, repo layout documented.

| Task | Description |
|------|-------------|
| P0-T1 | Scaffold `web/` (Next 16, TS, ESLint, App Router, no Tailwind) |
| P0-T2 | `globals.css` design tokens from `style.css` `:root` |
| P0-T3 | `next/font` Inter + Playfair Display |
| P0-T4 | `.env.example` + `lib/env.ts` validation |
| P0-T5 | Supabase client helpers (`lib/supabase/server.ts`, `client.ts`) |
| P0-T6 | Base layout, placeholder home page |
| P0-T7 | `npm run build` + `npm run lint` pass |

### P1 — Homepage migration

**Goal:** Pixel-faithful `/` from `index.html` + `style.css` (shared sections only).

| Task | Description |
|------|-------------|
| P1-T1 | Extract shared layout: Header, MobileNav, Footer |
| P1-T2 | Hero + `DESIGN_RULES` scroll/header behavior (client component) |
| P1-T3 | About / Venture / Stack / Services sections |
| P1-T4 | Projects list (links to `/work/*`) |
| P1-T5 | Blog teaser → live Supabase or skeleton |
| P1-T6 | Contact + local time widget |
| P1-T7 | Responsive pass (768px breakpoint) |

### P2 — Case studies

**Goal:** Fix missing CSS; migrate `puc-pro.html` and `the-chattala.html`.

| Task | Description |
|------|-------------|
| P2-T1 | Add `.project-hero`, `.project-details`, `.massive-text`, etc. to shared styles |
| P2-T1b | **Legacy fix:** add same rules to root `style.css` until cutover |
| P2-T2 | `/work/puc-pro` page |
| P2-T3 | `/work/the-chattala` page |
| P2-T4 | Resolve PUC Pro copy inconsistency (see §7) |
| P2-T5 | Case study responsive + header behavior (always visible on case studies, like legacy) |

### P3 — Blog (public)

**Goal:** Replace fake `href="#"` and static teasers with Supabase.

| Task | Description |
|------|-------------|
| P3-T1 | `/blog` listing (filters, skeleton → data) |
| P3-T2 | `/blog/[slug]` post page (from `blog-post.html` styles) |
| P3-T3 | Homepage blog section fetches latest 3 published posts |
| P3-T4 | SEO: `generateMetadata` per post |
| P3-T5 | RSS optional (P8) |

### P4 — Studio (CMS)

**Goal:** Secure authoring; remove client passphrase.

| Task | Description |
|------|-------------|
| P4-T1 | Supabase RLS: public read published; writes via service role only |
| P4-T2 | `/studio` login via `STUDIO_SECRET` + httpOnly session |
| P4-T3 | Tiptap editor (reuse studio UX) |
| P4-T4 | API routes for CRUD (server uses service role) |
| P4-T5 | Remove hardcoded secrets from `studio.html` (deprecate file) |

### P5 — Content & consistency

| Task | Description |
|------|-------------|
| P5-T1 | Canonical LinkedIn URL |
| P5-T2 | Canonical email (contact) |
| P5-T3 | PUC Pro description aligned site-wide |
| P5-T4 | Footer year, meta descriptions audit |
| P5-T5 | GitHub README vs site bio alignment (optional) |

### P6 — SEO, performance, observability

| Task | Description |
|------|-------------|
| P6-T1 | `sitemap.ts`, `robots.ts` |
| P6-T2 | Open Graph images |
| P6-T3 | Vercel Analytics + Speed Insights |
| P6-T4 | `next/image` for hero and case study assets |
| P6-T5 | Lighthouse ≥ 90 on key pages |

### P7 — Deployment & cutover

| Task | Description |
|------|-------------|
| P7-T1 | Vercel project, root directory `web` |
| P7-T2 | Env vars in Vercel dashboard |
| P7-T3 | `selimc.tech` DNS → Vercel |
| P7-T4 | Redirect legacy `*.html` → new routes |
| P7-T5 | Archive or remove static HTML at root (post-cutover) |

### P8 — Polish & sign-off

| Task | Description |
|------|-------------|
| P8-T1 | Cross-browser smoke test |
| P8-T2 | `DESIGN_RULES` regression checklist |
| P8-T3 | Client review notes from `PHASE_CHECKLIST.md` |
| P8-T4 | Final sign-off |

---

## 4. Feature map (from research / existing files)

| Feature | Source | Migration target |
|---------|--------|------------------|
| Full-bleed hero + signature | `index.html` | `Hero.tsx` client component |
| Scroll-reveal header | `index.html` script + `DESIGN_RULES` | `Header.tsx` + `useScrollHeader` |
| Mobile hamburger menu | `index.html` | `MobileNav.tsx` |
| GitHub stats embed | `index.html` | Keep embed or server fetch |
| Live Dhaka clock | `index.html` | Client widget |
| Inievo venture card | `index.html` | Static section |
| Certifications / skills bento | `index.html` | Static section |
| Project rows + case studies | `index.html`, `puc-pro.html`, `the-chattala.html` | `/work/*` |
| Blog listing + filters | `blog.html` | `/blog` |
| Blog post + progress bar | `blog-post.html` | `/blog/[slug]` |
| Studio CMS | `studio.html` | `/studio` (secured) |
| Speed Insights | `index.html` CDN | `@vercel/speed-insights` |

---

## 5. Open-source references

| Project | Use |
|---------|-----|
| [vercel/next.js](https://github.com/vercel/next.js) | App Router, `next/font`, metadata |
| [supabase/supabase-js](https://github.com/supabase/supabase-js) | DB client |
| [ueberdosis/tiptap](https://github.com/ueberdosis/tiptap) | Studio editor (already in studio.html) |
| [vercel/speed-insights](https://github.com/vercel/speed-insights) | Performance |
| [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) | GitHub card (optional server-side) |

---

## 6. Environment variables

Create `web/.env.local` from `web/.env.example`. **Never commit real secrets.**

| Variable | Required | Used in | Notes |
|----------|----------|---------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (blog) | Client + server | e.g. `https://hvowhpvokaiwionmymzm.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes (blog) | Client + server | Public anon key; RLS must restrict writes |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes (studio) | Server only | **Never** expose to client |
| `STUDIO_SECRET` | Yes (studio) | Server only | Replaces `PASSPHRASE` in studio.html |
| `STUDIO_SESSION_SECRET` | Yes (studio) | Server only | Cookie signing (32+ random bytes) |

### User actions required (blockers)

1. **Supabase:** Confirm `posts` table schema matches studio fields; enable RLS policies (P4).
2. **Vercel:** Create project and add env vars before production deploy (P7).
3. **Studio:** Choose production `STUDIO_SECRET` and rotate away from legacy passphrase.
4. **Content:** Confirm canonical LinkedIn + email (see §7).

---

## 7. Known issues (legacy site)

### 7.1 Case study CSS missing

`puc-pro.html` and `the-chattala.html` use classes **not defined** in `style.css`:

- `.project-hero`, `.project-hero-inner`, `.project-hero-desc`, `.project-hero-image`
- `.project-details`, `.project-details-grid`, `.project-content`
- `.massive-text`, `.project-list`

**Impact:** Case study pages render with broken layout. **Fix in P2** (shared case-study CSS module).

### 7.2 Blog disconnected on homepage

`index.html` blog cards use `href="#"` — no link to `blog.html` or posts.

**Fix in P3:** Fetch latest posts; link to `/blog/[slug]`.

### 7.3 Studio security

~~`studio.html` exposed hardcoded passphrase and anon-key writes.~~ **Fixed in P4 (complete):**

- Root `studio.html` is a **deprecated redirect stub** to `/studio` (no secrets in active script).
- Production CMS: `/studio` with `STUDIO_SECRET`, httpOnly session, service role CRUD API, RLS on `posts`.
- Do **not** reintroduce client-side passphrase or anon writes in HTML.

### 7.4 Content inconsistencies

| Item | `index.html` | Other source | Resolution (default) |
|------|--------------|--------------|----------------------|
| LinkedIn | ~~`linkedin.com/in/abumdselim`~~ | README: `linkedin.com/in/aabumdselim` | **Fixed P5-T1:** `linkedin.com/in/aabumdselim` via `web/lib/site/contact.ts` |
| Email | ~~`abumdselim@gmail.com`~~ | README: `selim@inievo.com` | **Fixed P5-T2:** `selim@inievo.com` (business identity) via `contact.ts` |
| PUC Pro blurb | ~~"professional user management…"~~ | `puc-pro.html`: academic hub, 50+ tools | **Fixed P5-T3:** case study copy on index + Next `ProjectsSection` |
| Footer year | ~~© 2025~~ | Date: June 2026 | **Fixed P5-T3:** © 2026 site-wide |
| The Chattala | ~~"Brand Identity" on index~~ | README: hyperlocal super-app | **Fixed P5-T3:** Mobile Application + hyperlocal copy aligned |

### 7.5 Blog page header behavior

`blog.html` uses `class="top-sticky-header scrolled"` — header always visible (acceptable for non-hero pages). Preserve for blog/case studies.

---

## 8. Do NOT list

- **Do not** change hero `object-fit: contain` on desktop (`DESIGN_RULES`).
- **Do not** show header on homepage before 60% hero scroll.
- **Do not** commit `.env.local` or service role keys.
- **Do not** expose `SUPABASE_SERVICE_ROLE_KEY` or `STUDIO_SECRET` to the client bundle.
- **Do not** use client-side passphrase auth in production.
- **Do not** force Tailwind rewrite unless explicitly requested — match existing CSS structure first.
- **Do not** delete legacy HTML until P7 cutover is verified.
- **Do not** create git commits unless the user asks.

---

## 9. Per-task workflow

Every task in `PHASE_CHECKLIST.md` follows:

1. **Implement** — code change scoped to one task  
2. **Automated checks** — `npm run lint`, `npm run build` in `web/`  
3. **Responsive** — 320px, 768px, 1024px, 1440px  
4. **Human-like quality** — typography, spacing, motion, no "AI slop"  
5. **Client view** — note items for Abu's review  
6. **Fix log** — issues found and fixes applied  
7. **Sign-off** — mark `[x]` when complete  

---

## 10. Repository layout (target)

```
abumdselim/
├── DESIGN_RULES.md          # Immutable UI rules
├── IMPLEMENTATION_GUIDE.md  # This file
├── PHASE_CHECKLIST.md       # Task status
├── index.html               # Legacy (until P7)
├── style.css                # Legacy (+ interim case study fix)
├── blog.html, studio.html, …
└── web/                     # Next.js 15 app
    ├── app/
    ├── components/
    ├── lib/
    ├── styles/
    ├── .env.example
    └── package.json
```

---

## 11. Session log

| Date | Session focus | Status |
|------|---------------|--------|
| 2026-06-20 | Guides + P0 complete | Next app in `web/`; `lint` + `build` pass; start P1 |
| 2026-06-20 | P4 Studio complete | Secure `/studio`, CRUD API, `studio.html` secrets removed; **next: P5-T1** canonical LinkedIn |
| 2026-06-20 | P5 complete | Canonical contact, copy audit, footer 2026, homepage h1; **next: P6-T1** sitemap + robots |
| 2026-06-20 | P6 complete | Sitemap/robots, OG, analytics, image opt, `LIGHTHOUSE.md` + a11y pass; **CLI scores pending Vercel preview**; **next: P7-T1** Vercel project |

---

*Last updated: June 2026 — P6 complete; current task P7-T1*
