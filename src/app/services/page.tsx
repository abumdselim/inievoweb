import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DetailedServices } from "@/components/services/DetailedServices";
import { EngineeringProcess, TechStackMarquee } from "@/components/home/HomeSections";
import {
  COLLABORATION_MODELS,
  ENTERPRISE_SERVICES,
  SERVICES_PAGE_COPY,
  TOP_SERVICES,
} from "@/lib/constants";
import { CORE_OFFERINGS, type CoreOffering } from "@/lib/constants-supplement";
import { serviceHrefForOffering, SERVICE_LANDINGS } from "@/lib/service-landings";
import {
  HERO_PY,
  SECTION_PY,
  CONTAINER,
  REVEAL,
  REVEAL_DELAY_1,
  BTN_PRIMARY,
  TYPE_LABEL,
} from "@/lib/design-system";
import { OFFERING_BANNER_MAP, SERVICE_ICON_MAP } from "@/lib/generated-assets";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd } from "@/lib/json-ld";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { SafeImage } from "@/components/ui/SafeImage";

export const metadata = pageMetadata("/services");

function OfferingCard({ offering }: { offering: CoreOffering }) {
  const iconKey = offering.asset_icon ?? offering.icon;
  const href = serviceHrefForOffering(offering);
  return (
    <Link href={href} className="no-underline block h-full group">
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 lg:p-12 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-500 overflow-hidden h-full">
      <div className="overflow-hidden rounded-t-3xl -mx-10 -mt-10 lg:-mx-12 lg:-mt-12 mb-8 h-44 bg-gradient-to-br from-[#137ece]/15 to-slate-100">
        <SafeImage src={OFFERING_BANNER_MAP[iconKey] ?? OFFERING_BANNER_MAP.layers} alt={offering.title} width={800} height={176} className="h-44 w-full object-cover" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <SafeImage src={SERVICE_ICON_MAP[iconKey] ?? SERVICE_ICON_MAP.layers} alt="" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover shrink-0" />
        <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">{offering.title}</h3>
      </div>
      <div className="w-14 h-1 bg-[#f97316] rounded-full mb-6" />
      <p className="text-slate-600 text-base leading-relaxed mb-4">{offering.description}</p>
      <p className="text-sm font-semibold text-[#137ece] leading-snug mb-8">{offering.bento_roi}</p>
      <ul className="space-y-3">
        {offering.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
            <InievoIcon name="check" size={16} className="text-[#137ece] shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm font-bold text-[#137ece] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        Explore service
        <InievoIcon name="arrow_right" size={16} className="text-[#137ece]" />
      </p>
    </div>
    </Link>
  );
}

export default function ServicesPage() {
  const copy = SERVICES_PAGE_COPY;
  return (
    <>
      <JsonLd
        data={[
          professionalServiceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="services" overlayClass="bg-[#137ece]/75" sectionClass={`bg-[#137ece] ${HERO_PY} px-4 lg:px-8`}>
          <p className="relative z-10 text-sm font-bold text-blue-200 tracking-[0.25em] mb-6 text-center">WHAT WE DO</p>
          <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center leading-tight max-w-4xl mx-auto">
            Architecting Solutions for the Modern Enterprise.
          </h1>
          <p className="relative z-10 text-blue-50 text-lg mt-8 max-w-2xl mx-auto text-center leading-relaxed">
            We partner with ambitious organizations to deliver scalable architecture, rapid execution, and long-term engineering impact — built for speed today and growth tomorrow.
          </p>
        </PageHeroBand>

        <section id="core-offerings" className={`w-full bg-white ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader label="CORE OFFERINGS" title="End-to-End Engineering Capabilities" subtitle="The same four pillars that power our homepage — with the depth your technical evaluation requires." />
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${REVEAL_DELAY_1}`}>
              {CORE_OFFERINGS.map((o) => (
                <OfferingCard key={o.title} offering={o} />
              ))}
            </div>
            <div className={`mt-14 flex flex-wrap justify-center gap-3 ${REVEAL}`}>
              {Object.values(SERVICE_LANDINGS).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-[#137ece]/40 hover:text-[#137ece] transition-colors"
                >
                  {s.name}
                  <InievoIcon name="arrow_right" size={14} className="text-[#137ece]" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DetailedServices />

        <section id="engagement-models" className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader label={copy.collaboration.label} title={copy.collaboration.title} subtitle={copy.collaboration.subtitle} />
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${REVEAL}`}>
              {COLLABORATION_MODELS.map((m) => (
                <div key={m.title} className="bg-white border border-slate-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="font-extrabold text-slate-900 mb-3">{m.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service-catalog" className={`w-full bg-white ${SECTION_PY}`}>
          <div className={`${CONTAINER} ${REVEAL}`}>
            <SectionHeader label={copy.catalog.label} title={copy.catalog.title} subtitle={copy.catalog.subtitle} />
            <p className={`${TYPE_LABEL} mb-5`}>TOP SERVICES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {TOP_SERVICES.map((s) => (
                <div key={s.title} className="bg-white border border-slate-100 rounded-xl p-5 hover:border-[#137ece]/25 transition-colors duration-300 h-full">
                  <h4 className="font-display text-base font-bold text-slate-900 tracking-tight mb-2">{s.title}</h4>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
            <p className={`${TYPE_LABEL} mb-5`}>ENTERPRISE FOCUS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ENTERPRISE_SERVICES.map((s) => (
                <div key={s.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5 h-full">
                  <h4 className="font-display text-base font-bold text-slate-900 tracking-tight mb-2">{s.title}</h4>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EngineeringProcess />
        <TechStackMarquee />

        <section className="w-full bg-slate-900">
          <div className={`${CONTAINER} py-16 lg:py-20 text-center`}>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">{copy.cta.title}</h2>
            <p className="font-body text-slate-300 text-lg text-center max-w-xl mx-auto mb-8 leading-relaxed">{copy.cta.subtitle}</p>
            <Link href={copy.cta.href} className={`${BTN_PRIMARY} inline-flex`}>{copy.cta.button}</Link>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
