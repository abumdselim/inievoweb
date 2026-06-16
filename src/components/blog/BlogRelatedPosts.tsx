import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { CONTAINER } from "@/lib/design-system";

export function BlogRelatedPosts({ currentSlug }: { currentSlug: string }) {
  const others = BLOG_POSTS.filter((post) => post.slug !== currentSlug);
  const related = others.length >= 4 ? others.slice(0, 4) : BLOG_POSTS.slice(0, 4);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-slate-200/80 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className={`${CONTAINER} max-w-7xl`}>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#137ece] mb-4">
          Continue reading
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-10 sm:mb-12">
          More from Insights
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {related.map((post) => (
            <BlogPostCard key={post.slug} post={post} compact />
          ))}
        </div>
        <div className="mt-10 sm:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#137ece] font-bold text-sm hover:opacity-80 transition-opacity"
          >
            View all articles
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
