# Vercel deployment guide (Hobby)

Deploy the Next.js portfolio from the `web/` directory to **Vercel Hobby** on **`selimc.tech`**.

> **Do not deploy from this doc alone.** Complete the manual Vercel dashboard steps below. The CLI is optional; no production deploy is triggered by maintaining this repo.

---

## Prerequisites

- GitHub repo connected to your Vercel account
- Supabase project with a `posts` table (blog + Studio)
- DNS access for `selimc.tech` (see repo root `CNAME`)
- Production secrets ready (Supabase keys, Studio passphrase)

### Vercel CLI (optional)

CLI is **not required** for Hobby deploy via the dashboard.

| Check | Result (local dev machine) |
|-------|----------------------------|
| `vercel --version` | **54.10.3** (Vercel CLI) |
| `vercel whoami` | Logged in as **`inievo`** |

To link or deploy from CLI later (only when you explicitly want a preview/production deploy):

```bash
cd web
vercel link    # one-time: pick team, project name, confirm root = web
vercel         # preview deploy
vercel --prod  # production â€” run only when cutover is intentional
```


## CLI preview deploy (2026-06-20)

| Item | Value |
|------|-------|
| Vercel project | `inievo-holdings/web` (auto-linked via `vercel deploy --yes` from `web/`) |
| Deployment URL | https://web-jsudbtfv9-inievo-holdings.vercel.app |
| Project alias | https://web-ten-gamma-25.vercel.app |
| Inspect | https://vercel.com/inievo-holdings/web/Bh9NXcrFwkTRyKGEw4JhnHBPAbJR |

**Without dashboard env vars:** `/` and static routes work; `/blog` may be empty or error; `/studio` login/CRUD needs server secrets (503/401 until Step 2 vars are set). Redeploy after adding env vars.

**Note:** First CLI deploy from a linked folder may show as Production in Vercel output; custom domain `selimc.tech` (Step 4) is still manual.

---

---

## Step 1 â€” Import project on Vercel

1. Open [vercel.com/new](https://vercel.com/new) â†’ **Import Git Repository**.
2. Select this repo (`abumdselim` or your fork).
3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `web` â† **required** (monorepo; legacy HTML stays at repo root until P7 cutover)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)
4. **Do not deploy yet** if env vars are missing â€” add them in Step 2 first, then redeploy.

---

## Step 2 â€” Environment variables (P7-T2)

In Vercel â†’ **Project â†’ Settings â†’ Environment Variables**, add every variable from `web/.env.example`. Apply to **Production** (and **Preview** if you want blog/Studio on preview URLs).

| Variable | Required for | Scope | Notes |
|----------|--------------|-------|-------|
| `NEXT_PUBLIC_SITE_URL` | SEO, sitemap, OG | Production | Set to `https://selimc.tech` |
| `NEXT_PUBLIC_SUPABASE_URL` | `/blog`, homepage teaser | Production + Preview | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public blog reads (RLS) | Production + Preview | Anon key only â€” never service role |
| `SUPABASE_SERVICE_ROLE_KEY` | `/studio` CRUD API | Production | **Server only** â€” mark sensitive |
| `STUDIO_SECRET` | `/studio` login | Production | Strong passphrase; not the legacy HTML passphrase |
| `STUDIO_SESSION_SECRET` | Session cookie signing | Production | 32+ random bytes (e.g. `openssl rand -hex 32`) |

Copy values from your local `web/.env.local`. **Never commit** `.env.local` or paste service role keys into client-side code.

**Blog-only first deploy:** You can ship with only the three `NEXT_PUBLIC_*` vars; `/blog` works, `/studio` shows login but CRUD needs the three server secrets.

After adding vars â†’ **Deployments â†’ Redeploy** latest (or push a commit).

---

## Step 3 â€” Supabase RLS (before Studio go-live)

Public blog reads rely on Row Level Security. Apply the migration **before** relying on production Studio or trusting anon-key isolation:

1. Open Supabase Dashboard â†’ **SQL Editor**.
2. Run `supabase/migrations/001_posts_rls.sql` (full steps in [`SUPABASE_RLS.md`](./SUPABASE_RLS.md)).
3. Verify: anon can SELECT published posts only; writes denied.

Without RLS, a leaked anon key could mutate posts even if the Next app filters correctly.

---

## Step 4 â€” Custom domain `selimc.tech` (P7-T3)

1. Vercel â†’ **Project â†’ Settings â†’ Domains** â†’ Add **`selimc.tech`**.
2. Vercel shows DNS records. Typical setup:
   - **Apex (`selimc.tech`):** A record â†’ Vercel IP (`76.76.21.21`), **or**
   - **CNAME:** `selimc.tech` â†’ `cname.vercel-dns.com` (if your DNS host supports CNAME flattening at apex)
   - **`www` (optional):** CNAME â†’ `cname.vercel-dns.com`, then redirect www â†’ apex in Vercel
3. Remove or repoint any **GitHub Pages** records still pointing at the old static site (repo root `CNAME` was for Pages; Vercel becomes canonical after cutover).
4. Wait for DNS propagation; Vercel shows **Valid Configuration** when ready.
5. Enable **HTTPS** (automatic on Vercel once DNS validates).

Confirm `NEXT_PUBLIC_SITE_URL=https://selimc.tech` matches the live domain.

---

## Step 5 â€” Legacy HTML redirects (P7-T4)

`web/vercel.json` defines **301 redirects** from legacy static filenames to App Router paths:

| Legacy URL | New route |
|------------|-----------|
| `/index.html` | `/` |
| `/puc-pro.html` | `/work/puc-pro` |
| `/the-chattala.html` | `/work/the-chattala` |
| `/blog.html` | `/blog` |
| `/studio.html` | `/studio` |
| `/blog-post.html?slug={slug}` | `/blog/{slug}` |
| `/blog-post.html` (no slug) | `/blog` |

After deploy, spot-check each redirect on the production URL. Bookmarks and external links to `*.html` should land on the Next routes.

---

## Step 6 â€” Post-deploy verification

1. **Build:** Vercel deployment log shows `npm run build` success (same as local).
2. **Routes:** `/`, `/work/puc-pro`, `/work/the-chattala`, `/blog`, `/blog/[slug]`, `/studio/login`.
3. **SEO:** `/sitemap.xml`, `/robots.txt`, `/opengraph-image` (or layout OG).
4. **Redirects:** Hit each legacy `*.html` path above.
5. **Analytics:** `@vercel/analytics` and Speed Insights activate on Vercel without extra env vars (`/studio` excluded).
6. **Lighthouse:** Run audits per [`LIGHTHOUSE.md`](./LIGHTHOUSE.md) on the production or preview URL.

---

## What stays at repo root (until P7-T5)

Legacy `index.html`, `blog.html`, `style.css`, etc. remain in the repo for reference and rollback. They are **not** served once Vercel hosts `web/` on `selimc.tech`. P7-T5 archives or removes them after cutover is verified.

---

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| `/blog` empty | Missing Supabase env vars or no published posts |
| `/studio` 401 / login fails | `STUDIO_SECRET` or `STUDIO_SESSION_SECRET` not set on Production |
| Studio save errors | `SUPABASE_SERVICE_ROLE_KEY` missing or RLS not applied |
| Wrong canonical URLs in OG/sitemap | `NEXT_PUBLIC_SITE_URL` not set to `https://selimc.tech` |
| Build fails on Vercel | Root Directory not set to `web` |
| Legacy links 404 | `vercel.json` not deployed (confirm file is under `web/`) |

---

## Manual checklist (Abu)

- [ ] Vercel project imported with **Root Directory = `web`**
- [ ] All production env vars set (see Step 2)
- [ ] Supabase RLS migration applied ([`SUPABASE_RLS.md`](./SUPABASE_RLS.md))
- [ ] `selimc.tech` added in Vercel Domains; DNS updated; HTTPS valid
- [ ] Legacy `*.html` redirects tested
- [ ] `/studio` login tested with production `STUDIO_SECRET`
- [ ] Lighthouse run on production URL ([`LIGHTHOUSE.md`](./LIGHTHOUSE.md))
