import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">
      <section className="mb-20">
        <h1 className="text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-black to-zinc-500 bg-clip-text text-transparent">
          High school student building the future.
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed">
          Focusing on engineering and AI systems. I build things to understand how the world works.
        </p>
        
        {/* Modern Primary Button */}
        <div className="flex gap-4">
          <a href="mailto:your@email.com" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition shadow-lg">
            Get in touch
          </a>
          <Link href="/projects" className="bg-white border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition shadow-sm">
            View Work
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <Link href="/projects" className="group p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-blue-200 transition-all shadow-sm">
          <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Selected Work</span>
          <h3 className="text-2xl font-bold mt-2 italic group-hover:not-italic transition-all">Projects →</h3>
        </Link>
        <Link href="/experiences" className="group p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-blue-200 transition-all shadow-sm">
          <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">History</span>
          <h3 className="text-2xl font-bold mt-2 italic group-hover:not-italic transition-all">Experience →</h3>
        </Link>
        <Link href="/activities" className="group p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-blue-200 transition-all shadow-sm">
          <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Involvement</span>
          <h3 className="text-2xl font-bold mt-2 italic group-hover:not-italic transition-all">Activities →</h3>
        </Link>
      </div>
    </main>
  );
}
