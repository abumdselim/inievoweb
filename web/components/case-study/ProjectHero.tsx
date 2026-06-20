import Image from "next/image";

type ProjectHeroProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectHero({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectHeroProps) {
  return (
    <section className="project-hero">
      <div className="project-hero-inner">
        <div className="section-label">CASE STUDY</div>
        <h1 className="massive-text">{title}</h1>
        <p className="project-hero-desc">{description}</p>
      </div>
      <div className="project-hero-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={800}
          priority
          quality={85}
          sizes="(max-width: 900px) 100vw, min(50vw, 700px)"
        />
      </div>
    </section>
  );
}
