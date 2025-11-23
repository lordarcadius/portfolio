"use client";

import React from "react";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { TbBriefcase } from "react-icons/tb";

export const ExperienceSection = React.memo(function ExperienceSection() {
  return (
    <div className="h-full">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey"
        center={false}
      />

      <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-slate-950 border-2 border-primary" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
              <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <TbBriefcase size={16} />
              <span className="font-medium">{exp.company}</span>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
});
