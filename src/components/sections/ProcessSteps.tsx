import Link from "next/link";
import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

const { processSteps } = homeConfig;

const stepIcons: Record<string, React.ReactNode> = {
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="process-heading">
      <Container>
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            {processSteps.eyebrow}
          </p>
          <h2 id="process-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {processSteps.heading}
          </h2>
        </ScrollReveal>

        {/* Steps grid */}
        <ScrollReveal>
          <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0">
            {processSteps.steps.map((step) => (
              <li
                key={step.number}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-heading text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  {stepIcons[step.icon]}
                </div>

                <h3 className="font-heading text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        {/* Discount banner */}
        <ScrollReveal className="mt-14">
          <div className="rounded-xl bg-accent/10 border border-accent/20 px-6 py-4 flex items-center justify-center gap-3 text-center">
            <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <p className="text-sm sm:text-base font-medium text-foreground">
              {processSteps.discountBanner}
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="mt-10 text-center">
          <div className="inline-block">
            <Link
              href={processSteps.cta.href}
              className="group/cta inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition-[background-color,box-shadow] hover:bg-accent/90 hover:shadow-xl"
            >
              {processSteps.cta.label}
              <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
