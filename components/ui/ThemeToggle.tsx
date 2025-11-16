"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const setThemeWithCookie = (next: string) => {
    setTheme(next);
    if (typeof document !== "undefined") {
      const maxAge = 60 * 60 * 24 * 365;
      document.cookie = `theme=${next}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    }
  };

  return (
    <button
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
      aria-label="Toggle dark mode"
      onClick={() =>
        setThemeWithCookie(resolvedTheme === "light" ? "dark" : "light")
      }
      type="button"
    >
      <Sun
        className={`h-5 w-5 transition-all ${
          resolvedTheme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
