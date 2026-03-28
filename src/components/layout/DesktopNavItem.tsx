import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type NavGroup } from "@/content/navigation.config";

export function DesktopNavItem({
  item,
  isActive,
  onOpen,
  onClose,
  pathname,
}: {
  item: NavGroup;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
  pathname: string;
}) {
  const hasChildren = item.children && item.children.length > 0;
  const dropdownId = `dropdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
  const isCurrent = item.href ? (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) : false;

  // Check if any child href matches current path for category active state
  const isCategoryActive = hasChildren && item.children?.some(child => {
    if (child.href) {
      return child.href === "/" ? pathname === "/" : pathname.startsWith(child.href);
    }
    if (child.children) {
      return child.children.some(nested => nested.href && (nested.href === "/" ? pathname === "/" : pathname.startsWith(nested.href)));
    }
    return false;
  });

  if (!hasChildren) {
    return (
      <Link
        href={item.href ?? "/"}
        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 focus-visible:text-foreground focus-visible:underline"
        aria-current={isCurrent ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      onClose();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isActive) {
        onClose();
      } else {
        onOpen();
      }
    } else if (e.key === "Escape" && isActive) {
      e.preventDefault();
      onClose();
      (e.currentTarget as HTMLElement).focus();
    } else if (e.key === "ArrowDown" && isActive) {
      e.preventDefault();
      const firstLink = document.querySelector<HTMLElement>(`#${dropdownId} a`);
      firstLink?.focus();
    }
  }

  function handleDropdownKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      const trigger = e.currentTarget.closest(".relative")?.querySelector<HTMLElement>("button");
      trigger?.focus();
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted/50 ${
          isActive ? "text-foreground" : isCategoryActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-expanded={isActive}
        aria-haspopup="true"
        aria-controls={dropdownId}
        onKeyDown={handleKeyDown}
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
          className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            id={dropdownId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 pt-2 ${
              item.megaMenu ? "w-full max-w-2xl lg:max-w-3xl -left-20" : "w-64"
            }`}
          >
            <div className="rounded-lg bg-card shadow-lg border border-border p-4" onKeyDown={handleDropdownKeyDown}>
              {item.megaMenu ? (
                <MegaDropdown item={item} />
              ) : (
                <StandardDropdown children={item.children} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mega Dropdown (Pests We Treat) ───────────────────── */

function MegaDropdown({ item }: { item: NavGroup }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {item.children.map((category) => (
        <div key={category.label}>
          <Link
            href={category.href}
            className="block text-sm font-semibold text-primary mb-2 hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            {category.label}
          </Link>
          {category.description && (
            <p className="text-xs text-muted-foreground mb-2">{category.description}</p>
          )}
          {category.children && (
            <ul className="space-y-1">
              {category.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block text-sm text-muted-foreground hover:text-primary focus-visible:text-primary focus-visible:underline transition-colors py-2"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Standard Dropdown ────────────────────────────────── */

function StandardDropdown({ children }: { children: NavGroup["children"] }) {
  return (
    <ul className="space-y-0.5">
      {children.map((child) => {
        const hasNested = child.children && child.children.length > 0;
        if (hasNested) {
          return (
            <li key={child.label}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pt-3 pb-1">
                {child.label}
              </p>
              <ul>
                {child.children!.map((nested) => (
                  <li key={nested.href}>
                    <Link
                      href={nested.href}
                      className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 focus-visible:text-primary focus-visible:underline rounded-md transition-colors"
                    >
                      {nested.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }
        return (
          <li key={child.href}>
            <Link
              href={child.href}
              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
            >
              {child.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
