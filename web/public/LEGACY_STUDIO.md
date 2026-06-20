# Legacy studio redirect

Root `studio.html` (repo root, not this folder) was **deprecated in P4-T5**.

- **Do not** restore client-side `PASSPHRASE`, Supabase anon keys, or direct REST writes in HTML.
- Authoring lives at **`/studio`** in the Next.js app (`web/app/studio/`).
- When the site is deployed from `web/` on Vercel, `/studio` is the canonical CMS route.
- If legacy static hosting still serves `studio.html`, that file now redirects to `/studio` with no secrets.

See `IMPLEMENTATION_GUIDE.md` §P4 and `web/docs/SUPABASE_RLS.md`.
