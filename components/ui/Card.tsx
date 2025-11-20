"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-sm",
        "transition-colors duration-300",
        hoverEffect && "hover:border-primary/50 hover:bg-secondary/50",
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Gradient blob background effect */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  );
}
