import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import type { PestData } from "@/content/types";

interface PestSpeciesDetailProps {
  pest: PestData;
}

export function PestSpeciesDetail({ pest }: PestSpeciesDetailProps) {
  if (pest.subspecies.length === 0) return null;

  return (
    <section className="py-20 lg:py-28" aria-labelledby="species-detail-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Species Breakdown
          </p>
          <h2
            id="species-detail-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            Types of {pest.name} in {siteConfig.serviceArea}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Correct identification is the first step to effective treatment. Each subspecies behaves differently and requires a targeted approach.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pest.subspecies.map((sub) => (
            <div
              key={sub.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
