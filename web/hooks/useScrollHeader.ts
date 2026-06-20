"use client";

import { useEffect, useState } from "react";

const HERO_SCROLL_THRESHOLD = 0.6;

export function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const hero = document.getElementById("home");
      if (!hero) {
        setScrolled(false);
        return;
      }

      const heroHeight = hero.offsetHeight;
      setScrolled(window.scrollY > heroHeight * HERO_SCROLL_THRESHOLD);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return scrolled;
}
