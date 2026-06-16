"use client";

import { useState } from "react";
import { HOMEPAGE_COPY } from "@/lib/constants";
import { InievoIcon } from "@/components/ui/InievoIcon";
import {
  ContactCallMotion,
  ContactFormMotion,
  ContactWhatsAppMotion,
} from "@/components/home/ContactCardMotion";

const WHATSAPP_NUMBER = "8801410177888";
const WHATSAPP_MESSAGE =
  "Hello Inievo, I would like to connect and discuss a project. Please let me know a suitable time.";

type ContactMode = "call" | "form";

const fieldClass =
  "w-full min-w-0 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-[#137ece] focus:ring-2 focus:ring-[#137ece]/15";

const labelClass = "block mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500";

const CALLBACK_SLOTS = [
  { value: "morning", label: "Morning — 9:00 AM to 12:00 PM" },
  { value: "afternoon", label: "Afternoon — 12:00 PM to 5:00 PM" },
  { value: "evening", label: "Evening — 5:00 PM to 8:00 PM" },
  { value: "flexible", label: "Flexible — I will note my preference below" },
] as const;

function SuccessPanel({ message }: { message: string }) {
  return (
    <div className="inievo-contact-form-panel" aria-live="polite">
      <div className="flex flex-col items-center py-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <InievoIcon name="circle_check" size={28} />
        </div>
        <p className="font-display text-xl font-extrabold text-slate-900">Thank you</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">{message}</p>
      </div>
    </div>
  );
}

export function ContactHub() {
  const copy = HOMEPAGE_COPY.final_cta;
  const cards = copy.contact_cards;

  const [activeMode, setActiveMode] = useState<ContactMode | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [callSuccess, setCallSuccess] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  async function submitLead(payload: Record<string, unknown>) {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submit failed");
      return true;
    } catch {
      setError("Something went wrong. Please try again.");
      return false;
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCallSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const ok = await submitLead({
      lead_type: "callback_request",
      client_name: form.get("client_name"),
      client_phone: form.get("client_phone"),
      preferred_time: form.get("preferred_time"),
      project_scope: form.get("project_scope"),
      source_page: "landing_contact_hub",
    });
    if (ok) {
      setCallSuccess(true);
      e.currentTarget.reset();
    }
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const ok = await submitLead({
      lead_type: "consultation_form",
      client_email: form.get("client_email"),
      client_phone: form.get("client_phone"),
      project_scope: form.get("project_scope"),
      source_page: "landing_contact_hub",
    });
    if (ok) {
      setFormSuccess(true);
      e.currentTarget.reset();
    }
  }

  function selectMode(mode: ContactMode) {
    setActiveMode((current) => (current === mode ? null : mode));
    setError("");
    setCallSuccess(false);
    setFormSuccess(false);
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-stretch">
        <button
          type="button"
          onClick={() => selectMode("call")}
          className={`inievo-contact-card text-left min-w-0 ${activeMode === "call" ? "inievo-contact-card-active" : ""}`}
          aria-expanded={activeMode === "call"}
        >
          <ContactCallMotion />
          <p className="mt-2 sm:mt-4 lg:mt-5 text-[8px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#137ece] line-clamp-1">
            {cards.call.eyebrow}
          </p>
          <h3 className="mt-1 sm:mt-2 font-display text-[11px] sm:text-base lg:text-xl font-extrabold tracking-tight text-slate-900 leading-snug line-clamp-2">
            {cards.call.title}
          </h3>
          <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm leading-relaxed text-slate-600 line-clamp-2 sm:line-clamp-3">
            {cards.call.description}
          </p>
          <span className="mt-2 sm:mt-4 lg:mt-5 inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-bold text-[#137ece] line-clamp-1">
            <span className="truncate">{cards.call.cta}</span>
            <InievoIcon name="arrow_right" size={14} className="shrink-0 sm:hidden" />
            <InievoIcon name="arrow_right" size={16} className="shrink-0 hidden sm:block" />
          </span>
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inievo-contact-card inievo-contact-card-whatsapp text-left no-underline min-w-0"
        >
          <ContactWhatsAppMotion />
          <p className="mt-2 sm:mt-4 lg:mt-5 text-[8px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#128C7E] line-clamp-1">
            {cards.whatsapp.eyebrow}
          </p>
          <h3 className="mt-1 sm:mt-2 font-display text-[11px] sm:text-base lg:text-xl font-extrabold tracking-tight text-slate-900 leading-snug line-clamp-2">
            {cards.whatsapp.title}
          </h3>
          <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm leading-relaxed text-slate-600 line-clamp-2 sm:line-clamp-3">
            {cards.whatsapp.description}
          </p>
          <span className="mt-2 sm:mt-4 lg:mt-5 inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-bold text-[#128C7E] line-clamp-1">
            <span className="truncate">{cards.whatsapp.cta}</span>
            <InievoIcon name="arrow_right" size={14} className="shrink-0 sm:hidden" />
            <InievoIcon name="arrow_right" size={16} className="shrink-0 hidden sm:block" />
          </span>
        </a>

        <button
          type="button"
          onClick={() => selectMode("form")}
          className={`inievo-contact-card text-left min-w-0 ${activeMode === "form" ? "inievo-contact-card-active" : ""}`}
          aria-expanded={activeMode === "form"}
        >
          <ContactFormMotion />
          <p className="mt-2 sm:mt-4 lg:mt-5 text-[8px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-slate-500 line-clamp-1">
            {cards.form.eyebrow}
          </p>
          <h3 className="mt-1 sm:mt-2 font-display text-[11px] sm:text-base lg:text-xl font-extrabold tracking-tight text-slate-900 leading-snug line-clamp-2">
            {cards.form.title}
          </h3>
          <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm leading-relaxed text-slate-600 line-clamp-2 sm:line-clamp-3">
            {cards.form.description}
          </p>
          <span className="mt-2 sm:mt-4 lg:mt-5 inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-bold text-[#137ece] line-clamp-1">
            <span className="truncate">{cards.form.cta}</span>
            <InievoIcon name="arrow_right" size={14} className="shrink-0 sm:hidden" />
            <InievoIcon name="arrow_right" size={16} className="shrink-0 hidden sm:block" />
          </span>
        </button>
      </div>

      {activeMode === "call" ? (
        <div className="mt-6 sm:mt-8 inievo-contact-form-panel">
          {callSuccess ? (
            <SuccessPanel message={copy.callback_success} />
          ) : (
            <>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#137ece] mb-2">
                  {cards.call.form_label}
                </p>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-slate-900">{cards.call.form_title}</h3>
                <p className="mt-2 text-sm text-slate-600">{cards.call.form_subtitle}</p>
              </div>
              <form onSubmit={handleCallSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="callback-name" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="callback-name"
                      name="client_name"
                      type="text"
                      required
                      minLength={2}
                      placeholder="Your name"
                      autoComplete="name"
                      className={`${fieldClass} min-h-[48px]`}
                    />
                  </div>
                  <div>
                    <label htmlFor="callback-phone" className={labelClass}>
                      Mobile number
                    </label>
                    <input
                      id="callback-phone"
                      name="client_phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      autoComplete="tel"
                      className={`${fieldClass} min-h-[48px]`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="callback-time" className={labelClass}>
                    Preferred call time
                  </label>
                  <select id="callback-time" name="preferred_time" required className={`${fieldClass} min-h-[48px]`}>
                    <option value="">Select a convenient window</option>
                    {CALLBACK_SLOTS.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="callback-scope" className={labelClass}>
                    Brief project description
                  </label>
                  <textarea
                    id="callback-scope"
                    name="project_scope"
                    required
                    minLength={10}
                    placeholder="What are you building? Timeline, budget range, or key challenges…"
                    className={`${fieldClass} min-h-[120px] resize-y`}
                  />
                </div>
                {error ? <p className="text-sm text-red-600">{error}</p> : null}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl bg-[#137ece] text-white text-sm font-bold shadow-lg shadow-[#137ece]/20 hover:bg-[#0f6db8] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <InievoIcon name="loader" size={16} className="animate-spin" />
                      {copy.button_loading}
                    </>
                  ) : (
                    cards.call.submit
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      ) : null}

      {activeMode === "form" ? (
        <div className="mt-6 sm:mt-8 inievo-contact-form-panel">
          {formSuccess ? (
            <SuccessPanel message={copy.success} />
          ) : (
            <>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#137ece] mb-2">Written inquiry</p>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-slate-900">{copy.form_title}</h3>
                <p className="mt-2 text-sm text-slate-600">{copy.form_note}</p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="hub-email" className={labelClass}>
                      Work email
                    </label>
                    <input
                      id="hub-email"
                      name="client_email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      autoComplete="email"
                      className={`${fieldClass} min-h-[48px]`}
                    />
                  </div>
                  <div>
                    <label htmlFor="hub-phone" className={labelClass}>
                      Phone / WhatsApp
                    </label>
                    <input
                      id="hub-phone"
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
                  <label htmlFor="hub-scope" className={labelClass}>
                    Project overview
                  </label>
                  <textarea
                    id="hub-scope"
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
                  className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl bg-[#137ece] text-white text-sm font-bold shadow-lg shadow-[#137ece]/20 hover:bg-[#0f6db8] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <InievoIcon name="loader" size={16} className="animate-spin" />
                      {copy.button_loading}
                    </>
                  ) : (
                    copy.button
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
