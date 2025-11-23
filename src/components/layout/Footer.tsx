import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
            reserved.
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Built with &#10084; in Antigravity
          </p>
        </div>

        <SocialIcons variant="footer" />
      </div>
    </footer>
  );
}
