import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PEST_SLUG_MAP } from "@/content/mappings";

interface Pest {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
}

interface CommercialPestTypesProps {
  heading: string;
  description: string;
  pests: readonly Pest[];
}

export function CommercialPestTypes({ heading, description, pests }: CommercialPestTypesProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30" aria-labelledby="pest-types-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="pest-types-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pests.map((pest) => {
            const pestSlug = PEST_SLUG_MAP[pest.name];
            return pestSlug ? (
              <Link
                key={pest.name}
                href={`/pests/${pestSlug}`}
                className="group block rounded-xl border border-muted bg-card p-8 shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pest.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {pest.description}
                </p>
                <span className="text-sm font-medium text-primary">
                  Learn more about {pest.name.toLowerCase()} →
                </span>
              </Link>
            ) : (
              <div
                key={pest.name}
                className="rounded-xl border border-muted bg-card p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {pest.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pest.description}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
