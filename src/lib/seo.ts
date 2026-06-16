import type { Metadata } from "next";
import { FAVICON_URL, OG_IMAGE_URL } from "./constants";

export const SITE_URL = "https://inievo.com";
export const SITE_NAME = "Inievo Technologies";

export const SITE_TITLE =
  "Inievo Technologies | Software Development Company & Digital Transformation Partner";

export const SITE_DESCRIPTION =
  "Hire a Bangladesh-based software development company trusted by international enterprises. Custom platforms, cloud infrastructure, AI automation, and digital transformation — delivered globally.";

export const DEFAULT_KEYWORDS = [
  "software development company",
  "digital transformation partner",
  "custom software development company",
  "international software development",
  "offshore software development",
  "hire software development team",
  "enterprise software engineering",
  "cloud infrastructure services",
  "DevOps services",
  "AI automation company",
  "global software outsourcing",
  "Bangladesh software company",
  "Inievo Technologies",
] as const;

const OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: 1200,
  height: 630,
  alt: "Inievo Technologies — Software Development & Digital Transformation Partner",
} as const;

export const PAGE_SEO: Record<
  string,
  { title: string; description: string; image?: string; keywords?: string[] }
> = {
  "/": {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: [...DEFAULT_KEYWORDS],
  },
  "/services": {
    title: "Custom Software Development Services | Inievo Technologies",
    description:
      "Hire an international software development partner for full-stack engineering, cloud DevOps, AI automation, and UI/UX — end-to-end delivery for startups and global enterprises.",
    keywords: [
      "custom software development services",
      "international software development partner",
      "offshore development team",
      "full-stack development company",
      "cloud DevOps services",
      "AI automation services",
      "enterprise software services",
    ],
  },
  "/services/custom-software": {
    title: "Custom Software Development Company | Inievo Technologies",
    description:
      "Hire Inievo for bespoke software development — MVPs in 8–16 weeks, legacy modernization, APIs, and dedicated squads for international startups and enterprises. 100% IP ownership.",
    keywords: [
      "custom software development company",
      "hire software developers",
      "offshore custom software development",
      "MVP development company",
      "legacy software modernization",
      "dedicated development team",
    ],
  },
  "/services/cloud-devops": {
    title: "Cloud & DevOps Services | AWS Engineering | Inievo",
    description:
      "Production-grade AWS infrastructure, CI/CD pipelines, Kubernetes, and observability for global teams. Zero-downtime deploys, cost optimization, and SRE practices.",
    keywords: [
      "cloud devops services",
      "AWS devops partner",
      "kubernetes consulting",
      "CI/CD pipeline development",
      "infrastructure as code",
      "cloud engineering company",
    ],
  },
  "/services/ai-automation": {
    title: "AI Automation & LLM Integration Services | Inievo",
    description:
      "Practical AI automation with guardrails — LLM integration, RAG systems, document intelligence, and workflow automation for international enterprises seeking measurable ROI.",
    keywords: [
      "AI automation company",
      "LLM integration services",
      "business process automation",
      "RAG system development",
      "document automation AI",
      "enterprise AI consulting",
    ],
  },
  "/services/ui-ux-design": {
    title: "UI/UX Design & Design Systems | Inievo Technologies",
    description:
      "Enterprise design systems, conversion-focused web design, and research-backed UX for international brands. Accessibility-first, performance-budgeted, production-ready.",
    keywords: [
      "UI UX design agency",
      "enterprise design system",
      "digital product design",
      "conversion focused web design",
      "B2B website design",
      "design to code handoff",
    ],
  },
  "/projects": {
    title: "Software Portfolio & Case Studies | Inievo Technologies",
    description:
      "Explore Inievo Labs and client case studies — community platforms, EdTech products, and enterprise systems engineered for real-world scale and performance.",
    keywords: ["software portfolio", "case studies", "custom software projects", "Inievo Labs"],
  },
  "/projects/the-chattala": {
    title: "The Chattala Case Study | Inievo Technologies",
    description:
      "How Inievo built a hyperlocal community and marketplace platform — edge-optimized, mobile-first architecture designed for high engagement at scale.",
    keywords: ["community platform case study", "marketplace software", "hyperlocal app development"],
  },
  "/projects/puc-pro": {
    title: "PUC PRO Case Study | Inievo Technologies",
    description:
      "Student resource platform with AI-assisted document workflows — an EdTech case study in performance, guardrails, and edge-delivered access.",
    keywords: ["EdTech case study", "student platform", "AI document workflows", "PUC PRO"],
  },
  "/company": {
    title: "About Inievo Technologies | Software Development Company",
    description:
      "Founded in 2025. Mission, values, and the engineering studio behind Inievo Labs — a Bangladesh-based team delivering software and digital transformation globally.",
    keywords: ["about Inievo", "software company Bangladesh", "engineering studio", "Inievo Labs"],
  },
  "/contact": {
    title: "Hire Inievo Technologies | International Software Development",
    description:
      "Talk to Inievo about your software project — custom development, cloud, AI, or digital transformation. Global clients welcome. We respond within one business day.",
    keywords: [
      "hire software development company",
      "offshore development inquiry",
      "international software project",
      "contact Inievo Technologies",
    ],
  },
  "/industries": {
    title: "Industries We Serve | Inievo Technologies",
    description:
      "Vertical software expertise across EdTech, SaaS, e-commerce, healthcare, enterprise, media, and community platforms — industry-specific engineering from Inievo.",
    keywords: ["industry software solutions", "vertical SaaS development", "enterprise software industries"],
  },
  "/industries/edtech": {
    title: "EdTech Software Development | Inievo Technologies",
    description:
      "Learning platforms, student productivity tools, and institutional systems — proven on PUC PRO and client EdTech engagements worldwide.",
    keywords: ["EdTech software development", "learning platform development", "education technology partner"],
  },
  "/industries/community-hyperlocal": {
    title: "Community & Hyperlocal Platform Development | Inievo",
    description:
      "Hyperlocal community platforms and digital marketplaces — real-time, mobile-first engineering proven on The Chattala case study.",
    keywords: ["community platform development", "hyperlocal marketplace", "social platform engineering"],
  },
  "/industries/ecommerce-retail": {
    title: "E-Commerce & Retail Software | Inievo Technologies",
    description:
      "Conversion-focused storefronts, checkout flows, and inventory systems for retail brands and marketplaces scaling across regions.",
    keywords: ["ecommerce development", "retail software", "online store development", "marketplace platform"],
  },
  "/industries/healthcare-professional": {
    title: "Healthcare & Professional Services Software | Inievo",
    description:
      "Trust-first web presence, booking workflows, and secure patient portals for healthcare providers and professional practices.",
    keywords: ["healthcare software development", "patient portal", "professional services website"],
  },
  "/industries/saas-startups": {
    title: "SaaS & Startup Software Development | Inievo Technologies",
    description:
      "MVP development and scalable SaaS foundations — rapid delivery with clean architecture and handoff-ready code for growing product teams.",
    keywords: ["SaaS development", "MVP development", "startup software partner", "product engineering"],
  },
  "/industries/enterprise-institutions": {
    title: "Enterprise Software Development | Inievo Technologies",
    description:
      "Custom enterprise platforms, ERP integrations, intranet portals, and legacy modernization for complex global organizations.",
    keywords: ["enterprise software development", "legacy modernization", "ERP integration", "intranet portal"],
  },
  "/industries/media-publishing": {
    title: "Media & Publishing Platform Development | Inievo",
    description:
      "Editorial CMS, high-performance content frontends, and SEO-ready publishing architecture for media teams at scale.",
    keywords: ["publishing platform", "editorial CMS", "media website development", "content platform SEO"],
  },
  "/industries/software-ites": {
    title: "Software & ITES Engineering Partner | Inievo Technologies",
    description:
      "Embedded engineering squads, platform scaling, and QA automation for software companies accelerating delivery velocity.",
    keywords: ["ITES software partner", "embedded engineering team", "QA automation", "platform scaling"],
  },
  "/blog": {
    title: "Software Engineering Insights | Inievo Technologies Blog",
    description:
      "Expert articles on custom software, cloud scaling, AI automation, DevOps, and product engineering — practical insights from the Inievo team.",
    keywords: ["software engineering blog", "DevOps insights", "AI automation articles", "digital transformation blog"],
  },
  "/blog/online-shop-real-website-bangladesh": {
    title: "Why Every Online Shop in Bangladesh Needs a Real Website | Inievo",
    description:
      "Why SMEs need an owned website beyond social pages — credibility, search discovery, and long-term brand control for growing retailers.",
    keywords: ["SME website Bangladesh", "ecommerce website", "online shop SEO"],
  },
  "/blog/custom-software-readiness-signals": {
    title: "Seven Signals Your Business Is Ready for Custom Software | Inievo",
    description:
      "When spreadsheets and tool sprawl mean it is time to invest in bespoke software — seven practical readiness signals from Inievo.",
    keywords: ["custom software readiness", "bespoke software investment", "enterprise software signals"],
  },
  "/blog/hyperlocal-chattogram-products": {
    title: "Building Hyperlocal Products for Emerging Markets | Inievo",
    description:
      "Lessons from shipping The Chattala — why community platforms need performance architecture and deep local product empathy.",
    keywords: ["hyperlocal product development", "community platform engineering", "emerging market software"],
  },
  "/blog/ai-automation-practical-roi": {
    title: "Where AI Automation Delivers Practical ROI | Inievo",
    description:
      "How teams pick high-leverage AI automation targets — support triage, document intake, and ops reporting with guardrails that scale.",
    keywords: ["AI automation ROI", "business process automation", "AI implementation strategy"],
  },
  "/blog/edtech-mobile-performance-bangladesh": {
    title: "EdTech Platforms for Low-Bandwidth Mobile Reality | Inievo",
    description:
      "How to design document-heavy EdTech products that stay fast on mid-tier phones, uneven networks, and seasonal traffic spikes.",
    keywords: ["EdTech mobile performance", "low bandwidth UX", "education app optimization"],
  },
  "/blog/devops-scaling-playbook-bangladesh": {
    title: "DevOps Scaling Playbook for Growing Product Teams | Inievo",
    description:
      "CI/CD, observability, and cloud decisions that prevent downtime, payment failures, and deploy regressions before your next growth push.",
    keywords: ["DevOps scaling", "CI/CD best practices", "cloud observability", "production reliability"],
  },
  "/privacy-policy": {
    title: "Privacy Policy | Inievo Technologies",
    description:
      "How Inievo Technologies collects, uses, stores, and protects personal information when you visit inievo.com or contact us about a project.",
    keywords: ["privacy policy", "data protection Inievo"],
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Inievo Technologies",
    description:
      "Terms governing use of the Inievo Technologies website, intellectual property, acceptable use, and limitations of liability.",
    keywords: ["terms and conditions", "website terms Inievo"],
  },
};

export type PageMetadataOptions = {
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(route: string): string {
  return route === "/" ? SITE_URL : `${SITE_URL}${route}`;
}

export function pageMetadata(route: string, options: PageMetadataOptions = {}): Metadata {
  const data = PAGE_SEO[route];
  const title = data?.title ?? SITE_TITLE;
  const description = data?.description ?? SITE_DESCRIPTION;
  const url = absoluteUrl(route);
  const imageUrl = data?.image ?? OG_IMAGE_URL;
  const keywords = data?.keywords ?? [...DEFAULT_KEYWORDS];

  const ogImages = [{ ...OG_IMAGE, url: imageUrl }];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: route === "/" ? "/" : route,
    },
    openGraph: {
      type: options.ogType ?? "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: ogImages,
      ...(options.ogType === "article" && options.publishedTime
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime ?? options.publishedTime,
            authors: options.authors ?? [SITE_NAME],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@inievotech",
      creator: "@inievotech",
      title,
      description,
      images: [imageUrl],
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

/** Root layout defaults — child pages override via `pageMetadata()`. */
export function rootMetadata(): Metadata {
  const home = pageMetadata("/");
  return {
    metadataBase: new URL(SITE_URL),
    ...home,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: FAVICON_URL,
      apple: FAVICON_URL,
    },
    alternates: {
      ...home.alternates,
      languages: { "en-US": "/" },
    },
  };
}
