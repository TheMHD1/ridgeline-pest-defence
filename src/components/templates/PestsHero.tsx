import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import { allPests } from "@/content/pests";

export function PestsHero() {
  return (
    <section
      className="relative flex items-center overflow-hidden py-20 lg:py-28"
      aria-label="Pest library"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
        <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <ScrollReveal className="mb-6" delay={0.05}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90 border border-white/20">
              Pest Library
            </span>
          </ScrollReveal>

          <ScrollReveal as="h1" className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight" delay={0.15}>
            Identify Your Pest
          </ScrollReveal>

          <ScrollReveal as="p" className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed" delay={0.25}>
            Browse {allPests.length} pest species common to {siteConfig.serviceArea}. Each page covers signs, risks, treatment steps, and prevention — so you know exactly what you&apos;re dealing with.
          </ScrollReveal>

          <ScrollReveal className="mt-6 flex flex-wrap items-center gap-4" delay={0.35}>
            {siteConfig.credentials.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {badge}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
