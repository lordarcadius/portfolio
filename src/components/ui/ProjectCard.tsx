"use client";

import React from "react";

import { Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

export const ProjectCard = React.memo(function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden flex-shrink-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <TbBrandGithub size={16} /> Code
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <TbExternalLink size={16} /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
});
