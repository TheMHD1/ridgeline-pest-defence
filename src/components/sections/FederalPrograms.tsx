import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FederalProgram {
  readonly name: string;
  readonly description: string;
}

interface FederalProgramsProps {
  heading: string;
  description: string;
  programs: readonly FederalProgram[];
}

export function FederalPrograms({ heading, description, programs }: FederalProgramsProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="federal-programs-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="federal-programs-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="space-y-6">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm flex items-start gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">{prog.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prog.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
