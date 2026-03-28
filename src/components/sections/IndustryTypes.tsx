import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Industry {
  readonly name: string;
  readonly description: string;
}

interface IndustryTypesProps {
  heading: string;
  description: string;
  industries: readonly Industry[];
}

export function IndustryTypes({ heading, description, industries }: IndustryTypesProps) {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="industry-types-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="industry-types-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-semibold text-foreground mb-1">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
