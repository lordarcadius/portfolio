"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

export function TextReveal({ children, className, delay = 0, gradient = false }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      <span className="sr-only">{children}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1, delayChildren: delay }}
        aria-hidden
        className={cn(gradient && "bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50")}
      >
        {children.split(" ").map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
