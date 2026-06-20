import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { buildCaseStudyMetadata } from "@/lib/site/seo";

const TITLE = "The Chattala";
const DESCRIPTION =
  "Case Study: The Chattala - A comprehensive hyperlocal platform designed exclusively for the Chittagong community.";
const HERO_DESCRIPTION =
  "A comprehensive hyperlocal platform designed exclusively for the Chittagong community, connecting people, professionals, and local businesses.";
const HERO_IMAGE =
  "https://res.cloudinary.com/dgbyoqvpt/image/upload/q_auto/f_auto/v1780353178/1_zfp3vr.png";
const HERO_IMAGE_ALT = "The Chattala Mockup";

export async function generateMetadata(): Promise<Metadata> {
  return buildCaseStudyMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/work/the-chattala",
    imageUrl: HERO_IMAGE,
    imageAlt: HERO_IMAGE_ALT,
  });
}

export default function TheChattalaPage() {
  return (
    <CaseStudyLayout
      title={TITLE}
      description={HERO_DESCRIPTION}
      imageSrc={HERO_IMAGE}
      imageAlt={HERO_IMAGE_ALT}
      role="Lead Engineer & System Architect"
      platform="iOS, Android & Web Admin"
      techStack={["Flutter", "Node.js", "MongoDB", "Firebase"]}
      liveUrl="https://thechattala.com"
    >
      <h2>The Challenge</h2>
      <p>
        Chittagong is a bustling, vibrant community with unique local dynamics,
        yet it lacked a centralized digital hub for neighborhood interactions.
        Local businesses struggled to find a platform dedicated solely to their
        geographic target, and residents needed a trusted space to share community
        news, find local professionals, and engage in neighborhood discussions.
      </p>

      <h2 className="project-heading-spaced">The Solution</h2>
      <p>
        I architected and developed <strong>The Chattala</strong>, a highly
        scalable hyperlocal application that bridges this gap. The platform
        includes:
      </p>
      <ul className="project-list">
        <li>
          <strong>Dynamic Community Feed:</strong> A localized social feed
          allowing users to post updates, ask questions, and interact with
          neighbors in real-time.
        </li>
        <li>
          <strong>Digital Storefronts:</strong> Local vendors and shop owners can
          seamlessly enlist their businesses, showcase products, and directly reach
          the Chittagong community.
        </li>
        <li>
          <strong>Professional Directory:</strong> A curated, searchable directory
          where individuals can list themselves as skilled professionals (e.g.,
          plumbers, tutors, electricians) making local hiring efficient.
        </li>
      </ul>

      <h2 className="project-heading-spaced">Technical Architecture</h2>
      <p>
        To ensure high availability and a seamless cross-platform experience, the
        application was built using <strong>Flutter</strong> for a unified iOS and
        Android codebase. The backend is powered by <strong>Node.js</strong> and{" "}
        <strong>MongoDB</strong>, designed with a microservices approach to handle
        concurrent user feeds and geolocation-based queries.{" "}
        <strong>Firebase</strong> was integrated for real-time notifications,
        secure authentication, and scalable media storage.
      </p>
    </CaseStudyLayout>
  );
}
