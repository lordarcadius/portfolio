import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    url: "https://www.vipuljha.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <Header />
          {/* Add padding-top to offset the fixed header */}
          <main className="container mx-auto max-w-3xl px-4 pt-24 pb-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}