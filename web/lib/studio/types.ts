export type PostStatus = "draft" | "published";

export type StudioPostListItem = {
  id: string;
  title: string;
  slug: string;
  status: PostStatus;
  category?: string | null;
  updated_at?: string | null;
};

export type StudioPostDraft = {
  id?: string;
  title: string;
  content: string;
  category: string;
  tags: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  seoTitle: string;
  seoDescription: string;
  status: PostStatus;
};

export type StudioPostDetail = {
  id: string;
  title: string;
  slug: string;
  status: PostStatus;
  updated_at?: string | null;
  category?: string | null;
  content?: string | null;
  excerpt?: string | null;
  tags?: string[] | null;
  cover_image?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  reading_time?: number | null;
  published_at?: string | null;
  created_at?: string | null;
};

export type SaveStatus = "ready" | "saving" | "saved";

export const EMPTY_DRAFT: StudioPostDraft = {
  title: "",
  content: "",
  category: "",
  tags: "",
  excerpt: "",
  slug: "",
  coverImage: "",
  seoTitle: "",
  seoDescription: "",
  status: "draft",
};
