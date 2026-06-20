import { createServiceClient } from "@/lib/supabase/server";
import type {
  PostStatus,
  StudioPostDetail,
  StudioPostListItem,
} from "@/lib/studio/types";

const LIST_COLUMNS = "id,title,slug,status,updated_at,category";

const DETAIL_COLUMNS =
  "id,title,slug,status,updated_at,category,content,excerpt,tags,cover_image,meta_title,meta_description,reading_time,published_at,created_at";

export type { StudioPostDetail };

export type StudioPostWriteInput = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  cover_image: string;
  meta_title: string;
  meta_description: string;
  status: PostStatus;
};

export function computeReadingTime(content: string): number {
  return Math.ceil(
    content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length / 200,
  );
}

function buildDbPayload(
  input: StudioPostWriteInput,
  existingPublishedAt?: string | null,
) {
  const payload: Record<string, unknown> = {
    title: input.title.trim() || "Untitled",
    slug: input.slug.trim(),
    content: input.content,
    excerpt: input.excerpt.trim(),
    category: input.category.trim(),
    tags: input.tags,
    cover_image: input.cover_image.trim(),
    meta_title: input.meta_title.trim(),
    meta_description: input.meta_description.trim(),
    reading_time: computeReadingTime(input.content),
    status: input.status,
  };

  if (input.status === "published" && !existingPublishedAt) {
    payload.published_at = new Date().toISOString();
  } else if (input.status === "draft") {
    payload.published_at = null;
  }

  return payload;
}

export async function listStudioPosts(): Promise<{
  posts: StudioPostListItem[];
  error?: string;
}> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .select(LIST_COLUMNS)
    .order("updated_at", { ascending: false });

  if (error) {
    return { posts: [], error: error.message };
  }

  return { posts: (data ?? []) as StudioPostListItem[] };
}

export async function getStudioPost(
  id: string,
): Promise<{ post: StudioPostDetail | null; error?: string }> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .select(DETAIL_COLUMNS)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return { post: null, error: error.message };
  }

  return { post: (data as StudioPostDetail | null) ?? null };
}

export async function createStudioPost(
  input: StudioPostWriteInput,
): Promise<{ post: StudioPostDetail | null; error?: string }> {
  const supabase = createServiceClient();
  const payload = buildDbPayload(input, null);
  const { data, error } = await supabase
    .from("posts")
    .insert(payload)
    .select(DETAIL_COLUMNS)
    .single();

  if (error) {
    return { post: null, error: error.message };
  }

  return { post: data as StudioPostDetail };
}

export async function updateStudioPost(
  id: string,
  input: StudioPostWriteInput,
): Promise<{ post: StudioPostDetail | null; error?: string }> {
  const existing = await getStudioPost(id);
  if (existing.error) {
    return { post: null, error: existing.error };
  }
  if (!existing.post) {
    return { post: null, error: "Post not found." };
  }

  const supabase = createServiceClient();
  const payload = buildDbPayload(input, existing.post.published_at);
  const { data, error } = await supabase
    .from("posts")
    .update(payload)
    .eq("id", id)
    .select(DETAIL_COLUMNS)
    .single();

  if (error) {
    return { post: null, error: error.message };
  }

  return { post: data as StudioPostDetail };
}

export async function deleteStudioPost(
  id: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = createServiceClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

export function parseStudioPostWriteInput(
  body: unknown,
): StudioPostWriteInput | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const record = body as Record<string, unknown>;
  const status = record.status;
  if (status !== "draft" && status !== "published") {
    return null;
  }

  const tags = record.tags;
  if (
    tags !== undefined &&
    (!Array.isArray(tags) || tags.some((tag) => typeof tag !== "string"))
  ) {
    return null;
  }

  const requiredStrings = [
    "title",
    "slug",
    "content",
    "excerpt",
    "category",
    "cover_image",
    "meta_title",
    "meta_description",
  ] as const;

  for (const key of requiredStrings) {
    if (typeof record[key] !== "string") {
      return null;
    }
  }

  return {
    title: record.title as string,
    slug: record.slug as string,
    content: record.content as string,
    excerpt: record.excerpt as string,
    category: record.category as string,
    tags: (tags as string[] | undefined) ?? [],
    cover_image: record.cover_image as string,
    meta_title: record.meta_title as string,
    meta_description: record.meta_description as string,
    status,
  };
}
