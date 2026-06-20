import type { StudioPostDetail, StudioPostDraft, StudioPostListItem } from "@/lib/studio/types";

export type StudioPostWritePayload = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  cover_image: string;
  meta_title: string;
  meta_description: string;
  status: StudioPostDraft["status"];
};

export function postDetailToDraft(post: StudioPostDetail): StudioPostDraft {
  return {
    id: post.id,
    title: post.title ?? "",
    content: post.content ?? "",
    category: post.category ?? "",
    tags: (post.tags ?? []).join(", "),
    excerpt: post.excerpt ?? "",
    slug: post.slug ?? "",
    coverImage: post.cover_image ?? "",
    seoTitle: post.meta_title ?? "",
    seoDescription: post.meta_description ?? "",
    status: post.status,
  };
}

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const data = (await response.json()) as T & { error?: string };
  if (!response.ok) {
    throw new Error(data.error ?? "Request failed.");
  }
  return data;
}

export async function fetchStudioPosts(): Promise<StudioPostListItem[]> {
  const response = await fetch("/api/studio/posts");
  const data = await parseJsonResponse<{ posts: StudioPostListItem[] }>(response);
  return data.posts;
}

export async function fetchStudioPost(id: string): Promise<StudioPostDetail> {
  const response = await fetch(`/api/studio/posts/${id}`);
  const data = await parseJsonResponse<{ post: StudioPostDetail }>(response);
  return data.post;
}

export async function createStudioPostApi(
  payload: StudioPostWritePayload,
): Promise<StudioPostDetail> {
  const response = await fetch("/api/studio/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await parseJsonResponse<{ post: StudioPostDetail }>(response);
  return data.post;
}

export async function updateStudioPostApi(
  id: string,
  payload: StudioPostWritePayload,
): Promise<StudioPostDetail> {
  const response = await fetch(`/api/studio/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await parseJsonResponse<{ post: StudioPostDetail }>(response);
  return data.post;
}

export async function deleteStudioPostApi(id: string): Promise<void> {
  const response = await fetch(`/api/studio/posts/${id}`, { method: "DELETE" });
  await parseJsonResponse<{ ok: boolean }>(response);
}
