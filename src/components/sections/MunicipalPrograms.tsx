import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface MunicipalProgram {
  readonly name: string;
  readonly program: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly description: string;
}

interface MunicipalProgramsProps {
  heading: string;
  description: string;
  programs: readonly MunicipalProgram[];
}

export function MunicipalPrograms({ heading, description, programs }: MunicipalProgramsProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="municipal-programs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="municipal-programs-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-foreground">{prog.name}</h3>
              </div>
              <p className="text-sm font-medium text-accent mb-2">{prog.program}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {prog.description}
              </p>
              <a
                href={prog.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {prog.phone}
              </a>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
