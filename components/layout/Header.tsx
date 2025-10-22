"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { useScroll } from "@/context/ScrollContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  // Get state and setter from the context
  const [activeSection, manuallySetActive] = useScroll();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
      manuallySetActive(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-b-foreground/10 bg-background/80 backdrop-blur-xs">
      <div className="container mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-mono text-lg font-medium transition-colors hover:text-foreground/80"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.pushState(null, "", "/");
            manuallySetActive("");
          }}
        >
          Vipul Jha
        </Link>

        <nav className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden space-x-2 sm:flex sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                  activeSection === link.href.substring(1) &&
                    "bg-foreground/10 text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
