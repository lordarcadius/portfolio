"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TbArrowRight, TbDownload } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function HeroSection() {
  return (
    <section
      id="about"
      className="flex flex-col justify-start relative pt-12 md:pt-16 pb-10"
    >
      {/* Background Gradients */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="container mx-auto px-4 xl:px-24 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary font-medium mb-4 tracking-wide">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6">
              {portfolioData.name}
            </h1>
            <h2 className="text-2xl md:text-4xl text-slate-400 mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent font-semibold">
              {portfolioData.role}
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify lg:text-left">
              {portfolioData.about}
            </p>

            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Social Media Icons */}
              <SocialIcons variant="default" />

              {/* Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#projects"
                  className="w-42 px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                >
                  Projects <TbArrowRight size={20} />
                </Link>

                <Link
                  href="/files/resume.pdf"
                  target="_blank"
                  className="w-42 px-8 py-3 border-2 border-slate-700 text-slate-300 font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Resume <TbDownload size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group perspective-1000">
              {/* Deep Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-[2rem] rotate-6 scale-105 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500" />

              {/* Second Layer (Rotated Card) */}
              <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm rounded-[2rem] rotate-3 border border-white/10 group-hover:rotate-6 transition-transform duration-500" />

              {/* Main Image Container with Gradient Border */}
              <div className="relative w-full h-full rounded-[2rem] p-[2px] bg-gradient-to-br from-primary to-secondary -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="w-full h-full rounded-[calc(2rem-2px)] overflow-hidden bg-slate-900 relative">
                  {/* Use a placeholder if image fails or is missing */}
                  <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-800 relative">
                    <Image
                      src={portfolioData.profileImage}
                      alt={portfolioData.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
