"use client";

import { createContext, useContext } from "react";

type ScrollContextType = readonly [string, (id: string) => void];

export const ScrollContext = createContext<ScrollContextType | null>(null);

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
