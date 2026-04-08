import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24 md:mb-32 space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:border-blue-500/50 transition">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-300">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent inline-block">
                Building
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent inline-block">
                better systems
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              High school student exploring the intersection of machine learning and physical engineering. Passionate about creating innovative solutions that make an impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="mailto:your@email.com" 
              className="group relative w-full sm:w-auto px-8 py-4 text-center font-bold text-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-blue-500 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400 to-cyan-400 blur" />
              <span className="relative flex items-center justify-center gap-2">
                Get in touch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <Link 
              href="/projects" 
              className="group relative w-full sm:w-auto px-8 py-4 text-center font-bold text-white rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                View Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          <Link 
            href="/projects" 
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Projects</h3>
                  <p className="text-slate-400 text-sm mt-1">Showcase of my work</p>
                </div>
                <svg className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <p className="text-slate-300 text-sm">Explore my latest projects and innovations</p>
            </div>
          </Link>

          <Link 
            href="/experiences" 
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Experience</h3>
                  <p className="text-slate-400 text-sm mt-1">Professional journey</p>
                </div>
                <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <p className="text-slate-300 text-sm">Learn about my experience and skills</p>
            </div>
          </Link>

          <Link 
            href="/activities" 
            className="group relative sm:col-span-2 md:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">Activities</h3>
                  <p className="text-slate-400 text-sm mt-1">Involvement & interests</p>
                </div>
                <svg className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <p className="text-slate-300 text-sm">Discover my passions and activities</p>
            </div>
          </Link>
        </section>

        {/* Stats Section */}
        <section className="grid sm:grid-cols-3 gap-6 mb-24 py-16 border-t border-b border-white/10">
          <div className="text-center space-y-2">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
            <p className="text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+</div>
            <p className="text-slate-400">Years of Learning</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">100%</div>
            <p className="text-slate-400">Dedication</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center text-slate-400 text-sm">
          <p>© 2026 Jiya Kapoor. Built with React, Next.js, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
