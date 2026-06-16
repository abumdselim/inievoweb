import { Activity, Brain, CloudCog, ShieldCheck } from "lucide-react";

type PillarTitle = "Intelligent Coding" | "Bulletproof QA" | "Peak Performance" | "Zero-Downtime DevOps";

const motionMap: Record<PillarTitle, "coding" | "qa" | "performance" | "devops"> = {
  "Intelligent Coding": "coding",
  "Bulletproof QA": "qa",
  "Peak Performance": "performance",
  "Zero-Downtime DevOps": "devops",
};

function MotionShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#137ece]/10 border border-[#137ece]/15 ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

function CodingMotion() {
  return (
    <MotionShell>
      <span className="absolute inset-0 rounded-2xl inievo-ai-pulse-ring" />
      <Brain size={26} className="relative z-10 text-[#137ece] inievo-ai-float" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#137ece] text-[10px] font-bold text-white inievo-ai-blink">
        AI
      </span>
    </MotionShell>
  );
}

function QaMotion() {
  return (
    <MotionShell>
      <ShieldCheck size={28} className="text-[#137ece] inievo-ai-float" />
      <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white inievo-ai-pop">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </MotionShell>
  );
}

function PerformanceMotion() {
  return (
    <MotionShell className="overflow-hidden">
      <Activity size={28} className="text-[#137ece] inievo-ai-float" />
      <div className="absolute bottom-2 left-2 right-2 flex items-end gap-1 h-4">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-[#137ece]/35 inievo-ai-bar"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </MotionShell>
  );
}

function DevopsMotion() {
  return (
    <MotionShell>
      <CloudCog size={28} className="text-[#137ece] inievo-ai-spin-slow" />
      <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-[#137ece]/20 inievo-ai-deploy-track" />
    </MotionShell>
  );
}

const motionComponents = {
  coding: CodingMotion,
  qa: QaMotion,
  performance: PerformanceMotion,
  devops: DevopsMotion,
};

export function AiExcellenceCardMotion({ title }: { title: string }) {
  const variant = motionMap[title as PillarTitle] ?? "coding";
  const Motion = motionComponents[variant];
  return <Motion />;
}
