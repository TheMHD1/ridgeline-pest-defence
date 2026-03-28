"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { siteConfig } from "@/content/site.config";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = `${siteConfig.name.toLowerCase().replace(/\s+/g, "-")}-theme`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      const preferred =
        stored ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      setThemeState(preferred);
    } catch {
      // localStorage unavailable (private browsing, storage quota) — fall back to system preference
      const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setThemeState(preferred);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Silently ignore write failure
    }
  }, [theme, mounted]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "light" ? "dark" : "light")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
