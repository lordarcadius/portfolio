"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section logic
      const sections = navLinks.map(link => link.href.substring(1));
      
      // Find the section that is currently most visible
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the viewport (accounting for navbar)
          // Section is active if its top is above middle of screen and bottom is below navbar
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-slate-950/80 backdrop-blur-md border-white/5 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="#about" 
          onClick={(e) => handleNavClick(e, '#about')}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Vipul<span className="text-white"> Jha</span>.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  isActive ? "text-primary" : "text-slate-300 hover:text-primary"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          {portfolioData.blogUrl && (
            <a
              href={portfolioData.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative"
            >
              Blog
            </a>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/5"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isActive ? "text-primary" : "text-slate-300 hover:text-primary"
                  )}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              );
            })}
            {portfolioData.blogUrl && (
              <a
                href={portfolioData.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-slate-300 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
            )}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
