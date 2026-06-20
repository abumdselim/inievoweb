const VISION_TAGS = [
  "System Architecture",
  "Backend Engineering",
  "Cloud Infrastructure",
  "Tech Entrepreneurship",
];

const STATS = [
  { number: "5+", label: "Years of Experience", width: "70%" },
  { number: "30+", label: "Projects Delivered", width: "85%" },
  { number: "10+", label: "Enterprise Clients", width: "55%" },
  { number: "∞", label: "Lines of Code", width: "100%" },
] as const;

export default function VisionSection() {
  return (
    <section className="vision" id="about">
      <div className="vision-inner">
        <div className="vision-left">
          <div className="vision-label">ABOUT</div>
          <h2>
            Architecting Digital Solutions.
            <br />
            <em>Scaling Business Growth.</em>
          </h2>
          <p>
            I am a seasoned developer and tech entrepreneur focused on bridging
            the gap between complex engineering and real-world business value.
            My expertise lies in building scalable, high-performance systems
            that drive innovation and deliver measurable results.
          </p>
          <div className="vision-tags">
            {VISION_TAGS.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="vision-right">
          <div className="vision-stats-grid">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
                <div className="stat-bar">
                  <div
                    className="stat-bar-fill"
                    style={{ width: stat.width }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="vision-availability">
            <div className="avail-dot" />
            <span>Available for new projects &amp; collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
