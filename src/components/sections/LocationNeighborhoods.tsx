import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { LocationData } from "@/content/locations/types";

interface LocationNeighborhoodsProps {
  location: LocationData;
}

export function LocationNeighborhoods({ location }: LocationNeighborhoodsProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="neighborhoods-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Areas We Serve
          </p>
          <h2 id="neighborhoods-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {location.name} Neighbourhoods We Cover
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our technicians know {location.name} inside and out. We provide fast, reliable pest control to every corner of the city.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {location.neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-semibold text-foreground">
                  {neighborhood}
                </span>
                <span className="block text-xs text-muted-foreground">
                  Pest Control
                </span>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
