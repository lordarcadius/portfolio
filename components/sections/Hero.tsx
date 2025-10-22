"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useScroll } from "@/context/ScrollContext";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  // Get *only* the setter function from context. We don't need the active state here.
  const [, manuallySetActive] = useScroll();

  // Create a handler for the Hero buttons
  const handleHeroScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
      manuallySetActive(sectionId); // Call the shared function
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

        <motion.div className="mt-6 flex gap-3" variants={fadeIn}>
          {/* ... social buttons remain the same ... */}
          <Button
            asLink
            href="https://github.com/vipul-jha"
            variant="outline"
            size="icon"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            asLink
            href="https://www.linkedin.com/in/vipul-jha-dev/"
            variant="outline"
            size="icon"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            asLink
            href="mailto:vipul@vipuljha.com"
            variant="outline"
            size="icon"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeIn}>
          <Button
            asLink
            href="#projects"
            size="lg"
            onClick={(e) => handleHeroScroll(e, "#projects")} // Add onClick
          >
            See My Projects
          </Button>
          <Button
            asLink
            href="#contact"
            variant="outline"
            size="lg"
            onClick={(e) => handleHeroScroll(e, "#contact")} // Add onClick
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
        <Image
          src="/profile.jpg" // Assuming this is your image path
          alt="Vipul Jha"
          width={160}
          height={160}
          quality={95}
          priority={true}
          className="h-40 w-40 rounded-full border-4 border-foreground/10 object-cover shadow-xl"
        />
      </motion.div>
    </section>
  );
}
