import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FormspreeForm } from "@/components/integrations/FormspreeForm";

interface FormPlaceholderProps {
  id?: string;
  heading: string;
  description: string;
}

export function FormPlaceholder({ id, heading, description }: FormPlaceholderProps) {
  return (
    <section id={id} className="py-20 lg:py-28 bg-muted/30" aria-labelledby={id ? `${id}-heading` : "form-heading"}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2
            id={id ? `${id}-heading` : "form-heading"}
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <FormspreeForm variant="lead" id={id || "form"} />
        </div>
      </div>
    </section>
  );
}
