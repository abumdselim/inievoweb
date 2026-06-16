import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IndustryDetailSection } from "@/components/industries/IndustrySections";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { INDUSTRIES_PAGE_COPY, INDUSTRY_LANDINGS, INDUSTRY_SLUGS } from "@/lib/industry-landings";
import { HERO_PY, SECTION_PY, CONTAINER, BTN_PRIMARY } from "@/lib/design-system";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/industries");

const landings = INDUSTRY_SLUGS.map((slug) => INDUSTRY_LANDINGS[slug]);

export default function IndustriesPage() {
  const copy = INDUSTRIES_PAGE_COPY;

  return (
    <>
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="services" overlayClass="bg-slate-950/85" sectionClass={`bg-slate-950 ${HERO_PY} px-4 lg:px-8`}>
          <div className={`relative z-10 ${CONTAINER} text-center`}>
            <p className="text-sm font-bold text-[#137ece] tracking-[0.25em] mb-4">{copy.hero_eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              {copy.hero_title}
            </h1>
            <p className="text-slate-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">{copy.hero_subtitle}</p>
          </div>
        </PageHeroBand>

        <section className={`w-full bg-white ${SECTION_PY} border-b border-slate-100`}>
          <div className={CONTAINER}>
            <SectionHeader label={copy.section_label} title={copy.section_title} subtitle={copy.section_subtitle} />
            <nav aria-label="Industry sections" className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2">
              {landings.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`#${ind.slug}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${ind.theme.border} ${ind.theme.bg} text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
                >
                  <InievoIcon name={ind.icon} size={16} className={ind.theme.icon_color} />
                  {ind.category}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {landings.map((landing, i) => (
          <IndustryDetailSection key={landing.slug} landing={landing} index={i} showCaseStudy={!!landing.case_study_slug} />
        ))}

        <section className="w-full bg-slate-900">
          <div className={`${CONTAINER} py-16 lg:py-20 text-center`}>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              {copy.cta.title}
            </h2>
            <p className="font-body text-slate-300 text-lg text-center max-w-xl mx-auto mb-8 leading-relaxed">
              {copy.cta.subtitle}
            </p>
            <Link href={copy.cta.href} className={`${BTN_PRIMARY} inline-flex`}>
              {copy.cta.button}
            </Link>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
