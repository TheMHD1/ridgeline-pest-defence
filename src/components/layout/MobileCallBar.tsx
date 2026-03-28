import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export function MobileCallBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-primary text-primary-foreground flex items-stretch h-14 shadow-lg border-t border-primary/20" aria-label="Quick actions">
      <a
        href={siteConfig.contact.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
        aria-label={`Call ${siteConfig.name}`}
      >
        {/* Phone icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.86 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Talk to a Technician
      </a>
      <div className="w-px bg-primary-foreground/20" aria-hidden="true" />
      <Link
        href="/quote"
        className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
        aria-label="Get a free pest control quote"
      >
        Get Quote
      </Link>
    </nav>
  );
}
