"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          <TextReveal>Get In Touch</TextReveal>
        </h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            asLink
            href="mailto:vipul@vipuljha.com"
            variant="glow"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            <Mail className="mr-3 h-6 w-6" />
            Say Hello
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div 
          className="mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            Or connect with me on social media
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
