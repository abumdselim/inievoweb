const SERVICES = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "Full-stack development of scalable web applications using modern frameworks and best practices — from MVP to enterprise-grade systems.",
  },
  {
    num: "02",
    title: "System Architecture",
    description:
      "Designing robust, maintainable architectures that handle growth. Microservices, event-driven systems, and cloud-native designs.",
  },
  {
    num: "03",
    title: "Technical Consulting",
    description:
      "Strategic guidance on technology decisions, code reviews, team structuring, and roadmap planning for startups and growing businesses.",
  },
  {
    num: "04",
    title: "Digital Transformation",
    description:
      "Helping traditional businesses modernize their tech stack, automate workflows, and build a digital presence that scales.",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-wrap">
        <div className="section-heading">
          <div className="section-label">SERVICES</div>
          <h2>What I Offer</h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.num}>
              <div className="service-num">{service.num}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
