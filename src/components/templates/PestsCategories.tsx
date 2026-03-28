import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { pestCategories } from "@/content/pests";
import { categoryIcons } from "@/lib/pest-icons";

export function PestsCategories() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Pest Categories
          </p>
          <h2
            id="categories-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            Browse by Category
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pestCategories.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 0.1}>
              <Link
                href={`/${cat.slug}`}
                className="group block rounded-xl border border-border bg-card p-6 shadow-sm text-center transition-[colors,transform,shadow] hover:shadow-lg hover:-translate-y-1 focus-visible:shadow-lg focus-visible:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span
                  className="block text-4xl mb-4"
                  aria-hidden="true"
                >
                  {categoryIcons[cat.slug]}
                </span>
                <h3 className="font-heading text-xl text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {cat.pests.length} species covered
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View category
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
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
