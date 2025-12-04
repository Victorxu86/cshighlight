'use client';

import Link from 'next/link';
import { Highlight } from '@/data/highlights';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Play, MapPin, Calendar } from 'lucide-react';
import { MouseEvent } from 'react';

export default function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-white/10 bg-zinc-900/50 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative aspect-video overflow-hidden bg-zinc-900">
         {/* Placeholder for Thumbnail */}
         <div className="absolute inset-0 flex items-center justify-center">
           {/* If we have an image, show it. Otherwise show pattern */}
           {/* <img src={highlight.imageUrl} alt={highlight.title} className="h-full w-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" /> */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-700">
               <Play className="h-16 w-16 text-white/20 group-hover:text-cyan-400 transition-colors duration-300" />
           </div>
        </div>
        
        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
             <span className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[10px] uppercase tracking-widest text-cyan-400">
                 {highlight.map}
             </span>
        </div>
      </div>

      <div className="relative p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          <Link href={`/highlights/${highlight.slug}`}>
            <span className="absolute inset-0" />
            {highlight.title}
          </Link>
        </h3>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">
            <span className="flex items-center gap-1">{highlight.year}</span>
            <span>//</span>
            <span>{highlight.event}</span>
        </div>

        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed font-light">
            {highlight.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
             <div className="text-xs text-slate-600 font-mono group-hover:text-cyan-500 transition-colors">
                 ID: {highlight.id.padStart(3, '0')}
             </div>
             <div className="flex items-center gap-2 text-xs font-bold uppercase text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                 Analyze <span className="text-cyan-400">→</span>
             </div>
        </div>
      </div>
    </motion.div>
  );
}
