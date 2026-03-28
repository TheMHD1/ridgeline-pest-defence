import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PestData } from "@/content/types";

interface PestSignsProps {
  pest: PestData;
}

export function PestSigns({ pest }: PestSignsProps) {
  if (pest.signs.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="pest-signs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Warning Signs
          </p>
          <h2
            id="pest-signs-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            Signs of {/^[aeiou]/i.test(pest.name) ? "an" : "a"} {pest.name} Infestation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Spot one or more of these indicators? The sooner you act, the simpler and cheaper the fix.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
          as="ul"
        >
          {pest.signs.map((sign) => (
            <li
              key={sign}
              className="flex items-start gap-3 rounded-lg border border-muted bg-card p-5 shadow-sm"
            >
              <svg
                className="w-5 h-5 text-destructive shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm text-foreground leading-relaxed">
                {sign}
              </span>
            </li>
          ))}
        </ScrollReveal>

        {/* Health risks sub-section */}
        {pest.healthRisks.length > 0 && (
          <div className="mt-16 max-w-5xl mx-auto">
            <ScrollReveal>
              <h3 className="font-heading text-2xl text-foreground text-center mb-8">
                Health &amp; Property Risks
              </h3>
            </ScrollReveal>
            <ScrollReveal
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              as="ul"
            >
              {pest.healthRisks.map((risk) => (
                <li
                  key={risk}
                  className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-5"
                >
                  <svg
                    className="w-5 h-5 text-destructive shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-foreground leading-relaxed">
                    {risk}
                  </span>
                </li>
              ))}
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
