"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const handleTrapKeyDown = useFocusTrap(dialogRef);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        requestAnimationFrame(() => setVisible(true));
      }
    } catch {
      requestAnimationFrame(() => setVisible(true));
    }

    function handleManageCookies() {
      try { localStorage.removeItem("cookie-consent"); } catch {}
      setVisible(true);
    }

    window.addEventListener("manage-cookies", handleManageCookies);
    return () => window.removeEventListener("manage-cookies", handleManageCookies);
  }, []);

  useEffect(() => {
    if (visible) {
      acceptRef.current?.focus();
    }
  }, [visible]);

  const handleAccept = useCallback(() => {
    try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
    setVisible(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { consent: "accepted" } }));
    }
  }, []);

  const handleDecline = useCallback(() => {
    try { localStorage.setItem("cookie-consent", "declined"); } catch {}
    setVisible(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { consent: "declined" } }));
    }
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    handleTrapKeyDown(e);
    if (e.key === "Escape") {
      setVisible(false);
    }
  }

  return (
    <div aria-live="polite">
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={dialogRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="fixed bottom-0 inset-x-0 z-[60] p-4"
          role="region"
          aria-label="Cookie consent"
          aria-describedby="cookie-consent-desc"
          onKeyDown={handleKeyDown}
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p id="cookie-consent-desc" className="flex-1 text-sm text-muted-foreground leading-relaxed">
              We use cookies to improve your experience and analyze site traffic. By accepting, you consent to the use of analytics and chat tools on this site.{" "}
              <Link href="/privacy-policy" className="underline hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleDecline}
                className="rounded-lg border border-border px-4 py-2 min-h-[44px] text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50"
              >
                Decline
              </button>
              <button
                ref={acceptRef}
                type="button"
                onClick={handleAccept}
                className="rounded-lg bg-primary px-4 py-2 min-h-[44px] text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
