// components/sections/About.tsx
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="space-y-6 text-lg text-foreground/80">
        <p>
          Hello! I&apos;m Vipul, a full-stack developer based in India with a
          passion for building digital experiences that are not only functional
          but also fast, accessible, and beautiful.
        </p>
        <p>
          My journey in web development is driven by a love for problem-solving
          and a desire to learn. I specialize in the React ecosystem, using
          tools like Next.js, TypeScript, and Node.js to craft modern web
          applications from concept to deployment.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new tech,
          contributing to open source, or looking for the next challenging
          project.
        </p>

        <div className="pt-2">
          <Button
            asLink
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
