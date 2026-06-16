import { COMPANY_METRICS } from "./constants";

export const GENERATED = {
  hero_mesh: "/generated/hero-mesh.webp",
  hero_dashboard: "/generated/hero-dashboard.png",
  hero_dashboard_mobile: "/generated/hero-dashboard-mobile.png",
  logo: "/generated/logo.svg",
  favicon: "/generated/favicon.svg",
  hero_services: "/generated/hero-services.svg",
  hero_company: "/generated/hero-company.svg",
  hero_contact: "/generated/hero-contact.svg",
  hero_projects: "/generated/hero-projects.svg",
  company_story: "/generated/company-story.svg",
  contact_illustration: "/generated/contact-illustration.svg",
  project_chattala: "/generated/project-chattala.svg",
  project_pucpro: "/generated/project-pucpro.svg",
  project_bengaldesk: "/generated/project-bengaldesk.svg",
  case_chattala: "/generated/case-chattala.svg",
  case_pucpro: "/generated/case-pucpro.svg",
  case_bengaldesk: "/generated/case-bengaldesk.svg",
  icon_custom: "/generated/icon-custom.svg",
  icon_cloud: "/generated/icon-cloud-tile.svg",
  icon_ai: "/generated/icon-ai-tile.svg",
  icon_design: "/generated/icon-design-tile.svg",
  offering_custom: "/generated/offering-custom.svg",
  offering_cloud: "/generated/offering-cloud.svg",
  offering_ai: "/generated/offering-ai.svg",
  offering_design: "/generated/offering-design.svg",
  process_discovery: "/generated/icon-process-discovery.svg",
  process_engineering: "/generated/icon-process-engineering.svg",
  process_deploy: "/generated/icon-process-deploy.svg",
  contact_mail: "/generated/icon-contact-mail.svg",
  contact_phone: "/generated/icon-contact-phone.svg",
  contact_map: "/generated/icon-contact-map.svg",
  badge_iso: "/generated/badge-iso-ready.svg",
  badge_agile: "/generated/badge-agile.svg",
  badge_ip: "/generated/badge-ip.svg",
  svg_cloud: "/generated/icon-cloud.svg",
  svg_code: "/generated/icon-code.svg",
  svg_ai: "/generated/icon-ai.svg",
  svg_design: "/generated/icon-design.svg",
} as const;

export const PAGE_HERO_IMAGES = {
  services: GENERATED.hero_services,
  company: GENERATED.hero_company,
  contact: GENERATED.hero_contact,
  projects: GENERATED.hero_projects,
} as const;

export const TRUST_METRICS = COMPANY_METRICS;

export const TRUST_BADGES = [
  { src: GENERATED.badge_iso, alt: "Security-First Engineering" },
  { src: GENERATED.badge_agile, alt: "Agile Delivery" },
  { src: GENERATED.badge_ip, alt: "100% IP Ownership" },
];

export const SERVICE_ICON_MAP: Record<string, string> = {
  layers: GENERATED.icon_custom,
  cloud: GENERATED.icon_cloud,
  brain: GENERATED.icon_ai,
  design: GENERATED.icon_design,
};

export const OFFERING_BANNER_MAP: Record<string, string> = {
  layers: GENERATED.offering_custom,
  cloud: GENERATED.offering_cloud,
  brain: GENERATED.offering_ai,
  design: GENERATED.offering_design,
};

export const PROCESS_ICON_MAP: Record<string, string> = {
  search: GENERATED.process_discovery,
  code: GENERATED.process_engineering,
  rocket: GENERATED.process_deploy,
  scale: GENERATED.process_deploy,
};

export const TECH_LOGO_META: Record<string, [string, string]> = {
  "Next.js": ["nextdotjs", "000000"],
  React: ["react", "61DAFB"],
  TypeScript: ["typescript", "3178C6"],
  Python: ["python", "3776AB"],
  FastAPI: ["fastapi", "009688"],
  PostgreSQL: ["postgresql", "4169E1"],
  Prisma: ["prisma", "2D3748"],
  Docker: ["docker", "2496ED"],
  AWS: ["amazonwebservices", "FF9900"],
  Vercel: ["vercel", "000000"],
  "Tailwind CSS": ["tailwindcss", "06B6D4"],
  Firebase: ["firebase", "DD2C00"],
  "Node.js": ["nodedotjs", "339933"],
  GraphQL: ["graphql", "E10098"],
  "React Native": ["react", "61DAFB"],
  Shopify: ["shopify", "7AB55C"],
  MongoDB: ["mongodb", "47A248"],
  Redis: ["redis", "DC382D"],
  Kubernetes: ["kubernetes", "326CE5"],
  GitHub: ["github", "181717"],
  Supabase: ["supabase", "3FCF8E"],
  Stripe: ["stripe", "635BFF"],
  Flutter: ["flutter", "02569B"],
  "Vue.js": ["vuedotjs", "4FC08D"],
  Go: ["go", "00ADD8"],
  Terraform: ["terraform", "844FBA"],
  Django: ["django", "092E20"],
  MySQL: ["mysql", "4479A1"],
  "Google Cloud": ["googlecloud", "4285F4"],
  Cloudflare: ["cloudflare", "F38020"],
};

function techLogoAssetPath(name: string): string {
  const fileKey = name.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  return `/generated/tech-logo-${fileKey}.svg`;
}

export const TECH_BADGE_MAP: Record<string, string> = Object.fromEntries(
  Object.keys(TECH_LOGO_META).map((name) => [name, techLogoAssetPath(name)])
);

export function techLogoFallback(name: string): string {
  const meta = TECH_LOGO_META[name];
  if (!meta) return "";
  return `https://cdn.simpleicons.org/${meta[0]}/${meta[1]}`;
}
