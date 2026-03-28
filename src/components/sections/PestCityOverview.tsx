import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PestCityPageData } from "@/content/pest-city/types";

interface PestCityOverviewProps {
  data: PestCityPageData;
}

export function PestCityOverview({ data }: PestCityOverviewProps) {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="pest-city-overview-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="pest-city-overview-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground mb-8"
          >
            Why {data.cityName} Properties Need Professional{" "}
            {data.pestName}
          </h2>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            {data.overview.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 50)}>{paragraph}</p>
            ))}
          </div>

          {/* Internal cross-links for SEO */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={data.pestPageHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Learn more about {data.pestName}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <span className="text-muted-foreground/40" aria-hidden="true">|</span>
            <Link
              href={data.locationPageHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Pest control in {data.cityName}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <span className="text-muted-foreground/40" aria-hidden="true">|</span>
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Get a free quote
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Local challenges callout */}
        <ScrollReveal>
          <div className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6">
            <h3 className="font-heading text-lg text-foreground mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Local Pest Challenges
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {data.localChallenges}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
