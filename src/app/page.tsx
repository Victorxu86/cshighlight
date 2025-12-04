'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowDown } from 'lucide-react';
import ManifestoSection1 from '@/components/ManifestoSection1';

export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Adding spring physics for damping/smoothness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero Transition Config
  // 0 to 0.2: Hero stays visible
  // 0.2 to 0.45: Hero fades out
  const heroOpacity = useTransform(smoothProgress, [0.2, 0.45], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0.2, 0.45], [1, 0.9]);
  const heroFilter = useTransform(smoothProgress, [0.2, 0.45], ["blur(0px)", "blur(10px)"]);
  
  // Manifesto Transition Config
  // 0.35 to 0.55: Manifesto fades in (overlapping slightly with Hero fade out)
  const manifestoOpacity = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);
  const manifestoY = useTransform(smoothProgress, [0.35, 0.55], [100, 0]);

  return (
    <main ref={containerRef} className="bg-[#050507] text-white relative h-[250vh]"> 
      {/* Increased height to allow for scrolling space */}
      
      <Navbar />

      {/* === HERO SECTION (Fixed/Sticky) === */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
         <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale, filter: heroFilter }}
            className="w-full h-full flex items-center justify-center relative"
         >
            {/* Background: "SONIC REMAINS" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <h1 className="font-display font-bold text-[18vw] leading-none text-[#7c3aed] opacity-40 blur-[4px] tracking-tighter mix-blend-screen">
                    SONIC<br/>REMAINS
                </h1>
            </div>

            {/* Middle Layer: Ambient Light */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] bg-[#5d79ae] rounded-full blur-[150px] opacity-15 mix-blend-screen" />
                <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#de9b35] rounded-full blur-[150px] opacity-10 mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
            </div>

            {/* Front Layer: "COUNTER STRIKE" Impact Text */}
            <div className="relative z-20 text-center flex flex-col items-center max-w-[90vw]">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 mb-2 md:mb-6"
                >
                    <div className="h-[1px] w-12 bg-[#de9b35]" />
                    <span className="font-tech text-[#de9b35] uppercase tracking-[0.3em] text-xs">Project Archive 2025</span>
                    <div className="h-[1px] w-12 bg-[#de9b35]" />
                </motion.div>

                <div className="relative">
                    {/* Hard Shadow Layer for Visibility */}
                    <h2 className="absolute top-2 left-2 font-display font-black text-[12vw] md:text-[13vw] leading-[0.8] tracking-tighter text-black opacity-80 pointer-events-none select-none" aria-hidden="true">
                        COUNTER<br/>STRIKE
                    </h2>

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
                    className="mt-12 md:mt-16"
                >
                    <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed text-center px-4">
                        An auditory excavation of <span className="text-[#5d79ae] font-medium">shoutcasting monuments</span> and <span className="text-[#de9b35] font-medium">virtual graffiti</span>.
                    </p>
                    
                    {/* Arrow Down Indicator */}
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-20 flex flex-col items-center gap-3 text-neutral-500"
                    >
                        <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-white/60">Explore Archive</span>
                        <ArrowDown className="w-5 h-5 text-[#de9b35]" />
                    </motion.div>
                </motion.div>
            </div>
         </motion.div>
      </div>

      {/* === MANIFESTO SECTION === */}
      {/* Positioned absolutely/fixed initially, then scrolls naturally? 
          No, let's keep it simple: We scroll, and via transform we fade it in over the fixed hero.
      */}
      <div className="relative z-10 w-full pointer-events-none">
          {/* Spacer to push content down */}
          <div className="h-[100vh]" />
          
          <motion.div 
            id="manifesto"
            style={{ 
                opacity: manifestoOpacity,
                y: manifestoY
            }}
            className="pointer-events-auto bg-[#050507]" // Ensure background is solid to cover hero if needed, or keep transparent for blend
          >
              <ManifestoSection1 />
          </motion.div>
      </div>

    </main>
  );
}
