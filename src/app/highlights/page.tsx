import { highlights } from '@/data/highlights';
import HighlightCard from '@/components/HighlightCard';

export default function HighlightsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Highlight Gallery</h2>
        <p className="mt-2 text-lg leading-8 text-slate-400">
          A collection of sonic artifacts from Counter-Strike history.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {highlights.map((highlight, index) => (
          <HighlightCard key={highlight.id} highlight={highlight} index={index} />
        ))}
      </div>
    </div>
  );
}

