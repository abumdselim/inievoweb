type ProjectSidebarProps = {
  role: string;
  platform: string;
  techStack: string[];
  liveUrl: string;
};

export default function ProjectSidebar({
  role,
  platform,
  techStack,
  liveUrl,
}: ProjectSidebarProps) {
  return (
    <aside className="project-sidebar">
      <div className="sidebar-card">
        <h3>Role</h3>
        <p>{role}</p>
      </div>
      <div className="sidebar-card">
        <h3>Platform</h3>
        <p>{platform}</p>
      </div>
      <div className="sidebar-card">
        <h3>Tech Stack</h3>
        <div className="project-tech">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="sidebar-card sidebar-card--cta">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary sidebar-cta"
        >
          Visit Live Site ↗
        </a>
      </div>
    </aside>
  );
}
