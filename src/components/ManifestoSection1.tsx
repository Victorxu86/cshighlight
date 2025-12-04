'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type Card = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
};

const cards: Card[] = [
  {
    id: 'mechanic',
    title: "Defined By Precision",
    subtitle: "The Mechanic",
    description:
      "Counter-Strike is high-speed chess with ballistics. It is the purest distillation of the FPS genre—where economy management meets pixel-perfect precision.",
    color: "#7c3aed", // Purple
    image: "/mechanic.jpg"
  },
  {
    id: 'phenomenon',
    title: "Global Warfare",
    subtitle: "The Phenomenon",
    description:
      "From dark LAN cafes to sold-out arenas. The CS ecosystem is a decentralized coliseum that has survived every trend.",
    color: "#de9b35", // Yellow
    image: "/arena.jpg"
  },
  {
    id: 'narrative',
    title: "The Voice of God",
    subtitle: "The Narrative",
    description:
      "In the chaos of smoke grenades, the Caster translates visual noise into narrative gold. A great frag with a legendary call is history.",
    color: "#5d79ae", // Blue
    image: "/caster.jpg"
  }
];

export default function ManifestoSection1() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050507] pt-32 pb-32 overflow-hidden"
    >
      {/* 背景氛围 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: yBackground }}
          className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#5d79ae]/8 rounded-full blur-[200px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* 顶部标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-tech text-[#de9b35] uppercase tracking-[0.4em] text-xs md:text-sm">
            Manifesto / Three Voices
          </span>
        </motion.div>

        {/* 卡片列表 */}
        <div className="flex flex-col gap-14">
          {cards.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="relative overflow-hidden rounded-[24px] bg-[#0a0a0c] border border-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            >
              {/* 边框与光晕 */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[24px]"
                style={{
                  boxShadow: `0 0 60px ${card.color}50, inset 0 0 60px ${card.color}30`,
                  border: `1.5px solid ${card.color}`,
                }}
              />

              {/* 内容栅格 */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* 图片 */}
                <div className="relative h-[260px] sm:h-[360px] lg:h-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority={idx === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
                  {/* 彩色边条 */}
                  <div
                    className="absolute left-0 top-0 h-full w-[6px]"
                    style={{ background: `linear-gradient(180deg, ${card.color}, transparent)` }}
                  />
                </div>

                {/* 文案 */}
                <div className="relative p-8 md:p-12 flex flex-col justify-center gap-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="font-tech uppercase tracking-[0.2em] text-xs md:text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${card.color}20`,
                        color: card.color,
                        border: `1px solid ${card.color}60`,
                      }}
                    >
                      {card.subtitle}
                    </span>
                    <span className="font-display text-sm text-white/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-3xl md:text-5xl text-white leading-[1] tracking-tight">
                    {card.title}
                  </h3>

                  <p className="font-sans text-neutral-300 text-base md:text-lg leading-relaxed">
                    {card.description}
                  </p>

                  <div className="flex gap-2 items-center text-sm text-white/60">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: card.color }}
                    />
                    Focus
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
