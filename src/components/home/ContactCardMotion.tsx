import { FileText, Phone } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";

function MotionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inievo-contact-motion-shell relative flex shrink-0 items-center justify-center rounded-2xl ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

export function ContactCallMotion() {
  return (
    <MotionShell className="bg-[#137ece]/10 border border-[#137ece]/15">
      <span className="absolute inset-0 rounded-2xl inievo-contact-ring" />
      <Phone size={26} className="relative z-10 text-[#137ece] inievo-contact-float inievo-contact-motion-icon" />
      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 inievo-contact-ping" />
    </MotionShell>
  );
}

export function ContactWhatsAppMotion() {
  return (
    <MotionShell className="bg-[#25D366]/12 border border-[#25D366]/25 shadow-[0_8px_24px_-8px_rgba(37,211,102,0.45)]">
      <span className="absolute inset-0 rounded-2xl inievo-contact-wa-glow" />
      <SocialIcon
        name="whatsapp"
        size={26}
        className="relative z-10 text-[#25D366] inievo-contact-float inievo-contact-motion-icon"
      />
    </MotionShell>
  );
}

export function ContactFormMotion() {
  return (
    <MotionShell className="bg-slate-100 border border-slate-200/90 overflow-hidden">
      <FileText size={26} className="relative z-10 text-[#137ece] inievo-contact-float inievo-contact-motion-icon" />
      <div className="absolute bottom-2 left-2.5 right-2.5 space-y-1.5">
        <span className="block h-1 rounded-full bg-[#137ece]/30 inievo-contact-line" style={{ animationDelay: "0s" }} />
        <span className="block h-1 w-[80%] rounded-full bg-[#137ece]/20 inievo-contact-line" style={{ animationDelay: "0.2s" }} />
        <span className="block h-1 w-[60%] rounded-full bg-[#137ece]/15 inievo-contact-line" style={{ animationDelay: "0.4s" }} />
      </div>
    </MotionShell>
  );
}
