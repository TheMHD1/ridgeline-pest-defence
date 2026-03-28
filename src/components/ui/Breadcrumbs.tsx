import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50"
                    aria-hidden="true"
                  >
                    <path d="M4.5 2L8.5 6L4.5 10" />
                  </svg>
                )}
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
  );
}
