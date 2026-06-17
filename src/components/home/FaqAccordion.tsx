"use client";

import Link from "next/link";
import { useState } from "react";
import { InievoIcon } from "@/components/ui/InievoIcon";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-2xl border border-[#0f6db8] px-5 sm:px-6 py-5 transition-all duration-300 bg-[#137ece] ${
              isOpen ? "shadow-lg shadow-[#137ece]/30" : "shadow-md hover:shadow-lg hover:shadow-[#137ece]/25"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group flex w-full items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer bg-transparent border-0 p-0 min-w-0"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-white tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-[15px] sm:text-base font-medium text-white flex-1 min-w-0 leading-snug">
                  {item.question}
                </span>
              </span>
              <InievoIcon
                name="chevron_down"
                size={20}
                className={`shrink-0 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden min-w-0">
                <p className="text-white/90 text-sm leading-relaxed mt-4 pt-4 ml-0 sm:ml-14 border-t border-white/20 break-words">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <Link
        href="/contact"
        className="group rounded-2xl border-2 border-[#0f6db8] px-5 sm:px-6 py-5 transition-all duration-300 bg-transparent hover:bg-[#137ece] active:bg-[#137ece] shadow-sm hover:shadow-md hover:shadow-[#137ece]/25 active:shadow-lg active:shadow-[#137ece]/30 flex items-center justify-center min-h-[44px] min-w-[44px]"
      >
        <span className="font-body text-[15px] sm:text-base font-medium text-[#137ece] group-hover:text-white group-active:text-white leading-snug transition-colors duration-300">
          More Questions? Ask Us!
        </span>
      </Link>
    </div>
  );
}
