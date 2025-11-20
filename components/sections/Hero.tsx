"use client";

import Image from "next/image";


import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useScroll } from "@/context/ScrollContext";
import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const [, manuallySetActive] = useScroll();

  const handleHeroScroll = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      manuallySetActive(sectionId);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-0 pb-40 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Available for work
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <TextReveal delay={0.1}>Hi, I'm Vipul Jha</TextReveal>
            <br />
            <span className="text-muted-foreground text-4xl sm:text-5xl lg:text-6xl mt-2 block">
              <TextReveal delay={0.3}>Full-Stack Developer</TextReveal>
            </span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl lg:max-w-lg mx-auto lg:mx-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Building fast, modern, and accessible web experiences with Next.js, React, and TypeScript.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              asLink
              href="#projects"
              size="lg"
              variant="glow"
              className="min-w-[160px]"
              onClick={(e) => handleHeroScroll(e, "#projects")}
            >
              View Projects
            </Button>
            <Button
              asLink
              href="#contact"
              variant="outline"
              size="lg"
              className="min-w-[160px] border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={(e) => handleHeroScroll(e, "#contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="mt-16"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <SocialLinks iconSize={24} showCircle />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Image Container with Gradient Border & Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-accent/40 to-primary/40 p-1 shadow-[0_0_50px_-12px_var(--primary)]">
               <div className="relative w-full h-full rounded-full overflow-hidden bg-background shadow-2xl border-4 border-background">
                 <Image
                    src="/images/profile.webp"
                    alt="Vipul Jha"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
               </div>
            </div>

            {/* Floating Elements - Subtle Animation */}
            <motion.div
              className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
