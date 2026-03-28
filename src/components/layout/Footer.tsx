import Link from "next/link";
import { navigationConfig } from "@/content/navigation.config";
import { siteConfig } from "@/content/site.config";
import { ManageCookiesButton } from "./ManageCookiesButton";

const { footer } = navigationConfig;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground" role="contentinfo">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: brand + contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-heading text-2xl text-primary-foreground">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-footer-foreground/80 max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 text-sm text-footer-foreground/80 hover:text-accent transition-colors"
                aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phone}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="flex items-center gap-2 text-sm text-footer-foreground/80 hover:text-accent transition-colors"
                aria-label={`Email ${siteConfig.name} at ${siteConfig.contact.email}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {siteConfig.contact.email}
              </a>
              <p className="flex items-center gap-2 text-sm text-footer-foreground/80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {siteConfig.hours.display}
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {([
                { href: siteConfig.social.instagram, label: "Instagram (opens in new tab)", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                { href: siteConfig.social.facebook, label: "Facebook (opens in new tab)", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { href: siteConfig.social.googleBusiness, label: "Google Business Profile (opens in new tab)", icon: <><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a3.17 3.17 0 0 0 2.24-.93" /><path d="M11 21.95V18a2 2 0 0 0-2-2H4.05" /><circle cx="12" cy="12" r="10" /></> },
              ] as const).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground/70 hover:text-accent transition-colors min-w-11 min-h-11 inline-flex items-center justify-center"
                  aria-label={social.label}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer columns */}
          <nav aria-label="Footer navigation" className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
              {footer.columns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold text-footer-foreground/90 uppercase tracking-wider mb-4">
                    {column.title}
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-footer-foreground/80 hover:text-accent focus-visible:text-accent focus-visible:underline transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Credentials */}
        <div className="py-6 border-t border-footer-foreground/10">
          <ul aria-label="Credentials" className="flex flex-wrap items-center gap-4">
            {siteConfig.credentials.map((credential) => (
              <li key={credential}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-footer-foreground/5 rounded-full text-xs text-footer-foreground/80">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-footer-foreground/10 text-xs text-footer-foreground/80">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <ManageCookiesButton />
            <p>{siteConfig.poweredBy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
