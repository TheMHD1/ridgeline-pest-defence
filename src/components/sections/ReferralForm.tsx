import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ReferralFormComponent } from "@/components/integrations/ReferralFormComponent";

interface ReferralFormProps {
  heading: string;
  description: string;
  submitLabel: string;
}

export function ReferralForm({ heading, description, submitLabel }: ReferralFormProps) {
  return (
    <section id="referral-form" className="py-20 lg:py-28 bg-muted/30" aria-labelledby="referral-form-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 id="referral-form-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <ReferralFormComponent submitLabel={submitLabel} />
        </div>
      </div>
    </section>
  );
}
