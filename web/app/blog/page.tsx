import type { Metadata } from "next";
import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogListing from "@/components/blog/BlogListing";
import { fetchPublishedPosts } from "@/lib/blog/posts";

const BLOG_LISTING_TITLE = "Blog";
const BLOG_LISTING_DESCRIPTION =
  "Thoughts, research, and insights by Abu Md. Selim on software engineering, architecture, and entrepreneurship.";

export const metadata: Metadata = {
  title: BLOG_LISTING_TITLE,
  description: BLOG_LISTING_DESCRIPTION,
  openGraph: {
    title: BLOG_LISTING_TITLE,
    description: BLOG_LISTING_DESCRIPTION,
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_LISTING_TITLE,
    description: BLOG_LISTING_DESCRIPTION,
  },
};

/** Fetch posts at request time so Supabase env and published content stay current. */
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const { posts, configured, error } = await fetchPublishedPosts();

  return (
    <main>
      <BlogPageHero />
      <BlogListing posts={posts} configured={configured} error={error} />
    </main>
  );
}
