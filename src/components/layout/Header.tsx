"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigationConfig } from "@/content/navigation.config";
import { siteConfig } from "@/content/site.config";
import { buttonMicro } from "@/lib/animations";
import { MobileNav } from "./MobileNav";
import { DesktopNavItem } from "./DesktopNavItem";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useScrolled } from "@/hooks/useScrolled";

const { header } = navigationConfig;

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // No measurement needed — announcement bar is in document flow above the header.
  // Header uses sticky positioning so it sticks to top when scrolled past.

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => { document.documentElement.classList.remove('overflow-hidden'); };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Close mobile nav and desktop dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const openDropdown = useCallback((label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  return (
    <>
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,padding] duration-300 ${
        scrolled
          ? "bg-background/[0.97] shadow-md py-0"
          : "bg-background/80 backdrop-blur-sm py-1"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href={header.logo.href}
            className="flex items-center gap-2 text-xl font-heading tracking-tight"
            aria-label={`${siteConfig.name} — Home`}
          >
            <span className="font-heading text-primary text-xl lg:text-2xl">
              {header.logo.text}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {header.nav.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isActive={activeDropdown === item.label}
                onOpen={() => openDropdown(item.label)}
                onClose={scheduleClose}
                pathname={pathname}
              />
            ))}
          </div>

          {/* Desktop CTA + Mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phone}`}
            >
              {siteConfig.contact.phone}
            </a>
            <motion.div className="hidden lg:block" {...buttonMicro}>
              <Link
                href={header.cta.href}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {header.cta.label}
              </Link>
            </motion.div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="hidden lg:inline-flex items-center justify-center w-11 h-11 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
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

            <button
              ref={hamburgerRef}
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

    </header>

    {/* Mobile nav — rendered outside <header> to avoid backdrop-filter
        creating a containing block that traps the fixed-position panel */}
    <MobileNav open={mobileOpen} onClose={() => {
      setMobileOpen(false);
      hamburgerRef.current?.focus();
    }} />
    </>
  );
}
