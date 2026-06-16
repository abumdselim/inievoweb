import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CompanyGlancePanel } from "@/components/ui/CompanyGlancePanel";
import {
  COMPANY_CULTURE,
  COMPANY_MISSION,
  COMPANY_PAGE_COPY,
  COMPANY_TIMELINE,
  COMPANY_VALUES,
  COMPANY_VISION,
  FOUNDED_YEAR,
} from "@/lib/constants";
import { COMPANY_CREDIBILITY_SIGNALS, CORE_OFFERINGS } from "@/lib/constants-supplement";
import {
  HERO_PY,
  SECTION_PY,
  CONTAINER,
  REVEAL,
  REVEAL_DELAY_1,
  REVEAL_DELAY_2,
  REVEAL_DELAY_3,
  BTN_PRIMARY,
  TYPE_LABEL,
} from "@/lib/design-system";
import { pageMetadata } from "@/lib/seo";
import { InievoIcon } from "@/components/ui/InievoIcon";

export const metadata = pageMetadata("/company");

const copy = COMPANY_PAGE_COPY;

function CredibilitySignals() {
  const delays = [REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 sm:mb-12">
      {COMPANY_CREDIBILITY_SIGNALS.map((signal, i) => (
        <div key={signal.label} className={`flex flex-col items-center sm:items-start ${delays[i % delays.length]}`}>
          <div className="w-11 h-11 rounded-xl bg-[#137ece]/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
            <InievoIcon name={signal.icon} size={20} className="text-[#137ece]" />
          </div>
          <p className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight text-center sm:text-left">{signal.value}</p>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1 text-center sm:text-left">{signal.label}</p>
        </div>
      ))}
    </div>
  );
}

function ExpertiseGrid() {
  const accentMap: Record<string, string> = {
    layers: "from-blue-500/10 to-blue-600/5 border-blue-200/60",
    cloud: "from-sky-500/10 to-sky-600/5 border-sky-200/60",
    brain: "from-orange-500/10 to-orange-600/5 border-orange-200/60",
    palette: "from-violet-500/10 to-violet-600/5 border-violet-200/60",
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 ${REVEAL_DELAY_1}`}>
      {CORE_OFFERINGS.map((offering) => (
        <div
          key={offering.title}
          className={`group relative bg-gradient-to-br ${accentMap[offering.icon] ?? "from-slate-50 to-white border-slate-200/60"} border rounded-2xl p-8 lg:p-9 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full`}
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <InievoIcon name={offering.icon} size={22} className="text-[#137ece]" />
            </div>
            <div>
              <p className="text-[11px] font-mono font-bold text-[#137ece]/70 tracking-wider mb-1">{offering.bento_number}</p>
              <h3 className="font-display text-xl font-extrabold text-slate-900 tracking-tight">{offering.title}</h3>
            </div>
          </div>
          <p className="font-body text-sm lg:text-base text-slate-600 leading-relaxed mb-5">{offering.summary}</p>
          <ul className="space-y-2.5 mb-6">
            {offering.bullets.slice(0, 3).map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-600">
                <InievoIcon name="check" size={14} className="text-[#137ece] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{offering.stack}</p>
        </div>
      ))}
    </div>
  );
}

export default function CompanyPage() {
  const heroSubtitle = copy.hero.subtitle.replace("{year}", String(FOUNDED_YEAR));
  const timelineSubtitle = copy.timeline.subtitle.replace("{year}", String(FOUNDED_YEAR));

  return (
    <>
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="company" overlayClass="bg-slate-900/80" sectionClass={`bg-slate-900 ${HERO_PY} px-4 lg:px-8`}>
          <p className="relative z-10 text-sm font-bold text-[#137ece] tracking-[0.25em] mb-6 text-center">{copy.hero.label}</p>
          <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center leading-tight max-w-4xl mx-auto">
            {copy.hero.title}
          </h1>
          <p className="relative z-10 text-slate-300 text-lg mt-8 max-w-3xl mx-auto text-center leading-relaxed">
            {heroSubtitle}
          </p>
        </PageHeroBand>

        <section id="who-we-are" className={`w-full bg-white ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label={copy.intro.label}
              title={copy.intro.title}
              subtitle={copy.intro.subtitle}
            />
            <div className={`max-w-4xl mx-auto ${REVEAL_DELAY_1}`}>
              <blockquote className="relative border-l-4 border-[#137ece] pl-6 py-2 mb-10">
                <p className="font-display text-xl sm:text-2xl font-bold text-slate-800 leading-snug tracking-tight italic">
                  &ldquo;{copy.intro.quote}&rdquo;
                </p>
              </blockquote>
              <div className="space-y-6">
                {copy.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="font-body text-base lg:text-lg text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label={copy.expertise.label}
              title={copy.expertise.title}
              subtitle={copy.expertise.subtitle}
            />
            <ExpertiseGrid />
            <div className={`mt-10 text-center ${REVEAL_DELAY_2}`}>
              <Link href="/services" className="inline-flex items-center gap-2 text-[#137ece] font-bold text-sm hover:opacity-80 transition-opacity">
                Explore all services
                <InievoIcon name="arrow_right" size={16} className="text-[#137ece]" />
              </Link>
            </div>
          </div>
        </section>

        <section id="mission-vision" className={`w-full bg-white ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label={copy.mission_vision.label}
              title={copy.mission_vision.title}
              subtitle={copy.mission_vision.subtitle}
            />
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${REVEAL_DELAY_1}`}>
              <div className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-sm h-full">
                <p className={`${TYPE_LABEL} mb-4`}>MISSION</p>
                <p className="font-body text-base lg:text-lg text-slate-600 leading-relaxed">{COMPANY_MISSION}</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 lg:p-10 h-full">
                <p className={`${TYPE_LABEL} mb-4`}>VISION</p>
                <p className="font-body text-base lg:text-lg text-slate-600 leading-relaxed">{COMPANY_VISION}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="values" className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label={copy.values.label}
              title={copy.values.title}
              subtitle={copy.values.subtitle}
            />
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${REVEAL_DELAY_1}`}>
              {COMPANY_VALUES.map((v) => (
                <div key={v.title} className="bg-white border border-slate-100 rounded-2xl p-6 lg:p-7 hover:-translate-y-1 hover:shadow-md hover:border-[#137ece]/20 transition-all duration-300 h-full">
                  <h3 className="font-display text-lg font-extrabold text-slate-900 tracking-tight mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className={`w-full bg-white ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label={copy.timeline.label}
              title={copy.timeline.title}
              subtitle={timelineSubtitle}
            />
            <div className={`max-w-2xl mx-auto ${REVEAL}`}>
              {COMPANY_TIMELINE.map((entry, i) => (
                <div key={`${entry.year}-${entry.title}`} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#137ece] ring-4 ring-[#137ece]/15" />
                  {i < COMPANY_TIMELINE.length - 1 && (
                    <div className="absolute left-[7px] top-8 bottom-0 w-px bg-slate-200" />
                  )}
                  <div className="pb-10">
                    <p className="font-display text-sm font-extrabold text-[#137ece] tracking-wider mb-2">{entry.year}</p>
                    <h3 className="font-display text-lg font-extrabold text-slate-900 tracking-tight mb-2">{entry.title}</h3>
                    <p className="font-body text-sm text-slate-600 leading-relaxed">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div className="flex flex-col justify-center text-left order-2 lg:order-1">
              <p className={`${TYPE_LABEL} mb-4`}>INIEVO LABS</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                We Build What We Believe In — Then Bring That Discipline to You
              </h2>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6">
                Inievo Labs is our research arm — where we ship Community and EdTech products for real users before recommending the same patterns to clients. The Chattala connects neighborhoods across Chattogram. PUC PRO gives students an AI-assisted document workspace built for exam-season traffic.
              </p>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
                Operating our own platforms keeps us honest about performance, security, and maintainability — the same standards we hold every client engagement to, from cloud-native architectures to premium digital experiences built to last.
              </p>
              <Link href="/projects" className="inline-flex items-center gap-2 text-[#137ece] font-bold text-sm hover:opacity-80 transition-opacity w-fit">
                See what we&apos;ve built
                <InievoIcon name="arrow_right" size={16} className="text-[#137ece]" />
              </Link>
            </div>
            <div className="w-full order-1 lg:order-2">
              <CompanyGlancePanel />
            </div>
          </div>
        </section>

        <section id="culture" className={`w-full bg-slate-900 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader label={COMPANY_CULTURE.label} title={COMPANY_CULTURE.title} subtitle={COMPANY_CULTURE.description} dark />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_CULTURE.pillars.map((p) => (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 h-full hover:bg-white/[0.07] transition-colors duration-300">
                  <h3 className="font-display text-lg font-extrabold text-white tracking-tight mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-slate-300 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="credibility" className={`w-full bg-white ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label={copy.credibility.label}
              title={copy.credibility.title}
              subtitle={copy.credibility.subtitle}
            />
            <CredibilitySignals />
          </div>
        </section>

        <section className="w-full bg-slate-950">
          <div className={`${CONTAINER} py-16 lg:py-20 text-center`}>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">{copy.cta.title}</h2>
            <p className="font-body text-slate-300 text-lg text-center max-w-xl mx-auto mb-8 leading-relaxed">
              {copy.cta.subtitle}
            </p>
            <Link href="/contact" className={`${BTN_PRIMARY} inline-flex`}>{copy.cta.button}</Link>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
