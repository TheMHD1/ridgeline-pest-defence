"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/content/site.config";

export function PlausibleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  const domain = useMemo(() => {
    try {
      return new URL(siteConfig.url).hostname;
    } catch {
      console.error('Invalid site URL configuration:', siteConfig.url);
      return null;
    }
  }, []);

  useEffect(() => {
    function handleConsentChange() {
      try {
        const updated = localStorage.getItem("cookie-consent");
        if (updated === "accepted") {
          setConsentGiven(true);
        } else {
          setConsentGiven(false);
        }
      } catch {}
    }

    window.addEventListener("cookie-consent-change", handleConsentChange);

    // Check localStorage AFTER listener registration to avoid race condition
    try {
      const consent = localStorage.getItem("cookie-consent");
      if (consent === "accepted") setConsentGiven(true);
    } catch {}

    return () => window.removeEventListener("cookie-consent-change", handleConsentChange);
  }, []);

  if (!consentGiven || !domain) return null;

  return (
    <>
      <link rel="dns-prefetch" href={siteConfig.integrations.plausible.baseUrl} />
      <Script
        id="plausible-analytics"
        strategy="lazyOnload"
        data-domain={domain}
        src={siteConfig.integrations.plausible.scriptUrl}
      />
    </>
  );
}
