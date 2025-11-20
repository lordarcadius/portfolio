"use client";

import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/lib/data";
import { TextReveal } from "@/components/ui/TextReveal";

export function Projects() {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          <TextReveal>Featured Projects</TextReveal>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of projects that showcase my skills and passion for building.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
}
