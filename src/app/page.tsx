'use client';

import Link from 'next/link';
import { ArrowRight, Globe, AudioWaveform, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/MagneticButton';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#020203]">
      
      {/* === HERO: IMMERSIVE VOID === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Dynamic Background Orbs - No Lines */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[150px] animate-pulse-glow" />
             <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[180px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
         </div>

         <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative z-10 text-center px-6"
         >
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
             >
                 <div className="mb-8 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/5 text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">
                     NYU Sonic Remains Project
                 </div>

                 <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-serif font-black text-white tracking-tighter glow-text mix-blend-overlay opacity-90">
                     SONIC<br/>ARCHIVE
                 </h1>
                 
                 <p className="mt-12 text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
                     An excavation of <span className="text-white border-b border-cyan-500/50 pb-1">Counter-Strike</span> history through shoutcasting, memory, and virtual monuments.
                 </p>

                 <div className="mt-16">
                     <Link href="/highlights">
                        <MagneticButton className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            <ArrowDown className="w-6 h-6" />
                        </MagneticButton>
                     </Link>
                 </div>
             </motion.div>
         </motion.div>
      </section>

      {/* === ASYMMETRIC CONTENT SECTION === */}
      <section className="relative py-40 px-6 md:px-12 max-w-[1800px] mx-auto z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              
              {/* Left Column: Sticky Text */}
              <div className="lg:col-span-5">
                  <div className="sticky top-32 space-y-12">
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                          <h2 className="text-6xl font-serif text-white mb-6">The <span className="text-cyan-400 italic">Voice</span> as Artifact</h2>
                          <p className="text-neutral-400 text-lg leading-relaxed">
                              Esports commentary is ephemeral by nature. Yet, certain shouts transcend the moment, becoming permanent sonic scars on the digital landscape.
                          </p>
                      </motion.div>

                      <div className="flex gap-4">
                          <Link href="/analysis" className="group flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-white">
                              <span className="w-8 h-[1px] bg-cyan-500 group-hover:w-12 transition-all" />
                              Read Theory
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Right Column: Visual Modules (Asymmetric) */}
              <div className="lg:col-span-7 flex flex-col gap-32 mt-20 lg:mt-0">
                  
                  {/* Module 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent rounded-sm overflow-hidden group"
                  >
                      <div className="absolute inset-0 flex items-center justify-center">
                          <AudioWaveform className="w-40 h-40 text-white/5 group-hover:text-cyan-500/20 transition-colors duration-700 scale-150" />
                      </div>
                      <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="text-3xl font-serif text-white mb-2">Spectrogram Analysis</h3>
                          <p className="text-sm text-neutral-500 font-mono uppercase tracking-widest">Fig 1.0 — The Scream</p>
                      </div>
                  </motion.div>

                  {/* Module 2 (Offset) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-square w-3/4 self-end bg-gradient-to-tl from-indigo-900/20 to-transparent rounded-full blur-sm hover:blur-0 transition-all duration-700 border border-white/5 flex items-center justify-center group"
                  >
                      <Globe className="w-24 h-24 text-white/20 group-hover:text-white/80 transition-colors" />
                      <div className="absolute -bottom-12 text-center">
                          <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em]">Global Impact</span>
                      </div>
                  </motion.div>

              </div>
          </div>
      </section>

      {/* === NAVIGATION TILES (No Grid Lines) === */}
      <section className="py-40 px-6 bg-[#020203]">
          <div className="max-w-7xl mx-auto text-center mb-24">
              <h2 className="text-4xl font-serif text-white">Explore the Archive</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <Link href="/highlights" className="group relative aspect-video bg-neutral-900/20 overflow-hidden rounded-xl transition-transform hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <h3 className="text-5xl font-serif italic text-white mb-4 group-hover:text-cyan-200 transition-colors">Highlights</h3>
                      <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                          <span>Enter Gallery</span> <ArrowRight className="w-4 h-4" />
                      </div>
                  </div>
              </Link>

              <Link href="/analysis" className="group relative aspect-video bg-neutral-900/20 overflow-hidden rounded-xl transition-transform hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <h3 className="text-5xl font-serif italic text-white mb-4 group-hover:text-purple-200 transition-colors">Analysis</h3>
                      <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                          <span>Read Papers</span> <ArrowRight className="w-4 h-4" />
                      </div>
                  </div>
              </Link>

          </div>
      </section>

    </div>
  );
}
