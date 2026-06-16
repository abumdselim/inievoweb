/** Detailed service landing content for /services/[slug]. */

import type { IndustryLanding } from "./industry-landings";

export const OFFERING_TO_SERVICE_SLUG: Record<string, string> = {
  layers: "custom-software",
  cloud: "cloud-devops",
  brain: "ai-automation",
  palette: "ui-ux-design",
};

export function serviceHrefForOffering(offering: { icon: string; asset_icon?: string }): string {
  const key = offering.asset_icon ?? offering.icon;
  const slug = OFFERING_TO_SERVICE_SLUG[key];
  return slug ? `/services/${slug}` : "/services";
}

export const SERVICE_LANDINGS: Record<string, IndustryLanding> = {
  "custom-software": {
    slug: "custom-software",
    category: "Custom Software",
    name: "Custom Software Development",
    icon: "layers",
    theme: {
      bg: "bg-sky-50",
      border: "border-sky-200/90",
      icon_bg: "bg-sky-100",
      icon_color: "text-sky-600",
    },
    hero_eyebrow: "SERVICE · CUSTOM SOFTWARE",
    hero_title: "Custom Software Development for Global Enterprises",
    hero_subtitle:
      "Hire a software development partner that architects bespoke platforms, APIs, and internal tools — from MVP to multi-team product roadmaps, with 100% IP ownership and milestone-based delivery.",
    overview:
      "Off-the-shelf software rarely fits how your business actually operates. Inievo designs and builds custom applications aligned to your workflows — web platforms, internal portals, API ecosystems, and mobile-ready frontends that your engineering team can extend for years.",
    overview_extra:
      "We serve startups validating product-market fit and international enterprises modernizing legacy systems. Engagements typically run 8–16 weeks for an MVP, with phased releases so stakeholders see progress early — not only at the end.",
    challenges: [
      "Spreadsheets and SaaS tool sprawl that break down as teams and data volumes grow.",
      "Legacy systems that cannot scale without risky big-bang rewrites.",
      "Offshore vendors who ship code your team cannot maintain or extend.",
      "MVPs built on shortcuts that become expensive to rebuild within a year.",
    ],
    solutions: [
      {
        title: "Greenfield Product Engineering",
        description:
          "Full-stack platforms from discovery through launch — architecture, APIs, admin tools, and production deployment with CI/CD from day one.",
        icon: "layers",
      },
      {
        title: "Legacy Modernization",
        description:
          "Incremental migration paths from monoliths to modular systems — zero-downtime cutovers, data migration, and parallel-run validation.",
        icon: "refresh",
      },
      {
        title: "API & Integration Layers",
        description:
          "REST and GraphQL APIs that connect CRM, ERP, payment, and third-party services into one coherent operational backbone.",
        icon: "code",
      },
      {
        title: "Dedicated Engineering Squads",
        description:
          "Embedded teams that work in your timezone rhythm — sprint planning, code review, and handoff documentation included.",
        icon: "users",
      },
    ],
    solutions_subtitle:
      "End-to-end custom software development for teams who need more than a template or a one-off vendor.",
    highlights: [
      "Microservices or modular monolith architecture — chosen for your stage, not our preference",
      "Type-safe APIs with automated testing and CI/CD from the first production sprint",
      "Role-based access, audit logging, and compliance-ready design patterns",
      "8–16 week MVP range with milestone-based releases and full IP transfer",
    ],
    case_study_slug: "puc-pro",
    cta_title: "Ready to build custom software?",
    cta_subtitle:
      "Share your domain, timeline, and team structure — we respond within one business day with a scoped next step.",
  },

  "cloud-devops": {
    slug: "cloud-devops",
    category: "Cloud & DevOps",
    name: "Cloud Infrastructure & DevOps",
    icon: "cloud",
    theme: {
      bg: "bg-blue-50",
      border: "border-blue-200/90",
      icon_bg: "bg-blue-100",
      icon_color: "text-blue-600",
    },
    hero_eyebrow: "SERVICE · CLOUD & DEVOPS",
    hero_title: "Cloud & DevOps Engineering for Production-Grade Systems",
    hero_subtitle:
      "AWS-native infrastructure, CI/CD pipelines, Kubernetes, and observability — engineered so international teams ship fast, deploy safely, and sleep through traffic spikes.",
    overview:
      "Slow releases, fragile deploys, and opaque production incidents drain engineering velocity. Inievo builds cloud environments designed for resilience, auto-scaling, and cost efficiency — infrastructure your team can operate with confidence.",
    overview_extra:
      "We work with product companies scaling globally and enterprises consolidating fragmented cloud setups. Every engagement includes documentation, runbooks, and knowledge transfer so you are not locked into perpetual managed services.",
    challenges: [
      "Manual deploys that cause downtime during peak business hours.",
      "Cloud bills growing faster than revenue without clear cost attribution.",
      "No observability — teams debug production issues by guesswork.",
      "Infrastructure drift between staging and production environments.",
    ],
    solutions: [
      {
        title: "AWS Infrastructure as Code",
        description:
          "Terraform and CDK environments with reproducible staging and production — version-controlled, peer-reviewed, and disaster-recovery ready.",
        icon: "cloud",
      },
      {
        title: "CI/CD & Zero-Downtime Deploys",
        description:
          "Automated pipelines with rollback strategies, preview environments, and gated releases your product team can trust.",
        icon: "refresh",
      },
      {
        title: "Kubernetes & Container Platforms",
        description:
          "Container hardening, orchestration, and autoscaling policies tuned for your traffic patterns and compliance needs.",
        icon: "layers",
      },
      {
        title: "Observability & SRE Practices",
        description:
          "Metrics, logs, traces, and alerting that surface problems before customers notice — with SLA dashboards leadership can read.",
        icon: "bar_chart",
      },
    ],
    solutions_subtitle:
      "Cloud and DevOps services that keep releases fast, reversible, and resilient under real-world load.",
    highlights: [
      "Multi-region failover and disaster recovery planning for global availability",
      "Zero-downtime deploy patterns from the first production sprint",
      "Cost optimization dashboards with right-sizing recommendations",
      "Security-first defaults: encrypted data, least-privilege IAM, dependency scanning",
    ],
    case_study_slug: "the-chattala",
    cta_title: "Need a cloud strategy that scales?",
    cta_subtitle:
      "Tell us about your stack, traffic patterns, and release pain points — we will propose a practical DevOps roadmap.",
  },

  "ai-automation": {
    slug: "ai-automation",
    category: "AI & Automation",
    name: "AI & Data Automation",
    icon: "brain",
    theme: {
      bg: "bg-violet-50",
      border: "border-violet-200/90",
      icon_bg: "bg-violet-100",
      icon_color: "text-violet-600",
    },
    hero_eyebrow: "SERVICE · AI & AUTOMATION",
    hero_title: "AI Automation & Intelligent Workflow Engineering",
    hero_subtitle:
      "Practical AI integrations with guardrails — LLM workflows, document automation, support triage, and data pipelines that deliver measurable ROI for international teams.",
    overview:
      "AI hype is everywhere; reliable automation is rare. Inievo integrates LLMs and workflow automation where they reduce cost and cycle time — with human review paths, evaluation metrics, and security boundaries your compliance team can approve.",
    overview_extra:
      "We focus on high-leverage targets: document intake, customer support triage, internal ops reporting, and knowledge retrieval. Phased 6–10 week integrations let you validate ROI before expanding scope.",
    challenges: [
      "Manual document processing that bottlenecks operations and support teams.",
      "Chatbot pilots that hallucinate and erode customer trust.",
      "Data siloed across tools with no single source of truth for leadership.",
      "Teams unsure which AI use cases justify investment versus experimentation.",
    ],
    solutions: [
      {
        title: "LLM Integration & RAG Systems",
        description:
          "Retrieval-augmented generation over your documents and knowledge base — with guardrails, citation, and human escalation paths.",
        icon: "brain",
      },
      {
        title: "Workflow Automation",
        description:
          "Connect CRM, ERP, email, and internal tools into automated pipelines that eliminate repetitive handoffs.",
        icon: "zap",
      },
      {
        title: "Document Intelligence",
        description:
          "Extract, classify, and route documents — invoices, forms, applications — with review queues for edge cases.",
        icon: "book_open",
      },
      {
        title: "Analytics & ETL Pipelines",
        description:
          "Real-time data pipelines and dashboards that turn operational data into decisions leadership can act on.",
        icon: "bar_chart",
      },
    ],
    solutions_subtitle:
      "AI and automation engineering with guardrails — built for production, not demo day.",
    highlights: [
      "Model evaluation, monitoring, and continuous improvement baked into delivery",
      "Guardrailed outputs with audit trails for regulated and enterprise environments",
      "Phased 6–10 week integrations focused on measurable ROI targets",
      "Integration with existing stacks — no rip-and-replace required",
    ],
    case_study_slug: "puc-pro",
    cta_title: "Exploring AI automation for your team?",
    cta_subtitle:
      "Describe your workflows and pain points — we will identify high-leverage automation targets and a realistic delivery plan.",
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    category: "UI/UX Design",
    name: "Digital Branding & UI/UX Design",
    icon: "palette",
    theme: {
      bg: "bg-orange-50",
      border: "border-orange-200/90",
      icon_bg: "bg-orange-100",
      icon_color: "text-orange-600",
    },
    hero_eyebrow: "SERVICE · UI/UX DESIGN",
    hero_title: "UI/UX Design & Digital Brand Systems That Convert",
    hero_subtitle:
      "Research-backed interfaces, enterprise design systems, and conversion-focused experiences — for international brands that need credibility and measurable business outcomes.",
    overview:
      "Great engineering with poor UX loses users before features matter. Inievo combines product design with implementation discipline — design systems, responsive interfaces, and brand languages that engineering teams can ship consistently.",
    overview_extra:
      "We design for professional services, SaaS products, and enterprise portals where trust and clarity drive conversion. Accessibility-first patterns and performance budgets are non-negotiable in every deliverable.",
    challenges: [
      "Inconsistent UI across pages that undermines brand credibility with enterprise buyers.",
      "Designs that look polished in Figma but break during development handoff.",
      "Low conversion on marketing sites despite strong traffic and ad spend.",
      "Products that fail accessibility and mobile usability audits.",
    ],
    solutions: [
      {
        title: "Enterprise Design Systems",
        description:
          "Component libraries, tokens, and documentation that keep multi-team products visually and behaviorally consistent.",
        icon: "layers",
      },
      {
        title: "UX Research & Prototyping",
        description:
          "User flows, wireframes, and tested prototypes validated with real stakeholders before engineering begins.",
        icon: "search",
      },
      {
        title: "Conversion-Focused Web Design",
        description:
          "Marketing sites and landing pages engineered for trust signals, clear CTAs, and Core Web Vitals performance.",
        icon: "arrow_right",
      },
      {
        title: "Brand Identity & Visual Language",
        description:
          "Logo usage, typography, color systems, and guidelines that scale across web, product, and sales collateral.",
        icon: "palette",
      },
    ],
    solutions_subtitle:
      "Premium UI/UX design paired with engineering delivery — so what ships matches what was promised.",
    highlights: [
      "Accessibility-first interfaces (WCAG-aware patterns)",
      "Design-to-code handoff with production-ready components",
      "Core Web Vitals and mobile performance budgets in every layout",
      "Research-backed UX for B2B, professional, and commercial audiences",
    ],
    cta_title: "Need a design system or product redesign?",
    cta_subtitle:
      "Share your audience, brand goals, and timeline — we will outline a design and delivery approach within one business day.",
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_LANDINGS);

export function getServiceLanding(slug: string): IndustryLanding | undefined {
  return SERVICE_LANDINGS[slug];
}
