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
            ? "bg-[#050507]/90 backdrop-blur-xl h-24 border-white/10" 
            : "bg-transparent h-32 border-white/5"
      )}
    >
      <div className="w-full h-full max-w-[1920px] mx-auto px-8 md:px-16 grid grid-cols-12 items-center">
        
        {/* Left: Brand (Col 1-3) */}
        <div className="col-span-3 flex items-center">
            <Link href="/" className="flex flex-col leading-none group">
                <span className="font-display font-bold text-3xl tracking-tight uppercase text-white group-hover:text-[#7c3aed] transition-colors duration-300">
                  Sonic<span className="text-[#5d79ae] group-hover:text-white transition-colors duration-300">Remains</span>
                </span>
            </Link>
        </div>

        {/* Center: Navigation (Col 4-9) - Evenly Distributed */}
        <nav className="col-span-6 h-full flex items-center justify-between px-8">
          {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.path} 
                 href={item.path}
                 className="relative h-full flex-1 flex items-center justify-center group"
               >
                 <span className={cn(
                   "font-tech text-sm font-bold uppercase tracking-[0.2em] relative z-10 transition-all duration-300 transform group-hover:scale-110",
                   isActive ? "text-[#de9b35]" : "text-white group-hover:text-[#a78bfa]" // Pale Purple Hover
                 )}>
                   {item.name}
                 </span>
                 
                 {/* Active Line Bottom */}
                 {isActive && (
                    <motion.div 
                      layoutId="navline-active" 
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-[#de9b35] shadow-[0_0_10px_#de9b35]"
                    />
                 )}
               </Link>
             )
          })}
        </nav>

        {/* Right: Spacer / Future Actions (Col 10-12) */}
        <div className="col-span-3 flex justify-end">
             {/* Optional: Add social icons or search here later */}
        </div>

      </div>
    </motion.header>
  );
}
