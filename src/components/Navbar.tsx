'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Highlights', path: '/highlights' },
  { name: 'Analysis', path: '/analysis' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between mix-blend-difference text-white">
      {/* Logo */}
      <Link href="/" className="group">
        <div className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter group-hover:opacity-70 transition-opacity">
            SONIC REMAINS
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">
            Archive 2025
          </span>
        </div>
      </Link>

      {/* Desktop Nav - Text Based, Minimal */}
      <div className="hidden md:flex items-center gap-12">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className="relative group"
            >
              <span className={`text-sm uppercase tracking-widest font-mono transition-opacity ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white" 
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Trigger (Placeholder for simplicity, ensures clean layout first) */}
      <div className="md:hidden text-xs font-mono uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full">
        Menu
      </div>
    </nav>
  );
}
