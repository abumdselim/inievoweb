"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/lib/constants-supplement";
import { REVEAL_DELAY_3 } from "@/lib/design-system";
import { InievoIcon } from "@/components/ui/InievoIcon";

const PROCESS_ICONS: Record<string, string> = {
  search: "search",
  code: "code",
  rocket: "rocket",
  scale: "scale",
};

const STEP_ACCENTS = [
  {
    bar: "from-orange-400 via-[#f97316] to-orange-500",
    node: "bg-[#f97316]",
    nodeGlow: "shadow-orange-400/50",
    ring: "ring-orange-200/90",
    label: "text-orange-600",
    chip: "bg-orange-50 text-orange-700 border-orange-100",
    rail: "from-orange-400 to-[#f97316]",
  },
  {
    bar: "from-sky-400 via-[#137ece] to-[#0e6ab5]",
    node: "bg-[#137ece]",
    nodeGlow: "shadow-[#137ece]/45",
    ring: "ring-sky-200/90",
    label: "text-[#137ece]",
    chip: "bg-sky-50 text-[#137ece] border-sky-100",
    rail: "from-sky-400 to-[#137ece]",
  },
  {
    bar: "from-slate-600 via-slate-800 to-slate-900",
    node: "bg-slate-800",
    nodeGlow: "shadow-slate-500/40",
    ring: "ring-slate-200/90",
    label: "text-slate-700",
    chip: "bg-slate-100 text-slate-700 border-slate-200",
    rail: "from-slate-500 to-slate-800",
  },
  {
    bar: "from-sky-400 via-[#137ece] to-cyan-500",
    node: "bg-[#137ece]",
    nodeGlow: "shadow-[#137ece]/45",
    ring: "ring-sky-200/90",
    label: "text-[#137ece]",
    chip: "bg-sky-50 text-[#137ece] border-sky-100",
    rail: "from-[#137ece] to-cyan-400",
  },
] as const;

const METHODOLOGY_PILLARS = [
  { icon: "layers", label: "Agile Sprints" },
  { icon: "check", label: "Full Transparency" },
  { icon: "rocket", label: "Production-Ready" },
  { icon: "scale", label: "Built to Scale" },
] as const;

const PHASE_TAGS = ["Foundation", "Delivery", "Delivery", "Growth"] as const;

function ProcessProgressRail({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const progress =
    PROCESS_STEPS.length <= 1 ? 0 : (activeIndex / (PROCESS_STEPS.length - 1)) * 100;

  return (
    <div className="mb-10 sm:mb-12 lg:mb-14">
      <div className="relative hidden sm:block">
        <div className="absolute left-[6%] right-[6%] top-5 h-px bg-slate-200/90" aria-hidden />
        <div
          className="absolute left-[6%] top-5 h-px bg-gradient-to-r from-[#137ece] via-sky-400 to-cyan-400 inievo-process-rail-flow -translate-y-1/2 transition-[width] duration-700 ease-out"
          style={{ width: `${progress * 0.88}%` }}
          aria-hidden
        />
        <ol className="relative grid grid-cols-4 gap-2">
          {PROCESS_STEPS.map((step, i) => {
            const accent = STEP_ACCENTS[i];
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            const phase = String(i + 1).padStart(2, "0");

            return (
              <li key={step.title} className="flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137ece]/50 focus-visible:ring-offset-2 ${
                    isActive
                      ? `${accent.node} text-white shadow-lg ${accent.nodeGlow} scale-110 inievo-process-node-active`
                      : isPast
                        ? `${accent.node} text-white/95 shadow-md opacity-90`
                        : "bg-white border-2 border-slate-200 text-slate-500 hover:border-[#137ece]/40 hover:text-[#137ece]"
                  }`}
                  aria-label={`Phase ${phase}: ${step.title}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  {phase}
                </button>
                <p
                  className={`mt-3 hidden lg:block text-[10px] font-bold uppercase tracking-[0.14em] leading-snug max-w-[9rem] transition-colors duration-300 ${
                    isActive ? accent.label : "text-slate-400"
                  }`}
                >
                  {step.title}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="sm:hidden flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm px-3 py-2.5 shadow-sm">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Phase
        </span>
        <div className="flex items-center gap-1.5">
          {PROCESS_STEPS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-7 bg-[#137ece]" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to phase ${i + 1}`}
            />
          ))}
        </div>
        <span className="font-mono text-xs font-bold text-[#137ece]">
          {String(activeIndex + 1).padStart(2, "0")}/{String(PROCESS_STEPS.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function ProcessStepCard({
  step,
  index,
  accent,
  isActive,
  onActivate,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  accent: (typeof STEP_ACCENTS)[number];
  isActive: boolean;
  onActivate: () => void;
}) {
  const phase = String(index + 1).padStart(2, "0");

  return (
    <article
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`group relative h-full rounded-2xl border overflow-hidden bg-white transition-all duration-500 inievo-process-card ${
        isActive
          ? "border-[#137ece]/35 shadow-xl shadow-[#137ece]/10 -translate-y-1"
          : "border-slate-200/90 shadow-sm shadow-slate-200/30 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300/80"
      }`}
    >
      <div className={`absolute inset-0 inievo-hero-grid opacity-[0.14] pointer-events-none`} aria-hidden />
      <div className="absolute inset-x-0 top-0 h-1 overflow-hidden" aria-hidden>
        <div className={`h-full w-full bg-gradient-to-r ${accent.bar} inievo-process-bar-shine relative`} />
      </div>

      <div className="relative flex items-center justify-between gap-3 border-b border-slate-100/90 bg-slate-900/[0.03] px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-xs font-bold text-slate-400 tracking-[0.2em]">{phase}</span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${accent.label}`}>
            Phase {phase}
          </span>
        </div>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${accent.chip}`}>
          {PHASE_TAGS[index]}
        </span>
      </div>

      <div className="relative p-4 sm:p-5 lg:p-6">
        <div className="flex items-start gap-3.5 mb-4">
          <div
            className={`relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${step.icon_bg} shadow-lg transition-transform duration-500 group-hover:scale-105 ${
              isActive ? "inievo-process-icon-pulse" : ""
            }`}
          >
            {isActive ? (
              <span className={`absolute inset-0 rounded-xl ${accent.node} opacity-25 inievo-process-ring`} aria-hidden />
            ) : null}
            <InievoIcon
              name={PROCESS_ICONS[step.icon] ?? step.icon}
              size={22}
              className="relative z-10 text-white"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3
              className={`font-display text-lg sm:text-xl font-extrabold tracking-tight leading-snug transition-colors duration-300 ${
                isActive ? "text-[#137ece]" : "text-slate-900 group-hover:text-[#137ece]"
              }`}
            >
              {step.title}
            </h3>
            <p className={`mt-1 text-sm font-semibold leading-snug ${accent.label}`}>{step.tagline}</p>
          </div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4 sm:mb-5">{step.description}</p>

        <div className="rounded-xl border border-slate-100/90 bg-white/70 backdrop-blur-[2px] p-3.5 sm:p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#137ece] inievo-process-dot-pulse" aria-hidden />
            Key Deliverables
          </p>
          <ul className="space-y-2">
            {step.bullets.map((bullet, bulletIndex) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-slate-700 leading-snug inievo-process-bullet"
                style={{ animationDelay: `${bulletIndex * 0.08}s` }}
              >
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${accent.chip}`}>
                  <InievoIcon name="check" size={11} className={accent.label} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(index);
          });
        },
        { threshold: 0.45, rootMargin: "-8% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative">
      <ProcessProgressRail activeIndex={activeIndex} onSelect={setActiveIndex} />

      <div className="relative">
        <div
          className="pointer-events-none absolute left-5 sm:left-6 top-4 bottom-8 w-px bg-slate-200/80 xl:hidden"
          aria-hidden
        >
          <div className="h-full w-full inievo-process-line-vertical" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-5 lg:gap-6 items-stretch">
          {PROCESS_STEPS.map((step, i) => {
            const accent = STEP_ACCENTS[i];
            const isActive = activeIndex === i;

            return (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative inievo-reveal inievo-process-step"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`hidden xl:block absolute top-[4.5rem] -right-3 w-6 h-px bg-gradient-to-r from-[#137ece]/40 to-transparent z-10 pointer-events-none ${
                    i === PROCESS_STEPS.length - 1 ? "hidden" : ""
                  }`}
                  aria-hidden
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#137ece] inievo-process-dot-pulse" />
                </div>

                <div className="relative flex gap-4 sm:gap-0 pl-12 sm:pl-0">
                  <div className="absolute left-0 top-8 z-10 sm:hidden" aria-hidden>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold text-white shadow-lg transition-all duration-500 ${
                        isActive
                          ? `${accent.node} ${accent.nodeGlow} scale-110 inievo-process-node-active`
                          : "bg-white border-2 border-slate-200 text-slate-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <ProcessStepCard
                      step={step}
                      index={i}
                      accent={accent}
                      isActive={isActive}
                      onActivate={() => setActiveIndex(i)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`mt-12 sm:mt-14 lg:mt-16 ${REVEAL_DELAY_3}`}>
        <div className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm shadow-sm overflow-hidden inievo-reveal inievo-process-pillars">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
            {METHODOLOGY_PILLARS.map((pillar, i) => (
              <div
                key={pillar.label}
                className="group flex flex-col items-center justify-center gap-2.5 px-4 py-5 sm:py-6 text-center transition-colors duration-300 hover:bg-sky-50/60"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 border border-sky-100/80 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#137ece]/25">
                  <InievoIcon name={pillar.icon} size={18} className="text-[#137ece]" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 group-hover:text-[#137ece] transition-colors">
                  {pillar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
