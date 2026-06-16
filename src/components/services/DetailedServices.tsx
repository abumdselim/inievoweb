import { DETAILED_SERVICES, type CoreOffering } from "@/lib/constants-supplement";
import { CONTAINER, REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3 } from "@/lib/design-system";
import { GENERATED, SERVICE_ICON_MAP } from "@/lib/generated-assets";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SafeImage } from "@/components/ui/SafeImage";
import { SECTION_PY } from "@/lib/design-system";

function ServiceIllustration({ service }: { service: CoreOffering }) {
  const iconKey = service.asset_icon ?? service.icon;
  const src = SERVICE_ICON_MAP[iconKey] ?? GENERATED.icon_custom;
  return (
    <div className="relative bg-slate-50 border border-slate-100 shadow-xl rounded-2xl overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#137ece]/10 via-transparent to-[#facc15]/10 rounded-2xl" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[280px]">
        <SafeImage src={src} alt={service.title} width={96} height={96} className="w-24 h-24 object-contain" />
        <p className="text-xs font-mono font-semibold text-slate-500 tracking-wider mt-6 text-center">{service.stack}</p>
      </div>
    </div>
  );
}

function DetailedServiceRow({ service, index }: { service: CoreOffering; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={`flex flex-col justify-center ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        <p className="text-[11px] font-mono font-bold text-[#137ece] tracking-widest mb-4">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{service.title}</h3>
        <p className="text-slate-600 text-base leading-relaxed mb-6">{service.summary}</p>
        <ul className="space-y-3">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#137ece] shrink-0 mt-2" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
        <ServiceIllustration service={service} />
      </div>
    </div>
  );
}

export function DetailedServices() {
  const delays = [REVEAL, REVEAL_DELAY_1, REVEAL_DELAY_2, REVEAL_DELAY_3];
  return (
    <section id="services-detail" className={`w-full bg-white ${SECTION_PY}`}>
      <div className={CONTAINER}>
        <SectionHeader
          label="SERVICES"
          title="Deep-Dive Services"
          subtitle="Enterprise-grade engineering across the full product lifecycle — built on proven, scalable technologies."
        />
      </div>
      <div className={`${CONTAINER} flex flex-col gap-20 mt-8`}>
        {DETAILED_SERVICES.map((service, i) => (
          <div key={service.title} className={delays[i % delays.length]}>
            <DetailedServiceRow service={service} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
