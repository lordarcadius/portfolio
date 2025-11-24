import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vipuljha.com"),
  title: {
    template: `%s | ${portfolioData.name}`,
    default: `${portfolioData.name} - ${portfolioData.role}`,
  },
  description: portfolioData.about,
  keywords: [
    "Android Developer",
    "Flutter Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Mobile App Development",
    "AOSP Developer",
    "Chromium Developer",
    "Portfolio",
    "Next.js Portfolio",
    "Vipul Jha",
    "lordarcadius",
    "vipul jha xda",
    "Primebook",
    "Primebook India",
    "Senior Software Engineer",
    "SDE-2",
    "Android Engineer",
    "Android",
    "Kotlin",
    "Flutter",
  ],
  authors: [{ name: portfolioData.name, url: "https://www.vipuljha.com" }],
  creator: portfolioData.name,
  publisher: portfolioData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vipuljha.com",
    title: `${portfolioData.name} - ${portfolioData.role}`,
    description: portfolioData.about,
    siteName: `${portfolioData.name} Portfolio`,
    images: [
      {
        url: "https://www.vipuljha.com/images/profile.webp",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} - ${portfolioData.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} - ${portfolioData.role}`,
    description: portfolioData.about,
    creator: "@lordarcadius",
    images: ["https://www.vipuljha.com/images/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icons/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
      </body>
    </html>
  );
}
