import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { INDUSTRY_SLUGS } from "@/lib/industry-landings";
import { SERVICE_SLUGS } from "@/lib/service-landings";

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const CORE_ROUTES: SitemapEntry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...SERVICE_SLUGS.map(
    (slug): SitemapEntry => ({
      path: `/services/${slug}`,
      priority: 0.85,
      changeFrequency: "monthly",
    }),
  ),
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.85, changeFrequency: "monthly" },
  { path: "/company", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/projects/the-chattala", priority: 0.75, changeFrequency: "yearly" },
  { path: "/projects/puc-pro", priority: 0.75, changeFrequency: "yearly" },
  ...INDUSTRY_SLUGS.map(
    (slug): SitemapEntry => ({
      path: `/industries/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    }),
  ),
  ...BLOG_POSTS.map(
    (post): SitemapEntry => ({
      path: post.href,
      priority: 0.6,
      changeFrequency: "yearly",
    }),
  ),
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return CORE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
