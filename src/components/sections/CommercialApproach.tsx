import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CommercialApproachProps {
  heading: string;
  description: string;
  items: readonly string[];
  responseCallout: string;
}

export function CommercialApproach({
  heading,
  description,
  items,
  responseCallout,
}: CommercialApproachProps) {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="commercial-approach-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal>
            <div>
              <h2
                id="commercial-approach-heading"
                className="font-heading text-3xl sm:text-4xl text-foreground"
              >
                {heading}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              <ul className="mt-8 space-y-4" role="list">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Response callout */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {responseCallout}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
