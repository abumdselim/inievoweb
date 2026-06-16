"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/constants";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { HomeFeaturedCaseCard } from "@/components/portfolio/PortfolioGrid";

export function CaseStudiesCarousel() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const count = PROJECTS.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;

    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) next();
      else prev();
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  return (
    <div className="mt-14 lg:mt-16 max-w-3xl">
      <div className="flex items-center gap-3 sm:gap-4">
        {count > 1 ? (
          <button
            type="button"
            onClick={prev}
            className="shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-[#137ece]/30 hover:text-[#137ece]"
            aria-label="Previous case study"
          >
            <InievoIcon name="arrow_left" size={18} />
          </button>
        ) : null}

        <div ref={carouselRef} className="min-w-0 flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
          >
            {PROJECTS.map((project) => (
              <div key={project.slug} className="w-full shrink-0">
                <HomeFeaturedCaseCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {count > 1 ? (
          <button
            type="button"
            onClick={next}
            className="shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-[#137ece]/30 hover:text-[#137ece]"
            aria-label="Next case study"
          >
            <InievoIcon name="arrow_right" size={18} />
          </button>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Case study slides">
          {PROJECTS.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setCurrent(i)}
              className="min-h-[36px] px-1 py-2 bg-transparent border-0 cursor-pointer flex items-center"
              aria-label={`Show ${project.title} case study`}
              aria-current={current === i ? "true" : undefined}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  current === i ? "w-6 bg-[#137ece]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
