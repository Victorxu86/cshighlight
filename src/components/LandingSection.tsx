"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden selection:bg-amber-500/30"
    >
      {/* Background: Deep dark with subtle gradient/noise */}
      <div className="absolute inset-0 bg-background z-0 pointer-events-none">
        {/* Amber ambient glow (Center) */}
        <div className="absolute inset-0 bg-amber-gradient opacity-20 mix-blend-screen animate-pulse-slow" />
        
        {/* Existing Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Fuzzy Background Text: COUNTER STRIKE */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 select-none pointer-events-none overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="flex flex-col items-center leading-none"
        >
            {/* COUNTER */}
            <h1 className="text-[18vw] md:text-[15vw] font-black text-white/10 tracking-tighter blur-sm translate-x-[-5%] scale-y-110 transform mix-blend-overlay">
              COUNTER
            </h1>
            {/* STRIKE */}
            <h1 className="text-[18vw] md:text-[15vw] font-black text-white/10 tracking-tighter blur-sm translate-x-[5%] -mt-[4vw] scale-y-110 transform mix-blend-overlay">
              STRIKE
            </h1>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mt-12">
        {/* Main Title: Sonic Remains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white/90 drop-shadow-2xl">
            Sonic <span className="text-amber-400/90 animate-glow drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">Remains</span>
          </h2>
        </motion.div>

        {/* Subtitle / Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="space-y-2 mb-12"
        >
          <p className="text-base md:text-xl text-muted font-light tracking-wide">
            Observing cultural memory in esports through commentary and <span className="text-amber-200/80 font-normal">sonic artifacts</span>.
          </p>
          <p className="text-sm md:text-base text-muted/60 font-light">
            A curated exhibition of sound, emotion, and digital history.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Link
            href="#highlights"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden border border-white/10 rounded-full hover:border-amber-400/50 transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-sm tracking-widest uppercase text-white/90 group-hover:text-amber-100 transition-colors">
              Enter Exhibition
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
         <span className="text-[10px] uppercase tracking-widest text-amber-500/40 animate-pulse">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      </motion.div>
    </section>
  );
}
