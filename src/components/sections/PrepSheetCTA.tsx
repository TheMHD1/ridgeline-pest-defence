import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PrepSheetCTAProps {
  heading: string;
  description: string;
  phone: { readonly label: string; readonly href: string };
  email: { readonly label: string; readonly href: string };
  bookCta: { readonly label: string; readonly href: string };
}

export function PrepSheetCTA({ heading, description, phone, email, bookCta }: PrepSheetCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-primary print:hidden" aria-labelledby="prep-cta-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 id="prep-cta-heading" className="font-heading text-3xl sm:text-4xl text-white">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <Link
              href={bookCta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-[background-color,box-shadow] hover:bg-accent/90 hover:shadow-xl"
            >
              {bookCta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={phone.href}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {phone.label}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/90">
            Or email us at{" "}
            <a href={email.href} className="text-white/90 hover:text-white underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
              {email.label}
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
