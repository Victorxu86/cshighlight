"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnalysisSection() {
  return (
    <section id="analysis" className="py-32 bg-neutral-950 text-neutral-400">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Header */}
        <header className="mb-20 text-center">
          <span className="inline-block py-1 px-3 border border-white/10 text-xs tracking-widest uppercase mb-6">
            Critical Theory
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">
            The Architecture of Hype
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base font-light text-neutral-500">
            Deconstructing the sonic and spatial elements that transform gameplay into history.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16">
            
          {/* Main Content Column */}
          <div className="space-y-20">
            
            {/* Article 1 */}
            <ArticleBlock 
              number="01"
              title="Sound as the Vehicle of Memory"
              content="In the absence of physical souvenirs, sound becomes the primary artifact of the digital stadium. The frequency response of a crowd's roar, the specific timbre of a caster's disbelief—these auditory signals bypass the intellectual processing of the game state and tap directly into the limbic system. When we hear 'The Jumping Double', we do not visualize the hitbox; we feel the disruption of order."
            />

            {/* Article 2 */}
            <ArticleBlock 
              number="02"
              title="Emotional Repetition & Viral Culture"
              content="High-stakes moments are recursive. They are clipped, shared, remixed, and re-watched. This repetition is not merely archival but ritualistic. Each view reinforces the collective agreement that 'this moment matters.' The commentary acts as the liturgy for this ritual, providing the precise words ('Inhuman Reactions!') that the community will chant in unison."
            />

            {/* Article 3 */}
            <ArticleBlock 
              number="03"
              title="The Graffiti: Digital Plaques"
              content="Valve's decision to immortalize certain plays with in-game graffiti (the angel on Mirage, the fiery defuse on Overpass) transforms the map from a static arena into a living museum. Players walk past these ghosts every round. The space itself remembers the event, grounding the ephemeral digital action into a semi-permanent spatial reality."
            />

          </div>

          {/* Sidebar / Marginalia */}
          <aside className="hidden md:block pt-8 space-y-12 border-l border-white/5 pl-8 h-fit sticky top-32">
            <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">References</h5>
                <ul className="space-y-4 text-xs text-neutral-600 font-mono">
                    <li>[1] "Sonic Warfare", S. Goodman</li>
                    <li>[2] "The Virtual Community", H. Rheingold</li>
                    <li>[3] Valve Developer Commentary, 2013</li>
                </ul>
            </div>
            
            <div className="p-4 bg-white/5 text-xs leading-relaxed italic text-neutral-500">
                "The map is not the territory, but in Counter-Strike, the map is the history."
            </div>
          </aside>

        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
            <p className="text-xs text-neutral-700 uppercase tracking-widest">
                © 2024 CS Highlights Archive. Curated by [Your Name].
            </p>
        </div>

      </div>
    </section>
  );
}

function ArticleBlock({ number, title, content }: { number: string, title: string, content: string }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <span className="absolute -left-12 top-1 text-xs font-mono text-white/20 hidden md:block">
        {number}
      </span>
      <h3 className="text-xl md:text-2xl font-medium text-white mb-4">{title}</h3>
      <p className="text-base md:text-lg font-light leading-relaxed text-neutral-400 text-justify">
        {content}
      </p>
    </motion.article>
  );
}

