import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ReactNode } from "react";

interface TrustItem {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface PestsTrustProps {
  heading: string;
  items: readonly TrustItem[];
}

const iconMap: Record<string, ReactNode> = {
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  leaf: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
      <path d="M12 13V7" />
      <path d="M9 10l3-3 3 3" />
    </svg>
  ),
};

export function PestsTrust({ heading, items }: PestsTrustProps) {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="pests-trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 id="pests-trust-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
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
