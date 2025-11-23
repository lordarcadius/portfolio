"use client";

import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors"
  >
    <h3 className="text-xl font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export function TechStack() {
  return (
    <div className="h-full">
      <SectionHeading title="Tech Stack" subtitle="Technologies I work with" center={false} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SkillCategory title="Mobile" skills={portfolioData.skills.mobile} />
        <SkillCategory title="Libraries" skills={portfolioData.skills.libraries} />
        <SkillCategory title="Web" skills={portfolioData.skills.web} />
        <SkillCategory title="Tools" skills={portfolioData.skills.tools} />
      </div>
    </div>
  );
}
