import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 md:px-6 py-12 md:py-20 max-w-5xl mx-auto pb-24 md:pb-0">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-blue-100/50 to-transparent -z-10" />

      <section className="mb-16 md:mb-24">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Engineering + AI
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 text-slate-900">
          Building <span className="text-blue-600">better</span> systems.
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-2xl mb-8 md:mb-12 leading-relaxed">
          High school student exploring the intersection of machine learning and physical engineering. 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a 
            href="mailto:your@email.com" 
            className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0 min-h-12 md:min-h-auto flex items-center justify-center"
          >
            Get in touch
          </a>
          <Link 
            href="/projects" 
            className="w-full sm:w-auto text-center bg-white text-slate-700 border border-slate-200 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:bg-slate-100 min-h-12 md:min-h-auto flex items-center justify-center"
          >
            View Projects
          </Link>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Link 
          href="/projects" 
          className="p-6 md:p-8 bg-white border border-blue-50 rounded-3xl hover:bg-blue-50/50 transition-colors group active:bg-blue-50 min-h-24 md:min-h-auto flex items-center"
        >
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Projects →</h3>
        </Link>
        <Link 
          href="/experiences" 
          className="p-6 md:p-8 bg-white border border-blue-50 rounded-3xl hover:bg-blue-50/50 transition-colors group active:bg-blue-50 min-h-24 md:min-h-auto flex items-center"
        >
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Experiences →</h3>
        </Link>
        <Link 
          href="/activities" 
          className="p-6 md:p-8 bg-white border border-blue-50 rounded-3xl hover:bg-blue-50/50 transition-colors group active:bg-blue-50 min-h-24 md:min-h-auto flex items-center sm:col-span-2 md:col-span-1"
        >
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Activities →</h3>
        </Link>
      </div>
    </main>
  );
}