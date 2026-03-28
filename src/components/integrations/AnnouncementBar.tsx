"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export function AnnouncementBar() {
  // Generate content hash for versioning (static, computed once)
  const announcementContent = siteConfig.signatureServices.neighbourRate;
  const contentHash = useMemo(() => Math.abs(announcementContent.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0)).toString(36), [announcementContent]);

  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(`announcement-dismissed-${contentHash}`)) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, [contentHash]);

  function handleDismiss() {
    try {
      const dismissedKey = `announcement-dismissed-${contentHash}`;
      sessionStorage.setItem(dismissedKey, "true");
    } catch {}
    setVisible(false);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      handleDismiss();
    }
  }

  if (visible !== true) return null;

  return (
    <div
      role="region"
      aria-label="Site announcement"
      aria-live="polite"
      id="announcement-bar"
      className={`relative z-30 overflow-hidden bg-accent text-accent-foreground transition-[max-height,opacity] duration-300 ease-in-out ${visible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-xs sm:text-sm font-medium">
        <span className="text-center">
          {announcementContent}{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity "
          >
            Book Now
          </Link>
        </span>
        <button
          type="button"
          onClick={handleDismiss}
          onKeyDown={handleKeyDown}
          className="absolute right-0 top-0 h-full w-11 flex items-center justify-center rounded-md hover:bg-accent-foreground/10 transition-colors"
          aria-label="Dismiss announcement"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
