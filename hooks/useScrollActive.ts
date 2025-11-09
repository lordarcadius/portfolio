"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollActive(sectionIds: string[]) {
  // Initialize state based on hash if available, empty string otherwise
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") return "";
    const hash = window.location.hash.substring(1);
    return hash && sectionIds.includes(hash) ? hash : "";
  });
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);
  const intersectingSections = useRef(new Map<string, number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll) return;

        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            intersectingSections.current.set(id, entry.intersectionRatio);
          } else {
            intersectingSections.current.delete(id);
          }
        });

        let bestId: string | null = null;
        let bestRatio = -1;
        intersectingSections.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      {
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

  useEffect(() => {
    const clearManual = () => {
      if (isManualScroll) {
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
          scrollTimer.current = null;
        }
        setIsManualScroll(false);
      }
    };

    window.addEventListener("wheel", clearManual, { passive: true });
    window.addEventListener("touchstart", clearManual, { passive: true });
    window.addEventListener("keydown", clearManual, { passive: true });

    return () => {
      window.removeEventListener("wheel", clearManual);
      window.removeEventListener("touchstart", clearManual);
      window.removeEventListener("keydown", clearManual);
    };
  }, [isManualScroll]);

  const manuallySetActive = (id: string) => {
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }

    setIsManualScroll(true);
    setActiveSection(id);
    intersectingSections.current.clear();
    if (id) {
      intersectingSections.current.set(id, 1);
    }

    scrollTimer.current = setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  return [activeSection, manuallySetActive] as const;
}
