'use client';

import Link from 'next/link';
import { Highlight } from '@/data/highlights';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative h-[500px] w-full depth-card overflow-hidden rounded-lg"
        onMouseMove={handleMouseMove}
      >
        {/* Ambient Background Glow (No Border Lines) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
        
        {/* Placeholder Visual - Abstract Gradient Mesh */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_60%)] animate-pulse-glow" />
        </div>

        {/* Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.03),
                transparent 40%
              )
            `,
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 z-30">
            <div className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                     <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] uppercase tracking-widest rounded-sm backdrop-blur-md">
                        {highlight.year}
                     </span>
                     <span className="text-neutral-500 text-xs uppercase tracking-widest">
                        {highlight.map}
                     </span>
                </div>
                
                <h3 className="text-3xl font-serif text-white mb-2 leading-tight group-hover:text-cyan-100 transition-colors">
                    {highlight.title}
                </h3>
            </div>

            <div className="h-px w-full bg-white/10 mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">View Archive</span>
                <ArrowRight className="w-4 h-4 text-white" />
            </div>
        </div>
      </motion.div>
    </Link>
  );
}
