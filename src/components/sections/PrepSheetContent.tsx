"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface PrepSection {
  readonly title: string;
  readonly items: readonly string[];
}

interface PrepSheetContentProps {
  sections: readonly PrepSection[];
}

export function PrepSheetContent({ sections }: PrepSheetContentProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="prep-content-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 print:space-y-8">
          {sections.map((section, sectionIdx) => (
            <ScrollReveal key={section.title}>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm print:shadow-none print:border print:break-inside-avoid">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                    {sectionIdx + 1}
                  </span>
                  <h2 className="font-heading text-xl text-foreground">{section.title}</h2>
                </div>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="space-y-3"
                >
                  {section.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={staggerItem}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-5 h-5 shrink-0 text-primary mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Print button */}
        <div className="mt-10 text-center print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            aria-label="Print this prep sheet"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z" />
            </svg>
            Print This Prep Sheet
          </button>
        </div>
      </div>
    </section>
  );
}
