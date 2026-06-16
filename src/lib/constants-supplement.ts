import { EMAIL, FOUNDED_YEAR, HQ_ADDRESS } from "./constants";

export interface CoreOffering {
  title: string;
  description: string;
  features: string[];
  summary: string;
  bullets: string[];
  stack: string;
  icon: string;
  asset_icon: string;
  bento_number: string;
  bento_description: string;
  bento_roi: string;
  bento_dark: boolean;
  bento_col_span: number;
  bento_accent?: string;
}

export const CORE_OFFERINGS: CoreOffering[] = [
  {
    title: "Custom Software Engineering",
    description:
      "We design and build bespoke enterprise applications tailored to your business logic — from greenfield platforms to complex legacy modernization with zero downtime migration paths.",
    features: [
      "Microservices & modular monolith architecture",
      "RESTful and GraphQL API development",
      "Role-based access and audit logging",
      "Automated testing and CI/CD integration",
    ],
    summary:
      "Full-stack product engineering tailored to your business logic — from greenfield platforms to legacy modernization.",
    bullets: [
      "Modular monolith and microservices architecture",
      "Type-safe APIs with automated testing pipelines",
      "Role-based access, audit logs, and compliance-ready design",
      "Performance budgets and Core Web Vitals optimization",
    ],
    stack: "Next.js · FastAPI · PostgreSQL",
    icon: "layers",
    asset_icon: "layers",
    bento_number: "01",
    bento_description:
      "Architect bespoke platforms and APIs on maintainable foundations — from first MVP to multi-team product roadmaps.",
    bento_roi: "Ship MVPs in 8–16 weeks with milestone-based releases.",
    bento_dark: false,
    bento_col_span: 1,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Production-grade cloud environments engineered for resilience, auto-scaling, and cost efficiency — so your team ships with confidence at enterprise velocity.",
    features: [
      "AWS infrastructure as code (Terraform / CDK)",
      "Kubernetes orchestration and container hardening",
      "CI/CD pipelines with zero-downtime deploys",
      "Observability, alerting, and SLA monitoring",
    ],
    summary:
      "Resilient, auto-scaling infrastructure designed for global availability and zero-downtime deployments.",
    bullets: [
      "AWS-native infrastructure as code (Terraform / CDK)",
      "Kubernetes orchestration and container hardening",
      "Multi-region failover and disaster recovery planning",
      "Cost optimization with observability dashboards",
    ],
    stack: "AWS · Docker · Kubernetes",
    icon: "cloud",
    asset_icon: "cloud",
    bento_number: "02",
    bento_description:
      "Design resilient AWS environments with IaC, Kubernetes, and pipelines your team can operate with confidence.",
    bento_roi: "Zero-downtime deploy patterns from the first production sprint.",
    bento_dark: false,
    bento_col_span: 1,
    bento_accent: "text-[#137ece]",
  },
  {
    title: "AI & Data Automation",
    description:
      "Intelligent systems that automate workflows, integrate LLMs safely, and transform raw data into decisions your leadership team can act on immediately.",
    features: [
      "LLM integration with RAG and guardrails",
      "Workflow automation across business tools",
      "ETL pipelines and real-time analytics",
      "Model evaluation and continuous improvement",
    ],
    summary:
      "Intelligent automation and data pipelines that turn raw information into actionable enterprise decisions.",
    bullets: [
      "LLM integration with RAG and guardrailed outputs",
      "Workflow automation across CRM, ERP, and internal tools",
      "Real-time analytics and ETL pipeline engineering",
      "Model evaluation, monitoring, and continuous improvement",
    ],
    stack: "LLMs · Python · Automation",
    icon: "brain",
    asset_icon: "brain",
    bento_number: "03",
    bento_description:
      "Integrate LLMs, automate workflows, and pipe data into decisions leadership can act on — with guardrails built in.",
    bento_roi: "Focused automation integrations delivered in 6–10 week phases.",
    bento_dark: false,
    bento_col_span: 1,
    bento_accent: "text-[#f97316]",
  },
  {
    title: "Digital Branding & UI/UX",
    description:
      "Premium design systems and conversion-focused interfaces that elevate your brand and deliver measurable business outcomes across every digital touchpoint.",
    features: [
      "Enterprise design system development",
      "User research and usability testing",
      "Responsive, accessibility-first interfaces",
      "Brand identity and visual language guides",
    ],
    summary:
      "Premium design systems and conversion-focused interfaces that elevate your brand across every digital touchpoint.",
    bullets: [
      "Research-backed UX for professional and commercial audiences",
      "Design systems that scale across web and mobile products",
      "Accessibility-first components and responsive layouts",
      "Brand identity guides aligned with engineering handoff",
    ],
    stack: "Figma · Tailwind · Framer",
    bento_number: "04",
    icon: "palette",
    asset_icon: "design",
    bento_description:
      "Launch trust-first interfaces and cohesive brand systems that turn visitors into believers — and believers into clients.",
    bento_roi: "Brand-ready UI deliverables in 4–8 week design-engineering cycles.",
    bento_dark: false,
    bento_col_span: 1,
    bento_accent: "text-[#137ece]",
  },
];

export const DETAILED_SERVICES: CoreOffering[] = [...CORE_OFFERINGS];

export const AUDIENCE_TRACKS = [
  {
    id: "local-business",
    title: "Your Online Shop Deserves a Real Home",
    audience: "Local Businesses & Online Shops",
    description:
      "Thousands of buyers search Google before they trust a brand. We build fast, credible web stores and automation that work while you sleep — so you own the relationship, not the algorithm.",
    highlight: "Credible · Automated · Mobile-first",
    services: [
      "E-Commerce & storefront builds",
      "Brand websites & landing pages",
      "Order & inventory automation",
      "SEO-ready performance foundations",
    ],
  },
  {
    id: "institutions",
    title: "Software That Grows With Your Ambition",
    audience: "Growing Businesses & Institutions",
    description:
      "Off-the-shelf tools break when your business evolves. We architect custom software and mobile apps on scalable foundations — so adding features is effortless, not expensive.",
    highlight: "Scalable · Maintainable · Future-proof",
    services: [
      "Custom software & internal platforms",
      "Cloud infrastructure & DevOps",
      "AI workflow automation",
      "Mobile apps & integrations",
    ],
  },
  {
    id: "professionals",
    title: "The World Googles You. Be Ready.",
    audience: "Doctors, Engineers & High-Profile Professionals",
    description:
      "We build trust-first, credential-showcasing websites that position you as the authority in your field — because your expertise deserves a platform worthy of it.",
    highlight: "Trust-first · Credential-led · Authority-building",
    services: [
      "Professional portfolio websites",
      "Credential & case-study showcases",
      "Booking & inquiry conversion flows",
      "Premium UI/UX & brand systems",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Discovery & Architecture",
    tagline: "Align technology with business outcomes before a single sprint starts.",
    description:
      "Deep-dive audits, stakeholder workshops, and technical roadmaps that define scope, risks, and the fastest path to value.",
    bullets: [
      "Requirements mapping and success metrics agreed upfront",
      "Architecture options with trade-offs documented clearly",
      "Phased delivery plan with milestone definitions",
    ],
    icon: "search",
    icon_bg: "bg-[#f97316]",
  },
  {
    title: "Agile Engineering",
    tagline: "Iterative builds with clean code standards and visible progress every sprint.",
    description:
      "Cross-functional sprints, automated testing, and continuous integration — engineered for maintainability, not demo-day theatrics.",
    bullets: [
      "Weekly demos and transparent sprint reporting",
      "Type-safe APIs, test coverage, and code review discipline",
      "Design and engineering synced for cohesive product delivery",
    ],
    icon: "code",
    icon_bg: "bg-[#137ece]",
  },
  {
    title: "Launch & DevOps",
    tagline: "Production releases with observability, rollback paths, and operational clarity.",
    description:
      "Hardened deployments, monitoring, and runbooks so your team knows exactly how the system behaves under load.",
    bullets: [
      "CI/CD pipelines and staged rollout strategy",
      "Monitoring, alerting, and incident response playbooks",
      "Performance validation before traffic scales",
    ],
    icon: "rocket",
    icon_bg: "bg-slate-800",
  },
  {
    title: "Scale & Improve",
    tagline: "Continuous iteration, optimization, and partnership beyond launch day.",
    description:
      "Post-launch refinement, infrastructure tuning, and feature expansion — keeping velocity high as your product and users grow.",
    bullets: [
      "Roadmap prioritization based on real usage signals",
      "Cost and performance optimization as traffic increases",
      "Optional retainer for features, fixes, and platform evolution",
    ],
    icon: "scale",
    icon_bg: "bg-[#137ece]",
  },
] as const;

export const FOOTER_COMPANY_LINKS = [
  ["About Inievo", "/company"],
  ["Services", "/services"],
  ["Our Process", "/#process"],
  ["FAQ", "/#faq"],
] as const;

export const FOOTER_INDUSTRIES_LINKS = [
  ["EdTech & Education", "/industries/edtech"],
  ["Community & Hyperlocal", "/industries/community-hyperlocal"],
  ["SaaS & Startups", "/industries/saas-startups"],
  ["E-Commerce & Retail", "/industries/ecommerce-retail"],
  ["See all", "/industries"],
] as const;

export const FOOTER_CONNECT_LINKS = [
  ["Contact", "/contact"],
  ["Careers", `mailto:${EMAIL}?subject=Careers%20at%20Inievo`],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/inievo", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/inievo", icon: "linkedin" },
  { label: "X", href: "https://x.com/inievotech", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/inievotecch", icon: "instagram" },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
] as const;

export const COMPANY_CREDIBILITY_SIGNALS = [
  { icon: "calendar", label: "Founded", value: String(FOUNDED_YEAR) },
  { icon: "map_pin", label: "Headquarters", value: HQ_ADDRESS },
  { icon: "layers", label: "Core Domains", value: "Software · Cloud · Design" },
  { icon: "users", label: "Client Partnerships", value: "10+ Active Clients" },
] as const;

export const LEAD_INPUT =
  "w-full min-w-0 min-h-[48px] box-border bg-white border border-slate-200 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/25 transition-all duration-200 shadow-sm";

export const LEAD_TEXTAREA =
  "w-full min-w-0 min-h-[112px] sm:min-h-[120px] box-border bg-white border border-slate-200 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/25 transition-all duration-200 resize-y sm:resize-none shadow-sm";

export const LEAD_SELECT =
  "w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/25 transition-all duration-200 appearance-none cursor-pointer shadow-sm bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10";

export const CONTACT_INPUT =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/40 transition-all duration-200";

export const CONTACT_TEXTAREA =
  "w-full min-h-[140px] bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/40 transition-all duration-200 resize-none";

export const CONTACT_SELECT =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/40 transition-all duration-200 appearance-none cursor-pointer";

export const HERO_LANDING_PY = "pt-[6rem] sm:pt-[6.5rem] lg:pt-[7.25rem] lg:pb-10";

export type NavLink = readonly [string, string];

export function navLinks(): NavLink[] {
  return [
    ["Services", "/services"],
    ["Industries", "/industries"],
    ["About Us", "/company"],
  ];
}

export function footerWorkLinks(): NavLink[] {
  return [
    ["All Projects", "/projects"],
    ["The Chattala", "/projects/the-chattala"],
    ["PUC PRO", "/projects/puc-pro"],
  ];
}
