"use client";

import { useState } from "react";
import { HOMEPAGE_COPY } from "@/lib/constants";
import { InievoIcon } from "@/components/ui/InievoIcon";

const fieldClass =
  "w-full min-w-0 box-border rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/15";

const labelClass = "block mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500";

export function SimpleLandingLeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const copy = HOMEPAGE_COPY.final_cta;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_email: form.get("client_email"),
          client_phone: form.get("client_phone"),
          project_scope: form.get("project_scope"),
          source_page: "landing",
        }),
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

  if (success) {
    return (
      <div className="inievo-cta-form-panel" aria-live="polite">
        <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <InievoIcon name="circle_check" size={28} />
          </div>
          <p className="font-display text-xl font-extrabold tracking-tight text-slate-900">Thank you</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">{copy.success}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="inievo-cta-form-panel w-full min-w-0">
      <div className="mb-6 border-b border-slate-100 pb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#137ece] mb-2">Get in touch</p>
        <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
          {copy.form_title}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 w-full min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full min-w-0">
          <div>
            <label htmlFor="cta-email" className={labelClass}>
              Work email
            </label>
            <input
              id="cta-email"
              name="client_email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
              className={`${fieldClass} min-h-[48px]`}
            />
          </div>
          <div>
            <label htmlFor="cta-phone" className={labelClass}>
              Phone / WhatsApp
            </label>
            <input
              id="cta-phone"
              name="client_phone"
              type="tel"
              required
              placeholder="+880 …"
              autoComplete="tel"
              className={`${fieldClass} min-h-[48px]`}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cta-scope" className={labelClass}>
            Project overview
          </label>
          <textarea
            id="cta-scope"
            name="project_scope"
            required
            placeholder="Briefly describe your goals, timeline, and current challenges…"
            className={`${fieldClass} min-h-[132px] resize-y`}
          />
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full min-h-[52px] px-8 py-4 bg-[#137ece] text-white font-display text-[15px] font-bold tracking-wide rounded-xl shadow-lg shadow-[#137ece]/20 transition-all duration-300 hover:bg-[#0f6db8] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137ece]/40 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <InievoIcon name="loader" size={18} className="animate-spin text-current" />
              {copy.button_loading}
            </>
          ) : (
            copy.button
          )}
        </button>
        <p className="text-xs leading-relaxed text-slate-500">{copy.form_note}</p>
      </form>
    </div>
  );
}
