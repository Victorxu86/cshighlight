"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Introduction", href: "#introduction" },
  { name: "Highlights", href: "#highlights" },
  { name: "Analysis", href: "#analysis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500 border-b border-transparent",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/5 py-3"
          : "bg-transparent"
      )}
    >
      {/* Left: Site Title */}
      <div className="flex items-center">
        <Link 
          href="/" 
          className="text-sm md:text-base font-medium tracking-wide text-foreground hover:text-accent transition-colors uppercase font-sans"
        >
          CS Highlights <span className="text-muted font-serif italic lowercase mx-1">as</span> Sonic Memory
        </Link>
      </div>

      {/* Right: Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative text-sm text-muted hover:text-white transition-colors duration-300"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
          <span className="text-sm text-muted">Menu</span>
      </div>
    </motion.nav>
  );
}
