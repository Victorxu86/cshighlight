'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax Mouse Effect - Toned down slightly for elegance
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
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
         
         {/* Background: "SONIC REMAINS" - More Visible Now */}
         <motion.div 
            style={{ y: bgY, x: mousePosition.x * -0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
         >
             <h1 className="font-display font-bold text-[18vw] leading-none text-[#7c3aed] opacity-60 blur-[8px] animate-pulse tracking-tighter mix-blend-screen">
                 SONIC<br/>REMAINS
             </h1>
         </motion.div>

         {/* Middle Layer: Ambient Light */}
         <div className="absolute inset-0 pointer-events-none z-10">
             <div className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] bg-[#5d79ae] rounded-full blur-[150px] opacity-15 mix-blend-screen" />
             <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#de9b35] rounded-full blur-[150px] opacity-10 mix-blend-screen" />
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
         </div>

         {/* Front Layer: "COUNTER STRIKE" Impact Text */}
         <motion.div 
            style={{ y: textY, x: mousePosition.x }}
            className="relative z-20 text-center flex flex-col items-center max-w-[90vw]"
         >
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

             <div className="relative">
                 <motion.h2 
                    initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative font-display font-black text-[12vw] md:text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_40px_rgba(93,121,174,0.3)]"
                 >
                    COUNTER<br/>STRIKE
                 </motion.h2>
             </div>

             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12"
             >
                 <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed text-center">
                     An auditory excavation of <span className="text-[#5d79ae] font-medium">shoutcasting monuments</span> and <span className="text-[#de9b35] font-medium">virtual graffiti</span>.
                 </p>
                 
                 {/* Arrow Down Indicator - Replacing Buttons */}
                 <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-16 flex flex-col items-center gap-2 text-neutral-500"
                 >
                    <span className="font-tech text-[10px] uppercase tracking-[0.3em]">Explore Archive</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#de9b35] to-transparent" />
                 </motion.div>
             </motion.div>
         </motion.div>
      </section>
    </div>
  );
}
