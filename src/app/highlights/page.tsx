import { highlights } from '@/data/highlights';
import HighlightCard from '@/components/HighlightCard';
import GlitchText from '@/components/GlitchText';

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-[#030304] pt-32 pb-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-20 border-b border-white/10 pb-10">
           <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-cyan-500" />
                <span className="font-mono text-xs text-cyan-500 uppercase tracking-widest">Archive Collection</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-serif font-black text-white tracking-tighter">
              <GlitchText text="THE HIGHLIGHTS" />
           </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {highlights.map((highlight, index) => (
            <HighlightCard key={highlight.id} highlight={highlight} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
