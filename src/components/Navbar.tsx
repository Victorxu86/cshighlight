'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Radio } from 'lucide-react';

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        )}
      >
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5d79ae]/50 to-transparent opacity-50" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-sm border border-white/10 overflow-hidden group-hover:border-[#de9b35]/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#de9b35]/20 to-[#5d79ae]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Radio className="w-5 h-5 text-white relative z-10" />
             </div>
             <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-wide uppercase">Sonic<span className="text-[#de9b35]">Remains</span></span>
                <span className="font-tech text-xs text-[#5d79ae] tracking-[0.2em] uppercase">Archive v.25</span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
               const isActive = pathname === item.path;
               return (
                 <Link 
                   key={item.path} 
                   href={item.path}
                   className="relative px-6 py-2 group"
                 >
                   <span className={cn(
                     "font-tech text-sm uppercase tracking-widest transition-colors duration-300 relative z-10",
                     isActive ? "text-white" : "text-neutral-400 group-hover:text-white"
                   )}>
                     {item.name}
                   </span>
                   
                   {/* Hover/Active Background */}
                   <div className={cn(
                      "absolute inset-0 bg-white/5 transform skew-x-[-12deg] transition-transform duration-300 origin-bottom",
                      isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                   )} />
                   
                   {/* Active Indicator Line */}
                   {isActive && (
                      <motion.div 
                        layoutId="navline" 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#de9b35]"
                      />
                   )}
                 </Link>
               )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
              <Link href="/highlights" className="group relative px-6 py-2.5 bg-[#5d79ae]/10 border border-[#5d79ae]/30 overflow-hidden transition-all hover:bg-[#5d79ae]/20">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-[#5d79ae] group-hover:h-full transition-all duration-300 h-0" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[#de9b35] group-hover:h-full transition-all duration-300 h-0" />
                  <span className="font-tech font-bold text-sm uppercase tracking-widest text-white relative z-10">
                      Enter Gallery
                  </span>
              </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-white"
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

