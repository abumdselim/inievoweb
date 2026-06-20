import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import { formatBlogPostDate } from "@/lib/blog/format";
import { getPostBySlug } from "@/lib/blog/posts";
import {
  buildBlogPostMetadata,
  buildBlogPostingJsonLd,
} from "@/lib/blog/seo";
import styles from "./blog-post.module.css";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

/** Fetch post at request time so published content stays current. */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return buildBlogPostMetadata(post, slug);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const tags = post.tags ?? [];
  const jsonLd = buildBlogPostingJsonLd(post, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />
      <article>
        <div className={styles.postHero}>
          <div className={styles.postMeta}>
            {post.category ? (
              <>
                <span className={styles.postCategory}>{post.category}</span>
                <span className={styles.postDot}>·</span>
              </>
            ) : null}
            <span className={styles.postDate}>
              {formatBlogPostDate(post.published_at)}
            </span>
            {post.reading_time ? (
              <>
                <span className={styles.postDot}>·</span>
                <span className={styles.postReadTime}>
                  {post.reading_time} min read
                </span>
              </>
            ) : null}
          </div>
          <h1>{post.title}</h1>
          {post.excerpt ? (
            <p className={styles.postExcerpt}>{post.excerpt}</p>
          ) : null}
        </div>

        {post.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element -- cover URLs may come from any host
          <img
            className={styles.postCover}
            src={post.cover_image}
            alt={post.title}
            loading="lazy"
          />
        ) : null}

        {post.content ? (
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : null}

        {tags.length > 0 ? (
          <div className={styles.postTags}>
            {tags.map((tag) => (
              <span className={styles.postTag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className={styles.postNav}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to all posts
          </Link>
        </div>
      </article>
    </>
  );
}
