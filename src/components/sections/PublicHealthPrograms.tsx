import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PublicHealthProgram {
  readonly name: string;
  readonly program: string;
  readonly coverage: string;
  readonly description: string;
}

interface PublicHealthProgramsProps {
  heading: string;
  description: string;
  programs: readonly PublicHealthProgram[];
}

export function PublicHealthPrograms({ heading, description, programs }: PublicHealthProgramsProps) {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="public-health-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="public-health-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className="rounded-xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-foreground mb-1">{prog.name}</h3>
              <p className="text-sm font-medium text-accent mb-2">{prog.program}</p>
              <p className="text-xs text-muted-foreground mb-3">
                Covers: {prog.coverage}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {prog.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
