"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollActive(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");
  // This state will act as our "pause" button for the observer
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If we are in a "manual scroll" state, ignore the observer
        if (isManualScroll) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -40% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
    };
    // We add isManualScroll as a dependency. When it changes,
    // the observer effect logic re-evaluates.
  }, [sectionIds, isManualScroll]);

  // We export a new function to be called by the Header
  const manuallySetActive = (id: string) => {
    // Clear any old timer
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }

    // 1. Set the "pause" state to true
    setIsManualScroll(true);
    // 2. Set the active section immediately
    setActiveSection(id);

    // 3. After 1 second (enough time for the scroll to finish),
    //    set the "pause" state back to false, re-enabling the observer.
    scrollTimer.current = setTimeout(() => {
      setIsManualScroll(false);
    }, 1000);
  };

  // We only return the value and our new manual setter function
  return [activeSection, manuallySetActive] as const;
}