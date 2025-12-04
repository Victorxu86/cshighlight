'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Search, Menu, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Gallery', path: '/highlights', desc: 'Curated Moments' },
  { name: 'Analysis', path: '/analysis', desc: 'Sonic Theory' },
  { name: 'Manifesto', path: '/about', desc: 'Project Info' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      {/* The Glass Container */}
      <div className={cn(
        "max-w-[1800px] mx-auto rounded-2xl border transition-all duration-500 flex items-center justify-between px-6 py-3 relative overflow-hidden",
        scrolled 
            ? "bg-black/60 border-white/10 cinematic-blur shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"
      )}>
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110">
                <Sparkles className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold tracking-widest uppercase text-sm text-white">Sonic</span>
                <span className="text-[10px] text-blue-400 tracking-[0.3em] uppercase group-hover:text-white transition-colors">Remains</span>
            </div>
        </Link>

        {/* 2. Center Navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                    <Link 
                        key={item.path} 
                        href={item.path}
                        className="relative group/item px-6 py-2 rounded-full overflow-hidden"
                    >
                        <span className={cn(
                            "relative z-10 text-sm font-medium uppercase tracking-wider transition-colors duration-300",
                            isActive ? "text-white" : "text-neutral-400 group-hover/item:text-white"
                        )}>
                            {item.name}
                        </span>
                        
                        {/* Hover Glow BG */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-full blur-sm" />
                        
                        {/* Active Indicator */}
                        {isActive && (
                            <motion.div 
                                layoutId="nav-indicator"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
                            />
                        )}
                    </Link>
                )
            })}
        </div>

        {/* 3. Right Actions */}
        <div className="flex items-center gap-4 relative z-10">
             <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-xs font-mono uppercase text-neutral-400 hover:text-white">
                 <Search className="w-3 h-3" />
                 <span>Search</span>
             </button>
             
             <Link href="/highlights">
                <button className="relative px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                        Exhibition <ChevronRight className="w-3 h-3" />
                    </span>
                </button>
             </Link>
        </div>

      </div>
    </motion.nav>
  );
}
