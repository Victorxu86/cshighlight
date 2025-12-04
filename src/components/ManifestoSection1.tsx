'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame } from 'framer-motion';
import { Target, Globe, Mic, Crosshair, Cpu, Signal } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  {
    id: '01',
    title: 'PRECISION',
    subtitle: 'THE MECHANIC',
    description: 'Counter-Strike is high-speed chess with ballistics. It is the purest distillation of the FPS genre—where economy management meets pixel-perfect precision.',
    icon: Target,
    techSpec: 'ACCURACY: 99.9%',
    color: '#de9b35'
  },
  {
    id: '02',
    title: 'WARFARE',
    subtitle: 'THE PHENOMENON',
    description: 'From dark LAN cafes to sold-out arenas. The CS ecosystem is a decentralized coliseum, powered solely by its unforgivingly high skill ceiling.',
    icon: Globe,
    techSpec: 'GLOBAL: ACTIVE',
    color: '#5d79ae'
  },
  {
    id: '03',
    title: 'VOICE',
    subtitle: 'THE NARRATIVE',
    description: 'In the chaos of smoke grenades, the Caster translates visual noise into narrative gold. A great frag is skill; a great frag with a legendary call is history.',
    icon: Mic,
    techSpec: 'SIGNAL: CLEAR',
    color: '#7c3aed'
  }
];

const GalleryItem = ({ item, index, x }: { item: any, index: number, x: any }) => {
  return (
    <motion.div 
      className="relative w-[85vw] md:w-[60vw] h-[70vh] flex-shrink-0 flex flex-col p-8 md:p-12 border-l border-white/10 first:border-l-0 overflow-hidden group"
    >
       {/* Animated Background Elements */}
       <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-transparent to-black/90" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + index * 5, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border border-dashed border-white/5 rounded-full" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30 + index * 5, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-[400px] h-[400px] border border-white/5 rounded-full" 
          />
       </div>

       {/* Dynamic Glowing Border (Top) */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

       {/* Header */}
       <div className="flex items-start justify-between relative z-10">
          <div className="flex flex-col">
             <span className="font-tech text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#de9b35] rounded-full animate-pulse" />
                {item.techSpec}
             </span>
             <h2 className="font-display font-black text-6xl md:text-8xl text-white leading-none tracking-tighter">
                {item.title}
             </h2>
          </div>
          <div className="text-white/10 font-display font-bold text-8xl absolute -top-6 right-0 select-none z-0">
             {item.id}
          </div>
       </div>

       {/* Central Visual Placeholder */}
       <div className="flex-1 flex items-center justify-center relative my-8 md:my-0">
           <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
               <item.icon className="w-32 h-32 text-white/80 stroke-[1px] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-700" />
               
               {/* Orbiting decorations */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-white/10 rounded-full border-t-transparent border-l-transparent"
               />
           </div>
       </div>

       {/* Description & Footer */}
       <div className="relative z-10 mt-auto">
          <div className="w-12 h-[2px] bg-[#de9b35] mb-6" />
          <h3 className="font-tech text-xl text-[#de9b35] uppercase tracking-[0.2em] mb-4">
             {item.subtitle}
          </h3>
          <p className="font-sans text-lg text-neutral-400 max-w-md leading-relaxed">
             {item.description}
          </p>
       </div>
    </motion.div>
  )
}

export default function ManifestoSection1() {
  const targetRef = useRef<HTMLElement>(null);
  
  // We need a very tall container to drive the horizontal scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Convert vertical scroll progress (0 -> 1) into horizontal offset (0% -> -75%)
  // The number of items + introductory gap determines the range.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  // Adding skew based on velocity for dynamic feel
  const scrollVelocity = useVelocity(scrollYProgress);
  const skew = useTransform(scrollVelocity, [-0.5, 0.5], ["2deg", "-2deg"]);
  const smoothSkew = useSpring(skew, { stiffness: 400, damping: 30 });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050507]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Noise / Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        </div>

        {/* Horizontal Track */}
        <motion.div 
          style={{ x, skewX: smoothSkew }}
          className="flex relative z-10 pl-[10vw]"
        >
           {/* Introductory Title Block */}
           <div className="w-[50vw] md:w-[40vw] h-[70vh] flex-shrink-0 flex flex-col justify-center pr-12 md:pr-24 border-r border-white/10">
              <span className="font-tech text-[#5d79ae] uppercase tracking-[0.5em] mb-8 block">
                 System Archive
              </span>
              <h2 className="font-display font-black text-[15vh] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20 tracking-tighter">
                 MANI<br/>FESTO
              </h2>
              <p className="mt-12 text-neutral-500 text-lg max-w-sm leading-relaxed">
                 An exploration of the tactical fps genre through the lens of audio, mechanics, and community history.
              </p>
              <div className="mt-12 flex items-center gap-4 text-white/40 font-tech text-xs uppercase tracking-widest">
                 <Crosshair className="w-4 h-4 text-[#de9b35]" />
                 <span>Scroll to Scan</span>
              </div>
           </div>

           {/* Gallery Items */}
           {items.map((item, index) => (
             <GalleryItem key={item.id} item={item} index={index} x={x} />
           ))}

           {/* End Buffer */}
           <div className="w-[20vw] flex-shrink-0" />

        </motion.div>

        {/* Progress Bar (Tactical UI) */}
        <div className="absolute bottom-12 left-12 right-12 h-[2px] bg-white/10 z-20">
           <motion.div 
             style={{ scaleX: scrollYProgress }}
             className="h-full bg-[#de9b35] origin-left"
           />
           <div className="absolute top-0 left-0 -mt-2 text-[10px] font-tech text-[#de9b35]">0%</div>
           <div className="absolute top-0 right-0 -mt-2 text-[10px] font-tech text-[#de9b35]">100%</div>
        </div>

      </div>
    </section>
  );
}
