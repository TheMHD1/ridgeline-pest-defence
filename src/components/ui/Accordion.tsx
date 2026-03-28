"use client";

import { useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionComponentProps {
  items: AccordionItem[];
  mode?: "single" | "multiple";
  className?: string;
}

export function AccordionComponent({ items, mode = "single", className }: AccordionComponentProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (mode === "single") {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    },
    [mode],
  );

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(items[index].id);
      return;
    }

    const triggers = accordionRef.current?.querySelectorAll<HTMLButtonElement>('[aria-expanded]');
    if (!triggers || triggers.length === 0) return;

    let targetIndex = -1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      targetIndex = index < items.length - 1 ? index + 1 : 0;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      targetIndex = index > 0 ? index - 1 : items.length - 1;
    } else if (e.key === "Home") {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      targetIndex = items.length - 1;
    }
    if (targetIndex >= 0) {
      triggers[targetIndex]?.focus();
    }
  }

  return (
    <div ref={accordionRef} data-accordion className={cn("divide-y divide-border rounded-xl border border-border overflow-hidden", className)}>
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id} className="bg-card">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-muted/30"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
            >
              <span className="font-medium text-foreground text-sm sm:text-base">{item.title}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className="grid transition-[grid-template-rows,opacity] duration-300 ease-smooth"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
