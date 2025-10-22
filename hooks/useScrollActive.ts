"use client";

import { useState, useEffect, useRef } from "react";

const getInitialActiveSection = (sectionIds: string[]) => {
  if (typeof window !== "undefined") {
    const initialHash = window.location.hash.substring(1);
    if (initialHash && sectionIds.includes(initialHash)) {
      return initialHash;
    }
  }
  return "";
};

export function useScrollActive(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(() =>
    getInitialActiveSection(sectionIds)
  );

  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);
  const intersectingSections = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSections.current.add(entry.target.id);
          } else {
            intersectingSections.current.delete(entry.target.id);
          }
        });

        const firstIntersecting = sectionIds.find((id) =>
          intersectingSections.current.has(id)
        );

        if (firstIntersecting) {
          setActiveSection(firstIntersecting);
        }
      },
      {
        // CHANGED: This new margin defines a large active zone in the
        // middle 60% of the viewport (from 20% top to 20% bottom).
        // This is large enough to "see" the Contact section at the bottom.
        rootMargin: "-20% 0px -20% 0px",
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
  }, [sectionIds, isManualScroll]);

  const manuallySetActive = (id: string) => {
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }

    setIsManualScroll(true);
    setActiveSection(id);
    intersectingSections.current.clear();
    if (id) {
      intersectingSections.current.add(id);
    }

    scrollTimer.current = setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  return [activeSection, manuallySetActive] as const;
}
