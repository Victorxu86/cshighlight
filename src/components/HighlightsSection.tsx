"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { highlights, Highlight } from "@/data/highlights";
import { Play, Pause, Disc, X, MonitorPlay } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HighlightsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
            <HighlightCard 
              key={item.id} 
              item={item} 
              index={index} 
              onPlayVideo={(id) => setSelectedVideo(id)} 
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-white/10 rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function HighlightCard({ item, index, onPlayVideo }: { item: Highlight; index: number; onPlayVideo: (id: string) => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle Audio Playback
  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.play().catch(e => {
                console.error("Audio playback failed", e);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group flex flex-col"
    >
      {/* Hidden Audio Element */}
      {item.audioSrc && (
        <audio 
            ref={audioRef} 
            src={item.audioSrc} 
            onEnded={handleAudioEnded}
            preload="none"
        />
      )}

      {/* Visual Area (Video Thumbnail / YouTube Trigger) */}
      <div className="relative w-full aspect-video bg-neutral-900 mb-6 overflow-hidden border border-white/5 group-hover:border-amber-500/30 transition-colors duration-500">
        
        {/* Placeholder / Thumbnail Image (If we had videoPoster, we'd use it here) */}
        {item.youtubeId ? (
            <img 
                src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale hover:grayscale-0"
            />
        ) : (
             /* Fallback Pattern */
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        )}
        
        {/* Center Text / Icon */}
        {!item.youtubeId && (
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 font-mono text-xs tracking-widest uppercase group-hover:text-amber-500/20 transition-colors">Visual Archive Unavailable</span>
            </div>
        )}

        {/* Hover Overlay with Play Button */}
        {item.youtubeId && (
            <motion.div 
              className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center"
            >
                <button 
                    onClick={() => onPlayVideo(item.youtubeId!)}
                    className="flex flex-col items-center gap-3 group/btn"
                >
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:bg-amber-500 group-hover/btn:border-amber-500 transition-all duration-300">
                        <MonitorPlay className="w-6 h-6 text-white group-hover/btn:text-black transition-colors" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white/80 group-hover/btn:text-amber-400 transition-colors opacity-0 group-hover/btn:opacity-100 translate-y-2 group-hover/btn:translate-y-0 duration-300">
                        Watch Footage
                    </span>
                </button>
            </motion.div>
        )}
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
            onClick={toggleAudio}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-amber-500/20 group-hover:text-amber-400 hover:!bg-amber-500 hover:!text-black transition-all"
        >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-1" />}
        </button>
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
                <Disc size={12} className={cn("text-muted group-hover:text-amber-500/60 transition-colors", isPlaying && "animate-spin")} />
                <span className="text-xs text-muted group-hover:text-amber-500/60 tracking-wider transition-colors">Audio Commentary (Isolated)</span>
            </div>
            <div className="h-[2px] w-full bg-white/10 overflow-hidden group-hover:bg-amber-500/20 transition-colors">
                <motion.div 
                    className="h-full bg-white/60 group-hover:bg-amber-400"
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: 30, ease: "linear", repeat: isPlaying ? Infinity : 0 }}
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
