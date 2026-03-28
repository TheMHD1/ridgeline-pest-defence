"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { accordionContent } from "@/lib/animations";
import { getCommercialImage, getImage } from "@/lib/images";

interface Service {
  readonly title: string;
  readonly description: string;
}

interface CommercialServicesProps {
  heading: string;
  description: string;
  items: readonly Service[];
}

export function CommercialServices({
  heading,
  description,
  items,
}: CommercialServicesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Try to get a commercial image, default to office
  const commercialImage = getCommercialImage("office") || getCommercialImage("restaurant");

  return (
    <section
      className="py-20 lg:py-28 bg-muted/30"
      aria-labelledby="commercial-services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <ScrollReveal>
            <div>
              <h2
                id="commercial-services-heading"
                className="font-heading text-3xl sm:text-4xl text-foreground"
              >
                {heading}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {items.map((service, i) => {
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
                  <div
                    key={service.title}
                    className="rounded-xl border border-muted bg-card shadow-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      id={`commercial-service-trigger-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      onKeyDown={handleKeyDown}
                      className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors hover:bg-muted/20"
                      aria-expanded={isOpen}
                      aria-controls={`commercial-service-panel-${i}`}
                    >
                      <h3 className="font-heading text-base text-foreground">
                        {service.title}
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
                            id={`commercial-service-panel-${i}`}
                            role="region"
                            aria-labelledby={`commercial-service-trigger-${i}`}
                            className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm"
                          >
                            {service.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Image or placeholder */}
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-96 rounded-2xl overflow-hidden">
              {commercialImage ? (
                <Image
                  src={commercialImage.src}
                  alt={commercialImage.alt}
                  width={commercialImage.width}
                  height={commercialImage.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center w-full h-full">
                  <div className="text-center text-muted-foreground/60">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      aria-hidden="true"
                    >
                      <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-sm">Commercial pest control services</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
