'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Highlights', path: '/highlights' },
  { name: 'Analysis', path: '/analysis' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll progress for subtle loading bar
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 z-50">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors blur-md" />
                <span className="relative font-serif font-bold italic text-lg text-white">S</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest text-white uppercase">Sonic</span>
                <span className="text-[10px] tracking-[0.2em] text-neutral-500 group-hover:text-cyan-400 transition-colors uppercase">Archive</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors relative group py-2",
                  pathname === item.path ? "text-white" : "text-neutral-500 hover:text-white"
                )}
              >
                {item.name}
                {/* Hover Line */}
                <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500 origin-right transition-transform duration-300",
                    pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:origin-left"
                )} />
              </Link>
            ))}
            
            <div className="w-[1px] h-6 bg-white/10 mx-2" />
            
            <Link href="/highlights">
                <button className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 rounded-sm">
                    Enter Gallery
                </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-[#020203] flex flex-col justify-center items-center gap-8"
        >
             {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif italic text-white hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
        </motion.div>
      )}
    </>
  );
}
