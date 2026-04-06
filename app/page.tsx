import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-6xl font-bold mb-4">Your Name</h1>
      <p className="text-zinc-400 mb-8 text-lg">
        High school student building projects in engineering + AI
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/projects" className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition-colors">
          Projects
        </Link>
        <Link href="/experiences" className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition-colors">
          Experiences
        </Link>
        <Link href="/activities" className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition-colors">
          Activities
        </Link>
      </div>
    </main>
  );
}
