"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // Enhanced logging with stack trace and additional context
    console.error(`[${siteConfig.name} Error Boundary]`, {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    const originalTitle = document.title;
    document.title = `Error — ${siteConfig.name}`;

    let meta = document.querySelector('meta[name="robots"]');
    const wasMetaAdded = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex");

    // Cleanup function to restore state when error resolves
    return () => {
      document.title = originalTitle;
      if (wasMetaAdded && meta?.parentNode) {
        meta.parentNode.removeChild(meta);
      } else if (meta) {
        meta.setAttribute("content", "index, follow");
      }
    };
  }, [error.digest]);

  // Auto-focus error heading for screen readers
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main id="main-content" className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto" role="alert" aria-live="assertive">
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-heading text-foreground mb-4 outline-none focus:outline-primary focus:outline-2"
        >
          Something went wrong with {siteConfig.name}
        </h1>
        <p className="text-foreground/80 mb-8">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            aria-label="Try again — reload this page"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            Back to {siteConfig.name}
          </Link>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
          >
            Call {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </main>
  );
}