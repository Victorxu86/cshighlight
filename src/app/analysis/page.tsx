import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AnalysisPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        
        {/* Main Content */}
        <div className="lg:col-span-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10">
            Theoretical Analysis
          </h1>

          <div className="space-y-16">
            <section id="sonic-archaeology" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                1. Sound as Archive
              </h2>
              <div className="prose prose-invert text-slate-400">
                <p>
                  How do we "archive" a sound that was never meant to be permanent? Esports commentary is live, ephemeral, and reactive. Yet, through the mechanism of the "highlight clip," these sounds are cut, looped, and stored.
                </p>
                <p>
                  [Placeholder: Discussion on media archaeology and the preservation of digital ephemera.]
                </p>
              </div>
            </section>

            <section id="affective-memory" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                2. Affective Memory & The Shout
              </h2>
              <div className="prose prose-invert text-slate-400">
                <p>
                  The shout of the caster acts as an affective trigger. It is not just information ("he got the frag"); it is pure emotion encoded in audio waves.
                </p>
                <p>
                  [Placeholder: Analysis of specific vocal timbres and their impact on player/viewer memory.]
                </p>
              </div>
            </section>

            <section id="virtual-monuments" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                3. Virtual Monuments (Graffiti)
              </h2>
              <div className="prose prose-invert text-slate-400">
                <p>
                  Valve's inclusion of graffiti on maps like Dust2 and Mirage represents a rare instance of developer-sanctioned history. These are virtual plaques.
                </p>
                <p>
                  [Placeholder: Comparing CS graffiti to real-world historical markers.]
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar / Table of Contents */}
        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Contents</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#sonic-archaeology" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">1. Sound as Archive</a>
              <a href="#affective-memory" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">2. Affective Memory</a>
              <a href="#virtual-monuments" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">3. Virtual Monuments</a>
            </nav>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h4 className="text-xs font-semibold text-slate-500 uppercase mb-4">Related Case Study</h4>
              <div className="group cursor-pointer rounded-md bg-black/40 p-3 hover:bg-black/60 transition-colors">
                <Link href="/highlights/coldzera-jumping-awp">
                  <p className="text-xs text-cyan-500 mb-1">Mirage • 2016</p>
                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">Coldzera's Jumping AWP</p>
                  <div className="mt-2 flex items-center text-xs text-slate-500">
                    View Highlight <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

