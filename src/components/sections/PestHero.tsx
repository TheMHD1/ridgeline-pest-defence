import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import type { PestData } from "@/content/types";
import { getPestImage, getHeroImage } from "@/lib/images";

interface PestHeroProps {
  pest: PestData;
}

const categoryLabels: Record<string, string> = {
  crawlers: "Crawling Insects",
  flyers: "Flying Insects",
  rodents: "Rodents",
  wildlife: "Wildlife",
};

export function PestHero({ pest }: PestHeroProps) {
  // Try to get pest-specific hero or category hero, fall back to pest image
  const heroImage = getHeroImage(pest.slug) || getHeroImage(pest.category) || getPestImage(pest.slug);
  return (
    <section
      className="relative flex items-center overflow-hidden py-32 lg:py-40"
      aria-label={`${pest.name} control`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              sizes="100vw"
              fetchPriority="high"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" aria-hidden="true" />
            <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"
              role="img"
              aria-label={pest.image.alt}
            />
            <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <ScrollReveal className="max-w-3xl">
          {/* Breadcrumb badge */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Link
              href="/pests"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90 border border-white/20 transition-colors hover:bg-white/25"
            >
              Pest Library
            </Link>
            <span className="text-white/60" aria-hidden="true">/</span>
            <Link
              href={`/${pest.category}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90 border border-white/20 transition-colors hover:bg-white/25"
            >
              {categoryLabels[pest.category] ?? pest.category}
            </Link>
          </div>

          {/* H1 */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            {`${pest.name} Control`}
          </h1>

          {/* Seasonal tag */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-accent border border-accent/30">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {pest.seasonalStatus}
            </span>
          </div>

          {/* Short description */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            {pest.shortDescription}
          </p>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
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
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="accent" size="lg" className="gap-2 font-semibold shadow-lg hover:shadow-xl">
              Book Your Inspection
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius-default)] border-2 border-white/20 bg-white/10 px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/20"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Talk to a Technician
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
