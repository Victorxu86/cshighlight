'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative bg-[#050505] min-h-screen">
      
      {/* === SECTION 1: THE STATEMENT (HERO) === */}
      <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        
        {/* Background - Abstract Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
             <span className="text-[40vw] font-black font-serif leading-none">SONIC</span>
        </div>

        <motion.div style={{ y }} className="relative z-10 max-w-[90vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] md:text-[11vw] leading-[0.85] font-serif font-medium tracking-tighter text-white mix-blend-exclusion">
              THE <span className="italic font-light opacity-70">SOUND</span> <br />
              OF MEMORY
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6"
          >
            <div className="max-w-md">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                A digital exhibition exploring how the ephemeral shouts of Counter-Strike commentary become permanent artifacts of culture.
              </p>
            </div>
            
            <div className="mt-8 md:mt-0">
               <Link href="/highlights" className="group flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                  <span className="font-mono text-sm uppercase tracking-widest opacity-60 group-hover:opacity-100">Enter Archive</span>
               </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* === SECTION 2: THE INDEX (MINIMAL LIST) === */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest sticky top-32">01 — Exhibits</span>
                </div>
                <div className="md:col-span-8 flex flex-col gap-px bg-white/10">
                    {/* Item 1 */}
                    <Link href="/highlights" className="group relative bg-[#050505] p-12 hover:bg-[#080808] transition-colors duration-500">
                         <div className="flex justify-between items-baseline">
                             <h3 className="text-4xl md:text-6xl font-serif text-white group-hover:italic transition-all duration-500">Highlights</h3>
                             <span className="font-mono text-xs text-neutral-500">25 Items</span>
                         </div>
                         <p className="mt-4 text-neutral-500 max-w-md group-hover:text-neutral-300 transition-colors">
                            The core collection. Shoutcasting moments that redefined the map.
                         </p>
                         <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <ArrowRight className="w-6 h-6 text-white" />
                         </div>
                    </Link>
                    
                    {/* Item 2 */}
                    <Link href="/analysis" className="group relative bg-[#050505] p-12 hover:bg-[#080808] transition-colors duration-500">
                         <div className="flex justify-between items-baseline">
                             <h3 className="text-4xl md:text-6xl font-serif text-white group-hover:italic transition-all duration-500">Analysis</h3>
                             <span className="font-mono text-xs text-neutral-500">Research</span>
                         </div>
                         <p className="mt-4 text-neutral-500 max-w-md group-hover:text-neutral-300 transition-colors">
                            Theoretical framework. Media archaeology and sonic memory.
                         </p>
                         <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <ArrowRight className="w-6 h-6 text-white" />
                         </div>
                    </Link>

                    {/* Item 3 */}
                    <Link href="/about" className="group relative bg-[#050505] p-12 hover:bg-[#080808] transition-colors duration-500">
                         <div className="flex justify-between items-baseline">
                             <h3 className="text-4xl md:text-6xl font-serif text-white group-hover:italic transition-all duration-500">Manifesto</h3>
                             <span className="font-mono text-xs text-neutral-500">Project</span>
                         </div>
                         <p className="mt-4 text-neutral-500 max-w-md group-hover:text-neutral-300 transition-colors">
                            About the curator and the NYU Sonic Remains course.
                         </p>
                         <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <ArrowRight className="w-6 h-6 text-white" />
                         </div>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* === SECTION 3: FEATURED IMAGE (PARALLAX) === */}
      <section className="h-[80vh] w-full relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-neutral-900">
               {/* Placeholder for a high-res map texture */}
               <div className="w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-12 md:p-24">
               <span className="block font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">Featured Case Study</span>
               <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 max-w-4xl leading-none">
                   The <span className="italic">Burning</span> Defuse
               </h2>
               <Link href="/highlights/olofmeister-burning-defuse" className="inline-block px-8 py-4 border border-white/30 text-sm font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                   View Case Study
               </Link>
          </div>
      </section>

    </div>
  );
}
