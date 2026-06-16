import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { Hero } from "@/components/home/Hero";
import {
  AiExcellenceSection,
  AudienceTracksSection,
  ClientLogoMarquee,
  CompanyCredibilitySection,
  EngineeringProcess,
  FaqSection,
  FeaturedProjects,
  FinalCta,
  IndustriesSection,
  InsightsBlog,
  ServicesBentoGrid,
  TechStackMarquee,
} from "@/components/home/HomeSections";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <Navbar solid={false} navTheme="light" />
      <main className="flex-1">
        <Hero />
        <ClientLogoMarquee />
        <ServicesBentoGrid />
        <AiExcellenceSection />
        <IndustriesSection />
        <CompanyCredibilitySection />
        <TechStackMarquee />
        <EngineeringProcess />
        <AudienceTracksSection />
        <FeaturedProjects />
        <FaqSection />
        <InsightsBlog />
        <FinalCta />
      </main>
      <MegaFooter />
    </>
  );
}
