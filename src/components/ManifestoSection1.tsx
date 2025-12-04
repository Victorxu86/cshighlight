'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Globe, Mic } from 'lucide-react';

const ManifestoItem = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  align = 'left',
  index
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  icon: any;
  align?: 'left' | 'right';
  index: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center gap-6 relative z-10 py-12 md:py-24`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#7c3aed] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
        <div className="relative p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden group-hover:border-[#de9b35]/50 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Icon className="w-12 h-12 text-white group-hover:text-[#de9b35] transition-colors duration-300" />
        </div>
      </div>
      
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
            {align === 'right' && <div className="h-[1px] w-12 bg-[#de9b35] hidden md:block" />}
            <span className="font-tech text-[#de9b35] uppercase tracking-[0.2em] text-sm">{subtitle}</span>
            {align === 'left' && <div className="h-[1px] w-12 bg-[#de9b35] hidden md:block" />}
        </div>
        
        <h3 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
          {title}
        </h3>
        
        <p className="font-sans text-neutral-400 text-lg leading-relaxed">
          {description}
        </p>
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050507] py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[120px] mix-blend-screen" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5d79ae]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative">
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-32"
        >
            <h2 className="font-display font-black text-[12vw] md:text-[8vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none absolute top-0 left-0 right-0 -z-10">
                MANIFESTO
            </h2>
            <div className="relative pt-20 md:pt-32">
                <span className="font-tech text-[#5d79ae] uppercase tracking-[0.3em] text-sm block mb-4">Phase I: The Foundation</span>
                <h2 className="font-display font-black text-5xl md:text-7xl text-white tracking-tight mb-6">
                    Precision. Strategy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#de9b35] to-[#d8b4fe]">Voice.</span>
                </h2>
                <p className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg">
                    Unpacking the layers of the world's most definitive tactical shooter.
                </p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-24 md:gap-32">
            <ManifestoItem 
                index={0}
                align="left"
                icon={Target}
                subtitle="The Mechanic"
                title="The Infinite Duel"
                description="Counter-Strike is not merely a game of reflexes; it is high-speed chess with ballistics. Two teams. Thirty rounds. A bomb timer ticking down the seconds to oblivion. It is the purest distillation of the FPS genre—where economy management meets pixel-perfect precision, and every corner checked is a gamble with life."
            />

            <ManifestoItem 
                index={1}
                align="right"
                icon={Globe}
                subtitle="The Phenomenon"
                title="Global Warfare"
                description="From dark LAN cafes in the early 2000s to sold-out arenas vibrating with the roar of twenty thousand fans. The CS ecosystem is a decentralized coliseum. Majors distribute millions in prize pools, but the currency that matters most is legacy. It is a sport that has survived every trend, powered solely by its unforgivingly high skill ceiling."
            />

            <ManifestoItem 
                index={2}
                align="left"
                icon={Mic}
                subtitle="The Narrative"
                title="The Caster's Role"
                description="In the chaos of smoke grenades and flashbangs, the Caster is the anchor. They translate visual noise into narrative gold. Their voices rise with the tension, immortalizing clutch moments that happen in split seconds. A great frag is skill; a great frag with a legendary call is history. We are here to honor that voice."
            />
        </div>
      </div>
    </section>
  );
}

