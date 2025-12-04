'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Manifesto', path: '#manifesto' },
  { name: 'Gallery', path: '/highlights' },
  { name: 'Analysis', path: '/analysis' },
];

const MotionLink = motion.create(Link);

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
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b border-white/5 flex flex-col justify-center",
        // Changed from h-[40px] to h-[60px] or similar if needed, but strictly top-0
        // The user asked to keep the bottom position unchanged but move top to screen top.
        // Since it's fixed top-0, it is already at screen top.
        // Maybe the user meant the visual 'black bar' height?
        // Let's ensure it hugs the top.
        scrolled 
            ? "bg-[#050507]/95 backdrop-blur-xl py-4" 
            : "bg-transparent py-6"
      )}
    >
      {/* Added overflow-visible to ensure lines outside are seen */}
      <div className="w-full h-full max-w-[1920px] mx-auto px-8 md:px-16 grid grid-cols-12 items-center relative overflow-visible">
        
        {/* Left: Brand (Col 1-3) */}
        <div className="col-span-3 flex items-center h-full">
            <Link href="/" className="flex items-center h-full group text-white">
                <span className="font-display font-black text-lg tracking-tight uppercase text-white group-hover:text-[#d8b4fe] transition-colors duration-300">
                  Sonic<span className="text-[#5d79ae] group-hover:text-white transition-colors duration-300">Remains</span>
                </span>
            </Link>
        </div>

        {/* Center: Navigation (Col 4-9) */}
        <nav className="col-span-6 h-full flex items-center justify-between relative overflow-visible">
          {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <MotionLink 
                 key={item.path} 
                 href={item.path}
                 initial="initial"
                 whileHover="hover"
                 className="relative h-full flex-1 flex items-center justify-center group"
               >
                 {/* Text */}
                 <motion.span 
                    variants={{
                      initial: { scale: 1, color: "#FFFFFF" },
                      hover: { scale: 1.1, color: "#d8b4fe" }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="font-display text-xs font-bold uppercase tracking-[0.2em] relative z-10"
                 >
                   {item.name}
                 </motion.span>
                 
                 {/* Active Line - Positioned at 45px */}
                 {isActive && (
                    <motion.div 
                      layoutId="navline-active" 
                      className="absolute top-[45px] left-0 right-0 mx-auto w-1/2 h-[2px] bg-[#de9b35] shadow-[0_0_10px_#de9b35] z-50"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                 )}
               </MotionLink>
             )
          })}
        </nav>

        {/* Right: Spacer (Col 10-12) */}
        <div className="col-span-3" />

      </div>
    </motion.header>
  );
}
