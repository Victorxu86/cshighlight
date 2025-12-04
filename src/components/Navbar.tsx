'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, Disc, Zap, BookOpen, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Index', path: '/', icon: Home },
  { name: 'Gallery', path: '/highlights', icon: Zap },
  { name: 'Research', path: '/analysis', icon: BookOpen },
  { name: 'About', path: '/about', icon: Disc },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: Floating Bottom Dock - "Ambient Reactive" */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className={cn(
          "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-3 px-3 py-3 rounded-full transition-all duration-500 border",
          scrolled 
            ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        )}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path}>
              <MagneticButton className="relative group">
                <div className={cn(
                  "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-out",
                  isActive 
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white hover:scale-110"
                )}>
                  <item.icon className="w-5 h-5 stroke-[1.5]" />
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -bottom-1 w-1 h-1 bg-cyan-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                
                {/* Elegant Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#050505] border border-white/10 rounded-lg text-[10px] uppercase tracking-widest text-neutral-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-md">
                  {item.name}
                </div>
              </MagneticButton>
            </Link>
          );
        })}
      </motion.nav>

      {/* Mobile: Top Bar with Blur */}
      <motion.div 
        className={cn(
            "md:hidden fixed top-0 left-0 right-0 z-50 p-5 flex justify-between items-center transition-all duration-500",
            scrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
        )}
      >
        <Link href="/" className="font-serif font-bold text-lg tracking-widest text-white">SR.25</Link>
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-white active:scale-95 transition-transform"
        >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay - Cinematic Reveal */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#030304] flex flex-col items-center justify-center space-y-10 md:hidden"
        >
            {navItems.map((item, i) => (
                <Link 
                    key={item.name} 
                    href={item.path} 
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "text-4xl font-serif font-light italic tracking-wider",
                            pathname === item.path ? "text-cyan-400" : "text-white/50"
                        )}
                    >
                        {item.name}
                    </motion.div>
                </Link>
            ))}
        </motion.div>
      )}
    </>
  );
}
