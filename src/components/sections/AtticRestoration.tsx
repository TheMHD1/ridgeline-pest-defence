import Link from "next/link";
import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const { atticRestoration } = homeConfig;

const serviceIcons: Record<string, React.ReactNode> = {
  sparkles: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  wind: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    </svg>
  ),
};

export function AtticRestoration() {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="attic-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {atticRestoration.badge}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Main content */}
          <div>
            <ScrollReveal>
              <h2 id="attic-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
                {atticRestoration.heading}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {atticRestoration.description}
              </p>
            </ScrollReveal>

            {/* Sub-services */}
            <ScrollReveal className="mt-8 space-y-5">
              {atticRestoration.services.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 rounded-lg bg-background p-4 border border-border"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    {serviceIcons[service.icon]}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal className="mt-8 flex flex-wrap gap-4">
              <div>
                <Link
                  href={atticRestoration.cta.primary.href}
                  className="group/cta inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  {atticRestoration.cta.primary.label}
                  <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <a
                href={atticRestoration.cta.phone.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {atticRestoration.cta.phone.label}
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Health callout + Why choose */}
          <div className="space-y-6">
            {/* Health callout */}
            <ScrollReveal>
              <div className="rounded-xl bg-primary/5 border border-primary/10 p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">
                      {atticRestoration.healthCallout.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {atticRestoration.healthCallout.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Why choose */}
            <ScrollReveal>
              <div className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-heading text-lg text-foreground mb-4">
                  {atticRestoration.whyChoose.title}
                </h3>
                <ul className="space-y-3">
                  {atticRestoration.whyChoose.reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-sm text-foreground/80">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Urgency */}
            <ScrollReveal>
              <p className="flex items-center gap-2 text-sm font-medium text-accent">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {atticRestoration.urgency}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
