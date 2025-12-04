'use client';

import Link from 'next/link';
import { Highlight } from '@/data/highlights';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Play, MapPin, ArrowUpRight, Hash } from 'lucide-react';
import React from 'react';

export default function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/highlights/${highlight.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-[450px] w-full overflow-hidden border border-white/5 bg-[#080808] transition-all duration-500 hover:border-white/20"
        onMouseMove={handleMouseMove}
      >
        {/* Background Layer - Placeholder Art */}
        <div className="absolute inset-0 bg-[#111] transition-transform duration-1000 group-hover:scale-105">
            {/* Simulated Image Texture */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                    backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                    backgroundSize: 'cover' 
                 }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
            
            {/* Dynamic Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-900/40 blur-[60px] group-hover:bg-purple-900/40 transition-colors duration-700" />
            
            <div className="flex items-center justify-center h-full text-neutral-800">
                <Play className="w-32 h-32 stroke-1 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
        </div>

        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.06),
                transparent 40%
              )
            `,
          }}
        />

        {/* Information Layer */}
        <div className="relative h-full flex flex-col justify-between p-8 z-10">
            {/* Top Meta */}
            <div className="flex justify-between items-start opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                    <Hash className="w-3 h-3 text-cyan-500" />
                    <span>{highlight.id.padStart(2, '0')}</span>
                </div>
                
                <div className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                    {highlight.year}
                </div>
            </div>

            {/* Bottom Content */}
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-500">{highlight.map}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{highlight.event}</span>
                </div>

                <h3 className="text-4xl font-serif text-white leading-none mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                    {highlight.title}
                </h3>
                
                <div className="h-0 overflow-hidden group-hover:h-[40px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 delay-100">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </Link>
  );
}
