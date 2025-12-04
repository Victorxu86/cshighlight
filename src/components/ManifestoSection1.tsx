'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- SVG Visual Components ---

const ReticleSVG = () => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className="w-full h-full opacity-30"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="50" cy="50" r="48" stroke="#5d79ae" strokeWidth="0.5" fill="none" />
    <circle cx="50" cy="50" r="30" stroke="#5d79ae" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
    <line x1="50" y1="0" x2="50" y2="100" stroke="#5d79ae" strokeWidth="0.5" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="#5d79ae" strokeWidth="0.5" />
    <rect x="48" y="48" width="4" height="4" fill="#de9b35" />
  </motion.svg>
);

const GlobeWireframeSVG = () => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className="w-full h-full opacity-30"
  >
    <motion.circle 
        cx="50" cy="50" r="40" 
        stroke="#de9b35" strokeWidth="0.5" fill="none" 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
    />
    <motion.ellipse 
        cx="50" cy="50" rx="40" ry="15" 
        stroke="#de9b35" strokeWidth="0.5" fill="none" 
        animate={{ rotateX: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    <motion.ellipse 
        cx="50" cy="50" rx="15" ry="40" 
        stroke="#de9b35" strokeWidth="0.5" fill="none" 
        animate={{ rotateY: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
  </motion.svg>
);

const WaveformSVG = () => (
  <div className="flex items-end justify-center gap-1 w-full h-full opacity-40">
      {[...Array(12)].map((_, i) => (
          <motion.div 
            key={i}
            className="w-1 md:w-2 bg-[#7c3aed]"
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.1,
                repeatDelay: Math.random() * 0.5
            }}
          />
      ))}
  </div>
);

// --- Editorial Block Component ---

const EditorialBlock = ({
  number,
  title,
  subtitle,
  description,
  align = 'left',
  visual,
  offsetY = 0,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  align?: 'left' | 'right' | 'center';
  visual: React.ReactNode;
  offsetY?: any; // motion value
}) => {
    const isRight = align === 'right';
    const isCenter = align === 'center';

    return (
        <div className={cn(
            "relative w-full min-h-[70vh] flex items-center my-32 md:my-0",
            isRight ? "justify-end" : isCenter ? "justify-center" : "justify-start"
        )}>
            {/* Parallax Container */}
            <motion.div 
                style={{ y: offsetY }}
                className={cn(
                    "relative w-full md:w-[70%] lg:w-[60%] p-8 md:p-16 bg-black/20 backdrop-blur-sm border-t border-white/10",
                    isRight ? "md:mr-12 border-r border-white/5" : isCenter ? "border-x border-white/5" : "md:ml-12 border-l border-white/5"
                )}
            >
                 {/* Background Visual (Absolute) */}
                 <div className="absolute right-0 top-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] -z-10 pointer-events-none overflow-hidden">
                    {visual}
                 </div>

                 {/* Editorial Layout */}
                 <div className="relative z-10">
                    <div className="flex items-baseline gap-4 mb-6 border-b border-white/10 pb-6">
                        <span className="font-display font-bold text-6xl md:text-9xl text-transparent text-stroke opacity-30">
                            {number}
                        </span>
                        <span className="font-tech text-[#de9b35] uppercase tracking-[0.3em] text-sm md:text-base">
                            {subtitle}
                        </span>
                    </div>

                    <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-white uppercase tracking-tighter mix-blend-difference">
                        {title}
                    </h2>

                    <div className={cn("flex", isRight ? "justify-start" : "justify-end")}>
                         <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed text-justify border-l-2 border-[#5d79ae] pl-6">
                            {description}
                         </p>
                    </div>
                 </div>

                 {/* Decorative Marks */}
                 <div className="absolute top-4 left-4 w-2 h-2 border-l border-t border-white/50" />
                 <div className="absolute top-4 right-4 w-2 h-2 border-r border-t border-white/50" />
                 <div className="absolute bottom-4 left-4 w-2 h-2 border-l border-b border-white/50" />
                 <div className="absolute bottom-4 right-4 w-2 h-2 border-r border-b border-white/50" />
            </motion.div>
        </div>
    );
}


export default function ManifestoSection1() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax Offsets for each block
  const y1 = useTransform(smoothProgress, [0, 1], [100, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [200, -200]);
  const y3 = useTransform(smoothProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050507] pt-40 pb-40 overflow-hidden">
      
      {/* Background Grid/Noise */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title - Vertical on Left? Or just Huge? */}
        <motion.div 
            style={{ x: useTransform(smoothProgress, [0, 1], [-100, 100]) }}
            className="absolute top-20 left-0 text-[20vw] font-display font-black text-[#101012] whitespace-nowrap select-none -z-10 leading-none"
        >
            MANIFESTO ARCHIVE
        </motion.div>

        <div className="flex flex-col gap-0 md:gap-32">
            
            {/* BLOCK 1: MECHANIC */}
            <EditorialBlock 
                number="01"
                subtitle="The Mechanic"
                title="Defined By Precision"
                description="Counter-Strike is high-speed chess with ballistics. It is the purest distillation of the FPS genre—where economy management meets pixel-perfect precision, and every corner checked is a gamble with life."
                align="left"
                offsetY={y1}
                visual={<ReticleSVG />}
            />

            {/* BLOCK 2: PHENOMENON */}
            <EditorialBlock 
                number="02"
                subtitle="The Phenomenon"
                title="Global Warfare"
                description="From dark LAN cafes to sold-out arenas. The CS ecosystem is a decentralized coliseum. It is a sport that has survived every trend, powered solely by its unforgivingly high skill ceiling."
                align="right"
                offsetY={y2}
                visual={<GlobeWireframeSVG />}
            />

            {/* BLOCK 3: NARRATIVE */}
            <EditorialBlock 
                number="03"
                subtitle="The Narrative"
                title="The Voice of God"
                description="In the chaos of smoke grenades, the Caster translates visual noise into narrative gold. A great frag is skill; a great frag with a legendary call is history. We are here to honor that voice."
                align="center"
                offsetY={y3}
                visual={<WaveformSVG />}
            />

        </div>
      </div>
    </section>
  );
}
