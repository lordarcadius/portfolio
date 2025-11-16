"use client";
import { useLayoutEffect, useState } from "react";

export function ThemeHydration({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true); // Hydration guard pattern is safe here
  }, []);
  if (!mounted) {
    // Optionally, show a loading spinner or blank screen
    return null;
  }
  return <>{children}</>;
}
