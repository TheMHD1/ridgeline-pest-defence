import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import type { LocationData } from "@/content/locations/types";

interface LocationHeroProps {
  location: LocationData;
}

export function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative py-32 lg:py-40 bg-primary overflow-hidden" aria-labelledby="location-hero-heading">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 dot-pattern" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-1.5 text-sm font-medium text-white mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location.name} Service Area
            </p>

            <h1
              id="location-hero-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              {location.h1}
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-2xl">
              {location.description}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {location.responseTime} response
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
              <span>{siteConfig.stats.guaranteeName}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
              <span>{siteConfig.credentials[0]}</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="accent" size="xl" className="gap-2 font-semibold shadow-lg hover:shadow-xl">
                {siteConfig.cta.primary[0]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <a
                href={siteConfig.contact.phoneHref}
                aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 rounded-[var(--radius-default)] border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
