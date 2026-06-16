import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { CaseStudyBlocks, PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { HERO_PY, SECTION_PY, CONTAINER, REVEAL } from "@/lib/design-system";
import { pageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = pageMetadata("/projects");

export default function ProjectsPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="projects" overlayClass="bg-slate-950/85" sectionClass={`bg-slate-950 ${HERO_PY} px-4 lg:px-8`}>
          <p className="relative z-10 text-sm font-bold text-[#137ece] tracking-[0.25em] mb-6 text-center">OUR PORTFOLIO</p>
          <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center leading-tight max-w-4xl mx-auto">
            Engineering Digital Ecosystems at Scale.
          </h1>
          <p className="relative z-10 text-slate-400 text-lg mt-8 max-w-2xl mx-auto text-center leading-relaxed">
            Inievo Technologies architects high-performance digital products — from hyperlocal platforms to AI-powered enterprise tools — built on resilient, cloud-native foundations.
          </p>
        </PageHeroBand>

        <section className={`w-full bg-white ${SECTION_PY}`}>
          <PortfolioGrid />
        </section>

        <section id="case-studies" className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label="CASE STUDIES"
              title="Deep-Dive Engineering Stories"
              subtitle="Architecture decisions, delivery outcomes, and the technology stack behind each product."
            />
          </div>
          <div className={`w-full ${REVEAL}`}>
            <CaseStudyBlocks />
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
