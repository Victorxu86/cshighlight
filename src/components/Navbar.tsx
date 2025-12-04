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
            ? "bg-[#050507]/90 backdrop-blur-md h-20 border-white/10" 
            : "bg-transparent h-24 border-white/5"
      )}
    >
      <div className="w-full h-full px-8 md:px-12 flex items-center justify-between">
        
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-4 group z-50">
           <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-2xl tracking-tight uppercase text-white group-hover:text-[#de9b35] transition-colors">
                Sonic<span className="text-[#5d79ae]">Remains</span>
              </span>
           </div>
        </Link>

        {/* Right: Navigation (Always Visible - No Hamburger) */}
        <nav className="flex items-center h-full gap-1">
          {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.path} 
                 href={item.path}
                 className="relative h-full px-6 flex items-center justify-center group"
               >
                 <span className={cn(
                   "font-tech text-sm font-bold uppercase tracking-[0.15em] relative z-10 transition-colors duration-300",
                   isActive ? "text-[#de9b35]" : "text-neutral-300 group-hover:text-white"
                 )}>
                   {item.name}
                 </span>
                 
                 {/* Hover Line Top */}
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-[#5d79ae] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                 
                 {/* Active Line Bottom */}
                 {isActive && (
                    <motion.div 
                      layoutId="navline-active" 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#de9b35]"
                    />
                 )}
               </Link>
             )
          })}
        </nav>

      </div>
    </motion.header>
  );
}
