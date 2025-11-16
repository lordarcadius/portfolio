"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data";

type ProjectCardProps = (typeof projectsData)[number];

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-foreground/15 bg-foreground/5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="flex flex-col grow p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 grow text-base text-foreground/80">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground/90"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/40"
            aria-label={`View GitHub repository for ${title}`}
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
