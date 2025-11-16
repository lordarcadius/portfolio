"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const setThemeWithCookie = (next: string) => {
    setTheme(next);
    // Persist theme in a cookie so the server can read it on the next request
    if (typeof document !== "undefined") {
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      document.cookie = `theme=${next}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    }
  };

  return (
    <button
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground hover:bg-foreground/10"
      aria-label="Toggle dark mode"
      onClick={() => setThemeWithCookie(theme === "light" ? "dark" : "light")}
      type="button"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
