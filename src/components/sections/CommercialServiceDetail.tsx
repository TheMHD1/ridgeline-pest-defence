import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Feature {
  readonly title: string;
  readonly description: string;
}

interface CommercialServiceDetailProps {
  heading: string;
  description: string;
  features: readonly Feature[];
}

export function CommercialServiceDetail({
  heading,
  description,
  features,
}: CommercialServiceDetailProps) {
  return (
    <section
      className="py-20 lg:py-28 bg-muted/30"
      aria-labelledby="service-detail-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="service-detail-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="relative rounded-xl border border-muted bg-card p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
