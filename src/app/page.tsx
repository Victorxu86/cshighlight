'use client';

import Link from 'next/link';
import { ArrowRight, ArrowDown, Globe, AudioWaveform, PlayCircle, Radio } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlitchText from '@/components/GlitchText';
import MagneticButton from '@/components/MagneticButton';
import { cn } from '@/lib/utils';

// Animation Variants for Staggered Reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#030304]">
      
      {/* --- HERO SECTION: THE VOID --- */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150 brightness-100 mix-blend-overlay pointer-events-none" />
        
        {/* Ambient Light */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none animate-pulse duration-[10000ms]" />
        
        <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 px-6 md:px-12 max-w-[1600px] mx-auto w-full"
        >
             {/* Top Meta */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center gap-4 mb-12"
             >
                <div className="w-12 h-[1px] bg-cyan-500" />
                <span className="font-mono text-xs text-cyan-500 uppercase tracking-[0.3em]">Sonic Archive No. 01</span>
             </motion.div>

             {/* Massive Title */}
             <div className="relative">
                <h1 className="text-[12vw] leading-[0.85] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#888] tracking-tighter mix-blend-exclusion">
                  <motion.span className="block" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>SONIC</motion.span>
                  <br />
                  <motion.span className="block" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>REMAINS</motion.span>
               </h1>
                
                {/* Glitch Overlay Text */}
                <div className="absolute top-0 left-1 mix-blend-overlay opacity-50 pointer-events-none select-none">
                    <GlitchText text="SONIC" className="block text-[12vw] leading-[0.85] font-serif font-black text-cyan-500 tracking-tighter" />
                </div>
             </div>

             {/* Bottom Controls */}
             <div className="mt-20 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
                <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 1 }}
                    className="text-neutral-400 max-w-md text-lg leading-relaxed font-light"
                >
                    A digital excavation of Counter-Strike esports history, exploring how shoutcasting and graffiti serve as mechanisms of collective memory.
                </motion.p>

                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: 1.2, type: "spring" }}
                >
                    <Link href="/highlights">
                        <MagneticButton className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group hover:bg-white hover:text-black transition-colors duration-500">
                            <ArrowDown className="w-6 h-6 animate-bounce" />
                        </MagneticButton>
                    </Link>
                </motion.div>
             </div>
        </motion.div>
      </section>


      {/* --- INTRO: ASYMMETRIC GRID --- */}
      <section className="relative py-32 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24"
            >
                {/* Left Col: Sticky Title */}
                <div className="md:col-span-4">
                    <div className="sticky top-32">
                        <motion.h2 variants={fadeInUp} className="text-6xl md:text-7xl font-serif text-white mb-8">
                            The <span className="text-cyan-500 italic">Echo</span> <br /> Chamber
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="hidden md:block w-full h-[1px] bg-gradient-to-r from-cyan-500 to-transparent my-8" />
                        <motion.div variants={fadeInUp} className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2">
                             Exhibit A
                        </motion.div>
                        <motion.p variants={fadeInUp} className="text-neutral-400">
                             When the caster shouts, the server remembers.
                        </motion.p>
                    </div>
                </div>

                {/* Right Col: Content Flow */}
                <div className="md:col-span-8 space-y-24">
                    {/* Text Block 1 */}
                    <motion.div variants={fadeInUp} className="prose prose-invert prose-lg">
                        <p className="text-2xl leading-normal font-light text-neutral-200">
                            In the high-octane world of esports, the "highlight" is the primary unit of currency. But visual fidelity is only half the story.
                        </p>
                        <p className="text-xl text-neutral-500 mt-6">
                            This project argues that the <span className="text-cyan-400">auditory texture</span> of a play—the specific timbre of a shoutcaster's scream—is what truly encodes the moment into history.
                        </p>
                    </motion.div>

                    {/* Visual Block */}
                    <motion.div variants={fadeInUp} className="relative aspect-video rounded-sm overflow-hidden border border-white/10 bg-[#111] group">
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                             <AudioWaveform className="w-24 h-24 text-neutral-700 group-hover:text-cyan-500 transition-colors duration-500" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                             <span className="font-mono text-xs text-white uppercase tracking-widest">Fig 1.1: Waveform Analysis</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
      </section>


      {/* --- BENTO GRID: NAVIGATION --- */}
      <section className="py-32 px-6 bg-[#030304]">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">Exhibition Modules</h3>
                <div className="text-xs text-neutral-600">Select a pathway</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                
                {/* Module 1: Highlights (Tall) */}
                <Link href="/highlights" className="md:col-span-1 h-[400px] md:h-full group">
                    <div className="h-full w-full p-8 rounded-2xl border border-white/10 bg-[#080808] hover:bg-[#0a0a0a] transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                         {/* Hover Gradient */}
                         <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                         
                         <div className="relative z-10">
                             <PlayCircle className="w-12 h-12 text-white mb-6 font-thin stroke-1" />
                             <h4 className="text-3xl font-serif text-white">The Gallery</h4>
                         </div>
                         
                         <div className="relative z-10">
                             <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                 Browse the curated collection of sonic artifacts and virtual graffiti.
                             </p>
                             <div className="flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                 <span>Enter</span> <ArrowRight className="w-3 h-3" />
                             </div>
                         </div>
                    </div>
                </Link>

                {/* Right Column Stack */}
                <div className="md:col-span-2 flex flex-col gap-6 h-full">
                    
                    {/* Module 2: Analysis (Wide) */}
                    <Link href="/analysis" className="flex-1 group">
                        <div className="h-full w-full p-8 rounded-2xl border border-white/10 bg-[#080808] hover:bg-[#0a0a0a] transition-all duration-500 relative overflow-hidden flex items-center justify-between">
                            <div className="relative z-10 max-w-md">
                                <h4 className="text-3xl font-serif text-white mb-2">Theoretical Framework</h4>
                                <p className="text-sm text-neutral-400">Media archaeology, affective memory, and virtual monuments.</p>
                            </div>
                            <Globe className="w-20 h-20 text-neutral-800 group-hover:text-purple-500/50 transition-colors duration-700 rotate-12" />
                        </div>
                    </Link>

                    {/* Module 3: About (Wide) */}
                    <Link href="/about" className="flex-1 group">
                        <div className="h-full w-full p-8 rounded-2xl border border-white/10 bg-[#080808] hover:bg-[#0a0a0a] transition-all duration-500 relative overflow-hidden flex items-center justify-between">
                            <div className="relative z-10 max-w-md">
                                <h4 className="text-3xl font-serif text-white mb-2">Project Manifesto</h4>
                                <p className="text-sm text-neutral-400">About the curator and the NYU Sonic Remains course.</p>
                            </div>
                            <Radio className="w-20 h-20 text-neutral-800 group-hover:text-white/20 transition-colors duration-700" />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
      </section>

    </div>
  );
}



