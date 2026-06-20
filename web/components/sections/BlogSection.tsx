import Link from "next/link";
import { formatBlogDate } from "@/lib/blog/format";
import type { BlogPost } from "@/lib/blog/types";

type BlogSectionProps = {
  posts: BlogPost[];
};

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="blog" id="blog">
      <div className="section-wrap">
        <div className="section-heading">
          <div className="section-label">BLOG</div>
          <h2>Thoughts &amp; Insights</h2>
        </div>
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>No posts yet.</p>
            <Link href="/blog" className="blog-read">
              View blog →
            </Link>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-meta">
                  <span className="blog-date">
                    {formatBlogDate(post.published_at)}
                  </span>
                  {post.category ? (
                    <span className="blog-category">{post.category}</span>
                  ) : null}
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt ?? ""}</p>
                <Link href={`/blog/${post.slug}`} className="blog-read">
                  Read →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
