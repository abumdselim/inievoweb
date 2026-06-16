import { EMAIL, FAQ_ITEMS, FOUNDED_YEAR, HQ_ADDRESS, LOGO_URL, OG_IMAGE_URL } from "./constants";
import { SOCIAL_LINKS } from "./constants-supplement";
import type { BlogPost } from "./blog-posts";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./seo";

function assetUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type JsonLd = Record<string, unknown>;

function socialProfiles(): string[] {
  return SOCIAL_LINKS.filter((link) => link.href.startsWith("http")).map((link) => link.href);
}

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    image: OG_IMAGE_URL,
    description: SITE_DESCRIPTION,
    email: EMAIL,
    foundingDate: String(FOUNDED_YEAR),
    address: {
      "@type": "PostalAddress",
      addressLocality: HQ_ADDRESS.split(",")[0]?.trim() ?? "Chattogram",
      addressCountry: "BD",
    },
    sameAs: socialProfiles(),
    areaServed: [
      "Worldwide",
      "United States",
      "United Kingdom",
      "European Union",
      "Middle East",
      "Southeast Asia",
      "Bangladesh",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    knowsAbout: [
      "Custom Software Development",
      "Digital Transformation",
      "Cloud Engineering",
      "DevOps",
      "AI Automation",
      "Enterprise Software",
      "UI/UX Design",
    ],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function professionalServiceJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/services#service`,
    name: SITE_NAME,
    url: `${SITE_URL}/services`,
    image: OG_IMAGE_URL,
    description:
      "Hire an international software development partner for full-stack engineering, cloud DevOps, AI automation, and UI/UX — end-to-end delivery for startups and global enterprises.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      "Worldwide",
      "United States",
      "United Kingdom",
      "European Union",
      "Middle East",
      "Southeast Asia",
      "Bangladesh",
    ],
    serviceType: [
      "Custom Software Development",
      "Cloud Infrastructure",
      "DevOps Engineering",
      "AI Automation",
      "Digital Transformation",
      "UI/UX Design",
    ],
  };
}

export function faqPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(post: BlogPost): JsonLd {
  const published = new Date(post.published).toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail.endsWith(".svg") ? OG_IMAGE_URL : assetUrl(post.thumbnail),
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(post.href),
    },
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export function caseStudyJsonLd(slug: string, title: string, description: string): JsonLd {
  const path = `/projects/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: absoluteUrl(path),
    creator: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function serviceLandingJsonLd(slug: string, name: string, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${slug}#service`,
    name,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      "Worldwide",
      "United States",
      "United Kingdom",
      "European Union",
      "Middle East",
      "Southeast Asia",
      "Bangladesh",
    ],
  };
}

export function contactPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Inievo Technologies",
    url: `${SITE_URL}/contact`,
    description: "Start a qualified conversation with Inievo about your software project.",
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };
}
