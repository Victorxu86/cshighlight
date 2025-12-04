"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { highlights, Highlight } from "@/data/highlights";
import { Play, Pause, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 border-b border-white/10 pb-8"
        >
          <h2 className="text-sm tracking-widest uppercase text-muted mb-2">The Collection</h2>
          <h3 className="text-3xl font-serif italic text-white">Sonic Artifacts</h3>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {highlights.map((item, index) => (
            <HighlightCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ item, index }: { item: Highlight; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group flex flex-col"
    >
      {/* Visual Area (Placeholder for Video/GIF) */}
      <div className="relative w-full aspect-video bg-neutral-900 mb-6 overflow-hidden border border-white/5 group-hover:border-amber-500/30 transition-colors duration-500">
        {/* Placeholder Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 font-mono text-xs tracking-widest uppercase group-hover:text-amber-500/20 transition-colors">Visual Archive Unavailable</span>
        </div>

        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm"
        >
            <button className="px-6 py-2 border border-amber-500/50 rounded-full text-xs uppercase tracking-widest text-amber-100 hover:bg-amber-500 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                View Record
            </button>
        </motion.div>
      </div>

      {/* Meta Data */}
      <div className="flex items-center justify-between text-xs text-muted/60 uppercase tracking-wider mb-3 border-b border-white/5 pb-3 group-hover:border-amber-500/20 transition-colors">
        <span>{item.year} — {item.event}</span>
        <span>{item.map}</span>
      </div>

      {/* Title & Player */}
      <h4 className="text-2xl font-medium text-white/90 mb-1 group-hover:text-amber-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.0)] group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
        {item.title}
      </h4>
      <p className="text-sm text-muted mb-6 group-hover:text-amber-200/60 transition-colors">feat. {item.player}</p>

      {/* Quote */}
      <blockquote className="border-l-2 border-white/20 group-hover:border-amber-500/50 pl-4 mb-6 italic text-white/70 group-hover:text-amber-100/80 font-serif text-lg leading-relaxed transition-colors duration-500">
        "{item.quote}"
      </blockquote>

      {/* Audio Player (Minimal) */}
      <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-sm border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
        <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-amber-500/20 group-hover:text-amber-400 hover:!bg-amber-500 hover:!text-black transition-all"
        >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
        </button>
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
                <Disc size={12} className={cn("text-muted group-hover:text-amber-500/60 transition-colors", isPlaying && "animate-spin")} />
                <span className="text-xs text-muted group-hover:text-amber-500/60 tracking-wider transition-colors">Audio Commentary</span>
            </div>
            <div className="h-[2px] w-full bg-white/10 overflow-hidden group-hover:bg-amber-500/20 transition-colors">
                <motion.div 
                    className="h-full bg-white/60 group-hover:bg-amber-400"
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: 10, ease: "linear", repeat: isPlaying ? Infinity : 0 }}
                />
            </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed opacity-80 max-w-md group-hover:opacity-100 transition-opacity">
        {item.description}
      </p>
    </motion.div>
  );
}
