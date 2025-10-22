import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        {/* Logo/Name */}
        <Link
          href="/"
          className="font-mono text-lg font-medium transition-colors hover:text-foreground/80"
        >
          Vipul Jha
        </Link>

        {/* Navigation & Theme Toggle */}
        <nav className="flex items-center space-x-2 sm:space-x-4">
          {/* Desktop Nav */}
          <div className="hidden space-x-2 sm:flex sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Nav (placeholder for later) */}
          {/* <div className="sm:hidden">
            <button>Menu</button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
