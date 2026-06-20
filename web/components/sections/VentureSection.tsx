import Image from "next/image";

const INIEVO_LOGO_URL =
  "https://res.cloudinary.com/dgbyoqvpt/image/upload/q_auto/f_auto/v1780347490/Inievo_hdf3sr.png";

const VENTURE_HIGHLIGHTS = [
  "Software Development",
  "Enterprise Architecture",
  "Digital Transformation",
];

export default function VentureSection() {
  return (
    <section className="ventures" id="agency">
      <div className="section-wrap">
        <div className="section-heading">
          <div className="section-label">VENTURE</div>
          <h2>My Company</h2>
        </div>
        <div className="venture-card">
          <div className="venture-logo">
            <Image
              src={INIEVO_LOGO_URL}
              alt="Inievo Technologies"
              width={240}
              height={240}
              sizes="(max-width: 900px) 160px, 240px"
              quality={85}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="venture-info">
            <div className="venture-tag">Founder &amp; Technical Lead</div>
            <h3>Inievo Technologies</h3>
            <p>
              An innovative info-tech agency delivering cutting-edge software
              solutions, enterprise architecture, and digital transformation
              services for modern businesses across multiple industries.
            </p>
            <div className="venture-highlights">
              {VENTURE_HIGHLIGHTS.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
            <a
              href="https://inievo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Inievo.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
