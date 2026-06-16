import Link from "next/link";
import {
  AI_EXCELLENCE,
  CLIENT_LOGOS,
  COMPANY_METRICS,
  FAQ_ITEMS,
  FOUNDED_YEAR,
  HOMEPAGE_COPY,
  HQ_ADDRESS,
  INDUSTRIES,
  TECH_STACK_MARQUEE,
  TRUST_BAR,
} from "@/lib/constants";
import {
  AUDIENCE_TRACKS,
  CORE_OFFERINGS,
} from "@/lib/constants-supplement";
import { serviceHrefForOffering } from "@/lib/service-landings";
import {
  BTN_PRIMARY,
  BTN_SECONDARY,
  CONTAINER,
  REVEAL,
  REVEAL_DELAY_1,
  REVEAL_DELAY_2,
  REVEAL_DELAY_3,
  SECTION_PY,
  TYPE_LABEL,
  TYPE_SECTION,
  TYPE_SECTION_SUB,
} from "@/lib/design-system";
import { TECH_BADGE_MAP, techLogoFallback } from "@/lib/generated-assets";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactHub } from "@/components/home/ContactHub";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { AiExcellenceCardMotion } from "@/components/home/AiExcellenceCardMotion";
import { CaseStudiesCarousel } from "@/components/home/CaseStudiesCarousel";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BLOG_POSTS } from "@/lib/blog-posts";

export function ClientLogoMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section id="partners" className="w-full bg-white border-y border-slate-100 py-12 lg:py-14 overflow-hidden">
      <div className={`${CONTAINER} ${REVEAL} mb-8 text-center`}>
        <p className={TYPE_LABEL}>{TRUST_BAR.eyebrow}</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="inievo-marquee-track inievo-client-marquee-track gap-12 sm:gap-16 px-4">
          {logos.map((logo, i) => (
            <div key={`${logo.slug}-${i}`} className="inievo-logo-item flex items-center gap-3 px-4">
              <SafeImage src={logo.src} alt={logo.name} fallback={logo.fallback} width={120} height={40} className="h-8 w-9 sm:h-9 sm:w-9 shrink-0 object-contain" />
              <span className="font-display text-sm sm:text-[15px] font-bold text-slate-800 tracking-tight whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesBentoGrid() {
  const copy = HOMEPAGE_COPY.capabilities;
  const iconMap: Record<string, string> = { layers: "layers", cloud: "cloud", brain: "brain", palette: "palette" };
  return (
    <section id="capabilities" className="w-full bg-slate-50 pt-14 pb-24 sm:pt-16 lg:pt-20 lg:pb-32">
      <div className={`${CONTAINER} ${REVEAL}`}>
        <SectionHeader label={copy.label} title={copy.title} subtitle={copy.subtitle} centered={false} />
        <Link href="/services" className="inline-flex -mt-10 mb-14 hover:opacity-80 transition-opacity items-center gap-2">
          <span className="text-[#137ece] font-bold text-sm">{copy.cta}</span>
          <InievoIcon name="arrow_right" size={16} className="text-[#137ece]" />
        </Link>
      </div>
      <div className={`${CONTAINER} grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-stretch ${REVEAL_DELAY_1}`}>
        {CORE_OFFERINGS.map((o) => (
          <Link key={o.title} href={serviceHrefForOffering(o)} className="no-underline h-full block group">
            <div className="relative h-full rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-100 bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <InievoIcon name={iconMap[o.icon] ?? "layers"} size={22} className={o.bento_accent ?? "text-[#137ece]"} />
                <span className="text-[11px] font-mono font-bold text-slate-400">{o.bento_number}</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#137ece] transition-colors line-clamp-2">{o.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{o.bento_description}</p>
              <p className="text-xs font-semibold text-[#137ece]">{o.bento_roi}</p>
              <InievoIcon name="arrow_right" size={16} className="absolute bottom-5 right-5 text-[#137ece] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function IndustriesSection() {
  const copy = HOMEPAGE_COPY.industries;
  const delays = [REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3];
  return (
    <section id="industries" className={`w-full bg-white ${SECTION_PY}`}>
      <div className={CONTAINER}>
        <SectionHeader label={copy.label} title={copy.title} subtitle={copy.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6 items-stretch">
          {INDUSTRIES.map((ind, i) => {
            const inner = (
              <div className={`h-full ${ind.theme.bg} border ${ind.theme.border} rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-start gap-4 sm:gap-5 ${"href" in ind && ind.href ? "cursor-pointer" : ""}`}>
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${ind.theme.icon_bg} flex items-center justify-center shrink-0`}>
                  <InievoIcon name={ind.icon} size={22} className={ind.theme.icon_color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-1.5 sm:mb-2 leading-snug">{ind.name}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{ind.description}</p>
                </div>
              </div>
            );
            return (
              <div key={ind.name} className={delays[i % 4]}>
                {"href" in ind && ind.href ? (
                  <Link href={ind.href} className="no-underline block h-full w-full">{inner}</Link>
                ) : (
                  inner
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href={copy.cta_href ?? "/contact"} className={`${BTN_PRIMARY} inline-flex mt-10`}>{copy.cta}</Link>
        </div>
      </div>
    </section>
  );
}

export function AiExcellenceSection() {
  const ai = AI_EXCELLENCE;
  const delays = [REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3];
  return (
    <section id="ai-excellence" className="relative w-full bg-gradient-to-br from-[#1a95e8] via-[#137ece] to-[#0e6ab5] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 inievo-section-grid pointer-events-none" aria-hidden />
      <div className="absolute inset-0 inievo-section-grid-vignette pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="absolute -top-24 right-0 w-[420px] h-[280px] rounded-full bg-sky-200/25 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-[360px] h-[240px] rounded-full bg-cyan-200/20 blur-[90px] pointer-events-none" />
      <div className={`relative z-10 ${CONTAINER}`}>
        <SectionHeader
          label={ai.label}
          title={ai.title}
          subtitle={ai.subtitle}
          dark
          labelClass="font-body text-[11px] font-bold uppercase tracking-[0.28em] text-[#facc15] mb-4 text-center mx-auto"
          subtitleClass="font-body text-lg lg:text-xl text-blue-50/95 leading-relaxed max-w-2xl mx-auto text-center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ai.pillars.map((p, i) => (
            <div
              key={p.title}
              className={`${delays[i % 4]} relative overflow-hidden bg-white border border-slate-200/90 rounded-2xl p-6 lg:p-7 hover:border-[#137ece]/35 hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 h-full`}
            >
              <div className="absolute top-5 right-5">
                <AiExcellenceCardMotion title={p.title} />
              </div>
              <div className="flex items-end gap-0 mb-2 pr-16">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#137ece] leading-none tracking-tight">{p.metric_value}</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#137ece]/85 leading-none self-start mt-1">{p.metric_suffix}</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">{p.metric_label}</p>
              <p className="text-base font-extrabold text-slate-900 tracking-tight mb-2">{p.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustMetricCell({
  metric,
  delayClass,
}: {
  metric: (typeof COMPANY_METRICS)[number];
  delayClass: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-7 lg:py-8 inievo-counter-cell ${delayClass}`}
    >
      <span
        className="font-display text-3xl sm:text-[2rem] lg:text-4xl font-extrabold tracking-tight text-[#137ece] inievo-counter"
        data-counter-target={String(metric.target)}
        data-counter-suffix={metric.suffix}
        data-counter-prefix=""
        data-counter-decimals="0"
      >
        0
      </span>
      <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#137ece]/80 text-center leading-snug max-w-[11rem]">
        {metric.label}
      </p>
    </div>
  );
}

function TrustMetricsStrip() {
  const delays = [REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3];
  return (
    <div className={REVEAL_DELAY_2}>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200">
          {COMPANY_METRICS.map((m, i) => (
            <TrustMetricCell key={m.label} metric={m} delayClass={delays[i % delays.length]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CompanyCredibilitySection() {
  const copy = HOMEPAGE_COPY.company;
  return (
    <section id="company" className="w-full bg-white pt-16 lg:pt-20 pb-24 lg:pb-32">
      <div className={CONTAINER}>
        <div className={`max-w-3xl ${REVEAL}`}>
          <SectionHeader
            label={copy.label}
            title={copy.title_template.replace("{year}", String(FOUNDED_YEAR))}
            subtitle={copy.subtitle_template.replace("{year}", String(FOUNDED_YEAR)).replace("{location}", HQ_ADDRESS)}
            centered={false}
          />
          <Link href="/company" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity mt-2">
            <span className="text-[#137ece] font-bold text-sm">Explore our story</span>
            <InievoIcon name="arrow_right" size={16} className="text-[#137ece]" />
          </Link>
        </div>
        <div className="relative z-20 pt-8 sm:pt-10 lg:pt-12">
          <TrustMetricsStrip />
        </div>
      </div>
    </section>
  );
}

export function TechStackMarquee() {
  const copy = HOMEPAGE_COPY.tech_stack;
  const rowSize = Math.floor(TECH_STACK_MARQUEE.length / 2);
  const row1 = TECH_STACK_MARQUEE.slice(0, rowSize);
  const row2 = TECH_STACK_MARQUEE.slice(rowSize);
  const renderRow = (items: string[], reverse = false) => {
    const doubled = [...items, ...items];
    return (
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className={`inievo-tech-marquee-track items-center py-2 ${reverse ? "inievo-tech-marquee-reverse" : ""}`}>
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="inievo-tech-logo-item shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-7">
              <SafeImage src={TECH_BADGE_MAP[name] ?? ""} alt={`${name} logo`} fallback={techLogoFallback(name)} width={44} height={44} className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 object-contain" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="tech-stack" className="w-full bg-white pb-24 lg:pb-32">
      <div className="w-full bg-gradient-to-b from-[#0b5a9a] to-[#083d6b] pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className={`${CONTAINER} ${REVEAL}`}>
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
            labelClass="font-body text-[11px] font-bold uppercase tracking-[0.28em] text-sky-200/90 mb-4 text-center mx-auto"
            titleClass="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.025em] leading-tight text-[#facc15] mb-5 text-center mx-auto"
            subtitleClass="font-body text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto text-center"
          />
        </div>
      </div>
      <div className={`${CONTAINER} relative py-4 sm:py-5 space-y-3`}>
        {renderRow(row1)}
        {renderRow(row2, true)}
      </div>
    </section>
  );
}

export function EngineeringProcess() {
  const copy = HOMEPAGE_COPY.process;
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 inievo-hero-grid opacity-[0.2] pointer-events-none" aria-hidden />
      <div className="absolute inset-0 inievo-section-grid opacity-[0.04] pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80 pointer-events-none"
        aria-hidden
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#137ece]/20 to-transparent" />
      <div className="absolute -top-32 right-0 w-[min(480px,90vw)] h-[280px] rounded-full bg-sky-100/45 blur-[120px] pointer-events-none inievo-process-ambient" />
      <div className="absolute -bottom-24 -left-16 w-[min(400px,80vw)] h-[260px] rounded-full bg-orange-50/45 blur-[100px] pointer-events-none inievo-process-ambient" />

      <div className={`relative z-10 ${CONTAINER}`}>
        <SectionHeader label={copy.label} title={copy.title} subtitle={copy.subtitle} />
        <ProcessTimeline />
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const copy = HOMEPAGE_COPY.case_studies;
  return (
    <section id="case-studies" className="relative w-full overflow-hidden border-y border-slate-200/80 bg-slate-50 py-24 lg:py-32">
      <div className="absolute inset-0 inievo-hero-grid opacity-[0.38] pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/95 to-slate-100/90 pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#137ece]/20 to-transparent" />

      <div className={`relative z-10 ${CONTAINER}`}>
        <div className={`max-w-3xl ${REVEAL}`}>
          <p className={`${TYPE_LABEL} mb-4 text-left`}>{copy.label}</p>
          <h2 className={`${TYPE_SECTION} mb-5 text-left`}>{copy.title}</h2>
          <p className={`${TYPE_SECTION_SUB} max-w-xl text-left`}>{copy.subtitle}</p>
        </div>

        <CaseStudiesCarousel />

        <div className={`mt-10 flex justify-start ${REVEAL_DELAY_1}`}>
          <Link href={copy.cta_href ?? "/projects"} className={`${BTN_SECONDARY} w-full sm:w-auto`}>
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AudienceTracksSection() {
  return (
    <section id="audiences" className={`w-full bg-slate-50 ${SECTION_PY}`}>
      <div className={CONTAINER}>
        <SectionHeader label="Our Specialized Services" title="Built for Three Buyer Tracks" subtitle="After you have seen our proof, choose the track that matches your buyer — each with the services Inievo typically delivers." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {AUDIENCE_TRACKS.map((track, i) => (
            <div key={track.id} className={[REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2][i % 3]}>
              <div className="h-full bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-[#137ece]/20 transition-all duration-300">
                <p className="text-[11px] font-bold text-[#137ece] uppercase tracking-[0.2em] mb-3">{track.audience}</p>
                <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">{track.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{track.description}</p>
                <ul className="space-y-2 mb-5">
                  {track.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                      <InievoIcon name="check" size={14} className="text-[#137ece] shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-t border-slate-100 pt-4">{track.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const copy = HOMEPAGE_COPY.faq;
  return (
    <section id="faq" className={`w-full bg-slate-50 ${SECTION_PY}`}>
      <div className={`${CONTAINER} max-w-5xl`}>
        <SectionHeader label={copy.label} title={copy.title} subtitle={copy.subtitle} />
        <FaqAccordion items={FAQ_ITEMS.map(([q, a]) => ({ question: q, answer: a }))} />
      </div>
    </section>
  );
}

export function InsightsBlog() {
  const copy = HOMEPAGE_COPY.insights;
  const featuredPosts = BLOG_POSTS.slice(0, 4);

  return (
    <section id="insights" className={`w-full bg-slate-50 ${SECTION_PY}`}>
      <div className={CONTAINER}>
        <SectionHeader label={copy.label} title={copy.title} subtitle={copy.subtitle} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {featuredPosts.map((post, i) => (
            <div key={post.slug} className={[REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3][i % 4]}>
              <BlogPostCard post={post} compact variant="insights" />
            </div>
          ))}
        </div>
        <div className={`mt-10 sm:mt-12 flex justify-center ${REVEAL_DELAY_2}`}>
          <Link
            href={copy.read_more_href}
            className="font-display inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto px-8 py-4 text-[15px] font-bold tracking-wide text-black bg-[#facc15] rounded-xl shadow-lg shadow-[#facc15]/20 hover:bg-[#fbbf24] hover:shadow-xl hover:shadow-[#facc15]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            {copy.read_more}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const copy = HOMEPAGE_COPY.final_cta;
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-slate-50 border-t border-slate-200/80">
      <div className="absolute inset-0 inievo-section-grid opacity-[0.035] pointer-events-none" />
      <div className={`relative z-10 ${CONTAINER} py-16 sm:py-20 lg:py-28`}>
        <div className={`max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14 ${REVEAL}`}>
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#137ece] mb-4">LET&apos;S BUILD TOGETHER</p>
          <h2 className="font-display text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#137ece] tracking-[-0.03em]">
            {copy.title}
          </h2>
          <p className="text-slate-900 text-[15px] sm:text-lg mt-5 sm:mt-6 leading-[1.7] max-w-2xl mx-auto">
            {copy.subtitle}
          </p>
        </div>
        <div className={REVEAL_DELAY_1}>
          <ContactHub />
        </div>
      </div>
    </section>
  );
}
