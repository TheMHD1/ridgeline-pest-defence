import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const { pestId } = homeConfig;

const stepIcons: Record<string, React.ReactNode> = {
  camera: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  message: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  bug: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

export function PestIdSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground" aria-labelledby="pestid-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-3">
              Free Pest Identification
            </p>
            <h2 id="pestid-heading" className="font-heading text-3xl sm:text-4xl">
              {pestId.heading}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {pestId.description}
            </p>
          </ScrollReveal>

          {/* 3 Steps */}
          <ScrollReveal className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pestId.steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-3">
                  {step.number}
                </span>
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-primary-foreground mb-4">
                  {stepIcons[step.icon]}
                </div>
                <h3 className="font-heading text-xl">{step.label}</h3>
              </div>
            ))}
          </ScrollReveal>

          {/* SMS link */}
          <ScrollReveal className="mt-12">
            <a
              href={pestId.sms.href}
              aria-label={`Text ${pestId.sms.displayNumber} for free pest identification`}
              className="inline-flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-8 py-4 transition-colors hover:bg-white/15"
            >
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span className="text-left">
                <span className="block text-sm text-primary-foreground/70">Text for free pest ID</span>
                <span className="block text-lg font-semibold">{pestId.sms.displayNumber}</span>
              </span>
              <svg className="w-5 h-5 text-primary-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
