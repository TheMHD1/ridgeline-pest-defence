import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FormspreeForm } from "@/components/integrations/FormspreeForm";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const { whyChooseUs } = homeConfig;

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="why-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Why list + certifications */}
          <div>
            <ScrollReveal>
              <h2 id="why-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
                {whyChooseUs.heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal
              className="mt-8 space-y-4"
              as="ul"
            >
              {whyChooseUs.reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80 text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal className="mt-10">
              <div className="flex flex-wrap gap-4">
                {whyChooseUs.certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="default"
                    size="md"
                    className="gap-2 rounded-lg border"
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-medium">{cert}</span>
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact form */}
          <div>
            <ScrollReveal>
              <div className="rounded-xl bg-card border border-border p-8 shadow-sm">
                <h3 className="font-heading text-2xl text-foreground">
                  {whyChooseUs.contactForm.heading}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {whyChooseUs.contactForm.description}
                </p>

                <FormspreeForm variant="lead" id="why-choose-us" className="mt-6" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
