"use client";

import Link from "next/link";
import { useState } from "react";
import { PORTFOLIO_FILTERS, PROJECTS } from "@/lib/constants";
import { CONTAINER, REVEAL, TYPE_LABEL } from "@/lib/design-system";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { SafeImage } from "@/components/ui/SafeImage";

type Project = (typeof PROJECTS)[number];

function ProjectTag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-[#137ece]/10 border border-[#137ece]/25 text-[11px] font-semibold text-[#137ece] tracking-wide">
      {label}
    </span>
  );
}

function MetricBadge({ metric, dark = false }: { metric: { value: string; label: string }; dark?: boolean }) {
  const boxClass = dark
    ? "px-3 py-2 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm"
    : "px-3 py-2 rounded-lg bg-[#137ece]/8 border border-[#137ece]/20";
  const valueClass = dark ? "text-sm font-extrabold text-white" : "text-sm font-extrabold text-[#137ece]";
  const labelClass = dark
    ? "text-[10px] font-semibold text-slate-300 uppercase tracking-wide mt-0.5"
    : "text-[10px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5";
  return (
    <div className={boxClass}>
      <p className={valueClass}>{metric.value}</p>
      <p className={labelClass}>{metric.label}</p>
    </div>
  );
}

function ViewCaseStudyLink({ slug, dark = false }: { slug: string; dark?: boolean }) {
  const textClass = dark
    ? "text-[#137ece] font-bold text-sm group-hover:text-[#5eb8f0] transition-colors"
    : "text-[#137ece] font-bold text-sm";
  return (
    <Link href={`/projects/${slug}`} className={`inline-flex items-center gap-2 mt-5 hover:opacity-80 transition-opacity ${textClass}`}>
      View case study
      <InievoIcon name="arrow_right" size={16} className={textClass} />
    </Link>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="no-underline block w-full h-full group">
      <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-7 hover:border-[#137ece]/50 hover:shadow-[0_0_30px_rgba(19,126,206,0.15)] transition-all duration-500 w-full h-full flex flex-col">
        <p className="font-display text-[10px] font-bold text-[#137ece] uppercase tracking-wider mb-4">
          {project.category.toUpperCase()}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.slice(0, 2).map((m) => (
            <MetricBadge key={m.label} metric={m} dark />
          ))}
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mt-4 mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.card_description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <ProjectTag key={t} label={t} />
          ))}
        </div>
        <ViewCaseStudyLink slug={project.slug} dark />
      </div>
    </Link>
  );
}

function CorporateMetricCell({ metric }: { metric: { value: string; label: string } }) {
  return (
    <div className="min-w-0 flex-1 px-4 py-3 border border-slate-200/90 rounded-xl bg-slate-50/80">
      <p className="font-display text-sm font-extrabold text-[#137ece] leading-tight">{metric.value}</p>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 mt-1 leading-snug">{metric.label}</p>
    </div>
  );
}

export function HomeFeaturedCaseCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="no-underline block w-full h-full group">
      <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#137ece]/30 hover:shadow-lg hover:shadow-slate-200/80">
        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <div className="mb-4">
            <span className="inline-flex rounded-md border border-[#137ece]/20 bg-[#137ece]/5 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#137ece]">
              {project.category}
            </span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2">Client engagement</p>
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#137ece] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-semibold leading-snug text-slate-700">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.outcome_headline}</p>

          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#137ece]" aria-hidden />
                {outcome}
              </li>
            ))}
          </ul>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {project.metrics.slice(0, 2).map((m) => (
              <CorporateMetricCell key={m.label} metric={m} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#137ece] group-hover:gap-3 transition-all">
            Read case study
            <InievoIcon name="arrow_right" size={16} />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <div className={`${CONTAINER} ${REVEAL} mb-12`}>
        <p className={`${TYPE_LABEL} text-center mb-5`}>FILTER BY CATEGORY</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PORTFOLIO_FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(label)}
              className={
                filter === label
                  ? "font-display px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] rounded-full bg-[#137ece] text-white border border-[#137ece] shadow-md shadow-[#137ece]/20 transition-all duration-300 cursor-pointer"
                  : "font-display px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] rounded-full bg-white text-slate-600 border border-slate-200 hover:border-[#137ece]/40 hover:text-[#137ece] transition-all duration-300 cursor-pointer"
              }
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${REVEAL}`}>
        {filtered.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="no-underline group block">
            <article className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-[#137ece]/30 transition-all duration-500 h-full">
              <div className="overflow-hidden relative">
                <SafeImage
                  src={p.thumbnail}
                  alt={p.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-slate-100">
                  <p className="font-display text-[10px] font-bold text-[#137ece] uppercase tracking-wider">{p.category.toUpperCase()}</p>
                </div>
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="font-display text-xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-[#137ece] transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed mb-4">{p.card_description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.metrics.slice(0, 2).map((m) => (
                    <MetricBadge key={m.label} metric={m} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.slice(0, 3).map((t) => (
                    <ProjectTag key={t} label={t} />
                  ))}
                </div>
                <ViewCaseStudyLink slug={p.slug} />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export function CaseStudyBlocks({ filter = "All" }: { filter?: string }) {
  const blocks = PROJECTS.filter(
    (p) => p.public_name_ok && (filter === "All" || p.category === filter)
  );

  return (
    <div className="space-y-24 lg:space-y-32">
      {blocks.map((p) => {
        const textOrder = p.reverse ? "lg:order-2" : "lg:order-1";
        const visualOrder = p.reverse ? "lg:order-1" : "lg:order-2";
        return (
          <div key={p.slug} className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div className={`flex flex-col justify-center ${textOrder}`}>
              <p className={`${TYPE_LABEL} mb-4`}>{p.category.toUpperCase()}</p>
              <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{p.title}</h3>
              <p className="font-body text-lg font-semibold text-[#137ece] mb-6 leading-snug">{p.subtitle}</p>
              <p className="font-body text-base text-slate-600 leading-relaxed mb-6">{p.case_study_description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.metrics.slice(0, 2).map((m) => (
                  <MetricBadge key={m.label} metric={m} />
                ))}
              </div>
              <ul className="space-y-3 mb-6">
                {p.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#137ece] shrink-0 mt-2" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <ProjectTag key={t} label={t} />
                ))}
              </div>
              <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-2 text-[#137ece] font-bold text-sm hover:opacity-80 transition-opacity">
                View full case study
                <InievoIcon name="arrow_right" size={16} />
              </Link>
            </div>
            <div className={`relative ${visualOrder}`}>
              <SafeImage
                src={p.case_study_image}
                alt={p.title}
                width={800}
                height={500}
                className="w-full rounded-2xl shadow-2xl shadow-slate-200/80 border border-slate-200/80"
              />
              <div className="absolute -inset-3 rounded-3xl bg-[#137ece]/8 blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
