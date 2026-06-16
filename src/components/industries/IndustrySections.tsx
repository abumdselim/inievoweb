import Link from "next/link";
import { FeaturedProjectCard } from "@/components/portfolio/PortfolioGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { PROJECTS_BY_SLUG } from "@/lib/constants";
import type { IndustryLanding } from "@/lib/industry-landings";
import { BTN_PRIMARY, CONTAINER, REVEAL, REVEAL_DELAY_1, SECTION_PY } from "@/lib/design-system";

export function IndustryDetailSection({
  landing,
  index,
  showCaseStudy = false,
}: {
  landing: IndustryLanding;
  index: number;
  showCaseStudy?: boolean;
}) {
  const caseStudy = landing.case_study_slug ? PROJECTS_BY_SLUG[landing.case_study_slug] : undefined;
  const altBg = index % 2 === 1;

  return (
    <section id={landing.slug} className={`w-full ${altBg ? "bg-slate-50" : "bg-white"} ${SECTION_PY}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 mb-12">
          <div className="shrink-0">
            <div className={`w-16 h-16 rounded-2xl ${landing.theme.icon_bg} flex items-center justify-center`}>
              <InievoIcon name={landing.icon} size={28} className={landing.theme.icon_color} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-[#137ece] tracking-[0.2em] mb-3">{landing.hero_eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {landing.name}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">{landing.overview}</p>
            {landing.overview_extra && (
              <p className="text-slate-600 text-base leading-relaxed">{landing.overview_extra}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-4">Challenges We Address</h3>
            <ul className="space-y-3">
              {landing.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <InievoIcon name="circle_check" size={16} className="text-[#137ece] shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-4">What You Get</h3>
            <ul className="space-y-3">
              {landing.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <InievoIcon name="check" size={16} className="text-[#137ece] shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeader
          label="SOLUTIONS"
          title={`What We Build for ${landing.category}`}
          subtitle={landing.solutions_subtitle}
        />
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10 ${REVEAL_DELAY_1}`}>
          {landing.solutions.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#137ece]/20 transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[#137ece]/10 flex items-center justify-center mb-5">
                <InievoIcon name={s.icon} size={22} className="text-[#137ece]" />
              </div>
              <h4 className="font-display text-lg font-extrabold text-slate-900 tracking-tight mb-3">{s.title}</h4>
              <p className="font-body text-sm text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href={`/industries/${landing.slug}`} className={`${BTN_PRIMARY} inline-flex`}>
            Explore {landing.category}
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-[#137ece] hover:opacity-80 transition-opacity">
            Discuss your project →
          </Link>
        </div>

        {showCaseStudy && caseStudy && (
          <div className={`mt-16 pt-12 border-t border-slate-200 ${REVEAL}`}>
            <SectionHeader
              label="PROOF"
              title="Engineering in Practice"
              subtitle={`See how we applied ${landing.name} expertise on a live product.`}
            />
            <div className="max-w-2xl">
              <FeaturedProjectCard project={caseStudy} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function IndustryLandingView({ landing }: { landing: IndustryLanding }) {
  const caseStudy = landing.case_study_slug ? PROJECTS_BY_SLUG[landing.case_study_slug] : undefined;

  return (
    <>
      <section id="solutions" className={`w-full bg-white ${SECTION_PY}`}>
        <div className={CONTAINER}>
          <div className="max-w-3xl mb-12">
            <p className="text-slate-600 text-base leading-relaxed mb-4">{landing.overview}</p>
            {landing.overview_extra && (
              <p className="text-slate-600 text-base leading-relaxed">{landing.overview_extra}</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-4">Challenges We Address</h3>
              <ul className="space-y-3">
                {landing.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <InievoIcon name="circle_check" size={16} className="text-[#137ece] shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-4">What You Get</h3>
              <ul className="space-y-3">
                {landing.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <InievoIcon name="check" size={16} className="text-[#137ece] shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <SectionHeader
            label="SOLUTIONS"
            title={`What We Build for ${landing.name}`}
            subtitle={landing.solutions_subtitle}
          />
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 ${REVEAL_DELAY_1}`}>
            {landing.solutions.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#137ece]/20 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#137ece]/10 flex items-center justify-center mb-5">
                  <InievoIcon name={s.icon} size={22} className="text-[#137ece]" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-slate-900 tracking-tight mb-3">{s.title}</h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {caseStudy && (
        <section id="case-study" className={`w-full bg-slate-900 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label="PROOF"
              title="Engineering in Practice"
              subtitle={`See how we applied ${landing.name} expertise on a live product.`}
              dark
            />
            <div className={`max-w-2xl mx-auto ${REVEAL}`}>
              <FeaturedProjectCard project={caseStudy} />
            </div>
          </div>
        </section>
      )}

      <section className="w-full bg-slate-950">
        <div className={`${CONTAINER} py-16 lg:py-20 text-center`}>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {landing.cta_title}
          </h2>
          <p className="font-body text-slate-300 text-lg text-center max-w-xl mx-auto mb-8 leading-relaxed">
            {landing.cta_subtitle}
          </p>
          <Link href="/contact" className={`${BTN_PRIMARY} inline-flex`}>
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  );
}
