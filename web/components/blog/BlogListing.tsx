"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "@/app/blog/blog.module.css";
import { formatBlogDate } from "@/lib/blog/format";
import type { BlogPost } from "@/lib/blog/types";

type BlogListingProps = {
  posts: BlogPost[];
  configured: boolean;
  error?: string;
};

function BlogCard({ post }: { post: BlogPost }) {
  const tags = (post.tags ?? []).slice(0, 3);

  return (
    <Link href={`/blog/${post.slug}`} className={styles.blogListingCard}>
      <div className={styles.cardTop}>
        <span className={styles.cardCategory}>{post.category ?? ""}</span>
        <span className={styles.cardDate}>
          {formatBlogDate(post.published_at)}
        </span>
      </div>
      {post.cover_image ? (
        // eslint-disable-next-line @next/next/no-img-element -- cover URLs may come from any host
        <img
          className={styles.cardCover}
          src={post.cover_image}
          alt={post.title}
          loading="lazy"
        />
      ) : null}
      <h2>{post.title}</h2>
      <p>{post.excerpt ?? ""}</p>
      <div className={styles.cardFooter}>
        <div className={styles.cardTags}>
          {tags.map((tag) => (
            <span className={styles.cardTag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {post.reading_time ? (
          <span className={styles.cardReadTime}>
            {post.reading_time} min read
          </span>
        ) : null}
      </div>
    </Link>
  );
}

function EmptyState({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className={styles.blogEmpty}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default function BlogListing({
  posts,
  configured,
  error,
}: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () =>
      [
        ...new Set(
          posts.map((post) => post.category).filter(Boolean) as string[],
        ),
      ],
    [posts],
  );

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const showFilters = configured && !error && categories.length > 0;

  return (
    <>
      {showFilters ? (
        <div className={styles.blogFilters}>
          <button
            type="button"
            className={`${styles.filterBtn}${activeCategory === "all" ? ` ${styles.filterBtnActive}` : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn}${activeCategory === category ? ` ${styles.filterBtnActive}` : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.blogListing}>
        <div className={styles.blogListingGrid}>
          {!configured ? (
            <EmptyState
              title="Blog not connected yet"
              message="Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to web/.env.local to load published posts."
            />
          ) : error ? (
            <EmptyState
              title="Could not load posts."
              message="Please try again later."
            />
          ) : filteredPosts.length === 0 ? (
            <EmptyState
              title="No posts yet."
              message="Check back soon — thoughts are brewing."
            />
          ) : (
            filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
