"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Background",
    content: (
      <>
        Counter-Strike is more than a game of reflex; it is a theater of tension. For over two decades, millions have watched digital athletes compete in virtual arenas, creating a shared history not written in books, but recorded in server logs and video streams. This exhibition explores the "highlight" not just as a gameplay clip, but as a cultural artifact.
      </>
    ),
  },
  {
    title: "Why Sound?",
    content: (
      <>
        Visuals fade, but the voice remains. The shoutcaster's roar, the crowd's gasp, the silence of a 1vX clutch. These sonic textures carry the emotional weight of the moment. By isolating or emphasizing the audio, we can re-experience the raw human emotion embedded in the digital action.
      </>
    ),
  },
  {
    title: "The Clutch as Monument",
    content: (
      <>
        In the flow of a match, a "clutch" moment disrupts time. It is a singularity where outcome is uncertain and tension is absolute. These moments become monuments in the community's collective memory—referenced, replayed, and mythologized years after the server has closed.
      </>
    ),
  },
];

export default function IntroductionSection() {
  return (
    <section id="introduction" className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="space-y-24">
            
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-white/10 pl-6 md:pl-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif italic text-white/90 mb-4">
              "We are not just watching a game; we are witnessing the formation of memory."
            </h2>
            <p className="text-sm text-muted tracking-widest uppercase">Exhibition Note</p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                    {section.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-white/20 mt-2 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

