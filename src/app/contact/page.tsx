import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { QualifiedLeadForm } from "@/components/forms/QualifiedLeadForm";
import {
  CONVERSION_PATHS,
  EMAIL,
  HQ_ADDRESS,
  PHONE,
} from "@/lib/constants";
import { HERO_PY, SECTION_PY, CONTAINER } from "@/lib/design-system";
import { GENERATED } from "@/lib/generated-assets";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/json-ld";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { SafeImage } from "@/components/ui/SafeImage";

export const metadata = pageMetadata("/contact");

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-base font-semibold text-slate-900">{value}</p>
    </>
  );
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="w-12 h-12 rounded-xl bg-[#137ece]/10 flex items-center justify-center shrink-0">
        <InievoIcon name={icon} size={20} className="text-[#137ece]" />
      </div>
      {href ? (
        <a href={href} className="no-underline hover:text-[#137ece] transition-colors">{inner}</a>
      ) : (
        inner
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Navbar solid />
      <main className="flex-1">
        <PageHeroBand pageKey="contact" overlayClass="bg-[#137ece]/70" sectionClass={`bg-[#137ece] ${HERO_PY} px-4 lg:px-8`}>
          <p className="relative z-10 text-sm font-bold text-blue-200 tracking-[0.25em] mb-6 text-center">GET IN TOUCH</p>
          <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold tracking-tight text-center max-w-3xl mx-auto leading-tight">
            Your Vision, Our Engineering Expertise.
          </h1>
          <p className="relative z-10 text-blue-50 text-lg mt-6 max-w-2xl mx-auto text-center leading-relaxed">
            Share your industry, service need, and project scope — we qualify every inquiry so your first conversation is focused and actionable.
          </p>
        </PageHeroBand>

        <section className={`w-full bg-white ${SECTION_PY}`}>
          <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Start a Qualified Conversation
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                The more context you share upfront, the faster we can recommend the right team shape, timeline, and next step.
              </p>
              <SafeImage
                src={GENERATED.contact_illustration}
                alt="Contact Inievo Technologies"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg border border-slate-100 mb-10"
              />
              <div className="space-y-6">
                <ContactRow icon="mail" label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
                <ContactRow icon="phone" label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
                <ContactRow icon="map_pin" label="Headquarters" value={HQ_ADDRESS} />
              </div>
            </div>
            <div className="w-full">
              <QualifiedLeadForm />
              <div className="flex flex-wrap items-center mt-6">
                {CONVERSION_PATHS.map((path, i) => (
                  <span key={path.label} className="flex items-center">
                    <Link href={path.href} className="text-sm font-semibold text-[#137ece] hover:underline min-h-[44px] inline-flex items-center">
                      {path.label}
                    </Link>
                    {i < CONVERSION_PATHS.length - 1 && (
                      <span className="text-slate-300 mx-3 hidden sm:inline">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
