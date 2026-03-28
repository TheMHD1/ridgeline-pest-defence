"use client";

import { useState, useRef, useEffect, useCallback, useMemo, useDeferredValue } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { allPests } from "@/content/pests";

type ServiceType = "Residential" | "Commercial";

interface PestSearchBarProps {
  activeType: ServiceType;
}

export function PestSearchBar({ activeType }: PestSearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    return deferredQuery.trim().length > 0
      ? allPests.filter((pest) => {
          const queryLower = deferredQuery.toLowerCase();
          const matchesName = pest.name.toLowerCase().includes(queryLower);
          const matchesSearchTerms = (pest.searchTerms || []).some(term =>
            term.toLowerCase().includes(queryLower)
          );

          const matchesQuery = matchesName || matchesSearchTerms;
          if (!matchesQuery) return false;
          if (activeType === "Commercial") {
            return ["ants", "cockroaches", "mice", "rats", "flies", "bed-bugs", "wasps-hornets", "spiders", "moths", "beetles"].includes(pest.slug);
          }
          return true;
        })
      : [];
  }, [deferredQuery, activeType]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < filtered.length && filtered[activeIndex]) {
        router.push(`/pests/${filtered[activeIndex].slug}`);
        setOpen(false);
        setQuery("");
      } else if (filtered.length > 0) {
        router.push(`/pests/${filtered[0].slug}`);
        setOpen(false);
        setQuery("");
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open && query.trim().length > 0) {
        setOpen(true);
        setActiveIndex(0);
      } else if (open && filtered.length > 0) {
        setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      }
      return;
    }

    if (!open || filtered.length === 0) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    }
  }

  return (
    <div ref={containerRef} className="relative flex-1 min-w-0">
      <label htmlFor="pest-search-input" className="sr-only">Search for a pest</label>
      <input
        ref={inputRef}
        id="pest-search-input"
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(e.target.value.trim().length > 0);
          setActiveIndex(-1);
        }}
        onFocus={() => {
          if (query.trim().length > 0) setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search for pests (e.g. ants, mice, termites)"
        className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        aria-label="Search for a pest"
        aria-expanded={open}
        aria-controls="pest-search-results"
        aria-autocomplete="list"
        aria-activedescendant={activeIndex >= 0 ? `pest-option-${activeIndex}` : undefined}
        aria-haspopup="listbox"
        role="combobox"
      />
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>

      <div className="sr-only" aria-live="polite" role="status">
        {open && query.trim().length > 0 && filtered.length === 0
          ? "No pests found"
          : open && filtered.length > 0
            ? `${filtered.length} pest${filtered.length === 1 ? "" : "s"} found`
            : ""}
      </div>

      <AnimatePresence>
        {open && filtered.length > 0 && (
          <motion.ul
            id="pest-search-results"
            role="listbox"
            aria-label="Pest search results"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 max-h-64 lg:max-h-80 overflow-y-auto rounded-lg bg-card border border-border shadow-xl z-50"
          >
            {filtered.map((pest, i) => (
              <li key={pest.slug} id={`pest-option-${i}`} role="option" aria-selected={i === activeIndex}>
                <Link
                  href={`/pests/${pest.slug}`}
                  tabIndex={-1}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    i === activeIndex
                      ? "bg-primary/10 text-foreground"
                      : "text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0">
                    {pest.name.charAt(0)}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="font-medium truncate">{pest.name}</span>
                    <span className="text-xs text-muted-foreground capitalize">{pest.category}</span>
                  </span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
        {open && query.trim().length > 0 && filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-card border border-border shadow-xl z-50 px-4 py-3 text-sm text-muted-foreground"
            aria-live="polite"
          >
            No pests found matching your search.{" "}
            <Link href="/pests" className="text-primary hover:underline">
              Browse all pests
            </Link>
            {" "}or call us.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
