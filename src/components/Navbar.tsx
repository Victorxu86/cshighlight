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
      // Increased heights explicitly: h-[180px] -> h-[120px]
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b flex flex-col justify-center",
        scrolled 
            ? "bg-[#050507]/95 backdrop-blur-xl h-[120px] border-white/10" 
            : "bg-transparent h-[180px] border-white/5"
      )}
    >
      <div className="w-full h-full max-w-[1920px] mx-auto px-8 md:px-16 grid grid-cols-12 items-center relative">
        
        {/* Left: Brand (Col 1-3) */}
        <div className="col-span-3 flex items-center">
            <Link href="/" className="flex flex-col leading-none group">
                <span className="font-display font-black text-4xl tracking-tight uppercase text-white group-hover:text-[#d8b4fe] transition-colors duration-300">
                  Sonic<span className="text-[#5d79ae] group-hover:text-white transition-colors duration-300">Remains</span>
                </span>
            </Link>
        </div>

        {/* Center: Navigation (Col 4-9) */}
        <nav className="col-span-6 h-full flex items-center justify-between">
          {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.path} 
                 href={item.path}
                 className="relative h-full flex-1 flex items-center justify-center group"
               >
                 {/* Text: Bold White -> Light Purple Hover */}
                 <span className={cn(
                   "font-display text-xl font-black uppercase tracking-[0.2em] relative z-10 transition-all duration-300 transform group-hover:scale-110",
                   // Force white by default, Light Purple on Hover
                   isActive ? "text-white" : "text-white group-hover:text-[#d8b4fe]"
                 )}>
                   {item.name}
                 </span>
                 
                 {/* Hover Glow Effect (Purple) */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-20 h-20 bg-[#d8b4fe] rounded-full blur-[50px] opacity-20" />
                 </div>
                 
                 {/* Active Line Bottom - Explicit Height & Z-Index */}
                 {isActive && (
                    <motion.div 
                      layoutId="navline-active" 
                      className="absolute bottom-0 left-0 w-full h-[8px] bg-[#de9b35] shadow-[0_0_20px_#de9b35] z-50"
                    />
                 )}
               </Link>
             )
          })}
        </nav>

        {/* Right: Spacer (Col 10-12) */}
        <div className="col-span-3" />

      </div>
    </motion.header>
  );
}
