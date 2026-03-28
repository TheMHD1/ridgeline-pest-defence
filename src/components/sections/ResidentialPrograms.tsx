"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { accordionContent } from "@/lib/animations";

interface Program {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface ResidentialProgramsProps {
  heading: string;
  description: string;
  items: readonly Program[];
}

export function ResidentialPrograms({
  heading,
  description,
  items,
}: ResidentialProgramsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-20 lg:py-28 bg-muted/30"
      aria-labelledby="residential-programs-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              id="residential-programs-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((program, i) => {
            const isOpen = openIndex === i;

            function handleKeyDown(e: React.KeyboardEvent) {
              const container = (e.currentTarget as HTMLElement).closest('.space-y-3');
              const triggers = container?.querySelectorAll<HTMLButtonElement>('[aria-expanded]');
              if (!triggers || triggers.length === 0) return;

              let targetIndex = -1;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                targetIndex = i < items.length - 1 ? i + 1 : 0;
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                targetIndex = i > 0 ? i - 1 : items.length - 1;
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
              <ScrollReveal key={program.title} delay={i * 0.05}>
                <div className="rounded-xl border border-muted bg-card shadow-sm overflow-hidden">
                  <button
                    type="button"
                    id={`residential-program-trigger-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    onKeyDown={handleKeyDown}
                    className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors hover:bg-muted/20"
                    aria-expanded={isOpen}
                    aria-controls={`residential-program-panel-${i}`}
                  >
                    <h3 className="font-heading text-lg text-foreground">
                      {program.title}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={accordionContent}
                      >
                        <div
                          id={`residential-program-panel-${i}`}
                          role="region"
                          aria-labelledby={`residential-program-trigger-${i}`}
                          className="px-6 pb-6 text-muted-foreground leading-relaxed"
                        >
                          {program.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
