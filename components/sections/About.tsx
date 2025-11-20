"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

export function About() {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            <TextReveal>About Me</TextReveal>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Hello! I&apos;m Vipul, a full-stack developer based in India with a
              passion for building digital experiences that are not only functional
              but also fast, accessible, and beautiful.
            </p>
            <p>
              My journey in web development is driven by a love for problem-solving
              and a desire to learn. I specialize in the React ecosystem, using
              tools like Next.js, TypeScript, and Node.js to craft modern web
              applications from concept to deployment.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new tech,
              contributing to open source, or looking for the next challenging
              project.
            </p>
          </div>
          <div className="pt-8">
            <Button
              asLink
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="group"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           {/* Placeholder for an abstract image or another profile shot */}
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/20 animate-gradient" />
           <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-9xl select-none">
              VJ
           </div>
        </motion.div>
      </div>
    </Section>
  );
}
