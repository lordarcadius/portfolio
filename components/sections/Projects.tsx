import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/lib/data";

export function Projects() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
