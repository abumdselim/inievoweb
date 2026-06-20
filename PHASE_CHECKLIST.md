# Phase Checklist — Abu Md. Selim Portfolio Migration

> **Paths:** Repo `d:\Failed\New folder\abumdselim` Â· Next app `web/` Â· Guide `IMPLEMENTATION_GUIDE.md`  
> **Current phase:** **P7 — Deployment**  
> **Current task:** **P7-T2** — Production env vars (paste in Vercel dashboard; CLI deploy live — see `web/docs/DEPLOY.md`)  
> **Last updated:** 2026-06-20

---

## Status legend

- `[ ]` Not started  
- `[~]` In progress  
- `[x]` Complete  

---

## Workflow template (apply to every task)

Copy this block when adding subtasks or notes:

```markdown
### TASK-ID — Title
- [ ] Implement
- [ ] Automated checks (`npm run lint`, `npm run build` in `web/`)
- [ ] Responsive CSS review (320 / 768 / 1024 / 1440)
- [ ] Human-like quality check
- [ ] Client view items noted
- [ ] Fix log updated
- [ ] Sign-off `[x]`
```

---

## P0 — Foundation

### P0-T1 — Next.js scaffold in `web/`
- [x] Implement — `create-next-app` Next 16.2.9, TS, ESLint, App Router, no Tailwind
- [x] Automated checks — `npm run lint` pass
- [x] Responsive CSS review — placeholder only; full pass in P1
- [x] Human-like quality check — scaffold placeholder acceptable for P0
- [x] Client view items noted — none for scaffold
- [x] Fix log updated
- [x] Sign-off `[x]`

### P0-T2 — Design tokens in `globals.css`
- [x] Implement — `:root` tokens from `style.css`
- [x] Automated checks
- [x] Responsive CSS review — deferred to P1
- [x] Human-like quality check
- [x] Client view items noted
- [x] Fix log updated
- [x] Sign-off `[x]`

### P0-T3 — Fonts via `next/font`
- [x] Implement — Inter + Playfair Display
- [x] Automated checks
- [x] Responsive CSS review — deferred to P1
- [x] Human-like quality check
- [x] Client view items noted
- [x] Fix log updated
- [x] Sign-off `[x]`

### P0-T4 — Environment template
- [x] Implement — `web/.env.example`, `lib/env.ts`
- [x] Automated checks
- [x] Responsive CSS review — N/A
- [x] Human-like quality check
- [x] Client view items noted
- [x] Fix log updated
- [x] Sign-off `[x]`

### P0-T5 — Supabase client helpers
- [x] Implement — `lib/supabase/server.ts`, `client.ts` + `@supabase/supabase-js`
- [x] Automated checks
- [x] Responsive CSS review — N/A
- [x] Human-like quality check
- [x] Client view items noted
- [x] Fix log updated
- [x] Sign-off `[x]`

### P0-T6 — Base layout + placeholder home
- [x] Implement — `layout.tsx` metadata, dark placeholder `page.tsx`
- [x] Automated checks
- [x] Responsive CSS review — placeholder centered layout OK
- [x] Human-like quality check
- [x] Client view items noted
- [x] Fix log updated
- [x] Sign-off `[x]`

### P0-T7 — P0 gate: build + lint green
- [x] Implement
- [x] Automated checks — `npm run build` pass
- [x] Responsive CSS review — N/A
- [x] Human-like quality check
- [x] Client view items noted
- [x] Fix log updated
- [x] Sign-off `[x]`

---

## P1 — Homepage migration

### P1-T1 — Shared layout (Header, MobileNav, Footer)
- [x] Implement — `Header.tsx`, `MobileNav.tsx`, `Footer.tsx`, `useScrollHeader`, nav constants, layout CSS in `globals.css`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — 900px breakpoint for hamburger + footer stack; desktop nav hidden on mobile
- [x] Human-like quality check — matches legacy header/nav/footer structure and DESIGN_RULES scroll threshold
- [x] Client view items noted — hero stub placeholder until P1-T2; footer year still 2025
- [x] Fix log updated
- [x] Sign-off `[x]`

### P1-T2 — Hero + DESIGN_RULES header behavior
- [x] Implement — `Hero.tsx`, hero CSS in `globals.css`, scroll behaviors (signature hide, chevron fade), `next/image` for Cloudinary
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — desktop `object-fit: contain`, mobile `cover` at 768px per DESIGN_RULES
- [x] Human-like quality check — matches legacy hero structure, signReveal animation, bottom-shadow, scroll-down chevron
- [x] Client view items noted — hero photo crop on desktop for client review (DESIGN_RULES checklist item)
- [x] Fix log updated
- [x] Sign-off `[x]`

### P1-T3 — About, Venture, Stack, Services
- [x] Implement — `VisionSection.tsx`, `VentureSection.tsx`, `StackSection.tsx`, `ServicesSection.tsx`, `useDhakaTime` hook, section CSS in `globals.css`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — vision/venture/bento/services breakpoints at 1100 / 900 / 600 / 480px
- [x] Human-like quality check — matches legacy structure, GitHub stats URLs + fallback, Asia/Dhaka live clock
- [x] Client view items noted — none new for these sections
- [x] Fix log updated
- [x] Sign-off `[x]`

### P1-T4 — Projects list â†’ `/work/*`
- [x] Implement — `ProjectsSection.tsx`, `/work/puc-pro` + `/work/the-chattala` placeholders, projects CSS in `globals.css`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — project-row stacks at 900px, link hidden on mobile per legacy
- [x] Human-like quality check — matches legacy 3-row work list; Inievo external, internal case study routes
- [x] Client view items noted — PUC copy alignment deferred to P2-T4
- [x] Fix log updated
- [x] Sign-off `[x]`

### P1-T5 — Blog teaser section
- [x] Implement — `BlogSection.tsx`, static 3 cards, `/blog` read links, blog CSS in `globals.css`
- [x] Automated checks
- [x] Responsive CSS review — 3 â†’ 2 â†’ 1 column at 900 / 600px
- [x] Human-like quality check — matches legacy blog teaser; live data in P3-T3
- [x] Client view items noted — none new
- [x] Fix log updated
- [x] Sign-off `[x]`

### P1-T6 — Contact + clock
- [x] Implement — `ContactSection.tsx`, email/LinkedIn/GitHub from index.html, contact CSS in `globals.css`
- [x] Automated checks
- [x] Responsive CSS review — contact buttons stack at 600px
- [x] Human-like quality check — matches legacy contact section (clock lives in StackSection from P1-T3)
- [x] Client view items noted — email/LinkedIn canonical URLs deferred to P5
- [x] Fix log updated
- [x] Sign-off `[x]`

### P1-T7 — P1 responsive pass
- [x] Implement — touch targets (hamburger/nav/footer/contact), `prefers-reduced-motion`, grid `min-width: 0`, 320px padding tweaks in `globals.css`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — 320 / 768 / 900 / 1024 / 1440; breakpoints match `style.css` (1100 / 900 / 600 / 480)
- [x] Human-like quality check — hero contain/cover at 768px, header scroll unchanged, project-link hidden at 900px
- [x] Client view items noted — hero photo crop on desktop (existing backlog)
- [x] Fix log updated
- [x] Sign-off `[x]`

**Phase P1 COMPLETE** — all homepage sections ported and responsive pass done.

---

## P2 — Case studies

### P2-T1 — Case study CSS (`.project-hero`, etc.)
- [x] Implement — case study CSS in `globals.css` + interim `style.css`; shared components
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — hero stacks at 900px; sidebar static on mobile
- [x] Human-like quality check — dark editorial layout, Playfair massive-text, sidebar cards
- [x] Client view items noted — case study email/LinkedIn differ from homepage (P5)
- [x] Fix log updated
- [x] Sign-off `[x]`

### P2-T2 — `/work/puc-pro`
- [x] Implement — full port via `CaseStudyLayout`, Cloudinary hero, legacy copy
- [x] Automated checks
- [x] Responsive CSS review
- [x] Human-like quality check
- [x] Client view items noted — none new beyond P2-T1
- [x] Fix log updated
- [x] Sign-off `[x]`

### P2-T3 — `/work/the-chattala`
- [x] Implement — full port via `CaseStudyLayout`, Cloudinary hero, legacy copy
- [x] Automated checks
- [x] Responsive CSS review
- [x] Human-like quality check
- [x] Client view items noted — none new
- [x] Fix log updated
- [x] Sign-off `[x]`

### P2-T4 — PUC Pro copy alignment
- [x] Implement — `ProjectsSection.tsx` PUC Pro + The Chattala blurbs/tags aligned to case study heroes + sidebars
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — copy-only change; no layout impact
- [x] Human-like quality check — homepage work list matches `/work/puc-pro` and `/work/the-chattala` case studies
- [x] Client view items noted — PUC description backlog resolved; Chattala type updated from legacy "Brand Identity"
- [x] Fix log updated
- [x] Sign-off `[x]`

**Phase P2 COMPLETE** — case study CSS, both `/work/*` pages, homepage copy alignment, and subpage header/footer behavior done.

### P2-T5 — Case study header + responsive
- [x] Implement — `Header` `always-visible` on subpages; nav links `/#section`; `ConditionalFooter` hides global footer on `/work/*`
- [x] Automated checks
- [x] Responsive CSS review — 900 / 480px case study breakpoints
- [x] Human-like quality check — header visible on load like legacy `scrolled` class
- [x] Client view items noted — none new
- [x] Fix log updated
- [x] Sign-off `[x]`

---

## P3 — Blog (public)

### P3-T1 — `/blog` listing
- [x] Implement — `app/blog/page.tsx`, `BlogListing` (filters + cards), `blog.module.css`, Supabase fetch via `lib/blog/posts.ts`, skeleton `loading.tsx`, stub `/blog/[slug]`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — 768px single-column grid, filter/card padding from legacy
- [x] Human-like quality check — dark editorial hero, category tabs, card grid, empty/error/env-not-configured states
- [x] Client view items noted — nav still links `/#blog` until P3-T5; basic post SEO in generateMetadata (extended OG in P3-T4)
- [x] Fix log updated
- [x] Sign-off `[x]`

### P3-T2 — `/blog/[slug]`
- [x] Implement — `getPostBySlug`, `ReadingProgressBar`, `blog-post.module.css`, hero/content/tags/nav, `generateMetadata`, `notFound()`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — 768px padding from legacy blog-post.html
- [x] Human-like quality check — matches legacy post hero, progress bar, HTML content, back link
- [x] Client view items noted — basic post SEO in generateMetadata; extended OG in P3-T4
- [x] Fix log updated
- [x] Sign-off `[x]`

### P3-T3 — Homepage blog section (live data)
- [x] Implement — `getLatestPosts(3)` in `posts.ts`; `page.tsx` fetches and passes to `BlogSection`; real cards link to `/blog/[slug]`; empty state + `/blog` link; nav Blog â†’ `/blog`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — existing blog-grid breakpoints unchanged; `.blog-empty` added
- [x] Human-like quality check — matches legacy teaser layout; live Supabase data replaces static cards
- [x] Client view items noted — empty state when Supabase unconfigured or no published posts
- [x] Fix log updated
- [x] Sign-off `[x]`

### P3-T4 — Post SEO metadata
- [x] Implement — `lib/blog/seo.ts`: `meta_title`/`meta_description`, Open Graph article + `publishedTime` + cover image, Twitter `summary_large_image`, BlogPosting JSON-LD on post page; listing page OG/Twitter
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — metadata only; N/A
- [x] Human-like quality check — matches legacy blog-post.html title/description pattern; extended OG/JSON-LD for crawlers
- [x] Client view items noted — none new
- [x] Fix log updated
- [x] Sign-off `[x]`

### P3-T5 — Fix legacy `href="#"` on index blog cards
- [x] Implement — verified no `href="#"` in `web/`; homepage `BlogSection` links to `/blog/[slug]` since P3-T3
- [x] Automated checks — grep + lint/build pass
- [x] Responsive CSS review — N/A
- [x] Human-like quality check — blog cards, listing, nav all use real routes
- [x] Client view items noted — none new
- [x] Fix log updated
- [x] Sign-off `[x]`

**Phase P3 COMPLETE** — blog listing, post pages, homepage live data, SEO metadata, and blog link hygiene done.

---

## P4 — Studio (CMS)

### P4-T1 — Supabase RLS policies
- [x] Implement — `supabase/migrations/001_posts_rls.sql`, `web/docs/SUPABASE_RLS.md`; public SELECT published only; anon/authenticated writes revoked; service role for Studio CRUD (P4-T4)
- [x] Automated checks — `npm run lint` + `npm run build` pass (SQL/docs only)
- [x] Responsive CSS review — N/A
- [x] Human-like quality check — security-first model documented; legacy `studio.html` anon writes blocked after SQL applied
- [x] Client view items noted — **user must run SQL in Supabase dashboard** before RLS is live; legacy studio breaks until P4-T2+
- [x] Fix log updated
- [x] Sign-off `[x]`

### P4-T2 — Secure `/studio` login
- [x] Implement — `/studio/login`, `/studio` dashboard shell, `lib/studio/session.ts` (HMAC cookie), `/api/studio/auth` + `/api/studio/logout`, middleware protection; no client Supabase writes
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — login box + dashboard placeholder at 480px
- [x] Human-like quality check — matches legacy login UX; STUDIO_SECRET server-only; httpOnly secure sameSite=lax cookie
- [x] Client view items noted — user must set STUDIO_SECRET + STUDIO_SESSION_SECRET in `.env.local`; service role needed in P4-T4 only
- [x] Fix log updated
- [x] Sign-off `[x]`

### P4-T3 — Tiptap editor UI
- [x] Implement — `StudioEditor.tsx` (Tiptap + toolbar), `StudioShell.tsx` (sidebar, meta, settings, topbar), `studio.module.css` ported from `studio.html`; client-only auto-save stub (`console.log`); preview â†’ `/blog/[slug]`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — 900px hides settings panel; 600px hides sidebar; toolbar sticky at 56px
- [x] Human-like quality check — matches legacy editor layout, toolbar commands, meta/settings fields, save status dot
- [x] Client view items noted — post list empty until P4-T4; preview requires published post in Supabase
- [x] Fix log updated
- [x] Sign-off `[x]`

### P4-T4 — CRUD API routes
- [x] Implement — `/api/studio/posts` GET/POST + `/api/studio/posts/[id]` GET/PATCH/DELETE; `createServiceClient()` + session gate; `StudioShell` wired (list, load, auto-save, publish/unpublish, delete, new post)
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — no layout changes; existing studio breakpoints unchanged
- [x] Human-like quality check — payload matches legacy `studio.html` savePost; reading_time ceil(words/200); published_at on first publish, null on unpublish
- [x] Client view items noted — requires `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`; RLS migration must be applied in Supabase
- [x] Fix log updated
- [x] Sign-off `[x]`

### P4-T5 — Deprecate `studio.html` secrets
- [x] Implement — `studio.html` gutted: static â€œStudio has movedâ€ page, meta refresh + JS redirect to `/studio`; PASSPHRASE + Supabase anon key removed; `web/public/LEGACY_STUDIO.md` note
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — centered notice at 320px; N/A for full editor
- [x] Human-like quality check — dark editorial notice matches site tone; no active secrets or client writes
- [x] Client view items noted — legacy static host must not re-deploy old studio.html; Next `/studio` is canonical
- [x] Fix log updated
- [x] Sign-off `[x]`

**Phase P4 COMPLETE** — RLS, secure `/studio` login, Tiptap UI, CRUD API, legacy studio secrets removed.

---

## P5 — Content consistency

### P5-T1 — Canonical LinkedIn URL
- [x] Implement — `web/lib/site/contact.ts` (`CANONICAL_LINKEDIN`); `ContactSection`, `social.ts`, case study contact, root `index.html` aligned to `linkedin.com/in/aabumdselim`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — N/A (URL-only)
- [x] Human-like quality check — single source of truth; professional identity chosen
- [x] Client view items noted — LinkedIn confirm resolved (aabumdselim)
- [x] Fix log updated
- [x] Sign-off `[x]`

### P5-T2 — Canonical email
- [x] Implement — `CANONICAL_EMAIL` + `MAILTO_HREF` in `contact.ts`; homepage `ContactSection`, case studies, legacy `index.html` use `selim@inievo.com`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — N/A
- [x] Human-like quality check — no gmail drift in web/ or index contact section
- [x] Client view items noted — email confirm resolved (selim@inievo.com)
- [x] Fix log updated
- [x] Sign-off `[x]`

### P5-T3 — Site-wide copy audit
- [x] Implement — footer Â© 2026 (Footer, CaseStudyContact, index.html, legacy case studies); layout metadata aligned; sr-only homepage h1; index.html PUC/Chattala copy aligned to Next app
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — sr-only has no layout impact; copy-only elsewhere
- [x] Human-like quality check — single professional voice; Â§7.4 drift resolved in web/ + index.html
- [x] Client view items noted — PUC homepage alignment backlog cleared in legacy index too
- [x] Fix log updated
- [x] Sign-off `[x]`

**Phase P5 COMPLETE** — canonical contact links, email, footer year, metadata, homepage h1, and project copy alignment done.

---

## P6 — SEO & performance

### P6-T1 — sitemap + robots
- [x] Implement — `app/sitemap.ts` (static routes + dynamic blog slugs via `fetchPublishedPosts`), `app/robots.ts` (allow all, disallow `/studio` + `/api/`), `getSiteUrl()` in `lib/env.ts`, `NEXT_PUBLIC_SITE_URL` in `.env.example`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — N/A (metadata routes)
- [x] Human-like quality check — graceful empty blog entries when Supabase env missing; baseUrl defaults to `https://selimc.tech`
- [x] Client view items noted — set `NEXT_PUBLIC_SITE_URL` in Vercel before P7 cutover
- [x] Fix log updated
- [x] Sign-off `[x]`

### P6-T2 — Open Graph
- [x] Implement — `lib/site/seo.ts` (default site metadata, Person JSON-LD, case study OG helper); `app/opengraph-image.tsx` (dynamic OG, dark #080808); Person JSON-LD on homepage; `layout.tsx` uses `getSiteUrl()` + default OG/Twitter; `/work/*` `generateMetadata` with hero images; blog post OG from P3-T4
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — N/A (metadata/OG routes)
- [x] Human-like quality check — site-wide default OG via `opengraph-image.tsx`; case studies use Cloudinary hero images; Person schema with LinkedIn + GitHub
- [x] Client view items noted — none new
- [x] Fix log updated
- [x] Sign-off `[x]`

### P6-T3 — Analytics
- [x] Implement — `@vercel/analytics` + `@vercel/speed-insights` in `layout.tsx`; `ConditionalAnalytics` skips `/studio`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — N/A (script injection only)
- [x] Human-like quality check — matches legacy Speed Insights on `index.html`; Web Analytics via official Next imports
- [x] Client view items noted — analytics auto-enabled on Vercel deploy (P7); no env vars required
- [x] Fix log updated
- [x] Sign-off `[x]`

### P6-T4 — Image optimization
- [x] Implement — Hero profile `priority` + responsive `sizes`; Cloudinary signatures optimized (removed `unoptimized`); Venture logo + case study mockups `sizes`/`quality`; `remotePatterns` + AVIF/WebP in `next.config.ts`; GitHub stats + blog covers stay native `<img>`
- [x] Automated checks — `npm run lint` + `npm run build` pass
- [x] Responsive CSS review — existing `.profile-img`, `.venture-logo img`, `.project-hero-image img` selectors unchanged; next/image renders `<img>` inside wrapper
- [x] Human-like quality check — all Cloudinary assets on `/`, `/work/*` use `next/image`; external/dynamic URLs intentionally excluded
- [x] Client view items noted — hero photo crop unchanged (existing backlog)
- [x] Fix log updated
- [x] Sign-off `[x]`

### P6-T5 — Lighthouse audit
- [x] Implement — `web/docs/LIGHTHOUSE.md` (targets â‰¥ 90, four routes, DevTools + optional CLI); a11y pass (hamburger aria, nav aria-labels, skip link)
- [x] Automated checks — `npm run lint` + `npm run build` pass in `web/`
- [x] Responsive CSS review — skip link focus-only; no layout regressions
- [x] Human-like quality check — audit guide documents P6-T4 image work, sr-only h1, reduced-motion, nav ARIA
- [x] Client view items noted — **CLI scores pending Vercel preview** (lab run on production URL after P7-T1)
- [x] Fix log updated
- [x] Sign-off `[x]`

**P6-T5 notes:** Numeric Lighthouse scores validated on Vercel preview post-deploy. Local: Chrome DevTools Lighthouse or `npx lighthouse` per `web/docs/LIGHTHOUSE.md`. Speed Insights (P6-T3) covers production RUM.

**Phase P6 COMPLETE** — sitemap/robots, OG, analytics, image optimization, Lighthouse audit guide and a11y pass done.

---

## P7 — Deployment

### P7-T1 — Vercel project (`web` root)
- [x] Implement — `web/vercel.json` (legacy redirects), `web/docs/DEPLOY.md` (Hobby deploy runbook, root=`web`, CLI note); `package.json` name `selimc-portfolio`
- [x] Automated checks — `npm run lint` + `npm run build` pass in `web/`
- [x] Responsive CSS review — N/A (config/docs only)
- [x] Human-like quality check — redirect map matches IMPLEMENTATION_GUIDE Â§2; env var table from `.env.example`
- [x] Client view items noted — **CLI linked** `inievo-holdings/web` (2026-06-20); confirm dashboard **Root Directory=`web`** if Git-connected builds differ from CLI upload
- [x] Fix log updated
- [x] Sign-off `[x]`

### P7-T2 — Production env vars
- [~] Implement — env var table + scopes in `web/docs/DEPLOY.md` Step 2; **values still to be pasted in Vercel dashboard** (Settings → Environment Variables → redeploy)
- [x] Automated checks — `npm run lint` + `npm run build` pass locally; Vercel remote build passed on CLI deploy
- [ ] Responsive CSS review — N/A
- [~] Human-like quality check — preview live without env: static routes OK; `/blog` empty/errors; `/studio` needs server secrets
- [x] Client view items noted — paste vars from `web/.env.local` per DEPLOY.md Step 2; preview URL in DEPLOY.md
- [x] Fix log updated
- [ ] Sign-off `[x]`

### P7-T3 — DNS `selimc.tech`
- [ ] Implement — **pending user DNS** (Vercel Domains + apex; see DEPLOY.md Step 4)
- [ ] Automated checks
- [ ] Responsive CSS review
- [ ] Human-like quality check
- [ ] Client view items noted
- [ ] Fix log updated
- [ ] Sign-off `[x]`

### P7-T4 — Legacy HTML redirects
- [~] Implement — rules in `web/vercel.json`; spot-check on https://web-ten-gamma-25.vercel.app now; full verify on `selimc.tech` after P7-T3
- [ ] Automated checks
- [ ] Responsive CSS review
- [ ] Human-like quality check
- [ ] Client view items noted
- [ ] Fix log updated
- [ ] Sign-off `[x]`

---

## P8 — Polish & sign-off

### P8-T1 — Cross-browser smoke test
- [ ] Implement
- [ ] Automated checks
- [ ] Responsive CSS review
- [ ] Human-like quality check
- [ ] Client view items noted
- [ ] Fix log updated
- [ ] Sign-off `[x]`

### P8-T2 — DESIGN_RULES regression
- [ ] Implement
- [ ] Automated checks
- [ ] Responsive CSS review
- [ ] Human-like quality check
- [ ] Client view items noted
- [ ] Fix log updated
- [ ] Sign-off `[x]`

### P8-T3 — Final client review
- [ ] Implement
- [ ] Automated checks
- [ ] Responsive CSS review
- [ ] Human-like quality check
- [ ] Client view items noted
- [ ] Fix log updated
- [ ] Sign-off `[x]`

---

## Fix log (cumulative)

| Date | Task | Issue | Fix |
|------|------|-------|-----|
| 2026-06-20 | P0 | `create-next-app` installed Next 16 (not 15) | Accepted; guide updated |
| 2026-06-20 | P1-T1 | No hero yet for scroll test | Added `hero-stub` (`#home`, 100vh) on placeholder page; full Hero in P1-T2 |
| 2026-06-20 | P1-T2 | Hero stub replaced | `Hero.tsx` with full viewport, signReveal, scroll behaviors; `#home` retained for `useScrollHeader` |
| 2026-06-20 | P1-T3 | Four homepage sections ported | Vision, Venture, Stack (bento + Dhaka clock), Services in `web/components/sections/` |
| 2026-06-20 | P1-T4/T5/T6 | Final homepage sections | Projects, Blog teaser, Contact + `/work/*` placeholders wired into `page.tsx` |
| 2026-06-20 | P1-T7 | Full responsive pass | Touch targets 44px, `prefers-reduced-motion`, grid overflow guards, 480px small-mobile padding; P1 complete |
| 2026-06-20 | P2-T1/T2/T3/T5 | Case studies ported | CSS + `CaseStudyLayout` components; `/work/puc-pro` + `/work/the-chattala` full content; header always visible on subpages |
| 2026-06-20 | P2-T4 | Homepage project blurbs drifted from case studies | PUC Pro + The Chattala descriptions/tags in `ProjectsSection.tsx` aligned to case study heroes and tech stacks; P2 complete |
| 2026-06-20 | P3-T1 | Blog listing ported from `blog.html` | Server fetch from Supabase `posts` (published), client category filters, env-aware empty state, `/blog/[slug]` stub |
| 2026-06-20 | P3-T2 | Blog post page ported from `blog-post.html` | `getPostBySlug`, reading progress bar, hero/content/tags, `dangerouslySetInnerHTML` content, `generateMetadata`, `notFound()` |
| 2026-06-20 | P3-T3 | Homepage blog still static fake cards | `getLatestPosts(3)`, async `page.tsx`, `BlogSection` props, empty state, nav Blog â†’ `/blog` |
| 2026-06-20 | P3-T4 | Post SEO only title + description | `lib/blog/seo.ts`: OG article, Twitter card, `meta_title`, BlogPosting JSON-LD; listing OG/Twitter |
| 2026-06-20 | P3-T5 | Legacy index blog `href="#"` | Verified fixed in Next app (P3-T3); no `href="#"` in `web/` |
| 2026-06-20 | P4-T1 | `studio.html` anon key allows arbitrary writes | RLS SQL + docs: public read `status=published` only; writes via service role in P4-T4; user applies migration in Supabase |
| 2026-06-20 | P4-T2 | Legacy client-side PASSPHRASE in `studio.html` | `/studio/login` + HMAC httpOnly session; middleware protects `/studio/*`; dashboard placeholder until P4-T3/T4 |
| 2026-06-20 | P4-T4 | Studio auto-save stub only | CRUD API routes with service role; `StudioShell` loads/saves/deletes via `/api/studio/posts`; session cookie required (401 otherwise) |
| 2026-06-20 | P4-T5 | `studio.html` exposed PASSPHRASE + anon Supabase writes | Replaced with redirect notice to `/studio`; no inline secrets; P4 complete |
| — | — | Case study CSS missing in `style.css` | Fixed in P2-T1 (globals.css + style.css) |
| — | — | Blog `href="#"` on index | Fixed in P3-T3/T5 (Next app); legacy `index.html` unchanged until P7 redirects |
| 2026-06-20 | P5-T1/T2 | Email/LinkedIn drift (gmail vs inievo, abumdselim vs aabumdselim) | `web/lib/site/contact.ts` single source; homepage + index.html + social.ts aligned; professional identity: selim@inievo.com + linkedin.com/in/aabumdselim |
| 2026-06-20 | P5-T3 | Footer Â© 2025/2024; missing homepage h1; index PUC/Chattala drift | Â© 2026 site-wide; sr-only h1 on homepage; layout description matches index; legacy index project blurbs aligned to case studies; P5 complete |
| 2026-06-20 | P6-T1 | No sitemap/robots for crawlers | `sitemap.ts` + `robots.ts`; `getSiteUrl()` + `NEXT_PUBLIC_SITE_URL`; dynamic blog slugs from Supabase |
| 2026-06-20 | P6-T2 | No site-wide OG or Person schema | `lib/site/seo.ts`, `opengraph-image.tsx`, Person JSON-LD on `/`, case study OG via `generateMetadata` |
| 2026-06-20 | P6-T3 | Legacy CDN Speed Insights only; no Web Analytics | `@vercel/analytics` + `@vercel/speed-insights` in root layout; `/studio` excluded from analytics |
| 2026-06-20 | P6-T4 | Signatures used `unoptimized`; hero/case study sizes not tuned | Removed `unoptimized` on Cloudinary signatures; hero `sizes` + `quality`; case study mockups + venture logo `sizes`/`quality`; AVIF/WebP formats in `next.config.ts` |
| 2026-06-20 | P6-T5 | No Lighthouse runbook; nav skip-link / ARIA gaps | `web/docs/LIGHTHOUSE.md`; skip link + nav `aria-label` / `aria-hidden`; hamburger aria verified; **CLI scores pending Vercel preview**; P6 complete |
| 2026-06-20 | P7-T1 | No Vercel project config or deploy runbook | `web/vercel.json` redirects; `web/docs/DEPLOY.md`; CLI 54.10.3 / `inievo`; `package.json` â†’ `selimc-portfolio`; P7-T2 env table bundled in DEPLOY.md |
| 2026-06-20 | P7-T2/T3 | CLI deploy automation | `vercel deploy --yes` linked `inievo-holdings/web`; alias https://web-ten-gamma-25.vercel.app ; env vars + DNS still manual |

---

## Client view backlog (for Abu)

Items to review before final sign-off:

- [x] Confirm primary contact email — **selim@inievo.com** (P5-T2)
- [x] Confirm LinkedIn URL — **linkedin.com/in/aabumdselim** (P5-T1)
- [x] Approve PUC Pro description on homepage after alignment
- [ ] Provide production `STUDIO_SECRET` before Studio go-live
- [ ] Review hero photo crop on desktop after Next migration

---

*Maintained across context windows — always update "Current phase/task" at top when progressing.*

