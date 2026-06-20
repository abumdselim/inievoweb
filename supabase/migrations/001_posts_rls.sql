-- =============================================================================
-- P4-T1 — Row Level Security for public.posts
-- Portfolio: Abu Md. Selim (selimc.tech)
--
-- Apply manually in Supabase Dashboard → SQL Editor, or via Supabase CLI:
--   supabase db push
--
-- Security model (P4-T2+):
--   • Public blog (anon key, client + Next.js RSC): SELECT published rows only
--   • Studio CMS writes: Next.js Route Handlers / Server Actions with
--     SUPABASE_SERVICE_ROLE_KEY (bypasses RLS — never expose to browser)
--   • Legacy studio.html anon writes: BLOCKED after this migration
--
-- Do NOT add INSERT/UPDATE/DELETE policies for anon or authenticated roles.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Inferred schema (from studio.html, blog.html, web/lib/blog/posts.ts)
-- Confirm against Table Editor before applying if your project differs.
--
--   id               uuid PRIMARY KEY DEFAULT gen_random_uuid()
--   title            text NOT NULL
--   slug             text NOT NULL UNIQUE (recommended)
--   content          text          -- HTML from Tiptap
--   excerpt          text
--   category         text
--   tags             text[]        -- or jsonb array
--   cover_image      text          -- Cloudinary URL
--   meta_title       text
--   meta_description text
--   reading_time     integer
--   status           text NOT NULL -- 'draft' | 'published'
--   published_at     timestamptz
--   updated_at       timestamptz   -- studio list sort
--   created_at       timestamptz   -- typical Supabase default
--
-- Public read columns (blog): slug, title, excerpt, category, published_at,
--   cover_image, tags, reading_time (+ content, meta_* on detail page)
--
-- Studio operations (legacy — insecure; replaced in P4-T2+):
--   SELECT all rows (incl. drafts)     → service role only after RLS
--   SELECT by id (full row)            → service role only for drafts
--   INSERT / PATCH / DELETE            → service role only after RLS
-- -----------------------------------------------------------------------------

-- Idempotent: remove prior policy names if re-running
DROP POLICY IF EXISTS "Public read published posts" ON public.posts;
DROP POLICY IF EXISTS "posts_public_select_published" ON public.posts;

-- Enable RLS (default deny when no policy matches)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Force RLS even for table owner (optional hardening; service_role still bypasses)
ALTER TABLE public.posts FORCE ROW LEVEL SECURITY;

-- Anon + authenticated: read published posts only
CREATE POLICY "Public read published posts"
  ON public.posts
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Defense in depth: revoke direct writes from API roles.
-- RLS already denies writes without policies; this blocks accidental GRANTs.
REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON public.posts FROM anon, authenticated;

-- Ensure SELECT is still grantable (Supabase defaults usually include this)
GRANT SELECT ON public.posts TO anon, authenticated;

-- -----------------------------------------------------------------------------
-- service_role: bypasses RLS by default in Supabase — used by createServiceClient()
-- in web/lib/supabase/server.ts for Studio CRUD (P4-T4).
--
-- No write policies for anon/authenticated = studio.html anon key cannot mutate posts.
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
-- Verification (run as anon in SQL Editor is not possible; use REST or app):
--
--   -- Should return rows (published only):
--   GET /rest/v1/posts?status=eq.published
--   Authorization: Bearer <anon_key>
--
--   -- Should return [] or 403 depending on client (drafts hidden):
--   GET /rest/v1/posts?status=eq.draft
--
--   -- Should fail (RLS + no INSERT policy):
--   POST /rest/v1/posts  body: {"title":"x","slug":"x","status":"draft"}
--
-- After applying: legacy studio.html will lose draft list + write access until
-- Next.js /studio uses server-side auth + service role (P4-T2 through P4-T4).
-- -----------------------------------------------------------------------------
