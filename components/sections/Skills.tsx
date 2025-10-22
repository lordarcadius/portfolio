"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion, type Variants } from "framer-motion";

const skillsList = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Git",
];

const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <SectionWrapper id="skills" title="My Toolkit">
      <motion.ul
        className="flex flex-wrap gap-3"
        variants={listVariants} // This will now work
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsList.map((skill) => (
          <motion.li
            key={skill}
            className="rounded-full border border-foreground/20 bg-foreground/5 px-4 py-2 text-base font-medium text-foreground/90 transition-colors hover:bg-foreground/10"
            variants={itemVariants} // This will now work
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
