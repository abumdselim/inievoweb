"use client";

import { useState } from "react";
import {
  CONTACT_BUDGET_RANGES,
  CONTACT_INDUSTRIES,
  CONTACT_SERVICES,
} from "@/lib/constants";
import {
  LEAD_INPUT,
  LEAD_SELECT,
  LEAD_TEXTAREA,
} from "@/lib/constants-supplement";
import { InievoIcon } from "@/components/ui/InievoIcon";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">{children}</p>
  );
}

type QualifiedLeadFormProps = {
  variant?: "light" | "dark";
  successMessage?: string;
  showHeader?: boolean;
};

export function QualifiedLeadForm({
  variant = "light",
  successMessage = "Message received. Our architects will contact you shortly with a focused next step.",
  showHeader = true,
}: QualifiedLeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const dark = variant === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const body: Record<string, string> = {};
    form.forEach((v, k) => {
      body[k] = String(v);
    });
    body.source_page = "contact";
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const formShell = dark
    ? "bg-white rounded-2xl shadow-2xl shadow-slate-900/25 p-5 sm:p-8 lg:p-10 border border-white/90 ring-1 ring-slate-100/60"
    : "bg-slate-50 border border-slate-200 shadow-xl rounded-2xl p-5 sm:p-8 lg:p-10";

  const successBox = dark
    ? "bg-white rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[420px] shadow-2xl shadow-slate-900/15 border border-slate-100"
    : "bg-emerald-50 border border-emerald-200 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[360px]";

  if (success) {
    return (
      <div className={successBox} aria-live="polite">
        <InievoIcon name="circle_check" size={36} className="text-emerald-500 mb-4" />
        <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed text-center">{successMessage}</p>
      </div>
    );
  }

  return (
    <div className={formShell}>
      {showHeader && (
        <>
          <p className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-1">Start your project brief</p>
          <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">We respond within one business day with next steps.</p>
        </>
      )}
      <form onSubmit={handleSubmit} className="space-y-3 w-full">
        <div>
          <FieldLabel>Contact</FieldLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input name="client_name" placeholder="Full name" required autoComplete="name" className={LEAD_INPUT} />
            <input name="client_email" type="email" placeholder="Work email" required autoComplete="email" className={LEAD_INPUT} />
          </div>
        </div>
        <div>
          <FieldLabel>Organization</FieldLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input name="company_name" placeholder="Company or institution" autoComplete="organization" className={LEAD_INPUT} />
            <input name="client_phone" type="tel" placeholder="Phone (optional)" autoComplete="tel" className={LEAD_INPUT} />
          </div>
        </div>
        <div>
          <FieldLabel>Project fit</FieldLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select name="industry" required defaultValue="" className={LEAD_SELECT}>
              <option value="" disabled>Select industry</option>
              {CONTACT_INDUSTRIES.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <select name="service_interest" required defaultValue="" className={LEAD_SELECT}>
              <option value="" disabled>Select service</option>
              {CONTACT_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <select name="budget_range" required defaultValue="" className={`${LEAD_SELECT} mt-3`}>
            <option value="" disabled>Estimated budget</option>
            {CONTACT_BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Scope</FieldLabel>
          <textarea name="project_scope" required placeholder="Goals, timeline, and technical context" className={LEAD_TEXTAREA} />
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-8 py-4 min-h-[48px] bg-[#facc15] text-slate-900 font-extrabold rounded-xl hover:scale-[1.01] transition-all duration-300 shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <InievoIcon name="loader" size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Start a Conversation"
          )}
        </button>
      </form>
    </div>
  );
}
