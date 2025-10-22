import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="flex flex-col space-y-24">
      <Hero />
      <About />
      <Skills />

      {/* We will add other sections below */}
      {/* <Projects />
      <Experience />
      <Contact /> 
      */}
    </div>
  );
}