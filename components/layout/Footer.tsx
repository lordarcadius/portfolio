import { SocialLinks } from "@/components/common/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight">VJ.</span>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Vipul Jha. All rights reserved.
          </p>
        </div>
        
        <SocialLinks />
      </div>
    </footer>
  );
}
