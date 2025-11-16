"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useScroll } from "@/context/ScrollContext";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const [, manuallySetActive] = useScroll();

  const handleHeroScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
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
      className="flex flex-col-reverse items-start gap-12 sm:flex-row"
    >
      <motion.div
        className="flex grow flex-col items-start"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          variants={fadeIn}
        >
          Vipul Jha
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-foreground/80 sm:text-xl"
          variants={fadeIn}
        >
          Full-stack developer building fast, modern, and accessible web
          experiences.
        </motion.p>

        <motion.p
          className="mt-4 max-w-lg text-base text-foreground/70"
          variants={fadeIn}
        >
          Based in India, I specialize in crafting seamless digital solutions
          with React, Next.js, and TypeScript, turning complex ideas into
          beautiful, functional applications.
        </motion.p>

        <motion.div className="mt-6" variants={fadeIn}>
          <SocialLinks iconSize={20} showCircle />
        </motion.div>

        <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeIn}>
          <Button
            asLink
            href="#projects"
            size="lg"
            onClick={(e) => handleHeroScroll(e, "#projects")}
          >
            See My Projects
          </Button>
          <Button
            asLink
            href="#contact"
            variant="outline"
            size="lg"
            onClick={(e) => handleHeroScroll(e, "#contact")}
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative h-44 w-44 sm:h-48 sm:w-48 flex items-center justify-center">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-4xl p-0.5 animate-spin-slow bg-linear-to-tr from-primary/70 via-pink-400/60 to-yellow-300/60 dark:from-primary/80 dark:via-pink-500/70 dark:to-yellow-400/70 shadow-2xl">
            {/* Glassmorphism effect */}
            <div className="h-full w-full rounded-3xl bg-background/80 dark:bg-background/60 backdrop-blur-md flex items-center justify-center">
              {/* Floating animation & soft glow */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/profile.webp"
                  alt="Vipul Jha"
                  width={176}
                  height={176}
                  quality={95}
                  priority={true}
                  className="rounded-3xl object-cover h-40 w-40 sm:h-44 sm:w-44 shadow-xl -rotate-6 shadow-primary/20 dark:shadow-pink-500/20"
                />
                {/* Soft glow behind image */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none bg-primary/10 dark:bg-pink-500/10 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
