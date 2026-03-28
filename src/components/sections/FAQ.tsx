"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

interface FAQProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly FAQItem[];
  idPrefix?: string;
  bgClass?: string;
}

export function FAQ({ eyebrow, heading, description, items, idPrefix = "faq", bgClass }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-20 lg:py-28 ${bgClass ?? ""}`} aria-labelledby={`${idPrefix}-heading`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              {eyebrow}
            </p>
          )}
          <h2 id={`${idPrefix}-heading`} className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            function handleKeyDown(e: React.KeyboardEvent) {
              if (e.key === " ") {
                e.preventDefault();
                setOpenIndex(isOpen ? null : index);
                return;
              }

              const container = (e.currentTarget as HTMLElement).closest('.space-y-3');
              const triggers = container?.querySelectorAll<HTMLButtonElement>('[aria-expanded]');
              if (!triggers || triggers.length === 0) return;

              let targetIndex = -1;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                targetIndex = index < items.length - 1 ? index + 1 : 0;
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                targetIndex = index > 0 ? index - 1 : items.length - 1;
              } else if (e.key === "Home") {
                e.preventDefault();
                targetIndex = 0;
              } else if (e.key === "End") {
                e.preventDefault();
                targetIndex = items.length - 1;
              }
              if (targetIndex >= 0) {
                triggers[targetIndex]?.focus();
              }
            }

            return (
              <div
                key={item.question}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  type="button"
                  id={`${idPrefix}-trigger-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onKeyDown={handleKeyDown}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/30 rounded-t-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`${idPrefix}-panel-${index}`}
                >
                  <span className="font-semibold text-foreground">{item.question}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`${idPrefix}-panel-${index}`}
                  role="region"
                  aria-labelledby={`${idPrefix}-trigger-${index}`}
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-smooth"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}