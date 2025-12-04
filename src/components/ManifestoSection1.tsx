'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Globe, Mic } from 'lucide-react';

const ManifestoCard = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  index 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  icon: any;
  index: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative h-full"
    >
      {/* Card Container */}
      <div className="h-full relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-white/[0.1]">
        
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Dynamic Gradient Blob on Hover */}
        <div className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-[#7c3aed]/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Content Wrapper */}
        <div className="relative h-full p-8 md:p-10 flex flex-col">
          
          {/* Icon Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:border-[#de9b35]/30 transition-colors duration-500">
              <Icon className="w-8 h-8 text-white group-hover:text-[#de9b35] transition-colors duration-300" />
            </div>
            <span className="font-display text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
              0{index + 1}
            </span>
          </div>

          {/* Text Content */}
          <div className="mt-auto">
            <span className="inline-block font-tech text-[#5d79ae] uppercase tracking-[0.2em] text-xs mb-4 border-l-2 border-[#5d79ae] pl-3">
              {subtitle}
            </span>
            
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-none uppercase group-hover:text-[#de9b35] transition-colors duration-300">
              {title}
            </h3>
            
            <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed border-t border-white/10 pt-6 group-hover:border-white/20 transition-colors duration-500">
              {description}
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default function ManifestoSection1() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050507] py-24 md:py-32 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5d79ae]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32 text-center relative">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <span className="font-tech text-[#de9b35] uppercase tracking-[0.5em] text-xs md:text-sm block mb-6">
                  Mission Archive
              </span>
              <h2 className="font-display font-black text-5xl md:text-8xl text-white tracking-tighter uppercase">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Protocol</span>
              </h2>
           </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto md:min-h-[600px]">
          
          <ManifestoCard 
            index={0}
            icon={Target}
            subtitle="The Mechanic"
            title="Defined By Precision"
            description="Counter-Strike is high-speed chess with ballistics. It is the purest distillation of the FPS genre—where economy management meets pixel-perfect precision, and every corner checked is a gamble with life."
          />

          <ManifestoCard 
            index={1}
            icon={Globe}
            subtitle="The Phenomenon"
            title="Global Warfare"
            description="From dark LAN cafes to sold-out arenas. The CS ecosystem is a decentralized coliseum. It is a sport that has survived every trend, powered solely by its unforgivingly high skill ceiling."
          />

          <ManifestoCard 
            index={2}
            icon={Mic}
            subtitle="The Narrative"
            title="The Voice of God"
            description="In the chaos of smoke grenades, the Caster translates visual noise into narrative gold. A great frag is skill; a great frag with a legendary call is history. We are here to honor that voice."
          />

        </div>
      </div>
    </section>
  );
}
