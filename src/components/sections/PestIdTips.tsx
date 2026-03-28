import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PestIdTipsProps {
  heading: string;
  description: string;
  tips: readonly string[];
  email: string;
  emailHref: string;
}

export function PestIdTips({ heading, description, tips, email, emailHref }: PestIdTipsProps) {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="pest-id-tips-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 id="pest-id-tips-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {tips.map((tip, i) => (
            <div
              key={tip}
              className="flex items-start gap-3 rounded-xl bg-card border border-border p-5"
            >
              <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-accent/10 text-accent font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-sm text-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="text-center">
          <p className="text-muted-foreground mb-3">Email your photos to:</p>
          <a
            href={emailHref}
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
