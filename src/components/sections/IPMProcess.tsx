import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { IPMStep } from "@/content/types";

interface IPMProcessProps {
  heading: string;
  description: string;
  steps: IPMStep[];
}

export function IPMProcess({ heading, description, steps }: IPMProcessProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30" aria-labelledby="ipm-process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Integrated Pest Management
            </span>
            <h2
              id="ipm-process-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 hidden sm:block"
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative flex gap-6 mb-10 last:mb-0"
            >
              {/* Step number */}
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg shadow-md">
                {i + 1}
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <h3 className="font-heading text-xl text-foreground">
                  {s.step}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
