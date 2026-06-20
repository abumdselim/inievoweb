import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/env";
import { CANONICAL_GITHUB, CANONICAL_LINKEDIN } from "@/lib/site/contact";

export const SITE_AUTHOR_NAME = "Abu Md. Selim";

export const SITE_DEFAULT_TITLE =
  "Abu Md. Selim — Software Engineer & Tech Entrepreneur";

export const SITE_DEFAULT_DESCRIPTION =
  "Abu Md. Selim — Enterprise Software Engineer, System Architect, and Founder of Inievo Technologies. Building scalable digital products that drive business growth.";

export const SITE_JOB_TITLE = "Software Engineer & Tech Entrepreneur";

export function buildDefaultSiteMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    title: {
      default: SITE_DEFAULT_TITLE,
      template: "%s | Abu Md. Selim",
    },
    description: SITE_DEFAULT_DESCRIPTION,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: SITE_DEFAULT_TITLE,
      description: SITE_DEFAULT_DESCRIPTION,
      type: "website",
      url: siteUrl,
      siteName: SITE_AUTHOR_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_DEFAULT_TITLE,
      description: SITE_DEFAULT_DESCRIPTION,
    },
  };
}

export function buildPersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_AUTHOR_NAME,
    url: getSiteUrl(),
    jobTitle: SITE_JOB_TITLE,
    sameAs: [CANONICAL_LINKEDIN, CANONICAL_GITHUB],
  };
}

export function buildCaseStudyMetadata({
  title,
  description,
  path,
  imageUrl,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  imageUrl: string;
  imageAlt: string;
}): Metadata {
  const ogTitle = `${title} — Case Study`;

  return {
    title: ogTitle,
    description,
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url: path,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [imageUrl],
    },
  };
}
