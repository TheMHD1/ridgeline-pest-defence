"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type NavGroup } from "@/content/navigation.config";
import { accordionContent } from "@/lib/animations";

export function MobileNavGroup({
  item,
  onClose,
  pathname,
}: {
  item: NavGroup;
  onClose: () => void;
  pathname: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const hasChildren = item.children && item.children.length > 0;
  const isCurrent = item.href ? (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) : false;

  if (!hasChildren) {
    if (!item.href) {
      return (
        <span className="block px-3 py-2.5 text-base font-medium text-foreground/70 rounded-md">
          {item.label}
        </span>
      );
    }
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted/50 rounded-md"
        aria-current={isCurrent ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted/50 rounded-md"
        aria-expanded={expanded}
        aria-controls={panelId}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
      >
        {item.label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M4 6L8 10L12 6" />
        </svg>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={panelId}
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="pl-4 pb-2 space-y-1">
              {item.children.map((child) => {
                const hasNested = child.children && child.children.length > 0;
                if (hasNested) {
                  return (
                    <MobileNestedGroup key={child.label} item={child} onClose={onClose} />
                  );
                }
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary rounded-md"
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNestedGroup({
  item,
  onClose,
}: {
  item: NavGroup["children"][number];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/50 rounded-md"
        aria-expanded={expanded}
        aria-controls={panelId}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
      >
        {item.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={panelId}
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="pl-4 pb-1 space-y-1">
              {item.children?.map((nested) => (
                <Link
                  key={nested.href}
                  href={nested.href}
                  onClick={onClose}
                  className="block px-3 py-1.5 text-sm text-foreground/70 hover:text-primary rounded-md"
                >
                  {nested.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
