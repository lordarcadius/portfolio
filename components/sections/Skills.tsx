"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { Card } from "@/components/ui/Card";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          <TextReveal>My Toolkit</TextReveal>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I work with a modern stack to build robust and scalable applications.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b border-border/50 pb-2">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-white/10 transition-colors hover:bg-secondary/80 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
