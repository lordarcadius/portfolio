import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
};

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Built with &#10084; in Antigravity
          </p>
        </div>

        <div className="flex items-center gap-6">
          {portfolioData.social.map((link) => {
            const Icon = iconMap[link.icon] || Mail;
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
          })}
        </div>
      </div>
    </footer>
  );
}
