'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, PlayCircle, Globe, Fingerprint } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  
  // Mouse Parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
        setMousePosition({ 
            x: (e.clientX / window.innerWidth - 0.5) * 20, 
            y: (e.clientY / window.innerHeight - 0.5) * 20 
        });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  // Scroll Animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#020204] overflow-hidden perspective-container">
      
      {/* === GLOBAL EFFECTS === */}
      <div className="vignette" />
      <div className="grain" />

      {/* === HERO SECTION: THE IMMERSIVE SPACE === */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
             {/* Animated Grid Floor */}
             <div className="absolute bottom-[-50%] left-[-50%] w-[200%] h-[100%] bg-[linear-gradient(transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] opacity-30 transform rotate-x-[60deg]" 
                  style={{ backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, .3) 25%, rgba(59, 130, 246, .3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .3) 75%, rgba(59, 130, 246, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, .3) 25%, rgba(59, 130, 246, .3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .3) 75%, rgba(59, 130, 246, .3) 76%, transparent 77%, transparent)' }}
             />
             
             {/* Floating Orbs */}
             <motion.div 
                animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen"
             />
             <motion.div 
                animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"
             />
        </div>

        {/* Hero Content */}
        <motion.div 
            style={{ y: textY, opacity, x: mousePosition.x, rotateX: -mousePosition.y * 0.05, rotateY: mousePosition.x * 0.05 }}
            className="relative z-20 text-center px-4 max-w-7xl mx-auto"
        >
            {/* Top Tag */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md mb-12"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-mono text-blue-300 uppercase tracking-[0.2em]">Live Archive V1.0</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-[10vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-8 relative drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                <motion.span 
                    initial={{ y: 100, opacity: 0, filter: 'blur(20px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                >
                    SONIC
                </motion.span>
                <motion.span 
                    initial={{ y: 100, opacity: 0, filter: 'blur(20px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-stroke-thin text-glow"
                >
                    REMAINS
                </motion.span>
            </h1>

            {/* Description & CTA */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col items-center gap-8"
            >
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    An immersive excavation of <span className="text-white font-medium">Counter-Strike</span> history. 
                    <br className="hidden md:block"/>
                    Where shoutcasting shouts become eternal digital monuments.
                </p>
                
                <div className="flex gap-6 mt-4">
                    <Link href="/highlights">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Enter Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="px-8 py-4 border border-white/10 bg-white/5 text-white font-medium uppercase tracking-widest rounded-lg hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
                            Manifesto
                        </button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" />
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Scroll to Explore</span>
        </motion.div>
      </section>


      {/* === SECTION 2: THE INTRODUCTION (SCROLL REVEAL) === */}
      <section className="relative py-32 px-6 z-20 bg-[#020204]">
          <div className="max-w-7xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  {/* Visual */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group"
                  >
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                      
                      {/* Holographic Circle */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse]" />
                      
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                          <Fingerprint className="w-32 h-32 text-blue-500/50 group-hover:text-white/80 transition-colors duration-500" />
                      </div>
                  </motion.div>

                  {/* Text */}
                  <div className="space-y-10">
                      <motion.h2 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold leading-tight"
                      >
                          Echoes in the <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Void</span>.
                      </motion.h2>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg text-neutral-400 leading-relaxed"
                      >
                          <p>
                              Every great esports play leaves a trace. Not just in the match statistics, but in the collective memory of the audience.
                          </p>
                          <p>
                              This project investigates <span className="text-white">Sonic Remains</span> — the lingering resonance of a caster's scream, and how game developers immortalize these sounds through in-game graffiti.
                          </p>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 pt-4"
                      >
                          <div className="flex flex-col gap-1">
                              <span className="text-3xl font-bold text-white">03</span>
                              <span className="text-xs font-mono uppercase text-neutral-500">Core Exhibits</span>
                          </div>
                          <div className="w-px h-12 bg-white/10 mx-4" />
                          <div className="flex flex-col gap-1">
                              <span className="text-3xl font-bold text-white">∞</span>
                              <span className="text-xs font-mono uppercase text-neutral-500">Replays</span>
                          </div>
                      </motion.div>
                  </div>
              </div>

          </div>
      </section>


      {/* === NAVIGATION MODULES === */}
      <section className="py-32 bg-[#010102] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {[
                      { title: "The Highlights", icon: PlayCircle, path: "/highlights", desc: "Browse the sonic archive." },
                      { title: "Theoretical Analysis", icon: Globe, path: "/analysis", desc: "Read the research paper." },
                      { title: "Project Manifesto", icon: Fingerprint, path: "/about", desc: "Understand the mission." }
                  ].map((item, i) => (
                      <Link key={i} href={item.path} className="group relative p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <item.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-neutral-400 text-sm mb-6">{item.desc}</p>
                          
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors">
                              <span>Explore</span> <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                      </Link>
                  ))}

              </div>
          </div>
      </section>

    </div>
  );
}
