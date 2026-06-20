export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string | null;
  category?: string | null;
  published_at?: string | null;
  cover_image?: string | null;
  tags?: string[] | null;
  reading_time?: number | null;
};

export type BlogPostDetail = BlogPost & {
  content?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
};

export type FetchPostsResult = {
  posts: BlogPost[];
  configured: boolean;
  error?: string;
};
