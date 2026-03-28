"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/content/site.config";

export function TawkToChat() {
  const { propertyId, widgetId } = siteConfig.integrations.tawkto;
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    function handleConsentChange() {
      try {
        const updated = localStorage.getItem("cookie-consent");
        if (updated === "accepted") {
          setConsentGiven(true);
        } else {
          setConsentGiven(false);
          // Remove Tawk.to script and injected DOM elements if consent revoked
          const tawkScript = document.getElementById("tawkto-widget");
          if (tawkScript) tawkScript.remove();
          if (typeof window !== "undefined" && (window as any).Tawk_API?.hideWidget) {
            (window as any).Tawk_API.hideWidget();
          }
          // Clean up Tawk-injected iframes and containers
          document.querySelectorAll('[id^="tawkchat-"], [id^="tawk-"], .tawk-min-container, .tawk-bubble-holder').forEach(el => el.remove());
          if (typeof window !== "undefined") {
            (window as any).Tawk_API = undefined;
            (window as any).Tawk_LoadStart = undefined;
          }
        }
      } catch {}
    }

    if (typeof window !== "undefined") {
      window.addEventListener("cookie-consent-change", handleConsentChange);

      // Check localStorage AFTER listener registration to avoid race condition
      try {
        const consent = localStorage.getItem("cookie-consent");
        if (consent === "accepted") setConsentGiven(true);
      } catch {}
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("cookie-consent-change", handleConsentChange);
      }
    };
  }, []);

  if (!consentGiven || !propertyId || !widgetId || propertyId === "PLACEHOLDER") return null;

  return (
    <>
      <link rel="preconnect" href={siteConfig.integrations.tawkto.embedUrl} crossOrigin="anonymous" />
      <link rel="dns-prefetch" href={siteConfig.integrations.tawkto.vaUrl} />
      <Script
      id="tawkto-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();
          (function(){
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = '${siteConfig.integrations.tawkto.embedUrl}/${propertyId}/${widgetId}';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
    </>
  );
}
