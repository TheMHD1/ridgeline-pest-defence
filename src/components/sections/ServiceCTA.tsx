import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

interface ServiceCTAProps {
  heading: string;
  description: string;
  primaryCta: { readonly label: string; readonly href: string };
  phoneCta?: { readonly label: string; readonly href: string };
}

export function ServiceCTA({ heading, description, primaryCta, phoneCta }: ServiceCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-primary" aria-labelledby="service-cta-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            id="service-cta-heading"
            className="font-heading text-3xl sm:text-4xl text-white"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href={primaryCta.href}
              variant="accent"
              size="lg"
              className="group/cta gap-2 font-semibold shadow-lg transition-shadow hover:shadow-xl"
            >
              {primaryCta.label}
              <svg
                className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            {phoneCta && (
              <Button
                href={phoneCta.href}
                variant="outline"
                size="lg"
                className="gap-2 font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {phoneCta.label}
              </Button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
