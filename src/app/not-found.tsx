import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site.config";

export const metadata = generatePageMetadata({
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has moved. Return to our homepage to find pest control services across Ontario and Edmonton.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
          404
        </p>
        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>

        {/* Helpful navigation links */}
        <div className="space-y-3 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pests"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Browse Our Pest Library
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Find Your Service Area
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Need help? Contact us at <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">{siteConfig.contact.phone}</a>
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to {siteConfig.name}
        </Link>
      </div>
    </main>
  );
}
