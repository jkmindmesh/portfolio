import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-blue-100/50 to-transparent -z-10" />

      <section className="mb-24">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Engineering + AI
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-slate-900">
          Building <span className="text-blue-600">better</span> systems.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
          High school student exploring the intersection of machine learning and physical engineering. 
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="mailto:your@email.com" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5">
            Get in touch
          </a>
          <Link href="/projects" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            View Projects
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/projects" className="p-8 bg-white border border-blue-50 rounded-3xl hover:bg-blue-50/50 transition-colors group">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Projects →</h3>
        </Link>
        <Link href="/experiences" className="p-8 bg-white border border-blue-50 rounded-3xl hover:bg-blue-50/50 transition-colors group">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Experiences →</h3>
        </Link>
        <Link href="/activities" className="p-8 bg-white border border-blue-50 rounded-3xl hover:bg-blue-50/50 transition-colors group">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Activities →</h3>
        </Link>
      </div>
    </main>
  );
}
