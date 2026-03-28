import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import { PEST_ROUTE_PREFIX, CITY_DISPLAY_NAMES } from "@/content/mappings";
import { getAllPestCityRoutes } from "@/content/pest-city/data";
import type { PestData } from "@/content/types";

interface PestLocationLinksProps {
  pest: PestData;
}

/* Lazy-compute valid pest-city route paths to avoid top-level import of full data */
let _validPestCityPaths: Set<string> | null = null;
function getValidPestCityPaths() {
  if (!_validPestCityPaths) {
    _validPestCityPaths = new Set(getAllPestCityRoutes().map((r) => r.route));
  }
  return _validPestCityPaths;
}

export function PestLocationLinks({ pest }: PestLocationLinksProps) {
  const prefix = PEST_ROUTE_PREFIX[pest.slug];
  if (pest.cityPageSlugs.length === 0 || !prefix) return null;

  const validCitySlugs = pest.cityPageSlugs.filter((slug) =>
    getValidPestCityPaths().has(`/${prefix}-${slug}`)
  );

  if (validCitySlugs.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="pest-locations-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Service Areas
          </p>
          <h2
            id="pest-locations-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            {pest.name} Control Near You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We serve {siteConfig.regions.join(", ")}. Find {pest.name.toLowerCase()} control in your city.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {validCitySlugs.map((slug) => (
            <div key={slug}>
              <Link
                href={`/${prefix}-${slug}`}
                className="group block rounded-xl border border-muted bg-card p-4 text-center shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary/30"
              >
                <span className="block text-sm font-medium text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                  {pest.name} Control
                </span>
                <span className="block text-xs text-muted-foreground mt-1">
                  in {CITY_DISPLAY_NAMES[slug] ?? slug}
                </span>
              </Link>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
