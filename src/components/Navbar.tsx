'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Manifesto', path: '/about' },
  { name: 'Gallery', path: '/highlights' },
  { name: 'Analysis', path: '/analysis' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b",
        scrolled 
            ? "bg-[#050507]/95 backdrop-blur-xl h-28 border-white/10" 
            : "bg-transparent h-36 border-white/5"
      )}
    >
      <div className="w-full h-full max-w-[1800px] mx-auto px-8 md:px-16 flex items-center justify-between relative">
        
        {/* Left: Brand */}
        <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col leading-none group">
                <span className="font-display font-black text-3xl tracking-tight uppercase text-white group-hover:text-[#7c3aed] transition-colors duration-300">
                  Sonic<span className="text-[#5d79ae] group-hover:text-white transition-colors duration-300">Remains</span>
                </span>
            </Link>
        </div>

        {/* Center: Navigation - Evenly Distributed */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center gap-12 md:gap-24">
          {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.path} 
                 href={item.path}
                 className="relative h-full flex items-center justify-center group min-w-[100px]"
               >
                 {/* Text Label */}
                 <span className={cn(
                   "font-display text-xl font-black uppercase tracking-[0.1em] relative z-10 transition-all duration-300 transform group-hover:scale-105",
                   isActive ? "text-white" : "text-white/80 group-hover:text-white"
                 )}>
                   {item.name}
                 </span>
                 
                 {/* Hover Glow - Subtle Purple */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-12 h-12 bg-[#7c3aed] rounded-full blur-[40px] opacity-40" />
                 </div>
                 
                 {/* Active Line - Bottom of Header */}
                 {isActive && (
                    <motion.div 
                      layoutId="navline-active" 
                      className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#de9b35] shadow-[0_0_20px_#de9b35]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                 )}
               </Link>
             )
          })}
        </nav>

        {/* Right: Spacer to balance layout */}
        <div className="flex-shrink-0 w-[140px]" /> 

      </div>
    </motion.header>
  );
}
