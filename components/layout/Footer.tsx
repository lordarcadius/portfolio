import { SocialLinks } from "@/components/common/SocialLinks";

export function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Vipul Jha. All rights reserved.
        </p>
        <div className="mt-4 sm:mt-0">
          <SocialLinks iconSize={18} />
        </div>
      </div>
    </footer>
  );
}
