import type { ReactNode } from "react";
import ProjectHero from "@/components/case-study/ProjectHero";
import ProjectSidebar from "@/components/case-study/ProjectSidebar";
import CaseStudyContact from "@/components/case-study/CaseStudyContact";

type CaseStudyLayoutProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  role: string;
  platform: string;
  techStack: string[];
  liveUrl: string;
  children: ReactNode;
};

export default function CaseStudyLayout({
  title,
  description,
  imageSrc,
  imageAlt,
  role,
  platform,
  techStack,
  liveUrl,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main>
      <ProjectHero
        title={title}
        description={description}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <section className="project-details">
        <div className="section-wrap">
          <div className="project-details-grid">
            <div className="project-content">{children}</div>
            <ProjectSidebar
              role={role}
              platform={platform}
              techStack={techStack}
              liveUrl={liveUrl}
            />
          </div>
        </div>
      </section>
      <CaseStudyContact />
    </main>
  );
}
