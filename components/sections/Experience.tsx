import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { experienceData } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative flex flex-col gap-12">
        {/* This div creates the vertical timeline bar - positioned to align with first dot */}
        <div className="absolute left-[11px] top-[9px] bottom-[6px] z-0 w-[2px] bg-foreground/15" />

        {experienceData.map((item, index) => (
          <div
            key={index}
            className="relative z-10 flex gap-6"
            style={{ marginTop: "2px" }}
          >
            {/* This div creates the dot on the timeline */}
            <div className="relative h-6 w-6 shrink-0">
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground/20 bg-background" />
            </div>

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
