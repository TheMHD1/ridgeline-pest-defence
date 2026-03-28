import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PrivacySection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
}

interface PrivacyContentProps {
  sections: readonly PrivacySection[];
}

export function PrivacyContent({ sections }: PrivacyContentProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section) => (
            <ScrollReveal key={section.id}>
              <div id={section.id}>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
