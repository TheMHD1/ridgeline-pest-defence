import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PestSide {
  readonly name: string;
  readonly traits: readonly string[];
}

interface Comparison {
  readonly title: string;
  readonly pestA: PestSide;
  readonly pestB: PestSide;
  readonly tip: string;
}

interface ConfusedPestsProps {
  heading: string;
  description: string;
  comparisons: readonly Comparison[];
}

export function ConfusedPests({ heading, description, comparisons }: ConfusedPestsProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="confused-pests-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="confused-pests-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="space-y-8">
          {comparisons.map((comp) => (
            <div
              key={comp.title}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-heading text-xl text-foreground">{comp.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Pest A */}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    {comp.pestA.name}
                  </h4>
                  <ul className="space-y-2">
                    {comp.pestA.traits.map((trait) => (
                      <li key={trait} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4 shrink-0 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pest B */}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    {comp.pestB.name}
                  </h4>
                  <ul className="space-y-2">
                    {comp.pestB.traits.map((trait) => (
                      <li key={trait} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4 shrink-0 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                          <path d="M5 12h14" />
                        </svg>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tip */}
              <div className="bg-accent/5 px-6 py-4 border-t border-border">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Quick tip:</span> {comp.tip}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
