/** Detailed industry landing content for /industries and /industries/[slug]. */

export type IndustrySolution = {
  title: string;
  description: string;
  icon: string;
};

export type IndustryLanding = {
  slug: string;
  category: string;
  name: string;
  icon: string;
  theme: {
    bg: string;
    border: string;
    icon_bg: string;
    icon_color: string;
  };
  hero_eyebrow: string;
  hero_title: string;
  hero_subtitle: string;
  overview: string;
  overview_extra?: string;
  challenges: readonly string[];
  solutions: readonly IndustrySolution[];
  solutions_subtitle: string;
  highlights: readonly string[];
  case_study_slug?: "the-chattala" | "puc-pro";
  cta_title: string;
  cta_subtitle: string;
};

export const INDUSTRIES_PAGE_COPY = {
  hero_eyebrow: "INDUSTRIES",
  hero_title: "Vertical Engineering for Markets That Demand More Than Templates",
  hero_subtitle:
    "Every industry carries different compliance rules, user expectations, and performance pressures. We build software that respects those realities — from hyperlocal community platforms to enterprise systems with complex operational logic.",
  section_label: "OUR VERTICALS",
  section_title: "Eight Industries. Deep Domain Expertise.",
  section_subtitle:
    "Explore how Inievo applies product engineering, cloud architecture, and AI automation across the sectors we serve most — with the depth your technical evaluation requires.",
  cta: {
    title: "Don't see your industry listed?",
    subtitle:
      "We partner with teams across Bangladesh and beyond on custom verticals. Share your domain, constraints, and goals — we respond within one business day.",
    button: "Talk to our team",
    href: "/contact",
  },
} as const;

export const INDUSTRY_LANDINGS: Record<string, IndustryLanding> = {
  edtech: {
    slug: "edtech",
    category: "EdTech",
    name: "EdTech & Education",
    icon: "graduation_cap",
    theme: {
      bg: "bg-sky-50",
      border: "border-sky-200/90",
      icon_bg: "bg-sky-100",
      icon_color: "text-sky-600",
    },
    hero_eyebrow: "INDUSTRY · EDTECH",
    hero_title: "Learning Platforms Built for Real Students",
    hero_subtitle:
      "From student productivity tools to institutional systems — we engineer EdTech products that stay fast during exam season and scale as your user base grows.",
    overview:
      "Education technology is not a single product category — it spans student-facing productivity apps, learning management systems, institutional portals, and AI-assisted document workflows. Each audience carries different expectations: students need speed on mid-tier phones and uneven networks; institutions need trust, auditability, and admin control; educators need content delivery that does not fight their curriculum.",
    overview_extra:
      "Inievo has shipped production EdTech on PUC PRO — a unified student workspace combining resource discovery with guardrailed AI document editing. We understand exam-season traffic spikes, academic integrity constraints, and the UX friction that causes students to abandon fragmented toolchains.",
    challenges: [
      "Peak academic demand that overwhelms under-provisioned infrastructure during exams and admissions.",
      "Fragmented student workflows spread across PDF tools, note apps, and resource sites.",
      "AI features that must stay guardrailed for academic integrity and institutional trust.",
      "Mobile-first audiences in Bangladesh where network quality and device specs vary widely.",
    ],
    solutions: [
      {
        title: "Student Productivity Platforms",
        description:
          "Unified workspaces for resources, notes, and document workflows — replacing fragmented tools with one coherent experience.",
        icon: "book_open",
      },
      {
        title: "LMS & Learning Systems",
        description:
          "Custom learning management, content delivery, and assessment flows tailored to your curriculum — not a generic template.",
        icon: "graduation_cap",
      },
      {
        title: "AI-Assisted Document Workflows",
        description:
          "Intelligent extraction, editing, and guardrailed AI features designed for academic use cases with human review paths.",
        icon: "brain",
      },
      {
        title: "Institutional Portals",
        description:
          "Trust-first web presence and admin tools for schools, training providers, and education businesses scaling online.",
        icon: "building",
      },
    ],
    solutions_subtitle:
      "Product engineering tailored to education audiences — from student tools to institutional platforms.",
    highlights: [
      "Edge-delivered performance for document-heavy academic workflows",
      "Guardrailed AI with human review paths for institutional compliance",
      "Serverless scaling that absorbs exam-season traffic without ops overhead",
      "Mobile-first UX tuned for Bangladesh network realities",
    ],
    case_study_slug: "puc-pro",
    cta_title: "Planning an EdTech product?",
    cta_subtitle:
      "Share your audience, timeline, and goals — we will respond within one business day with a clear next step.",
  },

  "community-hyperlocal": {
    slug: "community-hyperlocal",
    category: "Community",
    name: "Community & Hyperlocal",
    icon: "users",
    theme: {
      bg: "bg-violet-50",
      border: "border-violet-200/90",
      icon_bg: "bg-violet-100",
      icon_color: "text-violet-600",
    },
    hero_eyebrow: "INDUSTRY · COMMUNITY",
    hero_title: "Digital Hubs That Connect Neighborhoods, Culture, and Commerce",
    hero_subtitle:
      "Hyperlocal platforms need real-time responsiveness, mobile-first discovery, and architecture that survives traffic spikes during community events — we build all three.",
    overview:
      "Community and hyperlocal products sit at the intersection of social engagement, local commerce, and cultural identity. Users expect instant listings, event updates, and marketplace flows on mobile networks that are not always reliable. A generic social template cannot carry the warmth, searchability, and performance that regional communities demand.",
    overview_extra:
      "Inievo Labs shipped The Chattala — a regional community hub and digital marketplace for Chittagong. We architected modular Next.js with edge caching, PostgreSQL read replicas, and event-driven workers so the platform stays fast when neighborhoods gather online during festivals, launches, and local events.",
    challenges: [
      "Traffic spikes during community events that can overwhelm monolithic architectures.",
      "Listings and marketplace flows that must feel instant on mobile networks.",
      "Culture-rich content requiring fast search without sacrificing local identity.",
      "Scaling as new neighborhoods, vendors, and content creators join the platform.",
    ],
    solutions: [
      {
        title: "Community Discovery Platforms",
        description:
          "Neighborhood feeds, event calendars, and local content hubs designed for mobile-first engagement and regional identity.",
        icon: "users",
      },
      {
        title: "Hyperlocal Marketplaces",
        description:
          "Vendor listings, transaction flows, and inventory management built for local commerce — not global e-commerce templates.",
        icon: "shopping_cart",
      },
      {
        title: "Real-Time Engagement Systems",
        description:
          "Notifications, moderation queues, and async workers that keep community interactions responsive under unpredictable load.",
        icon: "zap",
      },
      {
        title: "Regional Content Portals",
        description:
          "Searchable archives of culture, news, and local stories with SEO foundations and performance budgets for content-heavy pages.",
        icon: "newspaper",
      },
    ],
    solutions_subtitle:
      "Engineering for communities that expect real-time, mobile-first experiences anchored in local culture.",
    highlights: [
      "Edge caching and read replicas for spike-ready community traffic",
      "Mobile-first UI with sub-second perceived load on key templates",
      "Event-driven architecture for notifications and async moderation",
      "Modular product foundation for iterative neighborhood expansion",
    ],
    case_study_slug: "the-chattala",
    cta_title: "Building a community or hyperlocal product?",
    cta_subtitle:
      "Tell us about your region, audience, and growth plan — we will map architecture and delivery to your launch timeline.",
  },

  "ecommerce-retail": {
    slug: "ecommerce-retail",
    category: "E-Commerce",
    name: "E-Commerce & Retail",
    icon: "shopping_cart",
    theme: {
      bg: "bg-amber-50",
      border: "border-amber-200/90",
      icon_bg: "bg-amber-100",
      icon_color: "text-amber-600",
    },
    hero_eyebrow: "INDUSTRY · E-COMMERCE",
    hero_title: "Storefronts and Inventory Systems Built to Convert",
    hero_subtitle:
      "From catalog-heavy retail to checkout optimization — we engineer e-commerce experiences that turn browsers into buyers across every device.",
    overview:
      "E-commerce in Bangladesh and South Asia carries unique constraints: mobile-first shoppers, local payment gateways, COD workflows, and catalog sizes that punish slow search. A storefront that looks polished but loads slowly or breaks checkout will lose revenue before analytics can explain why.",
    overview_extra:
      "We build conversion-focused storefronts with performant catalog search, inventory sync, and checkout flows engineered for the payment methods your customers actually use. Whether you are launching a D2C brand, modernizing a wholesale operation, or connecting online and offline inventory, we design for maintainability and measurable conversion impact.",
    challenges: [
      "Slow catalog search and product pages that increase bounce on mobile networks.",
      "Checkout friction from payment gateway integration and order confirmation flows.",
      "Inventory drift between online storefronts and warehouse or POS systems.",
      "Scaling product catalogs without degrading admin workflows or page performance.",
    ],
    solutions: [
      {
        title: "Custom Storefronts",
        description:
          "Performance-optimized product catalogs, filters, and PDP templates designed for mobile conversion — not theme bloat.",
        icon: "shopping_cart",
      },
      {
        title: "Checkout & Payment Flows",
        description:
          "Gateway integration, COD handling, order confirmation, and abandoned-cart recovery tuned to regional payment behavior.",
        icon: "credit_card",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Admin dashboards, stock sync, and fulfillment workflows that keep operations aligned as catalog size grows.",
        icon: "layers",
      },
      {
        title: "Marketplace & Multi-Vendor Platforms",
        description:
          "Vendor onboarding, commission logic, and split fulfillment for marketplaces scaling beyond a single merchant.",
        icon: "users",
      },
    ],
    solutions_subtitle:
      "Full-stack e-commerce engineering — from storefront UX to back-office inventory and payment integration.",
    highlights: [
      "Mobile-first catalog and checkout tuned for Bangladesh shoppers",
      "Payment gateway integration with COD and digital wallet support",
      "Search and filtering optimized for large product catalogs",
      "Admin tooling your operations team can own after launch",
    ],
    cta_title: "Launching or scaling an online store?",
    cta_subtitle:
      "Share your catalog size, payment setup, and timeline — we will propose a scoped path from MVP to production-ready storefront.",
  },

  "healthcare-professional": {
    slug: "healthcare-professional",
    category: "Healthcare",
    name: "Healthcare & Professional Services",
    icon: "stethoscope",
    theme: {
      bg: "bg-emerald-50",
      border: "border-emerald-200/90",
      icon_bg: "bg-emerald-100",
      icon_color: "text-emerald-600",
    },
    hero_eyebrow: "INDUSTRY · HEALTHCARE",
    hero_title: "Trust-First Digital Presence for Practitioners and Clinics",
    hero_subtitle:
      "Patients choose providers they can find, understand, and trust online — we build web presence and workflow tools for practices whose reputation lives on the internet.",
    overview:
      "Healthcare and professional services share a common digital challenge: credibility is the product. A slow website, confusing booking flow, or outdated portfolio undermines the expertise you deliver in person. Practitioners, clinics, legal firms, and consultancies need digital experiences that communicate authority without sacrificing accessibility or speed.",
    overview_extra:
      "We engineer patient-facing portals, appointment workflows, practitioner profiles, and content systems that prioritize trust signals — clear credentials, readable service descriptions, fast mobile load, and secure handling of inquiry data. For practices ready to move beyond brochure sites, we build custom workflow tools that reduce admin overhead without compromising patient privacy.",
    challenges: [
      "Brochure websites that fail to convert inquiries into booked appointments.",
      "Patient or client data handling that requires careful security and access control.",
      "Content management for service pages, team profiles, and educational resources.",
      "Mobile discovery — most patients search and contact providers from their phones.",
    ],
    solutions: [
      {
        title: "Practitioner & Clinic Websites",
        description:
          "Premium web presence with service pages, team profiles, and trust-first design that reflects clinical or professional credibility.",
        icon: "stethoscope",
      },
      {
        title: "Appointment & Inquiry Workflows",
        description:
          "Booking forms, callback requests, and intake flows that reduce friction from first visit to scheduled consultation.",
        icon: "calendar",
      },
      {
        title: "Patient & Client Portals",
        description:
          "Secure portals for document sharing, status updates, and self-service — with role-based access and audit-friendly design.",
        icon: "shield",
      },
      {
        title: "Content & SEO Foundations",
        description:
          "Service-area pages, FAQ structures, and technical SEO so the right patients and clients find you through search.",
        icon: "search",
      },
    ],
    solutions_subtitle:
      "Digital experiences for healthcare providers and professional practices — from credibility to conversion.",
    highlights: [
      "Trust-first design with fast mobile performance for patient discovery",
      "Secure inquiry and booking workflows with privacy-conscious data handling",
      "CMS structures your team can update without developer dependency",
      "SEO foundations for local and service-based search visibility",
    ],
    cta_title: "Modernizing your practice's digital presence?",
    cta_subtitle:
      "Tell us about your services, audience, and current site — we will recommend a path from web presence to workflow automation.",
  },

  "saas-startups": {
    slug: "saas-startups",
    category: "SaaS",
    name: "SaaS & Startups",
    icon: "rocket",
    theme: {
      bg: "bg-indigo-50",
      border: "border-indigo-200/90",
      icon_bg: "bg-indigo-100",
      icon_color: "text-indigo-600",
    },
    hero_eyebrow: "INDUSTRY · SAAS",
    hero_title: "MVPs and Product Foundations Engineered for Speed",
    hero_subtitle:
      "Startups need software that ships fast, scales cleanly, and hands off to an internal team — we build MVPs and SaaS foundations with all three in mind.",
    overview:
      "Early-stage SaaS and startup products face a narrow window: validate with real users before runway or market timing closes the opportunity. That pressure often leads to shortcuts — no tests, tangled architecture, vendor lock-in — that become expensive to unwind after product-market fit signals arrive.",
    overview_extra:
      "Inievo delivers MVPs in 8–12 week phases with automated testing, documented architecture, and codebases your team can own from day one. We focus on the core workflow that proves value, deferring nice-to-haves without sacrificing the foundation you will need when users, features, and infrastructure demands grow.",
    challenges: [
      "Pressure to launch before architecture decisions create long-term technical debt.",
      "Feature scope creep that delays validation of the core product hypothesis.",
      "Auth, billing, and multi-tenancy foundations that are easy to get wrong early.",
      "Need for clean handoff when the founding team hires its first engineers.",
    ],
    solutions: [
      {
        title: "MVP Development",
        description:
          "Focused 8–12 week delivery of market-ready MVPs with phased milestones, automated testing, and production deployment.",
        icon: "rocket",
      },
      {
        title: "SaaS Product Architecture",
        description:
          "Multi-tenant foundations, auth, subscription logic, and API design that scale without rewrites after initial traction.",
        icon: "layers",
      },
      {
        title: "Dashboard & Admin Experiences",
        description:
          "Operator dashboards, user management, and analytics views that give founders visibility into product usage from launch.",
        icon: "bar_chart",
      },
      {
        title: "Team Handoff & Documentation",
        description:
          "Clean codebase, CI/CD pipelines, and architecture docs so your first hires onboard without reverse-engineering decisions.",
        icon: "book_open",
      },
    ],
    solutions_subtitle:
      "Rapid product engineering for founders who need validation speed without sacrificing long-term code quality.",
    highlights: [
      "Phased MVP delivery with clear milestones and production deployment",
      "Auth, billing, and multi-tenant patterns built in from the start",
      "Automated testing and CI/CD for confident iteration post-launch",
      "Documentation and handoff designed for your first engineering hires",
    ],
    cta_title: "Ready to validate your product idea?",
    cta_subtitle:
      "Share your hypothesis, target users, and timeline — we will scope an MVP path that balances speed with engineering quality.",
  },

  "enterprise-institutions": {
    slug: "enterprise-institutions",
    category: "Enterprise",
    name: "Enterprise & Institutions",
    icon: "building",
    theme: {
      bg: "bg-blue-50",
      border: "border-blue-200/90",
      icon_bg: "bg-blue-100",
      icon_color: "text-blue-600",
    },
    hero_eyebrow: "INDUSTRY · ENTERPRISE",
    hero_title: "Custom Platforms for Organizations with Complex Operational Logic",
    hero_subtitle:
      "Institutions and enterprises need integrations, modernization paths, and uptime guarantees — we engineer custom platforms that respect existing systems and operational reality.",
    overview:
      "Enterprise and institutional software is defined by complexity: legacy systems that cannot be replaced overnight, compliance requirements, role hierarchies, and workflows that evolved over years of operational practice. Off-the-shelf software often forces organizations to change how they work; custom engineering adapts software to how the organization already operates.",
    overview_extra:
      "Inievo partners with institutions on custom platforms, ERP integrations, intranet portals, field force tools, and legacy modernization — always with uptime, data integrity, and phased migration in mind. We design for the teams who will maintain the system after launch, not just the demo deadline.",
    challenges: [
      "Legacy systems that must stay online while new platforms are phased in.",
      "Integration sprawl across finance, HR, inventory, and customer-facing channels.",
      "Role-based access and audit requirements across large, hierarchical organizations.",
      "Operational workflows too specific for generic SaaS to accommodate without workarounds.",
    ],
    solutions: [
      {
        title: "Custom Enterprise Platforms",
        description:
          "Bespoke applications for operations, reporting, and internal workflows — built around your org structure, not a vendor's.",
        icon: "building",
      },
      {
        title: "System Integration & ERP Connectivity",
        description:
          "API bridges, data sync, and middleware connecting finance, inventory, HR, and customer systems into coherent flows.",
        icon: "layers",
      },
      {
        title: "Intranet & Collaboration Portals",
        description:
          "Document workflows, team directories, and internal communication hubs with SharePoint or custom CMS foundations.",
        icon: "users",
      },
      {
        title: "Legacy Modernization",
        description:
          "Phased migration from monoliths to modular architecture — without sacrificing uptime or data integrity during transition.",
        icon: "refresh",
      },
    ],
    solutions_subtitle:
      "Enterprise-grade engineering for institutions that need custom logic, reliable integrations, and phased modernization.",
    highlights: [
      "Phased migration paths that keep legacy systems online during transition",
      "ERP and third-party integration with tested data sync and error handling",
      "Role-based access control and audit-friendly system design",
      "DevOps and observability for production confidence at scale",
    ],
    cta_title: "Planning an enterprise platform or modernization?",
    cta_subtitle:
      "Describe your current systems, constraints, and goals — we will propose a phased engineering approach with clear milestones.",
  },

  "media-publishing": {
    slug: "media-publishing",
    category: "Media",
    name: "Media & Publishing",
    icon: "newspaper",
    theme: {
      bg: "bg-rose-50",
      border: "border-rose-200/90",
      icon_bg: "bg-rose-100",
      icon_color: "text-rose-600",
    },
    hero_eyebrow: "INDUSTRY · MEDIA",
    hero_title: "Content Portals That Perform Under Traffic Spikes",
    hero_subtitle:
      "Editorial teams need publishing workflows, SEO foundations, and infrastructure that stays fast when stories break — we build media platforms for all three.",
    overview:
      "Media and publishing products carry a dual burden: editorial teams need efficient content workflows, and readers expect instant page loads even when traffic spikes on breaking news. A CMS that slows editors down or a frontend that collapses under viral traffic damages both revenue and credibility.",
    overview_extra:
      "We engineer content-heavy portals with editorial dashboards, category architecture, SEO-ready templates, and edge caching strategies that absorb traffic surges. Whether you are launching a regional news outlet, a magazine, or a corporate publishing hub, we design for the editorial rhythm and reader expectations of your audience.",
    challenges: [
      "Traffic spikes on breaking stories that overwhelm uncached or monolithic frontends.",
      "Editorial workflows slowed by clunky CMS interfaces and manual publishing steps.",
      "SEO and structured data requirements for discoverability in competitive search landscapes.",
      "Ad placement, newsletter, and subscription flows that must not degrade page performance.",
    ],
    solutions: [
      {
        title: "Editorial CMS & Publishing Workflows",
        description:
          "Content management tuned for editorial teams — drafts, scheduling, categories, and media handling without developer bottlenecks.",
        icon: "edit",
      },
      {
        title: "High-Performance Content Frontends",
        description:
          "Edge-cached article templates, optimized images, and progressive loading for content-heavy pages under viral traffic.",
        icon: "zap",
      },
      {
        title: "SEO & Discovery Architecture",
        description:
          "Structured data, sitemaps, category pages, and internal linking foundations for sustainable organic growth.",
        icon: "search",
      },
      {
        title: "Subscription & Newsletter Integration",
        description:
          "Paywall logic, email capture, and reader engagement flows integrated without sacrificing core page speed.",
        icon: "mail",
      },
    ],
    solutions_subtitle:
      "Publishing infrastructure for editorial teams who need speed at the desk and speed for readers.",
    highlights: [
      "Edge caching and CDN strategy for breaking-news traffic spikes",
      "Editorial CMS workflows that reduce time from draft to publish",
      "Technical SEO and structured data for search discoverability",
      "Performance budgets that protect Core Web Vitals under ad load",
    ],
    cta_title: "Launching or rebuilding a media platform?",
    cta_subtitle:
      "Share your editorial model, audience size, and monetization plan — we will architect a publishing stack that scales with your content.",
  },

  "software-ites": {
    slug: "software-ites",
    category: "Software",
    name: "Software & ITES",
    icon: "code",
    theme: {
      bg: "bg-teal-50",
      border: "border-teal-200/90",
      icon_bg: "bg-teal-100",
      icon_color: "text-teal-600",
    },
    hero_eyebrow: "INDUSTRY · SOFTWARE",
    hero_title: "Product Engineering Partnerships for Scaling Software Companies",
    hero_subtitle:
      "Software and ITES firms need delivery velocity, clean architecture, and teams that integrate with existing engineering culture — we partner as an extension of your product org.",
    overview:
      "Software companies and ITES providers face a recurring challenge: feature demand outpaces internal capacity, but outsourcing often produces code that does not match internal standards or requires expensive rework. The right engineering partner accelerates delivery while respecting your architecture, review processes, and quality bar.",
    overview_extra:
      "Inievo embeds with software teams on feature development, infrastructure scaling, QA automation, and platform modernization. We work in your stack, follow your conventions, and deliver code that passes your review — so you scale output without scaling management overhead or accumulating integration debt.",
    challenges: [
      "Feature backlog growing faster than internal engineering capacity can absorb.",
      "Technical debt from rushed releases that slows future development velocity.",
      "Infrastructure scaling bottlenecks as user base and data volume grow.",
      "QA gaps that increase regression risk with every release cycle.",
    ],
    solutions: [
      {
        title: "Feature Development Squads",
        description:
          "Embedded engineering capacity for product features — integrated with your sprint cadence, code review, and deployment pipeline.",
        icon: "code",
      },
      {
        title: "Platform & Infrastructure Scaling",
        description:
          "Cloud architecture, database optimization, and DevOps pipelines that keep pace with product growth and reliability SLAs.",
        icon: "cloud",
      },
      {
        title: "QA & Release Automation",
        description:
          "Automated test suites, CI/CD hardening, and release processes that reduce regression risk across rapid iteration.",
        icon: "check",
      },
      {
        title: "Architecture Review & Modernization",
        description:
          "Stack assessments, refactoring roadmaps, and modularization paths that improve velocity without big-bang rewrites.",
        icon: "layers",
      },
    ],
    solutions_subtitle:
      "Engineering partnerships for software companies scaling features, infrastructure, and delivery confidence.",
    highlights: [
      "Embedded squads that follow your stack, conventions, and review process",
      "Cloud and DevOps scaling for growing user bases and data volumes",
      "Automated QA and CI/CD to protect release velocity",
      "Architecture guidance that reduces debt without disruptive rewrites",
    ],
    cta_title: "Need to scale your engineering output?",
    cta_subtitle:
      "Tell us about your stack, backlog, and team structure — we will propose an engagement model that fits your delivery rhythm.",
  },
};

export const INDUSTRY_SLUGS = Object.keys(INDUSTRY_LANDINGS);

export function getIndustryLanding(slug: string): IndustryLanding | undefined {
  return INDUSTRY_LANDINGS[slug];
}
