import styles from "@/app/blog/blog.module.css";

function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonImg}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonLineFull}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonLineMedium}`} />
    </div>
  );
}

export default function BlogListingSkeleton() {
  return (
    <div className={styles.blogListing}>
      <div className={styles.blogListingGrid}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
