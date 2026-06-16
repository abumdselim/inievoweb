import {
  COMPANY_MISSION,
  COMPANY_TIMELINE,
  COMPANY_VALUES,
  FOUNDED_YEAR,
  HQ_ADDRESS,
} from "@/lib/constants";
import { InievoIcon } from "@/components/ui/InievoIcon";

function GlanceFact({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <InievoIcon name={icon} size={18} className="text-[#137ece] mt-0.5 shrink-0" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-sm font-extrabold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export function CompanyGlancePanel({ compact = false }: { compact?: boolean }) {
  const milestones = compact ? COMPANY_TIMELINE.slice(0, 2) : COMPANY_TIMELINE.slice(0, 3);
  const values = compact ? COMPANY_VALUES.slice(0, 3) : COMPANY_VALUES.slice(0, 4);

  return (
    <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#137ece] mb-3">Inievo at a glance</p>
      <p className="text-sm font-extrabold text-slate-900 mb-2">Our mission</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-6">{COMPANY_MISSION}</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <GlanceFact icon="calendar" label="Founded" value={String(FOUNDED_YEAR)} />
        <GlanceFact icon="map_pin" label="Headquarters" value={HQ_ADDRESS} />
        <GlanceFact icon="clock" label="Response time" value="Within 1 business day" />
        <GlanceFact icon="flask_conical" label="Inievo Labs" value="The Chattala · PUC PRO" />
      </div>
      <p className="text-sm font-extrabold text-slate-900 mb-3">Recent milestones</p>
      <div className="space-y-4 mb-6">
        {milestones.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="text-[11px] font-mono font-bold text-[#137ece] bg-[#137ece]/10 rounded-md px-2 py-1 shrink-0">
              {item.year}
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm font-extrabold text-slate-900 mb-3">How we work</p>
      <div className="flex flex-wrap gap-2">
        {values.map((v) => (
          <span
            key={v.title}
            className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1.5"
          >
            {v.title}
          </span>
        ))}
      </div>
    </div>
  );
}
