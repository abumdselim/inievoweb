import styles from "@/app/blog/blog.module.css";

export default function BlogPageHero() {
  return (
    <div className={styles.blogPageHero}>
      <div className={styles.label}>WRITING</div>
      <h1>Thoughts &amp; Insights</h1>
      <p>
        Ideas on software engineering, system design, entrepreneurship, and the
        craft of building things that matter.
      </p>
    </div>
  );
}
