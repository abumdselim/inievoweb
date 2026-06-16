import { ReactNode } from "react";
import { PAGE_HERO_IMAGES } from "@/lib/generated-assets";

type PageHeroBandProps = {
  pageKey: keyof typeof PAGE_HERO_IMAGES;
  overlayClass: string;
  sectionClass: string;
  children: ReactNode;
};

export function PageHeroBand({ pageKey, overlayClass, sectionClass, children }: PageHeroBandProps) {
  const bg = PAGE_HERO_IMAGES[pageKey];
  return (
    <section
      className={`relative w-full overflow-hidden bg-slate-950 ${sectionClass}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.5), rgba(15,23,42,0.3)), url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
