import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  BookText,
  Twitter,
} from "lucide-react";

// Custom X Icon Component
const XIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: XIcon, // Mapping "Twitter" from data to XIcon
  X: XIcon, // Direct mapping if data uses "X"
  Instagram: Instagram,
  BookText: BookText,
  Mail: Mail,
};

interface SocialIconsProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialIcons({
  variant = "default",
  className = "",
}: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {portfolioData.social.map((link) => {
        // Fallback to Mail if icon not found, but try to match "Twitter" to XIcon
        const Icon = iconMap[link.icon] || iconMap[link.platform] || Mail;

        if (variant === "footer") {
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label={link.platform}
            >
              <Icon size={20} />
            </a>
          );
        }

        // Default variant (Hero)
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
            aria-label={link.platform}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
