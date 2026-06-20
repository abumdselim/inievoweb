import { hasPublicSupabaseConfig } from "@/lib/env";
import { createAnonClient } from "@/lib/supabase/server";
import type {
  BlogPost,
  BlogPostDetail,
  FetchPostsResult,
} from "@/lib/blog/types";

const POST_COLUMNS =
  "slug, title, excerpt, category, published_at, cover_image, tags, reading_time";

const POST_DETAIL_COLUMNS = `${POST_COLUMNS}, content, meta_title, meta_description`;

export async function fetchPublishedPosts(): Promise<FetchPostsResult> {
  if (!hasPublicSupabaseConfig()) {
    return { posts: [], configured: false };
  }

  try {
    const supabase = createAnonClient();
    const { data, error } = await supabase
      .from("posts")
      .select(POST_COLUMNS)
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      return {
        posts: [],
        configured: true,
        error: error.message,
      };
    }

    return {
      posts: (data ?? []) as BlogPost[],
      configured: true,
    };
  } catch {
    return {
      posts: [],
      configured: true,
      error: "Could not load posts.",
    };
  }
}

export async function getLatestPosts(limit: number): Promise<FetchPostsResult> {
  if (!hasPublicSupabaseConfig()) {
    return { posts: [], configured: false };
  }

  try {
    const supabase = createAnonClient();
    const { data, error } = await supabase
      .from("posts")
      .select(POST_COLUMNS)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) {
      return {
        posts: [],
        configured: true,
        error: error.message,
      };
    }

    return {
      posts: (data ?? []) as BlogPost[],
      configured: true,
    };
  } catch {
    return {
      posts: [],
      configured: true,
      error: "Could not load posts.",
    };
  }
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPostDetail | null> {
  if (!hasPublicSupabaseConfig()) {
    return null;
  }

  try {
    const supabase = createAnonClient();
    const { data, error } = await supabase
      .from("posts")
      .select(POST_DETAIL_COLUMNS)
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return data as BlogPostDetail;
  } catch {
    return null;
  }
}
