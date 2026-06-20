import Link from "next/link";

const PROJECTS = [
  {
    year: "2025",
    type: "SaaS Platform",
    title: "Inievo Core Platform",
    description:
      "Enterprise resource planning and project management suite serving multiple business verticals.",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "AWS"],
    href: "https://inievo.com",
    external: true,
  },
  {
    year: "2024",
    type: "Web Application",
    title: "PUC Pro",
    description:
      "An all-in-one academic resource hub offering 50+ essential daily tools, initially built for Premier University students and expanding nationwide.",
    tags: ["Next.js", "React", "Tailwind", "Node.js"],
    href: "/work/puc-pro",
    external: false,
  },
  {
    year: "2024",
    type: "Mobile Application",
    title: "The Chattala",
    description:
      "A comprehensive hyperlocal platform designed exclusively for the Chittagong community, connecting people, professionals, and local businesses.",
    tags: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    href: "/work/the-chattala",
    external: false,
  },
] as const;

function ProjectLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="section-wrap">
        <div className="section-heading">
          <div className="section-label">WORK</div>
          <h2>Selected Projects</h2>
        </div>
        <div className="projects-list">
          {PROJECTS.map((project) => (
            <div className="project-row" key={project.title}>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-link">
                {project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ProjectLinkIcon />
                  </a>
                ) : (
                  <Link href={project.href} aria-label={`View ${project.title} case study`}>
                    <ProjectLinkIcon />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
