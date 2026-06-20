"use client";

import { useEffect, useState, type ReactNode } from "react";

const SCROLL_DOWN_FADE_THRESHOLD = 80;
const SIGNATURE_HIDE_THRESHOLD = 100;

type HeroScrollChromeProps = {
  signature: ReactNode;
};

export default function HeroScrollChrome({ signature }: HeroScrollChromeProps) {
  const [scrollDownVisible, setScrollDownVisible] = useState(true);
  const [signatureHidden, setSignatureHidden] = useState(false);

  useEffect(() => {
    const updateHeroScroll = () => {
      const scrollY = window.scrollY;
      setScrollDownVisible(scrollY <= SCROLL_DOWN_FADE_THRESHOLD);
      setSignatureHidden(scrollY > SIGNATURE_HIDE_THRESHOLD);
    };

    updateHeroScroll();
    window.addEventListener("scroll", updateHeroScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeroScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`signature-container${signatureHidden ? " hidden" : ""}`}
      >
        {signature}
      </div>
      <a
        href="#about"
        className="scroll-down"
        id="scrollDown"
        style={{ opacity: scrollDownVisible ? 1 : 0 }}
        aria-label="Scroll to about section"
      >
        <svg
          className="chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </>
  );
}
