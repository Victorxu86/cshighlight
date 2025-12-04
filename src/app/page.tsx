'use client';

import Link from 'next/link';
import { ArrowRight, ArrowDown, Globe, AudioWaveform } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlitchText from '@/components/GlitchText';
import MagneticButton from '@/components/MagneticButton';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#050505]">
      
      {/* Section 1: The Immersive Hero */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Kinetic Typography Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 select-none overflow-hidden flex flex-col justify-between py-20">
            <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap animate-marquee-slow">
                SONIC REMAINS SONIC REMAINS SONIC REMAINS
            </div>
            <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap animate-marquee-reverse-slow self-end">
                COUNTER STRIKE COUNTER STRIKE COUNTER STRIKE
            </div>
        </div>

        <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6"
             >
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono uppercase tracking-widest text-cyan-400">
                    Digital Exhibition • 2025
                </div>
                
                <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-[0.9] tracking-tighter">
                    <span className="block">THE VOICE</span>
                    <span className="block italic font-light text-neutral-500">IN THE</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">MACHINE</span>
                </h1>
             </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute right-[10%] top-[20%] z-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"
        />

        <div className="absolute bottom-10 flex flex-col items-center gap-4 z-10">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Scroll to Initialize</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowDown className="w-5 h-5 text-white" />
            </motion.div>
        </div>
      </section>

      {/* Section 2: The Manifesto (Bento Grid Style) */}
      <section className="relative py-32 px-6 min-h-screen bg-[#080808]">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">The Archive</h2>
                <div className="h-1 w-20 bg-cyan-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                {/* Card 1: Main Intro - Large */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-8 row-span-2 rounded-3xl p-10 border border-white/10 bg-neutral-900/50 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <Globe className="w-12 h-12 text-white mb-4" />
                        <div>
                            <h3 className="text-4xl font-bold mb-4">Sonic Archaeology</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                                We explore how the fleeting shouts of esports commentators become permanent digital monuments. Through the lens of <span className="text-white">Counter-Strike</span>, we examine sound as a mechanism for collective memory.
                            </p>
                        </div>
                        <Link href="/about">
                            <MagneticButton className="mt-8 w-fit px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wide hover:bg-cyan-400 transition-colors">
                                Read Manifesto
                            </MagneticButton>
                        </Link>
                    </div>
                </motion.div>

                {/* Card 2: Stats / Data */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1 md:col-span-4 row-span-1 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                    <div className="text-6xl font-mono font-bold text-cyan-400 mb-2">25+</div>
                    <div className="text-sm font-mono uppercase tracking-widest text-neutral-500">Iconic Moments Archived</div>
                </motion.div>

                {/* Card 3: Highlights Link */}
                <Link href="/highlights" className="col-span-1 md:col-span-4 row-span-2 group">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full w-full rounded-3xl p-8 border border-white/10 bg-neutral-900/50 relative overflow-hidden transition-colors hover:bg-neutral-800"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-8 h-8 -rotate-45" />
                        </div>
                        <div className="h-full flex flex-col justify-end">
                            <AudioWaveform className="w-12 h-12 text-cyan-500 mb-6" />
                            <h3 className="text-3xl font-bold">The Highlights</h3>
                            <p className="text-neutral-400 mt-2">Listen to the echoes.</p>
                        </div>
                    </motion.div>
                </Link>

                {/* Card 4: Analysis Link */}
                <Link href="/analysis" className="col-span-1 md:col-span-8 row-span-1 group">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-full w-full rounded-3xl p-8 border border-white/10 bg-neutral-900/50 flex items-center justify-between transition-colors hover:bg-neutral-800"
                    >
                        <div>
                            <h3 className="text-2xl font-bold">Theoretical Analysis</h3>
                            <p className="text-neutral-400">Understand the framework.</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>
                </Link>
            </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="py-40 flex flex-col items-center justify-center bg-black text-center">
            <GlitchText text="ENTER THE EXHIBITION" as="h2" className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter" />
            <Link href="/highlights">
                <MagneticButton className="px-12 py-6 rounded-full bg-cyan-500 text-black text-xl font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300">
                    Start Exploring
                </MagneticButton>
            </Link>
      </section>
    </div>
  );
}
