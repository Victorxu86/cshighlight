'use client';

import Link from 'next/link';
import { Highlight } from '@/data/highlights';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Play, MapPin, ArrowUpRight } from 'lucide-react';

export default function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-neutral-900"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image (Simulated) */}
      <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-110">
        {/* In real app, use Image component here */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
        <div className="flex items-center justify-center h-full text-neutral-700">
             <Play className="w-24 h-24 opacity-20" />
        </div>
      </div>

      {/* Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 40%
            )
          `,
        }}
      />

      {/* Content Layer */}
      <div className="relative h-full flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
             <div className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-xs font-mono uppercase tracking-wider">
                {highlight.year}
             </div>
             <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
             </div>
        </div>

        <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-2 leading-none group-hover:text-cyan-300 transition-colors">
                <Link href={`/highlights/${highlight.slug}`}>
                    <span className="absolute inset-0 z-10" />
                    {highlight.title}
                </Link>
            </h3>
            <div className="flex items-center gap-2 text-sm text-neutral-400 font-mono">
                <MapPin className="w-4 h-4" />
                {highlight.map} • {highlight.event}
            </div>
            
            {/* Reveal Quote on Hover */}
            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500">
                <p className="text-sm text-white/80 italic border-l-2 border-cyan-500 pl-3">
                    "{highlight.quote}"
                </p>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
