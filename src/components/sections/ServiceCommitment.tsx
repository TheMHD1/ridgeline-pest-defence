import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceCommitmentProps {
  heading: string;
  description: string;
  items: readonly string[];
  stat: string;
}

export function ServiceCommitment({
  heading,
  description,
  items,
  stat,
}: ServiceCommitmentProps) {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="service-commitment-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal>
            <div>
              <h2
                id="service-commitment-heading"
                className="font-heading text-3xl sm:text-4xl text-foreground"
              >
                {heading}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              <ul className="mt-8 space-y-4" role="list">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Stat callout */}
          <ScrollReveal delay={0.15}>
            <div className="relative rounded-xl border border-border bg-primary/5 p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {stat}
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
