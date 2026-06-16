export type BlogSection =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "ul"; items: readonly string[] };

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  badge: string;
  href: string;
  thumbnail: string;
  published: string;
  readTime: string;
  author: string;
  sections: readonly BlogSection[];
};

export const BLOG_POSTS = [
  {
    slug: "online-shop-real-website-bangladesh",
    category: "SME Growth",
    title: "Why Every Online Shop in Bangladesh Needs a Real Website",
    excerpt:
      "Social platforms are rented audience. A fast, credible website helps local brands survive algorithm shifts and earn trust from buyers who search before they purchase.",
    badge: "Perspective",
    href: "/blog/online-shop-real-website-bangladesh",
    thumbnail: "/generated/blog-sme-website.svg",
    published: "November 12, 2025",
    readTime: "6 min read",
    author: "Inievo Editorial",
    sections: [
      {
        type: "p",
        content:
          "For many Bangladeshi retailers, a Facebook page or marketplace listing has become the default storefront. It works until it does not — when reach drops, policies change, or a buyer asks for proof that the business is legitimate enough to pay online.",
      },
      {
        type: "h2",
        content: "Owned presence beats rented reach",
      },
      {
        type: "p",
        content:
          "A dedicated website gives SMEs control over brand narrative, product discovery, checkout flows, and customer data. Search engines index what you publish. Payment partners trust a domain with clear policies. Enterprise buyers and distributors expect it.",
      },
      {
        type: "ul",
        items: [
          "Buyers compare prices and reviews on Google before they message a page.",
          "Campaign landing pages convert better when load time and mobile UX are intentional.",
          "A credible site reduces friction for B2B inquiries, wholesale orders, and repeat purchases.",
        ],
      },
      {
        type: "h2",
        content: "What a credible SME website actually needs",
      },
      {
        type: "p",
        content:
          "You do not need a bloated build on day one. You need a fast mobile experience, clear product or service pages, trust signals, and analytics so marketing spend can be measured. That foundation supports catalog growth, regional SEO, and integrations later.",
      },
      {
        type: "p",
        content:
          "Inievo typically starts with performance budgets, structured content, and a stack teams can extend — so the first version ships quickly without becoming a dead-end prototype.",
      },
    ],
  },
  {
    slug: "custom-software-readiness-signals",
    category: "Product Strategy",
    title: "Seven Signals Your Business Is Ready for Custom Software",
    excerpt:
      "Spreadsheets, manual handoffs, and tool sprawl are early warnings. Here is how to know when bespoke software is the smarter long-term investment.",
    badge: "Perspective",
    href: "/blog/custom-software-readiness-signals",
    thumbnail: "/generated/blog-custom-software.svg",
    published: "October 28, 2025",
    readTime: "7 min read",
    author: "Inievo Editorial",
    sections: [
      {
        type: "p",
        content:
          "Most teams tolerate operational friction long after it starts costing real money. The question is not whether software can help — it is whether your processes, volume, and risk profile justify a purpose-built system instead of another SaaS subscription.",
      },
      {
        type: "h2",
        content: "Seven signals we see before greenfield builds",
      },
      {
        type: "ul",
        items: [
          "Critical workflows span three or more disconnected tools with manual copy-paste between them.",
          "Reporting takes days because data lives in spreadsheets owned by different people.",
          "Customer or student experience breaks at peak load because off-the-shelf limits were hit months ago.",
          "Compliance, audit, or IP requirements cannot be met with generic platforms.",
          "The product itself is the business — not a support function around someone else's software.",
          "Leadership has a 12–24 month roadmap that generic tools keep blocking.",
          "Engineering debt in no-code hacks now costs more than a focused build would.",
        ],
      },
      {
        type: "h2",
        content: "Build when the cost of delay exceeds build cost",
      },
      {
        type: "p",
        content:
          "Custom software is not a vanity project. It is appropriate when manual work scales linearly with revenue, when errors have financial or reputational impact, or when differentiation depends on workflow nobody else ships out of the box.",
      },
      {
        type: "p",
        content:
          "A disciplined discovery phase — scope, integrations, ownership model, and MVP boundaries — keeps first releases focused. That is how Inievo helps teams avoid both perpetual spreadsheet operations and over-scoped version-one launches.",
      },
    ],
  },
  {
    slug: "hyperlocal-chattogram-products",
    category: "Community",
    title: "Building Hyperlocal Products for Chattogram and Beyond",
    excerpt:
      "What we learned shipping The Chattala — and why community platforms need performance architecture as much as empathy in design.",
    badge: "From Inievo Labs",
    href: "/blog/hyperlocal-chattogram-products",
    thumbnail: "/generated/blog-hyperlocal-chattogram.svg",
    published: "October 3, 2025",
    readTime: "8 min read",
    author: "Inievo Labs",
    sections: [
      {
        type: "p",
        content:
          "Hyperlocal products fail in two predictable ways: they feel generic, or they collapse under the traffic spikes that prove product-market fit. The Chattala gave Inievo Labs a live case study in balancing regional identity with infrastructure that stays calm when the community shows up all at once.",
      },
      {
        type: "h2",
        content: "Local relevance is a product requirement",
      },
      {
        type: "p",
        content:
          "Community platforms win when listings, language, categories, and discovery reflect how people actually navigate a city — not when a global template is skinned with local photography. Design empathy and domain modeling belong in the same backlog as API design.",
      },
      {
        type: "h2",
        content: "Architecture decisions that matter early",
      },
      {
        type: "ul",
        items: [
          "Edge-friendly read paths for high-traffic community and marketplace pages.",
          "Search and indexing tuned for listings, vendors, and event-driven spikes.",
          "Background workers for notifications, moderation, and async jobs.",
          "Mobile-first performance budgets because regional users often browse on mid-tier devices and networks.",
        ],
      },
      {
        type: "p",
        content:
          "The goal is not novelty for its own sake. It is a platform Chattogram communities can trust daily — and that Inievo can extend as neighborhoods, vendors, and content types grow without rewriting the core.",
      },
      {
        type: "p",
        content:
          "Read the full case study for architecture detail, delivery outcomes, and the technical stack behind The Chattala.",
      },
    ],
  },
  {
    slug: "ai-automation-practical-roi",
    category: "AI & Automation",
    title: "Where AI Automation Delivers Practical ROI for Bangladeshi Teams",
    excerpt:
      "Not every workflow needs a chatbot. Here is how to pick high-leverage automation targets — support triage, document intake, and ops reporting — without overbuilding.",
    badge: "Perspective",
    href: "/blog/ai-automation-practical-roi",
    thumbnail: "/generated/blog-ai-automation.svg",
    published: "September 18, 2025",
    readTime: "7 min read",
    author: "Inievo Editorial",
    sections: [
      {
        type: "p",
        content:
          "AI headlines often skip the operational question: which repetitive workflows actually return time, accuracy, or revenue when automated? For Bangladeshi product and ops teams, the wins are usually narrow, measurable, and embedded inside existing tools — not standalone novelty demos.",
      },
      {
        type: "h2",
        content: "Start with workflows that already have clear inputs",
      },
      {
        type: "p",
        content:
          "Support ticket triage, invoice and document intake, lead qualification, and internal reporting share a pattern — structured inputs, repeated decisions, and human review at the edge. These are strong candidates for guardrailed automation because success can be measured in handle time, error rate, or throughput.",
      },
      {
        type: "ul",
        items: [
          "Route inbound requests by intent before a human opens the queue.",
          "Extract fields from PDFs and forms with human approval on exceptions.",
          "Summarize long threads for handoffs between sales, ops, and engineering.",
          "Generate draft responses your team edits — never auto-send without policy.",
        ],
      },
      {
        type: "h2",
        content: "Build guardrails before you scale usage",
      },
      {
        type: "p",
        content:
          "Practical ROI depends on reliability. Logging, evaluation sets, fallback paths, and role-based access should ship with the first workflow — not after a pilot stalls. Inievo typically pairs automation with observability so teams can see cost, latency, and failure modes per step.",
      },
      {
        type: "p",
        content:
          "The goal is not to replace judgment. It is to remove friction from the work your team already does well — so they spend more time on decisions that actually need a human.",
      },
    ],
  },
  {
    slug: "edtech-mobile-performance-bangladesh",
    category: "EdTech",
    title: "Designing EdTech Platforms for Bangladesh's Mobile-First Reality",
    excerpt:
      "Students do not browse your LMS on fiber Wi-Fi in a quiet office. Here is how to design document-heavy, exam-season products that stay fast on mid-tier phones and uneven networks.",
    badge: "Deep dive",
    href: "/blog/edtech-mobile-performance-bangladesh",
    thumbnail: "/generated/blog-edtech-mobile.svg",
    published: "August 22, 2025",
    readTime: "11 min read",
    author: "Inievo Editorial",
    sections: [
      {
        type: "p",
        content:
          "EdTech products in Bangladesh compete on content quality, pricing, and trust — but retention often dies on something less glamorous: a PDF that takes twelve seconds to open, a login form that times out on 4G, or a results page that crashes when half a campus refreshes at once. Students and parents judge reliability before they judge curriculum depth.",
      },
      {
        type: "h2",
        content: "Assume mobile, intermittent, and impatient users",
      },
      {
        type: "p",
        content:
          "Desktop-first design still sneaks into EdTech roadmaps because stakeholders review prototypes on large monitors with stable connections. The majority of learners in Bangladesh interact on Android phones, often with limited storage, background tab churn, and network quality that swings between acceptable and unusable within a single commute.",
      },
      {
        type: "p",
        content:
          "That means performance is a product feature, not an engineering afterthought. Time-to-first-interaction, readable text without horizontal scroll, and predictable navigation matter as much as syllabus coverage. If a student cannot open tonight's notes before class tomorrow, the platform fails regardless of how comprehensive the backend catalog is.",
      },
      {
        type: "ul",
        items: [
          "Target sub-three-second first meaningful paint on 4G for core read paths.",
          "Design thumb-friendly navigation — students operate one-handed between classes.",
          "Avoid heavy hero videos and auto-playing media on landing and dashboard pages.",
          "Test on mid-tier devices, not only flagship phones used by product teams.",
        ],
      },
      {
        type: "h2",
        content: "Document workflows are the hidden bottleneck",
      },
      {
        type: "p",
        content:
          "Many Bangladeshi EdTech products center on PDFs, scanned notes, past papers, and assignment uploads. These flows look simple in wireframes — upload, store, display — but they become expensive when every document is served as a full file download, rendered client-side without caching, or processed synchronously during peak upload windows.",
      },
      {
        type: "p",
        content:
          "When Inievo built PUC PRO, document intake and retrieval were treated as first-class product paths, not file-storage utilities. That meant thinking about preview generation, progressive loading, access control by cohort or subscription tier, and guardrails around AI-assisted extraction so human review stays in the loop for sensitive academic content.",
      },
      {
        type: "ul",
        items: [
          "Generate lightweight previews instead of forcing full PDF downloads for every view.",
          "Queue heavy processing — OCR, summarization, format conversion — asynchronously.",
          "Version documents and show clear publish states so students never study outdated material.",
          "Log access and errors per document type to spot which content formats hurt performance most.",
        ],
      },
      {
        type: "h2",
        content: "Exam seasons behave like unplanned load tests",
      },
      {
        type: "p",
        content:
          "Traffic spikes in EdTech are predictable in calendar terms but brutal in intensity. Result publication, registration deadlines, live classes before national exams, and campaign-driven enrollment pushes can multiply concurrent users by an order of magnitude within minutes. Platforms that work fine in normal weeks fail publicly when it matters most.",
      },
      {
        type: "p",
        content:
          "Architecture should assume spike-shaped traffic, not smooth growth curves. Read-heavy pages — syllabi, schedules, result lookups — benefit from edge caching and static generation where content allows. Write-heavy flows — submissions, payments, enrollment — need queueing, idempotent APIs, and database patterns that do not collapse under bursty inserts.",
      },
      {
        type: "h2",
        content: "Trust, access control, and academic integrity",
      },
      {
        type: "p",
        content:
          "Performance without trust is hollow. Students share accounts. Institutions worry about paper leaks. Parents want visibility without exposing other learners' data. EdTech platforms need role models that map to real organizations — batch, campus, teacher, admin — not a single generic user type with toggled permissions.",
      },
      {
        type: "p",
        content:
          "Audit trails for document publishing, watermarking or access tokens for premium content, and clear session expiry policies reduce support load and protect institutional relationships. These are product decisions with engineering consequences; they should be scoped in discovery, not patched after a distributor complaint.",
      },
      {
        type: "h2",
        content: "What to prioritize in version one",
      },
      {
        type: "p",
        content:
          "Teams do not need every integration on launch day. They need a fast mobile core, reliable document access, measurable analytics on drop-off points, and an ops playbook for exam-week traffic. Feature breadth can follow once the foundation survives real student behavior.",
      },
      {
        type: "ul",
        items: [
          "Ship a performance budget and enforce it in CI for critical student journeys.",
          "Instrument funnel events from signup through first successful document view.",
          "Run a load test simulating result-day traffic before marketing promises scale.",
          "Plan a human support escalation path for payment and access issues during spikes.",
        ],
      },
      {
        type: "p",
        content:
          "EdTech wins in Bangladesh when students stop fighting the product and start trusting it daily. That trust is earned in milliseconds on a phone screen — long before anyone reads your mission statement.",
      },
    ],
  },
  {
    slug: "devops-scaling-playbook-bangladesh",
    category: "Engineering & DevOps",
    title: "The DevOps Scaling Playbook for Bangladeshi Product Teams",
    excerpt:
      "Traffic spikes, payment failures, and silent deploy regressions hurt local brands fast. A practical playbook for CI/CD, observability, and cloud choices before your next growth push.",
    badge: "Deep dive",
    href: "/blog/devops-scaling-playbook-bangladesh",
    thumbnail: "/generated/blog-devops-scaling.svg",
    published: "July 30, 2025",
    readTime: "12 min read",
    author: "Inievo Editorial",
    sections: [
      {
        type: "p",
        content:
          "Many Bangladeshi products reach an uncomfortable middle stage: enough users to cause pain, not enough process to absorb it. Deployments happen manually. Monitoring means checking a server when someone complains on Facebook. A successful marketing push becomes an outage story. DevOps is often treated as infrastructure rent — when it is actually the discipline that keeps product momentum from turning into reputational debt.",
      },
      {
        type: "h2",
        content: "Why scaling failures look different here",
      },
      {
        type: "p",
        content:
          "Global playbooks assume mature payment ecosystems, consistent CDN coverage, and teams with dedicated SRE headcount. Local product teams often run lean engineering units serving mobile-first users, integrating regional payment gateways, and shipping features while also answering support tickets. The constraint is not ambition — it is operational bandwidth.",
      },
      {
        type: "p",
        content:
          "That makes prioritization essential. You cannot implement every Kubernetes pattern on day one. You can implement the few practices that prevent the failures users actually experience: downtime during deploys, slow checkout, lost form submissions, and unrecoverable data mistakes.",
      },
      {
        type: "ul",
        items: [
          "Payment and webhook failures during campaigns — revenue lost in minutes.",
          "Database locks during batch jobs — entire app feels frozen.",
          "Silent deploy regressions — features break before anyone checks staging.",
          "No rollback path — fixes take hours while social complaints accumulate.",
        ],
      },
      {
        type: "h2",
        content: "CI/CD is risk management, not tooling fashion",
      },
      {
        type: "p",
        content:
          "Continuous integration and delivery exist to shrink the blast radius of change. For Bangladeshi SaaS, marketplace, and community products, that starts with a pipeline that runs automated tests, linting, and build checks on every merge — even if the test suite is modest at first.",
      },
      {
        type: "p",
        content:
          "Staging environments should mirror production closely enough to catch integration issues with SMS providers, payment callbacks, and file storage permissions. Production deploys should be repeatable scripts or platform-native pipelines, not SSH sessions dependent on one engineer's memory.",
      },
      {
        type: "ul",
        items: [
          "One-click or one-command deploys with tagged releases.",
          "Database migrations run through reviewed, reversible steps.",
          "Feature flags for risky changes instead of big-bang releases.",
          "Automated smoke tests against staging after each build.",
        ],
      },
      {
        type: "h2",
        content: "Observability: know before your users tell you",
      },
      {
        type: "p",
        content:
          "Logs scattered across servers are not observability. You need correlated signals — request latency, error rates, queue depth, payment success ratio — with alerts routed to people who can act. For lean teams, start narrow: monitor checkout, authentication, webhooks, and background workers first. Those paths fund the business and generate the most urgent tickets when they fail.",
      },
      {
        type: "p",
        content:
          "Dashboards should answer practical questions: Are we slower than yesterday? Did error rate spike after the last deploy? Are failed payments clustered on a single gateway response code? Inievo typically pairs application metrics with synthetic checks from regions that match user geography, because latency seen from a foreign datacenter misleads.",
      },
      {
        type: "h2",
        content: "Cloud choices under real budget pressure",
      },
      {
        type: "p",
        content:
          "Cloud spending spirals when teams copy enterprise architecture without enterprise traffic. The goal is elasticity where it matters — read-heavy pages, asset delivery, async workers — and simplicity where it does not. A managed database with backups, object storage for uploads, and a worker tier for emails and notifications covers a large share of Bangladeshi product needs without premature microservice sprawl.",
      },
      {
        type: "p",
        content:
          "Cost control is part of reliability. Unbounded log retention, oversized instances left running after a launch, and unoptimized image delivery show up as monthly surprises that steal budget from product development. Right-sizing, autoscaling policies with ceilings, and CDN caching for static assets are boring — and effective.",
      },
      {
        type: "h2",
        content: "Zero-downtime is a sequence, not a slogan",
      },
      {
        type: "p",
        content:
          "True zero-downtime deploys require compatible migration strategies, health checks, and traffic shifting — whether through platform rolling updates or a load balancer. At minimum, teams should practice rollback: keep the previous container image or release artifact deployable in minutes, not hours.",
      },
      {
        type: "p",
        content:
          "Runbooks matter. When checkout fails at 10 PM, the on-call engineer — often a founder — should not be guessing which environment variable changed. Document deploy steps, rollback steps, and vendor contact paths. Conduct a lightweight game day before major sales events or academic calendars drive traffic.",
      },
      {
        type: "h2",
        content: "A 90-day DevOps maturity path for lean teams",
      },
      {
        type: "ul",
        items: [
          "Days 1–30: CI pipeline, staging parity, centralized logging, backup verification.",
          "Days 31–60: Alerting on checkout/auth/webhooks, deploy tags, migration review checklist.",
          "Days 61–90: Load test critical paths, feature flags, documented rollback drill, cost review.",
        ],
      },
      {
        type: "p",
        content:
          "DevOps maturity is not a certificate — it is fewer surprise outages, faster recovery, and engineering time returned to product work. Bangladeshi teams that invest early protect the brand trust they spend months earning through marketing and community growth.",
      },
      {
        type: "p",
        content:
          "If your roadmap includes a traffic spike you can already name — enrollment, Ramadan sales, exam results — treat infrastructure readiness as part of that launch, not a parallel conversation that starts when users are already locked out.",
      },
    ],
  },
] as const satisfies readonly BlogPost[];

export const BLOG_POSTS_BY_SLUG = Object.fromEntries(BLOG_POSTS.map((post) => [post.slug, post])) as Record<
  (typeof BLOG_POSTS)[number]["slug"],
  (typeof BLOG_POSTS)[number]
>;

export type BlogSlug = (typeof BLOG_POSTS)[number]["slug"];

export function isBlogSlug(slug: string): slug is BlogSlug {
  return slug in BLOG_POSTS_BY_SLUG;
}
