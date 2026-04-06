import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-zinc-200 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl hover:opacity-70 transition">
          Jiya Kapoor
        </Link>
        <div className="flex gap-8 text-sm font-medium text-zinc-600">
          <Link href="/projects" className="hover:text-black transition">Projects</Link>
          <Link href="/experiences" className="hover:text-black transition">Experiences</Link>
          <Link href="/activities" className="hover:text-black transition">Activities</Link>
        </div>
      </div>
    </nav>
  );
}
