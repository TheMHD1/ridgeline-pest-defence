import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getHeroImage } from "@/lib/images";

interface ServiceHeroProps {
  badge: string;
  heading: string;
  subtitle: string;
  pills: readonly string[];
  badges: readonly string[];
  cta: {
    readonly primary: { readonly label: string; readonly href: string };
    readonly phone: { readonly label: string; readonly href: string };
  };
  backgroundAlt: string;
  heroImageKey?: string;
}

export function ServiceHero({
  badge,
  heading,
  subtitle,
  pills,
  badges,
  cta,
  backgroundAlt,
  heroImageKey = "residential",
}: ServiceHeroProps) {
  const heroImage = heroImageKey ? getHeroImage(heroImageKey) : null;
  return (
    <section
      data-dark-bg
      className="relative flex items-center overflow-hidden py-32 lg:py-40"
      aria-label={heading}
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
              aria-label={backgroundAlt}
            />
            <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <ScrollReveal className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6">
            <Badge variant="glass" size="lg">{badge}</Badge>
          </div>

          {/* H1 */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            {heading}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {pills.map((pill, i) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 rounded-full bg-black/25 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/15"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  {i + 1}
                </span>
                {pill}
              </span>
            ))}
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {badges.map((b) => (
              <span
                key={b}
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
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={cta.primary.href} variant="accent" size="lg" className="gap-2 font-semibold shadow-lg hover:shadow-xl">
              {cta.primary.label}
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
              href={cta.phone.href}
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
              {cta.phone.label}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
