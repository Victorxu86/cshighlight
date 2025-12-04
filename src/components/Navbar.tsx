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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        scrolled ? "bg-[#030304]/80 backdrop-blur-xl border-white/10 py-3" : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
             <div className="w-3 h-3 bg-cyan-500 rounded-full group-hover:animate-pulse" />
             <Link href="/" className="text-lg font-bold tracking-tight text-white font-mono uppercase">
              Sonic<span className="text-cyan-400">Remains</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-all rounded-full relative hover:text-white',
                    pathname === item.path
                      ? 'text-white'
                      : 'text-slate-500'
                  )}
                >
                  {pathname === item.path && (
                      <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white/10 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-[#030304] border-b border-white/10 overflow-hidden"
            >
            <div className="space-y-1 px-4 pb-6 pt-2">
                {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                    'block py-3 text-lg font-medium border-b border-white/5',
                    pathname === item.path
                        ? 'text-cyan-400'
                        : 'text-slate-400'
                    )}
                >
                    {item.name}
                </Link>
                ))}
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
