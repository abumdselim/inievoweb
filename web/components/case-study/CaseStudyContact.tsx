import {
  CANONICAL_EMAIL,
  MAILTO_HREF,
} from "@/lib/site/contact";
import { CASE_STUDY_SOCIAL_LINKS } from "@/lib/social";
import SocialIcon from "@/components/case-study/SocialIcon";

export default function CaseStudyContact() {
  return (
    <section className="contact contact--case-study" id="contact">
      <div className="contact-inner contact-inner--case-study">
        <div className="contact-top">
          <div className="section-label">CONTACT</div>
          <h2 className="massive-text">
            Let&apos;s build
            <br />
            <em>something great with me.</em>
          </h2>
          <p>
            Open to enterprise projects, technical partnerships, advisory roles,
            and innovative ideas worth pursuing.
          </p>
          <a href={MAILTO_HREF} className="btn-primary contact-btn">
            {CANONICAL_EMAIL} →
          </a>
        </div>
        <div className="contact-bottom">
          <nav className="footer-nav" aria-label="Social links">
            {CASE_STUDY_SOCIAL_LINKS.map((link) => (
              <SocialIcon key={link.href} link={link} />
            ))}
          </nav>
          <div className="footer-copy">
            &copy; 2026 Abu Md. Selim. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
