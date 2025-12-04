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
      // Explicit minimal heights: 60px base, 50px scrolled
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b border-white/5",
        scrolled 
            ? "bg-[#050507]/95 backdrop-blur-xl h-[50px]" 
            : "bg-transparent h-[60px]"
      )}
    >
      <div className="w-full h-full max-w-[1920px] mx-auto px-8 md:px-16 grid grid-cols-12 items-center relative">
        
        {/* Left: Brand (Col 1-3) */}
        <div className="col-span-3 flex items-center">
            <Link href="/" className="flex flex-col leading-none group">
                <span className="font-display font-black text-xl tracking-tight uppercase text-white group-hover:text-[#d8b4fe] transition-colors duration-300">
                  Sonic<span className="text-[#5d79ae] group-hover:text-white transition-colors duration-300">Remains</span>
                </span>
            </Link>
        </div>

        {/* Center: Navigation (Col 4-9) */}
        <nav className="col-span-6 h-full flex items-center justify-between relative">
          {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.path} 
                 href={item.path}
                 className="relative h-full flex-1 flex items-center justify-center group"
               >
                 {/* Text: Forced White, Bold, No Decor */}
                 <span className={cn(
                   "font-display text-sm font-bold uppercase tracking-[0.2em] relative z-10 transition-all duration-300 no-underline",
                   "text-white group-hover:text-[#d8b4fe]"
                 )}>
                   {item.name}
                 </span>
                 
                 {/* Active Line - MOVED OUTSIDE OF LINK if possible, or absolutely positioned to bottom of header container */}
                 {/* Since this is inside the flex item which is full height, bottom-0 refers to the bottom of the nav item which matches the header height */}
                 {isActive && (
                    <motion.div 
                      layoutId="navline-active" 
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-[#de9b35] shadow-[0_0_10px_#de9b35] z-50"
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
