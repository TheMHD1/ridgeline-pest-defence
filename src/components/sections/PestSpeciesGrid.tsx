import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PestData } from "@/content/types";
import { getPestImage } from "@/lib/images";
import { getCategoryIcon } from "@/lib/pest-icons";

interface PestSpeciesGridProps {
  heading: string;
  description: string;
  pests: PestData[];
}

export function PestSpeciesGrid({ heading, description, pests }: PestSpeciesGridProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="pest-species-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="pest-species-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pests.map((pest) => {
            const pestImage = getPestImage(pest.slug);
            return (
              <div key={pest.slug}>
                <Link
                  href={`/pests/${pest.slug}`}
                  aria-label={`Learn about ${pest.name} treatment`}
                  className="group block rounded-xl overflow-hidden border border-muted bg-card shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {/* Image or placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 flex items-center justify-center overflow-hidden">
                    {pestImage ? (
                      <Image
                        src={pestImage.src}
                        alt={pestImage.alt}
                        width={pestImage.width}
                        height={pestImage.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-4xl text-primary/30" role="img" aria-label={`${pest.category} emoji`}>
                        {getCategoryIcon(pest.category)}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-lg text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                      {pest.name}
                    </h3>
                    <span className="shrink-0 text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                      {pest.seasonalStatus.replace(/^Peak Season:\s*/, "")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {pest.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Get Treatment Info
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-focus-within:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
