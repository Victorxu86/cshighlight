'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, Volume2, Crosshair } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax Mouse Effect
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050507] overflow-hidden">
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
         
         {/* Background: Blurred "SONIC REMAINS" */}
         <motion.div 
            style={{ y: bgY, x: mousePosition.x * -0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
         >
             <h1 className="font-display font-bold text-[20vw] leading-none text-[#7c3aed] opacity-20 blur-[40px] animate-pulse tracking-tighter mix-blend-screen">
                 SONIC<br/>REMAINS
             </h1>
         </motion.div>

         {/* Middle Layer: Abstract Shapes / CS Theme */}
         <div className="absolute inset-0 pointer-events-none z-10">
             {/* CT Blue Orb */}
             <div className="absolute top-[20%] left-[15%] w-[30vw] h-[30vw] bg-[#5d79ae] rounded-full blur-[120px] opacity-20 mix-blend-screen" />
             {/* T Yellow Orb */}
             <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#de9b35] rounded-full blur-[120px] opacity-10 mix-blend-screen" />
             
             {/* Grid Overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
         </div>

         {/* Front Layer: "COUNTER STRIKE" Impact Text */}
         <motion.div 
            style={{ y: textY, x: mousePosition.x }}
            className="relative z-20 text-center flex flex-col items-center max-w-[90vw]"
         >
             {/* Decorative Top Elements */}
             <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mb-6"
             >
                <div className="h-[1px] w-12 bg-[#de9b35]" />
                <span className="font-tech text-[#de9b35] uppercase tracking-[0.3em] text-xs">Project Archive 2025</span>
                <div className="h-[1px] w-12 bg-[#de9b35]" />
             </motion.div>

             {/* Main Title */}
             <div className="relative">
                 {/* Glitch Duplicate */}
                 <h2 className="absolute top-0 left-1 font-display font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-[#5d79ae] opacity-50 mix-blend-overlay pointer-events-none select-none" aria-hidden="true">
                    COUNTER<br/>STRIKE
                 </h2>
                 
                 <motion.h2 
                    initial={{ scale: 1.2, opacity: 0, filter: "blur(20px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative font-display font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                 >
                    COUNTER<br/>STRIKE
                 </motion.h2>
             </div>

             {/* Subtitle & CTA */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 flex flex-col items-center gap-8"
             >
                 <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                     An auditory excavation of <span className="text-[#5d79ae]">shoutcasting monuments</span> and <span className="text-[#de9b35]">virtual graffiti</span>.
                 </p>

                 <div className="flex gap-6">
                     <Link href="/highlights">
                         <button className="group relative px-8 py-4 bg-white text-black overflow-hidden font-display font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] clip-path-slant">
                             <span className="relative z-10 flex items-center gap-2">
                                 Enter Gallery <ArrowRight className="w-5 h-5" />
                             </span>
                             <div className="absolute inset-0 bg-gradient-to-r from-[#5d79ae] to-[#de9b35] opacity-0 group-hover:opacity-20 transition-opacity" />
                         </button>
                     </Link>
                     
                     <Link href="/about">
                         <button className="group px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm font-tech font-bold text-lg uppercase tracking-wider hover:bg-white/10 hover:border-[#de9b35]/50 transition-all text-white">
                             Read Manifesto
                         </button>
                     </Link>
                 </div>
             </motion.div>
         </motion.div>

         {/* Scroll Indicator */}
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#de9b35] to-transparent animate-pulse" />
            <span className="font-tech text-[10px] uppercase tracking-widest text-neutral-500">Initialize Scroll</span>
         </motion.div>
      </section>
    </div>
  );
}
