"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/context/ScrollContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "https://blog.vipuljha.com/", label: "Blog", external: true },
];

export function Header() {
  const [activeSection, manuallySetActive] = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (/^https?:\/\//.test(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
      setIsMobileMenuOpen(false);
      return;
    }

    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.clientHeight : 80;
      const rect = element.getBoundingClientRect();
      const target = window.scrollY + rect.top - headerHeight - 8; // small gap

      window.scrollTo({ top: target, behavior: "smooth" });
      manuallySetActive(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    manuallySetActive("");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
        <div
          className="
            container 
            mx-auto 
            flex max-w-5xl items-center justify-between 
            rounded-full 
            bg-background/40 
            px-6 py-3 
            backdrop-blur-lg 
            backdrop-saturate-150 
            shadow-lg shadow-black/5 
            ring-1 ring-foreground/10
          "
        >
          <Link
            href="/"
            className="font-mono text-lg font-medium transition-colors hover:text-foreground/80"
            onClick={handleHomeClick}
          >
            Vipul Jha
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-2 sm:ml-6 sm:flex sm:space-x-4">
            <div className="flex space-x-2 sm:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-all hover:text-foreground",
                    activeSection === link.href.substring(1) &&
                      "bg-black/4 dark:bg-white/4 text-foreground ring-1 ring-black/20 dark:ring-white/20"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/10"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "x" : "menu"}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/80 pt-28 backdrop-blur-lg"
          >
            <nav className="container mx-auto flex max-w-3xl flex-col items-center gap-6 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={cn(
                    "w-full rounded-full py-3 text-center text-xl font-medium text-foreground/80 transition-all hover:text-foreground",
                    activeSection === link.href.substring(1) &&
                      "bg-black/4 dark:bg-white/4 text-foreground ring-1 ring-black/20 dark:ring-white/20"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
