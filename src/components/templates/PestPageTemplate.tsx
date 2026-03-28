import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PestHero } from "@/components/sections/PestHero";
import { PestSpeciesDetail } from "@/components/sections/PestSpeciesDetail";
import { PestSigns } from "@/components/sections/PestSigns";
import { PestTreatmentProcess } from "@/components/sections/PestTreatmentProcess";
import { PestPrevention } from "@/components/sections/PestPrevention";
import { FAQ } from "@/components/sections/FAQ";
import { PestLocationLinks } from "@/components/sections/PestLocationLinks";
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import { siteConfig } from "@/content/site.config";
import type { PestData } from "@/content/types";
import { getPestBySlug } from "@/content/pests";

interface PestPageTemplateProps {
  pest: PestData;
}

export function PestPageTemplate({ pest }: PestPageTemplateProps) {
  return (
    <article>
      <PestHero pest={pest} />

      {/* Full description */}
      <section className="py-20 lg:py-28" aria-labelledby="pest-overview-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="pest-overview-heading" className="sr-only">
              {pest.name} Overview
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              {pest.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-deferred">
        <PestSpeciesDetail pest={pest} />
      </div>
      <div className="section-deferred">
        <PestSigns pest={pest} />
      </div>
      <div className="section-deferred">
        <PestTreatmentProcess pest={pest} />
      </div>
      <div className="section-deferred">
        <PestPrevention pest={pest} />
      </div>
      <div className="section-deferred">
        {pest.faqs.length > 0 && (
          <FAQ
            eyebrow="FAQ"
            heading={`Common Questions About ${pest.name}`}
            items={pest.faqs}
            idPrefix="pest-faq"
          />
        )}
      </div>

      {/* Prep sheet link */}
      {pest.prepSheetSlug && (
        <section className="py-12 bg-accent/5 border-y border-accent/15" aria-labelledby="prep-sheet-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h2 id="prep-sheet-heading" className="font-heading text-lg text-foreground">
                Preparation Sheet Available
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Get your property ready before your {pest.name.toLowerCase()} treatment for the best results.
              </p>
            </div>
            <Link
              href={`/prep-sheet-${pest.prepSheetSlug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-card px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Prep Sheet
            </Link>
          </div>
        </section>
      )}

      <PestLocationLinks pest={pest} />

      {/* Related pests & service cross-links */}
      {pest.relatedPestSlugs.length > 0 && (
        <section className="py-16 lg:py-20 bg-card" aria-labelledby="related-pests-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 id="related-pests-heading" className="font-heading text-2xl sm:text-3xl text-foreground text-center mb-8">
                Related Pests
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {pest.relatedPestSlugs.map((slug) => {
                  const related = getPestBySlug(slug);
                  if (!related) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/pests/${slug}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-[box-shadow,border-color] hover:border-primary hover:shadow-sm"
                    >
                      {related.name}
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-muted">
                <Link
                  href="/residential"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Residential {pest.name} Control
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <span className="text-muted-foreground/40" aria-hidden="true">|</span>
                <Link
                  href="/commercial"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Commercial {pest.name} Control
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <ServiceCTA
        heading={`Dealing with ${pest.name.toLowerCase()}?`}
        description={`Book a free inspection and get a same-day quote. Our technicians serve ${siteConfig.regions.join(", ")} — backed by a ${siteConfig.stats.guarantee} ${siteConfig.stats.guaranteeName}.`}
        primaryCta={{ label: siteConfig.cta.primary[1], href: "/contact" }}
        phoneCta={{ label: siteConfig.cta.phone[1], href: siteConfig.contact.phoneHref }}
      />
    </article>
  );
}
