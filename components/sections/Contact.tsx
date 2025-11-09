import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="flex flex-col gap-6">
        <p className="text-lg text-foreground/80">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. If you have a question or
          just want to say hi, feel free to reach out.
        </p>
        <div>
          <Button
            asLink
            href="mailto:vipul@vipuljha.com"
            variant="default"
            size="lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
