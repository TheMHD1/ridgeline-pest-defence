import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import type { PestData } from "@/content/types";

interface TreatmentProcessBaseProps {
  heading: string;
  steps: readonly { step: string; description: string }[];
  idPrefix?: string;
}

export function TreatmentProcessBase({ heading, steps, idPrefix = "pest-treatment" }: TreatmentProcessBaseProps) {
  if (steps.length === 0) return null;

  return (
    <section className="py-20 lg:py-28" aria-labelledby={`${idPrefix}-heading`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Treatment Process
          </p>
          <h2
            id={`${idPrefix}-heading`}
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Every step is species-specific. No guesswork, no generic sprays — just targeted treatment backed by our {siteConfig.stats.guarantee} {siteConfig.stats.guaranteeName}.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-4xl mx-auto space-y-6">
          {steps.map((ts, i) => (
            <div
              key={ts.step}
              className="flex gap-5 rounded-xl border border-muted bg-card p-6 shadow-sm"
            >
              <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">
                  {ts.step}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ts.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

interface PestTreatmentProcessProps {
  pest: PestData;
}

export function PestTreatmentProcess({ pest }: PestTreatmentProcessProps) {
  return (
    <TreatmentProcessBase
      heading={`How We Eliminate ${pest.name}`}
      steps={pest.treatmentSteps}
      idPrefix="pest-treatment"
    />
  );
}
