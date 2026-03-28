import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { getCategoryImage } from "@/lib/images";

interface Category {
  readonly title: string;
  readonly pests: string;
  readonly href: string;
  readonly icon: string;
}

interface PestCategoriesProps {
  heading: string;
  description: string;
  categories: readonly Category[];
}

import type { ReactNode } from "react";

const gradients: Record<string, string> = {
  crawlers: "from-emerald-900/40 to-emerald-800/10",
  flyers: "from-amber-900/40 to-amber-800/10",
  rodents: "from-slate-900/40 to-slate-800/10",
  wildlife: "from-stone-900/40 to-stone-800/10",
};

const iconMap: Record<string, ReactNode> = {
  crawlers: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  flyers: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  rodents: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  wildlife: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5" />
    </svg>
  ),
};

export function PestCategories({ heading, description, categories }: PestCategoriesProps) {
  return (
    <section className="py-20 lg:py-28 2xl:py-32 bg-muted/30" aria-labelledby="pest-categories-heading">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="pest-categories-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat) => {
            // Extract category slug from href (e.g. "/crawlers" -> "crawlers")
            const categorySlug = cat.href.replace('/', '');
            const categoryImage = getCategoryImage(categorySlug);

            return (
              <div key={cat.title}>
                <Link
                  href={cat.href}
                  className="group block relative rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  style={{ willChange: "transform" }}
                >
                  {/* Image or gradient placeholder */}
                  <div className="aspect-[4/3] flex items-center justify-center overflow-hidden">
                    {categoryImage ? (
                      <Image
                        src={categoryImage.src}
                        alt={categoryImage.alt}
                        width={categoryImage.width}
                        height={categoryImage.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${gradients[cat.icon] ?? "from-primary/20 to-primary/5"} flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <div className="text-white/90">
                          {iconMap[cat.icon] ?? iconMap.crawlers}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cat.pests}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </ScrollReveal>
      </Container>
    </section>
  );
}
