'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Manifesto', path: '/about' },
  { name: 'Gallery', path: '/highlights' },
  { name: 'Analysis', path: '/analysis' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b border-white/5",
          scrolled ? "bg-[#050507]/80 backdrop-blur-md h-16" : "bg-transparent h-20"
        )}
      >
        <div className="w-full h-full px-8 md:px-12 flex items-center justify-between">
          
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-4 group">
             <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-tight uppercase text-white group-hover:text-[#de9b35] transition-colors">
                  Sonic<span className="text-[#5d79ae]">Remains</span>
                </span>
             </div>
          </Link>

          {/* Right: Navigation (Full Width Style) */}
          <nav className="hidden md:flex items-center h-full">
            {navItems.map((item) => {
               const isActive = pathname === item.path;
               return (
                 <Link 
                   key={item.path} 
                   href={item.path}
                   className="relative h-full px-8 flex items-center justify-center group overflow-hidden"
                 >
                   <span className={cn(
                     "font-tech text-sm uppercase tracking-[0.2em] relative z-10 transition-colors duration-300",
                     isActive ? "text-[#de9b35]" : "text-neutral-400 group-hover:text-white"
                   )}>
                     {item.name}
                   </span>
                   
                   {/* Hover Effect: Top Line */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-[#5d79ae] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   
                   {/* Active Effect: Bottom Line */}
                   {isActive && (
                      <motion.div 
                        layoutId="navline-bottom" 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#de9b35]"
                      />
                   )}
                   
                   {/* Hover Background Glow */}
                   <div className="absolute inset-0 bg-gradient-to-b from-[#5d79ae]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </Link>
               )
            })}
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-white hover:text-[#de9b35] transition-colors"
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-[#050507] flex flex-col justify-center items-center gap-8 backdrop-blur-xl"
        >
            {navItems.map((item) => (
                <Link 
                    key={item.path} 
                    href={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-display text-4xl uppercase text-white hover:text-[#de9b35] transition-colors"
                >
                    {item.name}
                </Link>
            ))}
        </motion.div>
      )}
    </>
  );
}
