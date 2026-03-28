import { useState, useMemo } from "react";
import { allPests } from "@/content/pests";
import type { PestData } from "@/content/types";

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function usePestSearch() {
  const [search, setSearch] = useState("");

  const filteredPests = useMemo(() => {
    if (!search.trim()) return allPests;
    const q = search.toLowerCase();
    const wordBoundaryRegex = new RegExp('\\b' + escapeRegex(q) + '\\b', 'i');
    return allPests.filter(
      (p) =>
        wordBoundaryRegex.test(p.name) ||
        wordBoundaryRegex.test(p.shortDescription) ||
        wordBoundaryRegex.test(p.category)
    );
  }, [search]);

  const groupedPests = useMemo(() => {
    const groups: Record<string, PestData[]> = {};
    for (const pest of filteredPests) {
      if (!groups[pest.category]) groups[pest.category] = [];
      groups[pest.category].push(pest);
    }
    return Object.fromEntries(Object.entries(groups).filter(([, pests]) => pests.length > 0));
  }, [filteredPests]);

  return { search, setSearch, filteredPests, groupedPests };
}
