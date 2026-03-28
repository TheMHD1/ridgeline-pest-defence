import Link from "next/link";
import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const { rebatePrograms } = homeConfig;

const programIcons: Record<string, React.ReactNode> = {
  building: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M3 21h18M3 7v14M21 7v14M6 11h.01M6 15h.01M6 19h.01M10 11h.01M10 15h.01M10 19h.01M14 11h.01M14 15h.01M14 19h.01M18 11h.01M18 15h.01M18 19h.01M3 7l9-4 9 4" />
    </svg>
  ),
  landmark: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  government: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M2 20h20M4 20V9l8-6 8 6v11M9 20v-5h6v5M12 3v1" />
    </svg>
  ),
};

export function RebatePrograms() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="rebate-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <h2 id="rebate-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {rebatePrograms.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {rebatePrograms.description}
          </p>
        </ScrollReveal>

        {/* Program cards */}
        <ScrollReveal className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rebatePrograms.programs.map((program) => (
            <div
              key={program.title}
              className="rounded-xl bg-card border border-border p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                {programIcons[program.icon]}
              </div>
              <h3 className="font-heading text-xl text-foreground">{program.title}</h3>
              <p className="text-sm text-accent font-medium mt-1">{program.type}</p>
              <p className="text-sm text-muted-foreground mt-3">{program.description}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Footer CTA */}
        <ScrollReveal className="mt-14">
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
            <h3 className="font-heading text-2xl text-foreground">
              {rebatePrograms.footer.heading}
            </h3>
            <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
              {rebatePrograms.footer.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div>
                <Link
                  href={rebatePrograms.footer.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {rebatePrograms.footer.primaryCta.label}
                </Link>
              </div>
              <a
                href={rebatePrograms.footer.phoneCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {rebatePrograms.footer.phoneCta.label}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
