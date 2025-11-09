import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// Define all social links in one place
export const socialLinks = [
  {
    href: "https://github.com/lordarcadius",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/lordarcadius",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://twitter.com/lordarcadius",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "mailto:hey@vipuljha.com",
    label: "Email",
    icon: Mail,
  },
];

interface SocialLinksProps {
  showLabels?: boolean;
  iconSize?: number;
  className?: string;
  iconClassName?: string;
  showCircle?: boolean;
}

export function SocialLinks({
  showLabels = false,
  iconSize = 20,
  className,
  iconClassName,
  showCircle = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-foreground/70 transition-colors hover:text-foreground",
            showCircle &&
              "flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10",
            showLabels ? "flex items-center gap-2" : ""
          )}
          aria-label={link.label}
        >
          <link.icon className={iconClassName} size={iconSize} />
          {showLabels && <span className="text-sm">{link.label}</span>}
        </Link>
      ))}
    </div>
  );
}
