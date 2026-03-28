import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface City {
  readonly name: string;
  readonly href: string;
}

interface Region {
  readonly name: string;
  readonly cities: readonly City[];
}

interface LocationsGridProps {
  regions: readonly Region[];
}

export function LocationsGrid({ regions }: LocationsGridProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="locations-grid-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Find Your City
          </p>
          <h2 id="locations-grid-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            All Service Areas
          </h2>
        </ScrollReveal>

        <ScrollReveal className="space-y-12">
          {regions.map((region) => (
            <div key={region.name}>
              <h3 className="font-heading text-2xl text-foreground mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {region.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {region.cities.map((city) => (
                  <div key={city.name}>
                  <Link
                    href={city.href}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:border-primary/30 focus-visible:shadow-lg focus-visible:border-primary/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                        {city.name} Pest Control
                      </span>
                    </div>
                  </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
