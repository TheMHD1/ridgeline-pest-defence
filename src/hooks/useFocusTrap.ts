import { useCallback, type RefObject } from "react";

export function useFocusTrap(containerRef: RefObject<HTMLElement | null>) {
  return useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !containerRef.current) return;
      const focusable = containerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"], [role="menuitem"], [role="link"]'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [containerRef]
  );
}
