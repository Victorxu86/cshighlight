export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <div className="prose prose-invert prose-lg mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
          About the Project
        </h1>
        
        <p className="text-xl leading-8 text-slate-300 mb-10">
          This digital exhibition investigates the concept of "Sonic Remains" within the context of Counter-Strike esports. It explores how fleeting moments of high-intensity gameplay, crystallized by caster commentary, transcend their original context to become permanent artifacts of digital culture.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Background</h2>
          <p className="text-slate-400 mb-4">
            [Placeholder: Discuss the history of CS as a spectator sport and the role of shoutcasting. Mention how certain plays are remembered not just visually, but aurally.]
          </p>
          <p className="text-slate-400">
            In competitive gaming, the "highlight" is the primary unit of memory. But what sustains this memory? Often, it is the specific timbre, rhythm, and volume of the shoutcaster's voice that encodes the emotion of the moment into the listener's mind.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Research Questions</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>How does the voice of the commentator act as a "sonic glue" for visual memory?</li>
            <li>In what ways do in-game graffiti serve as "monuments" to these sonic events?</li>
            <li>How does the community participate in the preservation of these remains through edits, soundboards, and chat wheel spam?</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Methodology</h2>
          <p className="text-slate-400">
            [Placeholder: Explain the selection of case studies. Focus on moments where Valve explicitly added in-game graffiti to commemorate a play, linking the physical map change to the sonic event.]
          </p>
        </section>
      </div>
    </div>
  );
}

