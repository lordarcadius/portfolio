"use client";

import { Section } from "@/components/ui/Section";
import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { TextReveal } from "@/components/ui/TextReveal";

export function Experience() {
  return (
    <Section id="experience" className="bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          <TextReveal>Work Experience</TextReveal>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 ml-6 md:ml-0" />

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-8 md:gap-0"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 mt-6 ml-[21px] md:ml-0 ring-4 ring-background z-10" />
              
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                <Card className="p-6">
                  <span className="text-sm text-primary font-mono mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {item.company}
                  </p>
                  <ul className={`list-disc list-inside space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
