import Link from "next/link";
import Image from "next/image";
import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPestImage } from "@/lib/images";

const { seasonalPests } = homeConfig;

export function SeasonalPests() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="seasonal-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {seasonalPests.seasonBadge}
            </span>
            <h2 id="seasonal-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
              {seasonalPests.heading}
            </h2>
          </div>
        </ScrollReveal>


        {/* Pest cards */}
        <ScrollReveal className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasonalPests.pests.map((pest) => {
            // Extract slug from href (e.g. "/pests/mice" -> "mice")
            const slug = pest.href.split("/").pop() || "";
            const pestImage = getPestImage(slug);

            return (
              <article
                key={pest.name}
                className="group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 focus-within:shadow-lg transition-[box-shadow,transform]"
              >
                {/* Image or placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {pestImage ? (
                    <Image
                      src={pestImage.src}
                      alt={pestImage.alt}
                      width={pestImage.width}
                      height={pestImage.height}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div
                      className={`bg-gradient-to-br ${pest.image.placeholder} w-full h-full`}
                      role="img"
                      aria-label={pest.image.alt}
                    />
                  )}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {pest.seasonalTag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-xl text-foreground">{pest.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pest.subspecies}</p>
                  <p className="text-sm text-foreground mt-3 leading-relaxed">
                    {pest.description}
                  </p>
                  <Link
                    href={pest.href}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label={`View treatment details for ${pest.name}`}
                  >
                    View Treatment Details
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </ScrollReveal>

        {/* Alert text */}
        <ScrollReveal className="mt-8">
          <p className="flex items-start gap-2 text-sm text-destructive font-medium bg-destructive/5 rounded-lg px-4 py-3 border border-destructive/10">
            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {seasonalPests.alertText}
          </p>
        </ScrollReveal>

        {/* CTA box */}
        <ScrollReveal className="mt-10">
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
            <h3 className="font-heading text-2xl text-foreground">
              {seasonalPests.ctaBox.heading}
            </h3>
            <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
              {seasonalPests.ctaBox.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div>
                <Link
                  href={seasonalPests.ctaBox.primaryCta.href}
                  className="group/cta inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  {seasonalPests.ctaBox.primaryCta.label}
                  <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link
                  href={seasonalPests.ctaBox.secondaryCta.href}
                  className="group/cta inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
                >
                  {seasonalPests.ctaBox.secondaryCta.label}
                  <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
