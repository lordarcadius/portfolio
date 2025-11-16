import { ThemeHydration } from "@/components/providers/ThemeHydration";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProvider } from "@/components/providers/ScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vipul Jha - Full-Stack Developer",
    template: "%s | Vipul Jha",
  },
  description:
    "Portfolio of Vipul Jha, a full-stack developer specializing in modern web technologies like Next.js, React, and TypeScript.",
  openGraph: {
    title: "Vipul Jha - Full-Stack Developer",
    description: "Personal portfolio website.",
    type: "website",
    locale: "en_US",
    url: "https://www.vipuljha.̥com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Remove server-side theme class logic. Let next-themes handle theme class on client.
  // Wrap app in ThemeHydration to prevent hydration mismatch
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground relative overflow-x-hidden`}
      >
        {/* We have removed the decorative blur blobs from here */}

        <ThemeHydration>
          <ThemeProvider>
            <ScrollProvider>
              <Header />
              <main className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pt-32 pb-16">
                {children}
              </main>
              <Footer />
            </ScrollProvider>
          </ThemeProvider>
        </ThemeHydration>
      </body>
    </html>
  );
}
