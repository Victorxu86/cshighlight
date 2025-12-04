'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Radio, Disc, ChevronsDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlitchText from '@/components/GlitchText';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        
        {/* Dynamic Background Layer */}
        <div className="absolute inset-0 -z-20 bg-[#030304]">
             {/* Grid */}
             <div className="absolute inset-0 opacity-20" 
                 style={{ 
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', 
                    backgroundSize: '100px 100px' 
                 }}>
             </div>
             {/* Radial Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px]" />
        </div>
        
        {/* Hero Content */}
        <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
              <div className="h-[1px] w-12 bg-cyan-500/50" />
              <p className="font-mono text-cyan-400 tracking-[0.3em] text-xs uppercase">
                Archive No. 2025-NYU
              </p>
              <div className="h-[1px] w-12 bg-cyan-500/50" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-white mb-6 leading-[0.85] mix-blend-screen">
             <span className="block text-slate-800/80 absolute top-2 left-2 select-none -z-10 blur-sm">SONIC</span>
             <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">SONIC</span>
             <div className="relative inline-block">
                <GlitchText text="REMAINS" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500" />
             </div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            An excavation of <span className="text-white font-medium border-b border-cyan-500/30">Counter-Strike</span> esports history through the lens of shoutcasting and digital graffiti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/highlights"
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-cyan-400 hover:scale-105"
            >
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
              <span className="relative flex items-center gap-2">
                Start Exhibition <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
              Read Manifesto
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
            <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
            <ChevronsDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-32 px-6 bg-[#050509] z-20">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-2xl rounded-full" />
                    <div className="relative aspect-square rounded-sm border border-white/10 bg-zinc-900/50 overflow-hidden">
                        {/* Abstract Visual Representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 border border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-1/2 h-1/2 border border-slate-600 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pulse-slow" />
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Echoes in the <br />
                        <span className="text-cyan-400">Digital Void</span>.
                    </h2>
                    <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                        <p>
                            In the split second of a "highlight play," the commentator's voice does more than describe—it inscribes. It burns the moment into the collective memory of the audience.
                        </p>
                        <p>
                            Sometimes, this memory is so potent that game developers intervene, placing permanent graffiti on the map at the exact coordinates of the event.
                        </p>
                        <p className="text-white font-medium">
                            This project treats these sounds and textures not as content, but as remains.
                        </p>
                    </div>
                    
                    <div className="mt-10 pt-10 border-t border-white/10 flex gap-12">
                        <div>
                            <div className="text-3xl font-mono font-bold text-white">03</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Case Studies</div>
                        </div>
                        <div>
                            <div className="text-3xl font-mono font-bold text-white">∞</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Replays</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-20">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500">Exhibit Sections</h3>
            <div className="hidden md:block text-xs text-slate-700">Select a module to investigate</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: "The Voice", icon: Radio, desc: "Shoutcasting as affective memory trigger.", href: "/analysis#affective-memory", color: "text-purple-400" },
                { title: "The Mark", icon: Disc, desc: "Graffiti as virtual monuments.", href: "/analysis#virtual-monuments", color: "text-cyan-400" },
                { title: "The Loop", icon: Zap, desc: "Community reproduction of the moment.", href: "/highlights", color: "text-white" }
            ].map((item, i) => (
                <Link key={i} href={item.href}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group relative h-80 p-8 border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <item.icon className={`w-12 h-12 ${item.color} mb-6 stroke-1`} />
                                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                            </div>
                            
                            <div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                                    <span>Access Data</span>
                                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
