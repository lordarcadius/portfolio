// components/providers/ScrollProvider.tsx
"use client";

import { ScrollContext } from "@/context/ScrollContext";
import { useScrollActive } from "@/hooks/useScrollActive";

// Define the section IDs for our app one time, right here.
const sectionIds = ["about", "experience", "projects", "contact"];

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  // Run the hook here, at the top level
  const scrollState = useScrollActive(sectionIds);

  return (
    // Provide the hook's state [activeSection, manuallySetActive] to all children
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  );
}