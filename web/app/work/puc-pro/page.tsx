import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { buildCaseStudyMetadata } from "@/lib/site/seo";

const TITLE = "PUC PRO";
const DESCRIPTION =
  "Case Study: PUC PRO - An all-in-one academic resource hub offering 50+ essential daily tools for CSE students.";
const HERO_DESCRIPTION =
  "An all-in-one academic resource hub offering 50+ essential daily tools, initially built for Premier University students and expanding nationwide.";
const HERO_IMAGE =
  "https://res.cloudinary.com/dgbyoqvpt/image/upload/q_auto/f_auto/v1780353178/2_olfydp.png";
const HERO_IMAGE_ALT = "PUC PRO Mockup";

export async function generateMetadata(): Promise<Metadata> {
  return buildCaseStudyMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/work/puc-pro",
    imageUrl: HERO_IMAGE,
    imageAlt: HERO_IMAGE_ALT,
  });
}

export default function PucProPage() {
  return (
    <CaseStudyLayout
      title={TITLE}
      description={HERO_DESCRIPTION}
      imageSrc={HERO_IMAGE}
      imageAlt={HERO_IMAGE_ALT}
      role="Lead Engineer & Team Lead"
      platform="Web Platform (PWA)"
      techStack={["Next.js", "React", "Tailwind", "Node.js"]}
      liveUrl="https://puc.pro.bd"
    >
      <h2>The Challenge</h2>
      <p>
        Computer Science and Engineering (CSE) students at Premier University
        frequently struggled with disjointed academic workflows. They had to rely
        on multiple unoptimized platforms to generate assignment cover pages, edit
        PDFs, convert files, and access study materials. This fragmentation led to
        significant time loss and frustration, especially during critical
        submission periods.
      </p>

      <h2 className="project-heading-spaced">The Solution</h2>
      <p>
        My team and I developed <strong>PUC PRO</strong>, a centralized utility
        and resource hub that simplifies student life. Initially targeted at
        Premier University, the platform&apos;s success has driven us to expand it
        for all CSE students in Bangladesh. Key offerings include:
      </p>
      <ul className="project-list">
        <li>
          <strong>Automated Cover Page Builder:</strong> A highly optimized tool
          that allows students to generate university-standard assignment and lab
          report cover pages in seconds.
        </li>
        <li>
          <strong>Advanced PDF Editor:</strong> Built-in utilities for merging,
          splitting, compressing, and editing PDF documents without relying on
          ad-heavy external websites.
        </li>
        <li>
          <strong>Resource Repository:</strong> A categorized, easily searchable
          database of past questions, lecture notes, and essential software
          links.
        </li>
        <li>
          <strong>50+ Utility Tools:</strong> Including CGPA calculators, code
          formatters, and routine generators.
        </li>
      </ul>

      <h2 className="project-heading-spaced">Technical Architecture</h2>
      <p>
        Performance and accessibility were the top priorities. The frontend was
        built with <strong>Next.js</strong> and <strong>React</strong> for
        server-side rendering (SSR), ensuring lighting-fast load times even on
        poor mobile networks. The UI utilizes <strong>TailwindCSS</strong> for a
        sleek, modern, and highly responsive design. The backend API is powered
        by <strong>Node.js/Express</strong>, designed to handle heavy
        file-processing tasks efficiently.
      </p>
    </CaseStudyLayout>
  );
}
