'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Globe, Mic, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

// --- Data ---
const cards = [
  {
    id: 'mechanic',
    title: "Defined By Precision",
    subtitle: "The Mechanic",
    description: "Counter-Strike is high-speed chess with ballistics. It is the purest distillation of the FPS genre—where economy management meets pixel-perfect precision.",
    icon: Target,
    color: "#7c3aed", // Purple
    image: "/mechanic.jpg" 
  },
  {
    id: 'phenomenon',
    title: "Global Warfare",
    subtitle: "The Phenomenon",
    description: "From dark LAN cafes to sold-out arenas. The CS ecosystem is a decentralized coliseum that has survived every trend.",
    icon: Globe,
    color: "#de9b35", // Yellow
    image: "/arena.jpg"
  },
  {
    id: 'narrative',
    title: "The Voice of God",
    subtitle: "The Narrative",
    description: "In the chaos of smoke grenades, the Caster translates visual noise into narrative gold. A great frag with a legendary call is history.",
    icon: Mic,
    color: "#5d79ae", // Blue
    image: "/caster.jpg"
  }
];

export default function ManifestoSection1() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card (Phenomenon)
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Helper to cycle indices safely
  const getIndex = (index: number) => {
    const len = cards.length;
    return ((index % len) + len) % len;
  };

  const handleNext = () => setActiveIndex((prev) => getIndex(prev + 1));
  const handlePrev = () => setActiveIndex((prev) => getIndex(prev - 1));

  // Determine position relative to active
  const getPosition = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === getIndex(activeIndex - 1)) return 'left';
    if (index === getIndex(activeIndex + 1)) return 'right';
    return 'hidden';
  };

  const variants = {
    center: { 
      x: "0%", 
      scale: 1, 
      opacity: 1, 
      zIndex: 20,
      filter: "blur(0px) brightness(1)",
      rotateY: 0
    },
    left: { 
      x: "-60%", 
      scale: 0.85, 
      opacity: 0.6, 
      zIndex: 10,
      filter: "blur(2px) brightness(0.5)",
      rotateY: 30 
    },
    right: { 
      x: "60%", 
      scale: 0.85, 
      opacity: 0.6, 
      zIndex: 10,
      filter: "blur(2px) brightness(0.5)",
      rotateY: -30
    },
    hidden: { opacity: 0, scale: 0.5, zIndex: 0 }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050507] pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
            style={{ y: yBackground }} 
            className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#5d79ae]/5 rounded-full blur-[150px] mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      </div>

      {/* --- Header --- */}
      <div className="relative z-30 text-center mb-12 md:mb-20 px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <span className="font-tech text-[#de9b35] uppercase tracking-[0.5em] text-xs md:text-sm block mb-4">
                 Archive Collection
             </span>
          </motion.div>
            </div>

      {/* --- Carousel Container --- */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[500px] md:h-[600px] flex items-center justify-center perspective-[1000px]">
          
          {/* Navigation Buttons (Desktop) */}
          <button onClick={handlePrev} className="absolute left-4 md:left-8 z-50 p-5 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-lg border border-white/20 transition-all duration-300 group hidden md:flex items-center justify-center hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <ChevronLeft className="w-8 h-8 text-white/70 group-hover:text-white" />
          </button>
          <button onClick={handleNext} className="absolute right-4 md:right-8 z-50 p-5 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-lg border border-white/20 transition-all duration-300 group hidden md:flex items-center justify-center hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <ChevronRight className="w-8 h-8 text-white/70 group-hover:text-white" />
          </button>

          {/* Cards */}
          {cards.map((card, index) => {
            const position = getPosition(index);
            const isActive = position === 'center';
            
            return (
              <motion.div
                key={card.id}
                initial="center"
                animate={position}
                variants={variants}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className="absolute w-[85vw] md:w-[65vw] lg:w-[55vw] h-[60vh] md:h-[550px] rounded-[2rem] cursor-pointer"
                onClick={() => {
                    if (position === 'left') handlePrev();
                    if (position === 'right') handleNext();
                }}
                style={{
                    perspective: 1500,
                    transformStyle: "preserve-3d"
                }}
              >
                {/* --- FULL CARD BORDER & GLOW --- */}
                <div 
                    className="absolute inset-0 rounded-[2rem] pointer-events-none z-[60] transition-all duration-500"
                    style={{
                        border: isActive ? `4px solid ${card.color}` : '1px solid rgba(255,255,255,0.1)',
                        boxShadow: isActive 
                            ? `0 0 50px ${card.color}, inset 0 0 50px ${card.color}40` 
                            : 'none'
                    }}
                />

                {/* --- INNER CONTENT --- */}
                <div className="relative w-full h-full bg-[#0a0a0c] group overflow-hidden rounded-[2rem] z-0">
                    
                    {/* Image Background */}
                    <div className="absolute inset-0 z-0">
                        <Image 
                          src={card.image} 
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 65vw, 55vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 1}
                        />
                        {/* Gradient Overlay - Reduced opacity to ensure image visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent opacity-60" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start z-10">
                        
                        {/* Icon Badge */}
                        <div 
                            className="mb-6 p-3 rounded-lg backdrop-blur-md border transition-colors duration-500"
                            style={{
                                backgroundColor: isActive ? `${card.color}20` : 'rgba(255,255,255,0.05)',
                                borderColor: isActive ? `${card.color}40` : 'rgba(255,255,255,0.1)'
                            }}
                        >
                            <card.icon 
                                className="w-6 h-6 md:w-8 md:h-8 transition-colors duration-500" 
                                style={{ color: isActive ? card.color : 'rgba(255,255,255,0.5)' }}
                            />
                        </div>

                        {/* Text */}
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <span 
                                    className="font-tech uppercase tracking-[0.2em] text-xs md:text-sm font-bold"
                                    style={{ color: isActive ? card.color : '#9ca3af' }}
                                >
                                    {card.subtitle}
                                </span>
                                <div className="h-[1px] w-12 bg-white/20" />
                            </div>
                            
                            <h3 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 leading-[0.9]">
                                {card.title}
                            </h3>
                            
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                                className="font-sans text-neutral-400 text-sm md:text-lg leading-relaxed overflow-hidden"
                            >
                                {card.description}
                            </motion.p>
                        </div>

                    </div>

                    {/* Active State Decorations */}
                    {isActive && (
                        <>
                            {/* Corner Number */}
                            <div className="absolute top-6 right-6 font-display text-6xl font-bold opacity-10 select-none text-white z-20">
                                0{index + 1}
                            </div>
                            {/* Scanline/Noise overlay */}
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay pointer-events-none z-20" />
                        </>
                    )}

                </div>
              </motion.div>
            );
          })}

      </div>

      {/* --- Mobile Indicators --- */}
      <div className="flex justify-center gap-3 mt-8 md:hidden">
        {cards.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-[#de9b35]' : 'bg-white/20'
                }`}
            />
        ))}
      </div>

    </section>
  );
}
