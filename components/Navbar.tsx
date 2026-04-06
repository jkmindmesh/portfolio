import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-black text-2xl tracking-tighter text-slate-900">
          Jiya Kapoor<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/experiences" className="hover:text-blue-600 transition">Experience</Link>
          <Link href="/activities" className="hover:text-blue-600 transition">Activities</Link>
        </div>
      </div>
    </nav>
  );
}
