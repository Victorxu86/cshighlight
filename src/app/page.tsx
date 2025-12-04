'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Radio, Disc } from 'lucide-react';
import { motion } from 'framer-motion';
import GlitchText from '@/components/GlitchText';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(5,5,9,0)_0%,rgba(5,5,9,1)_100%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
             <p className="mb-6 font-mono text-cyan-500 tracking-widest text-sm uppercase">
               NYU Sonic Remains Project
             </p>
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
               <span className="block">SONIC</span>
               <GlitchText text="REMAINS" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" />
             </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            The echoes of <span className="text-white font-medium">Counter-Strike</span> history.
            <br />
            Where shoutcasting meets digital graffiti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/highlights"
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden transition-all hover:bg-cyan-400"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enter Exhibition <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10" 
        />
        <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10" 
        />
      </section>

      {/* Feature Cards Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "The Sound", icon: Radio, desc: "Shoutcasting as an affective memory trigger.", href: "/analysis#affective-memory" },
                { title: "The Artifact", icon: Disc, desc: "Graffiti as virtual monuments.", href: "/analysis#virtual-monuments" },
                { title: "The Echo", icon: Zap, desc: "How community remakes the moment.", href: "/highlights" }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="group p-8 border border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm"
                >
                    <item.icon className="w-10 h-10 text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 mb-6">{item.desc}</p>
                    <Link href={item.href} className="text-sm font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        Explore <ArrowRight className="w-3 h-3" />
                    </Link>
                </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}
