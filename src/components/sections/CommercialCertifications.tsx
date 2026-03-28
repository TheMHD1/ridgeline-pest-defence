import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Badge {
  readonly label: string;
  readonly icon: string;
}

interface Feature {
  readonly title: string;
  readonly icon: string;
}

interface CommercialCertificationsProps {
  heading: string;
  description: string;
  badges: readonly Badge[];
  features: readonly Feature[];
}

export function CommercialCertifications({
  heading,
  description,
  badges,
  features,
}: CommercialCertificationsProps) {
  return (
    <section
      className="py-20 lg:py-28 bg-muted/30"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            {/* Certification badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {badge.label}
                </div>
              ))}
            </div>

            <h2
              id="certifications-heading"
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center rounded-xl border border-muted bg-card p-6 shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                {feature.title}
              </h3>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
