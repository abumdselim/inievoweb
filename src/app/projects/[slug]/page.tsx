import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { PROJECTS, PROJECTS_BY_SLUG } from "@/lib/constants";
import {
  HERO_PY,
  SECTION_PY,
  CONTAINER,
  BTN_PRIMARY,
  REVEAL,
  TYPE_LABEL,
  TYPE_METRIC_LABEL,
  TYPE_METRIC_VALUE,
} from "@/lib/design-system";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "@/lib/json-ld";
import { SafeImage } from "@/components/ui/SafeImage";
import { InievoIcon } from "@/components/ui/InievoIcon";

type Props = { params: Promise<{ slug: string }> };

type ProjectSlug = keyof typeof PROJECTS_BY_SLUG;

function resolveProject(slug: string) {
  if (slug !== "the-chattala" && slug !== "puc-pro") notFound();
  return PROJECTS_BY_SLUG[slug as ProjectSlug];
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const route = `/projects/${slug}` as "/projects/the-chattala" | "/projects/puc-pro";
  if (!(slug in PROJECTS_BY_SLUG)) return {};
  return pageMetadata(route);
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 w-full">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#137ece] shrink-0 mt-2" />
          <span className="font-body text-sm text-slate-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailColumn({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 shadow-sm h-full">
      <p className={`${TYPE_LABEL} mb-5`}>{title.toUpperCase()}</p>
      <BulletList items={items} />
    </div>
  );
}

function ProjectTag({ tag }: { tag: string }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-[#137ece]/10 border border-[#137ece]/25 text-[11px] font-semibold text-[#137ece]">
      {tag}
    </span>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = resolveProject(slug);
  const image = project.case_study_image;
  const metrics = project.metrics.slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          caseStudyJsonLd(project.slug, project.title, project.case_study_description),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="projects" overlayClass="bg-slate-950/85" sectionClass={`bg-slate-950 ${HERO_PY} px-4 lg:px-8`}>
          <div className={`relative z-10 ${CONTAINER}`}>
            <Link href="/projects" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
              <InievoIcon name="arrow_left" size={16} className="text-[#137ece]" />
              <span className="text-[#137ece] font-semibold text-sm">All projects</span>
            </Link>
            <div className="text-center">
              <p className="text-sm font-bold text-[#137ece] tracking-[0.25em] mb-4">{project.category.toUpperCase()}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
                {project.title}
              </h1>
              <p className="text-[#137ece] text-lg lg:text-xl font-semibold mt-6 max-w-3xl mx-auto leading-snug">{project.subtitle}</p>
              <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">{project.outcome_headline}</p>
            </div>
          </div>
        </PageHeroBand>

        <section className="w-full bg-slate-50 py-12 lg:py-14 border-y border-slate-100">
          <div className={`${CONTAINER} flex flex-wrap items-center justify-center gap-10 lg:gap-16 ${REVEAL}`}>
            {metrics.map((m) => (
              <div key={m.label} className="text-center px-6 lg:px-10">
                <p className={TYPE_METRIC_VALUE}>{m.value}</p>
                <p className={`${TYPE_METRIC_LABEL} mt-2`}>{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`w-full bg-white ${SECTION_PY}`}>
          <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div className="relative w-full mb-10 lg:mb-0">
              <SafeImage
                src={image}
                alt={`${project.title} case study`}
                width={900}
                height={560}
                className="w-full rounded-2xl shadow-2xl shadow-slate-200/80 border border-slate-200/80"
              />
              <div className="absolute -inset-3 rounded-3xl bg-[#137ece]/8 blur-2xl -z-10 pointer-events-none" />
            </div>
            <div className="flex flex-col justify-center">
              <p className={`${TYPE_LABEL} mb-4`}>OVERVIEW</p>
              <p className="font-body text-base lg:text-lg text-slate-600 leading-relaxed">{project.case_study_description}</p>
            </div>
          </div>
        </section>

        <section className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${REVEAL}`}>
            <DetailColumn title="Challenges" items={project.challenges} />
            <DetailColumn title="Solution" items={project.solution} />
            <DetailColumn title="Impact" items={project.impact} />
          </div>
        </section>

        <section className={`w-full bg-white ${SECTION_PY}`}>
          <div className={`${CONTAINER} max-w-3xl`}>
            <p className={`${TYPE_LABEL} mb-6`}>KEY OUTCOMES</p>
            <BulletList items={project.outcomes} />
            <div className="flex flex-wrap gap-2 mt-10">
              {project.tags.map((t) => (
                <ProjectTag key={t} tag={t} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-900">
          <div className={`${CONTAINER} py-16 lg:py-20 text-center`}>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">Ready to build your next product?</h2>
            <p className="font-body text-slate-300 text-lg text-center max-w-xl mx-auto mb-8">
              Tell us about your goals — we will respond within one business day.
            </p>
            <Link href="/contact" className={`${BTN_PRIMARY} inline-flex`}>Start a conversation</Link>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
