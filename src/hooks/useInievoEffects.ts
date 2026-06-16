"use client";

import { useEffect } from "react";

function animateCounter(el: HTMLElement) {
  if (el.dataset.counterDone) return;
  el.dataset.counterDone = "1";
  const target = parseFloat(el.dataset.counterTarget || "0");
  const suffix = el.dataset.counterSuffix || "";
  const prefix = el.dataset.counterPrefix || "";
  const decimals = parseInt(el.dataset.counterDecimals || "0", 10);
  const duration = 1800;
  let startTime: number | null = null;

  function step(ts: number) {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = target * eased;
    el.textContent = prefix + val.toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initNavScroll() {
  const nav = document.getElementById("site-navbar");
  if (!nav) return;
  if (nav.dataset.navMode === "solid") {
    nav.classList.remove("inievo-nav-scrolled");
    nav.style.removeProperty("--nav-bg-opacity");
    return;
  }
  if (nav.dataset.navMode !== "scroll") return;
  const scrollRange = 80;

  function onScroll() {
    const current = document.getElementById("site-navbar");
    if (!current || current.dataset.navMode !== "scroll") return;
    const t = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
    current.style.setProperty("--nav-bg-opacity", String(t));
    if (t > 0.05) current.classList.add("inievo-nav-scrolled");
    else current.classList.remove("inievo-nav-scrolled");
  }

  if (window.__inievoNavScrollHandler) {
    window.removeEventListener("scroll", window.__inievoNavScrollHandler);
  }
  window.__inievoNavScrollHandler = onScroll;
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

export function useInievoEffects() {
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".inievo-counter").forEach((el) => {
              animateCounter(el as HTMLElement);
            });
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("inievo-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    function observe() {
      document.querySelectorAll(".inievo-reveal").forEach((el) => revealObserver.observe(el));
      document.querySelectorAll(".inievo-counter-cell").forEach((el) => counterObserver.observe(el));
      initNavScroll();
    }

    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      revealObserver.disconnect();
      counterObserver.disconnect();
      if (window.__inievoNavScrollHandler) {
        window.removeEventListener("scroll", window.__inievoNavScrollHandler);
      }
    };
  }, []);
}

declare global {
  interface Window {
    __inievoNavScrollHandler?: () => void;
  }
}
