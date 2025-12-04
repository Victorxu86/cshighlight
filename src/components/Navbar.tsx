'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Disc, Zap, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

const navItems = [
  { name: 'Index', path: '/', icon: Home },
  { name: 'Highlights', path: '/highlights', icon: Zap },
  { name: 'Analysis', path: '/analysis', icon: BookOpen },
  { name: 'About', path: '/about', icon: Disc },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop: Floating Bottom Dock */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path}>
              <MagneticButton className="relative group">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${isActive ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/10'}`}>
                  <item.icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/20 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.name}
                </div>
              </MagneticButton>
            </Link>
          );
        })}
      </motion.nav>

      {/* Mobile: Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <span className="font-bold text-lg tracking-widest">SR.25</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-white/10 rounded-full">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
        >
            {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light uppercase tracking-widest"
                >
                    {item.name}
                </Link>
            ))}
        </motion.div>
      )}
    </>
  );
}
