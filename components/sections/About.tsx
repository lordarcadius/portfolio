"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

export function About() {
  return (
    <Section id="about" className="bg-secondary/30 py-12 md:py-10 rounded-[0.8rem] ">
      <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] items-center">
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
             <p>
              When I&apos;m not coding, you can find me exploring new tech,
              contributing to open source, or looking for the next challenging
              project.
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
          className="relative aspect-square md:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-zinc-900/50 border border-white/10 shadow-[0_0_50px_-10px_var(--primary)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <Image
              src="/images/profile.webp"
              alt="Vipul Jha"
              fill
              className="object-cover transition-transform duration-500"
            />
        </motion.div>
      </div>
    </Section>
  );
}
