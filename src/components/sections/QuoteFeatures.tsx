import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ReactNode } from "react";

interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface QuoteFeaturesProps {
  heading: string;
  items: readonly FeatureItem[];
}

const iconMap: Record<string, ReactNode> = {
  clock: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  zap: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export function QuoteFeatures({ heading, items }: QuoteFeaturesProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="quote-features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 id="quote-features-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {iconMap[item.icon] ?? iconMap.shield}
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
