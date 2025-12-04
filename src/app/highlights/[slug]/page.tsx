import { highlights } from '@/data/highlights';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import { ArrowLeft, MapPin, Calendar, Quote } from 'lucide-react';

export async function generateStaticParams() {
  return highlights.map((highlight) => ({
    slug: highlight.slug,
  }));
}

export default async function HighlightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const highlight = highlights.find((h) => h.slug === slug);

  if (!highlight) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-8">
        <Link href="/highlights" className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
        {/* Left Column: Media */}
        <div className="space-y-8">
          {/* Video Player */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
            <video
              src={highlight.videoUrl}
              controls
              loop
              className="w-full aspect-video object-contain"
              poster={highlight.imageUrl} // Fallback poster
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Audio Player */}
          <div className="rounded-xl bg-white/5 p-6 border border-white/10">
            <h3 className="mb-4 text-sm font-semibold text-slate-300 uppercase tracking-wider">Caster Audio</h3>
            <AudioPlayer src={highlight.audioUrl} />
          </div>

          {/* Graffiti Image */}
          <div className="rounded-xl overflow-hidden border border-white/10">
             {/* Use img for now, assuming public folder */}
             <img 
                src={highlight.imageUrl} 
                alt={`${highlight.title} Graffiti`}
                className="w-full h-auto object-cover" 
             />
             <div className="bg-[#0b0f19] p-3 text-center text-xs text-slate-500 italic">
                In-game graffiti commemoration
             </div>
          </div>
        </div>

        {/* Right Column: Info & Analysis */}
        <div>
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {highlight.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-cyan-500" />
                {highlight.year} • {highlight.event}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-500" />
                {highlight.map}
              </div>
            </div>
          </div>

          <div className="py-8">
            <blockquote className="relative border-l-4 border-cyan-500 bg-white/5 py-4 pl-6 pr-4 italic">
              <Quote className="absolute -left-3 -top-3 h-6 w-6 bg-[#050509] text-cyan-500" />
              <p className="text-lg text-slate-200">"{highlight.quote}"</p>
            </blockquote>
          </div>

          <div className="prose prose-invert prose-lg">
            <h3 className="text-cyan-400">Context</h3>
            <p>{highlight.description}</p>
            
            <h3 className="text-cyan-400">Sonic Analysis</h3>
            <p>{highlight.analysis || "Detailed analysis coming soon..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

