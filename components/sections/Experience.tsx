import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { experienceData } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative flex flex-col gap-12">
        {/* This div creates the vertical timeline bar */}
        <div className="absolute left-3.5 top-2 z-0 h-full w-0.5 bg-foreground/15" />

        {experienceData.map((item, index) => (
          <div key={index} className="relative z-10 flex items-start gap-6">
            {/* This div creates the dot on the timeline */}
            <div className="mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-foreground/20 bg-background" />

            {/* This div is the content card for the experience */}
            <div className="grow">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-lg font-medium text-foreground/80">
                {item.company}
              </p>
              <p className="mb-3 text-sm text-foreground/60">{item.date}</p>
              <ul className="list-disc space-y-2 pl-5 text-base text-foreground/70">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
