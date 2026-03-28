import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ReactNode } from "react";

interface ProcessStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface ReferralProcessProps {
  heading: string;
  steps: readonly ProcessStep[];
}

const iconMap: Record<string, ReactNode> = {
  users: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  phone: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  gift: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
      <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" />
    </svg>
  ),
};

export function ReferralProcess({ heading, steps }: ReferralProcessProps) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="referral-process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 id="referral-process-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center relative"
            >
              <div className="mx-auto mb-5 relative">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {iconMap[step.icon] ?? iconMap.users}
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
