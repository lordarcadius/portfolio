import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/vipul-jha", label: "GitHub" },
  { href: "https://www.linkedin.com/in/vipul-jha-dev/", label: "LinkedIn" },
  { href: "mailto:vipul@vipuljha.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Vipul Jha. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4 sm:mt-0">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
