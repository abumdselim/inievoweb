# Supabase RLS — `posts` table

P4-T1 foundation for the Studio CMS migration. This document describes Row Level Security for blog content and how to apply it in Supabase.

## Security goal

The legacy `studio.html` page uses the **public anon key** in the browser for INSERT, UPDATE, and DELETE. Anyone who opens DevTools can copy that key and modify posts. RLS closes that hole:

| Role | SELECT | INSERT / UPDATE / DELETE |
|------|--------|---------------------------|
| `anon` (public blog) | Published rows only (`status = 'published'`) | **Denied** |
| `authenticated` | Published rows only | **Denied** |
| `service_role` (Next.js server) | All rows (bypasses RLS) | All operations (bypasses RLS) |

The Next.js public blog (`web/lib/blog/posts.ts`) already filters with `.eq("status", "published")`. RLS enforces the same rule at the database layer so a leaked anon key cannot read drafts or mutate data.

Studio authoring (P4-T2+) will **not** use the anon key for writes. Route handlers will call `createServiceClient()` from `web/lib/supabase/server.ts` with `SUPABASE_SERVICE_ROLE_KEY` after verifying a `STUDIO_SECRET` session.

## `posts` schema (inferred)

Derived from `studio.html`, `blog.html`, and `web/lib/blog/types.ts`:

| Column | Type (expected) | Notes |
|--------|-----------------|-------|
| `id` | `uuid` | Primary key |
| `title` | `text` | Required |
| `slug` | `text` | Unique; used in `/blog/[slug]` |
| `content` | `text` | HTML from Tiptap |
| `excerpt` | `text` | Card blurb |
| `category` | `text` | Filter tabs on `/blog` |
| `tags` | `text[]` | Post tags |
| `cover_image` | `text` | Cloudinary URL |
| `meta_title` | `text` | SEO override |
| `meta_description` | `text` | SEO override |
| `reading_time` | `integer` | Minutes |
| `status` | `text` | `'draft'` or `'published'` |
| `published_at` | `timestamptz` | Set on first publish |
| `updated_at` | `timestamptz` | Studio sidebar sort |
| `created_at` | `timestamptz` | Typical default |

Compare your Supabase **Table Editor** to this list before running the migration.

## Policy summary

1. **Enable RLS** on `public.posts` (with `FORCE ROW LEVEL SECURITY`).
2. **Policy `Public read published posts`**: `SELECT` for `anon` and `authenticated` where `status = 'published'`.
3. **No write policies** for `anon` or `authenticated` — inserts, updates, and deletes are denied.
4. **`REVOKE INSERT, UPDATE, DELETE`** on `posts` from `anon` and `authenticated` (defense in depth).
5. **`service_role`** continues to bypass RLS (Supabase default) for Studio API routes.

Source SQL: [`supabase/migrations/001_posts_rls.sql`](../../supabase/migrations/001_posts_rls.sql)

## How to apply in Supabase Dashboard

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **SQL Editor** → **New query**.
3. Paste the contents of `supabase/migrations/001_posts_rls.sql`.
4. Run the query. Expect success with no errors.
5. Confirm under **Authentication → Policies** (or **Table Editor → posts → RLS**):
   - RLS enabled on `posts`
   - One SELECT policy: `Public read published posts`

### Optional: Supabase CLI

If you use the CLI linked to this project:

```bash
supabase link --project-ref <your-project-ref>
supabase db push
```

## Environment variables

### Public blog (already used in P3)

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Client + server | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client + server | Public reads via RLS |

Set in `web/.env.local` (see `web/.env.example`).

### Studio (P4-T2+ — not required for blog-only deploy)

| Variable | Scope | Purpose |
|----------|-------|---------|
| `SUPABASE_SERVICE_ROLE_KEY` | **Server only** | Studio CRUD; bypasses RLS |
| `STUDIO_SECRET` | **Server only** | Login passphrase replacement |
| `STUDIO_SESSION_SECRET` | **Server only** | Signs httpOnly session cookie |

Never prefix service role or studio secrets with `NEXT_PUBLIC_`.

## Verification checklist

After applying SQL:

1. **Published read (anon)** — In Table Editor or REST with anon key:
   - `GET /rest/v1/posts?status=eq.published` → returns published posts.
2. **Draft hidden (anon)** — `GET /rest/v1/posts?status=eq.draft` → empty or no rows visible to anon.
3. **Write blocked (anon)** — `POST /rest/v1/posts` with anon key → error (RLS violation or permission denied).
4. **Next.js blog** — `npm run dev` in `web/`; `/blog` and `/blog/[slug]` still load published content.
5. **Legacy studio** — `studio.html` draft list and saves **will break** until P4-T2+ `/studio` ships (expected).

## Impact on legacy files

| File | After RLS |
|------|-----------|
| `blog.html` | Still works (published SELECT only) |
| `studio.html` | Loses draft reads and all writes via anon key |
| `web/` blog | Unchanged (already published-only) |

`studio.html` hardcoded secrets removed in P4-T5 — file is a redirect stub to `/studio`.

## Next steps (P4-T2)

- Implement `/studio` login with `STUDIO_SECRET` + httpOnly session (no client-side Supabase writes).
- P4-T4: CRUD API routes using `createServiceClient()`.
