"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import { pestCategories } from "@/content/pests";
import { usePestSearch } from "@/hooks/usePestSearch";
import { categoryIcons } from "@/lib/pest-icons";
import { PestsHero } from "./PestsHero";
import { PestsCategories } from "./PestsCategories";
import { PestsCTA } from "./PestsCTA";

export function PestsIndexContent() {
  const { search, setSearch, filteredPests, groupedPests } = usePestSearch();

  return (
    <>
      <PestsHero />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-card" aria-labelledby="pest-intro-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 id="pest-intro-heading" className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
              {siteConfig.serviceArea} Most Common Pest Threats
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From spring carpenter-ant swarms to winter rodent invasions, {siteConfig.serviceArea} homeowners face pest pressure year-round.
              Our region&apos;s humid summers fuel mosquito and wasp activity, while cold winters drive mice and rats indoors.
              Accurate identification is the first step toward effective, lasting control — browse our library to learn the signs,
              risks, and proven treatment methods for every species we encounter across {siteConfig.serviceArea}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/residential"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Residential Pest Control
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <span className="text-muted-foreground/40" aria-hidden="true">|</span>
              <Link
                href="/commercial"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Commercial Pest Control
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <span className="text-muted-foreground/40" aria-hidden="true">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                Book a Free Inspection
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PestsCategories />

      {/* Search + all pests grid */}
      <section className="py-20 lg:py-28 bg-card" aria-labelledby="all-pests-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-8">
            <h2
              id="all-pests-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              All Pests
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Search or scroll to find your pest. Each page includes species details, signs, treatment plans, and prevention tips.
            </p>
          </ScrollReveal>

          {/* Search input */}
          <div className="max-w-md mx-auto mb-12">
            <label htmlFor="pest-search" className="sr-only">
              Search pests
            </label>
            <div className="relative">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                id="pest-search"
                type="search"
                role="combobox"
                aria-expanded="false"
                aria-autocomplete="list"
                placeholder="Search pests (e.g., ants, mice, raccoons)…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-muted bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary"
              />
            </div>
          </div>

          {/* Grouped pest grid */}
          {filteredPests.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No pests found matching &ldquo;{search}&rdquo;. Try a different search term.
            </p>
          ) : (
            <div className="space-y-16">
              {pestCategories
                .filter((cat) => groupedPests[cat.slug])
                .map((cat) => (
                  <div key={cat.slug}>
                    <h3 className="font-heading text-2xl text-foreground mb-6">
                      {cat.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                      {groupedPests[cat.slug].map((pest) => (
                        <Link
                          key={pest.slug}
                          href={`/pests/${pest.slug}`}
                          className="group block rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-[colors,transform,shadow] hover:shadow-lg hover:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          style={{ willChange: 'transform' }}
                        >
                          <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 flex items-center justify-center">
                            <span
                              className="text-4xl text-primary/30"
                              aria-hidden="true"
                            >
                              {categoryIcons[pest.category]}
                            </span>
                          </div>
                          <div className="p-5">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h4 className="font-heading text-lg text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                                {pest.name}
                              </h4>
                              <span className="shrink-0 text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                                {pest.seasonalStatus.replace(
                                  /^Peak Season:\s*/,
                                  ""
                                )}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {pest.shortDescription}
                            </p>
                            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                              View Treatment Details
                              <svg
                                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-focus-within:translate-x-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                aria-hidden="true"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      <PestsCTA />
    </>
  );
}
