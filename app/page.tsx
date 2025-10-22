import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col space-y-24">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />

      {/* We will add other sections below */}
      {/* <Contact /> */}
    </div>
  );
}
