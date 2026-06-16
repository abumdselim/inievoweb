import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import type { LegalDocument } from "@/lib/legal-content";
import { CONTAINER, HERO_PY, SECTION_PY, TYPE_BODY, TYPE_LABEL } from "@/lib/design-system";

function LegalSectionBlock({
  section,
}: {
  section: LegalDocument["sections"][number];
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={TYPE_BODY}>
            {paragraph}
          </p>
        ))}
      </div>
      {section.bullets?.length ? (
        <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-[#137ece]">
          {section.bullets.map((bullet) => (
            <li key={bullet.slice(0, 48)} className={`${TYPE_BODY} pl-1`}>
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  const otherRoute =
    document.route === "/privacy-policy"
      ? "/terms-and-conditions"
      : "/privacy-policy";
  const otherLabel =
    document.route === "/privacy-policy" ? "Terms & Conditions" : "Privacy Policy";

  return (
    <>
      <Navbar solid />
      <main className="flex-1">
        <section className={`w-full bg-slate-900 ${HERO_PY} px-4 lg:px-8`}>
          <div className={`${CONTAINER} text-center`}>
            <p className={`${TYPE_LABEL} text-[#137ece] mb-4`}>{document.heroLabel}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              {document.title}
            </h1>
            <p className="font-body text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              {document.subtitle}
            </p>
            <p className="font-body text-sm text-slate-400 mt-6">
              Last updated: {document.lastUpdated}
            </p>
          </div>
        </section>

        <section className={`w-full bg-white ${SECTION_PY}`}>
          <div className={`${CONTAINER} max-w-3xl`}>
            <nav
              aria-label="Table of contents"
              className="mb-12 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8"
            >
              <p className={`${TYPE_LABEL} mb-4`}>On this page</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-slate-600 hover:text-[#137ece] transition-colors leading-relaxed"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-12">
              {document.sections.map((section) => (
                <LegalSectionBlock key={section.id} section={section} />
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-slate-500">
                Also see our{" "}
                <Link href={otherRoute} className="text-[#137ece] font-semibold hover:opacity-80 transition-opacity">
                  {otherLabel}
                </Link>
                .
              </p>
              <Link
                href="/contact"
                className="text-sm font-bold text-[#137ece] hover:opacity-80 transition-opacity w-fit"
              >
                Contact Inievo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
