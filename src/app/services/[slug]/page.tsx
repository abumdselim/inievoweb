import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { IndustryLandingView } from "@/components/industries/IndustrySections";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { getServiceLanding, SERVICE_SLUGS } from "@/lib/service-landings";
import { HERO_PY, CONTAINER } from "@/lib/design-system";
import { pageMetadata, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceLandingJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!getServiceLanding(slug)) {
    return { title: SITE_NAME };
  }
  return pageMetadata(`/services/${slug}`);
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const landing = getServiceLanding(slug);
  if (!landing) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceLandingJsonLd(landing.slug, landing.name, landing.hero_subtitle),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: landing.name, path: `/services/${landing.slug}` },
          ]),
        ]}
      />
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="services" overlayClass="bg-[#137ece]/80" sectionClass={`bg-[#137ece] ${HERO_PY} px-4 lg:px-8`}>
          <div className={`relative z-10 ${CONTAINER}`}>
            <Link href="/services" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
              <InievoIcon name="arrow_left" size={16} className="text-white/90" />
              <span className="text-white/90 font-semibold text-sm">All services</span>
            </Link>
            <div className="text-center">
              <p className="text-sm font-bold text-blue-100 tracking-[0.25em] mb-4">{landing.hero_eyebrow}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
                {landing.hero_title}
              </h1>
              <p className="text-blue-50 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">{landing.hero_subtitle}</p>
            </div>
          </div>
        </PageHeroBand>

        <IndustryLandingView landing={landing} />
      </main>
      <MegaFooter />
    </>
  );
}
