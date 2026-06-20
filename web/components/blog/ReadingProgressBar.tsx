"use client";

import { useEffect, useState } from "react";
import styles from "@/app/blog/[slug]/blog-post.module.css";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setProgress(nextProgress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={styles.progressBar}
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
