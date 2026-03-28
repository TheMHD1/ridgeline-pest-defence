"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationConfig } from "@/content/navigation.config";
import { siteConfig } from "@/content/site.config";
import { mobileMenu, menuStaggerContainer, menuStaggerItem } from "@/lib/animations";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { MobileNavGroup } from "./MobileNavGroup";

const { header } = navigationConfig;

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape key handler
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Auto-focus close button when panel opens
  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  // Focus trap
  const handleTrapKeyDown = useFocusTrap(panelRef);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            variants={mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl z-50 lg:hidden overflow-y-auto"
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onKeyDown={handleTrapKeyDown}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-heading text-primary text-lg">
                {siteConfig.name}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-11 h-11 rounded-md text-foreground hover:bg-muted/50"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <motion.nav
              className="p-4 space-y-1"
              aria-label="Main menu"
              variants={menuStaggerContainer}
              initial="closed"
              animate="open"
            >
              {header.nav.map((item) => (
                <motion.div key={item.label} variants={menuStaggerItem}>
                  <MobileNavGroup item={item} onClose={onClose} pathname={pathname} />
                </motion.div>
              ))}
            </motion.nav>

            <div className="p-4 border-t border-border">
              <Link
                href={header.cta.href}
                onClick={onClose}
                className="block w-full text-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {header.cta.label}
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="block w-full text-center mt-3 rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phone}`}
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="p-4 border-t border-border flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {theme === "dark" ? "Dark mode" : "Light mode"}
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="inline-flex items-center justify-center w-11 h-11 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {theme === "dark" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
