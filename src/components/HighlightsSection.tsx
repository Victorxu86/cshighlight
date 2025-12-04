"use client";

import React from "react";
import { motion } from "framer-motion";
import { highlights, Highlight } from "@/data/highlights";
import { Play, Pause, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 bg-background relative overflow-hidden">
       {/* Grid Background */}
       <div className="absolute inset-0 bg-grid-small opacity-50 pointer-events-none" />
       <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 border-b border-white/10 pb-8 flex justify-between items-end"
        >
            <div>
                <h2 className="text-xs tracking-widest uppercase text-accent mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    The Collection
                </h2>
                <h3 className="text-3xl font-serif italic text-white text-glow">Sonic Artifacts</h3>
            </div>
            <span className="text-xs text-muted hidden md:block">ARCHIVE_V.1.0</span>
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
      <div className="relative w-full aspect-video bg-neutral-900/50 mb-6 overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 backdrop-blur-sm">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-accent/50 transition-colors" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-accent/50 transition-colors" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-accent/50 transition-colors" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-accent/50 transition-colors" />

        {/* Placeholder Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 font-mono text-xs tracking-widest uppercase group-hover:text-accent/50 transition-colors">
                Signal_Lost // {item.id}
            </span>
        </div>

        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]"
        >
            <button className="px-6 py-2 border border-accent/50 rounded-full text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                View Record
            </button>
        </motion.div>
      </div>

      {/* Meta Data */}
      <div className="flex items-center justify-between text-xs text-muted/60 uppercase tracking-wider mb-3 border-b border-white/5 pb-3 group-hover:border-accent/20 transition-colors">
        <span>{item.year} — {item.event}</span>
        <span className="group-hover:text-accent transition-colors">{item.map}</span>
      </div>

      {/* Title & Player */}
      <h4 className="text-2xl font-medium text-white/90 mb-1 group-hover:text-white group-hover:text-glow transition-all">
        {item.title}
      </h4>
      <p className="text-sm text-muted mb-6">feat. <span className="text-foreground">{item.player}</span></p>

      {/* Quote */}
      <blockquote className="border-l-2 border-white/10 pl-4 mb-6 italic text-muted font-serif text-lg leading-relaxed group-hover:border-accent group-hover:text-white/80 transition-all duration-500">
        "{item.quote}"
      </blockquote>

      {/* Audio Player (Minimal) */}
      <div className={cn(
          "flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-sm border border-white/5 hover:border-white/10 transition-all",
          isPlaying && "border-accent/30 bg-accent/5"
        )}>
        <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all",
                isPlaying && "bg-accent text-black hover:bg-accent hover:text-black shadow-[0_0_10px_rgba(251,191,36,0.4)]"
            )}
        >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
        </button>
        <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
                 <div className="flex items-center gap-2">
                    <Disc size={12} className={cn("text-muted transition-all", isPlaying && "animate-spin text-accent")} />
                    <span className={cn("text-xs tracking-wider transition-colors", isPlaying ? "text-accent" : "text-muted")}>
                        Audio Commentary
                    </span>
                 </div>
                 {isPlaying && <span className="text-[10px] text-accent animate-pulse">PLAYING</span>}
            </div>
            <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
                <motion.div 
                    className="h-full bg-accent shadow-[0_0_5px_#fbbf24]"
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
