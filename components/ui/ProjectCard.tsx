"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = (typeof projectsData)[number] & { index?: number };

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group p-0 border-border/50 bg-secondary/20">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex flex-col grow p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow text-sm">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <Button asLink href={liveUrl} size="sm" variant="default" target="_blank" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button asLink href={githubUrl} size="sm" variant="outline" target="_blank" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
