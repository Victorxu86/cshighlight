import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">404</h2>
      <p className="text-xl text-slate-300 mb-8">Page not found.</p>
      <Link
        href="/"
        className="rounded-md bg-cyan-500/10 px-3.5 py-2.5 text-sm font-semibold text-cyan-400 shadow-sm hover:bg-cyan-500/20 border border-cyan-500/20 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}

