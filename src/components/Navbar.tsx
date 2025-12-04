'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Highlights', path: '/highlights' },
  { name: 'Analysis', path: '/analysis' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn(
            "flex items-center justify-between rounded-2xl border border-white/5 bg-[#050509]/70 backdrop-blur-xl px-6 py-3 transition-all duration-500 shadow-2xl shadow-black/50",
            scrolled ? "bg-[#050509]/90 border-white/10" : ""
        )}>
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="relative flex h-8 w-8 items-center justify-center rounded bg-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                <span className="font-mono font-bold text-cyan-400">SR</span>
             </div>
             <span className="text-sm font-bold tracking-widest text-white font-mono uppercase hidden sm:block group-hover:text-cyan-400 transition-colors">
              Sonic<span className="text-cyan-500">Remains</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    'px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all rounded-lg relative hover:text-white',
                    pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-slate-400'
                  )}
                >
                  {pathname === item.path && (
                      <motion.div 
                        layoutId="nav-active" 
                        className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg -z-10" 
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                      />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
            >
                <div className="rounded-xl border border-white/10 bg-[#050509]/95 backdrop-blur-xl overflow-hidden p-2">
                    <div className="space-y-1">
                        {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                            'block px-4 py-3 text-sm font-medium rounded-lg uppercase tracking-wider',
                            pathname === item.path
                                ? 'bg-cyan-500/10 text-cyan-400'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            )}
                        >
                            {item.name}
                        </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
