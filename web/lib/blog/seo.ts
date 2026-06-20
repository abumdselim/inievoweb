import type { Metadata } from "next";
import type { BlogPostDetail } from "@/lib/blog/types";

const SITE_URL = "https://selimc.tech";
const AUTHOR_NAME = "Abu Md. Selim";

export function getBlogPostSeoTitle(post: BlogPostDetail): string {
  return post.meta_title?.trim() || post.title;
}

export function getBlogPostSeoDescription(
  post: BlogPostDetail,
): string | undefined {
  return (
    post.meta_description?.trim() || post.excerpt?.trim() || undefined
  );
}

export function buildBlogPostMetadata(
  post: BlogPostDetail,
  slug: string,
): Metadata {
  const title = getBlogPostSeoTitle(post);
  const description = getBlogPostSeoDescription(post);
  const images = post.cover_image
    ? [{ url: post.cover_image, alt: post.title }]
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      url: `/blog/${slug}`,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export function buildBlogPostingJsonLd(
  post: BlogPostDetail,
  slug: string,
): Record<string, unknown> {
  const title = getBlogPostSeoTitle(post);
  const description = getBlogPostSeoDescription(post);
  const url = `${SITE_URL}/blog/${slug}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    url,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  if (description) {
    jsonLd.description = description;
  }
  if (post.cover_image) {
    jsonLd.image = post.cover_image;
  }
  if (post.published_at) {
    jsonLd.datePublished = post.published_at;
  }

  return jsonLd;
}
