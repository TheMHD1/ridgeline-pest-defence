import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PestData } from "@/content/types";

interface PestPreventionProps {
  pest: PestData;
}

export function PestPrevention({ pest }: PestPreventionProps) {
  if (pest.preventionTips.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="pest-prevention-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Prevention Tips
          </p>
          <h2
            id="pest-prevention-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            How to Keep {pest.name} Out
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Treatment solves the current problem. Prevention stops the next one. These steps reduce the chances of a repeat visit.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pest.preventionTips.map((tip, i) => (
            <div
              key={tip}
              className="flex items-start gap-3 rounded-xl border border-muted bg-card p-6 shadow-sm"
            >
              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {i + 1}
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
