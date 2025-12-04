'use client';

import Link from 'next/link';
import { Highlight } from '@/data/highlights';
import { motion } from 'framer-motion';
import { Play, MapPin, Calendar } from 'lucide-react';

export default function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all hover:border-cyan-500/30 hover:bg-white/10 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        {/* Placeholder for Thumbnail - in real app use Image or Video thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-600">
           {/* If we have an image, show it. Otherwise show icon */}
           {/* <img src={highlight.imageUrl} alt={highlight.title} className="h-full w-full object-cover opacity-50 group-hover:opacity-75 transition-opacity" /> */}
           <Play className="h-12 w-12 opacity-20" />
        </div>
        
        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-2 text-xs text-cyan-300">
            <MapPin className="h-3 w-3" /> {highlight.map}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          <Link href={`/highlights/${highlight.slug}`}>
            <span className="absolute inset-0" />
            {highlight.title}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {highlight.year}</span>
            <span>•</span>
            <span>{highlight.event}</span>
        </div>
        <p className="mt-4 flex-1 text-sm italic text-slate-400">
          "{highlight.quote}"
        </p>
        
        <div className="mt-4 flex items-center text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
          View Analysis <span aria-hidden="true" className="ml-1">&rarr;</span>
        </div>
      </div>
    </motion.div>
  );
}

