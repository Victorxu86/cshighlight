export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050509] py-8">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs leading-5 text-slate-500">
          &copy; {new Date().getFullYear()} Sonic Remains Project. NYU Course: Sonic Remains.
        </p>
        <p className="mt-2 text-xs text-slate-600">
          Created for educational purposes. All game assets belong to Valve Corporation.
        </p>
      </div>
    </footer>
  );
}

