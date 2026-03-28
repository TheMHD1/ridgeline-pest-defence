import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ContactInfoProps {
  heading: string;
  phone: { readonly label: string; readonly value: string; readonly href: string };
  email: { readonly label: string; readonly value: string; readonly href: string };
  hours: { readonly label: string; readonly value: string };
  serviceAreas: { readonly label: string; readonly areas: readonly string[] };
}

export function ContactInfo({ heading, phone, email, hours, serviceAreas }: ContactInfoProps) {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="contact-info-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 id="contact-info-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <div className="rounded-xl bg-card border border-border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{phone.label}</h3>
            <a href={phone.href} className="text-primary font-medium hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label={`Call ${phone.value}`}>
              {phone.value}
            </a>
          </div>

          {/* Email */}
          <div className="rounded-xl bg-card border border-border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{email.label}</h3>
            <a href={email.href} className="text-primary font-medium hover:underline text-sm break-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label={`Email ${email.value}`}>
              {email.value}
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-xl bg-card border border-border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{hours.label}</h3>
            <p className="text-sm text-muted-foreground">{hours.value}</p>
          </div>

          {/* Service Areas */}
          <div className="rounded-xl bg-card border border-border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{serviceAreas.label}</h3>
            <ul className="text-sm text-muted-foreground space-y-0.5">
              {serviceAreas.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
