
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
      <h1 className="font-bold text-xl">Your Name</h1>
      <div className="flex gap-6 text-gray-400">
        <Link href="/projects">Projects</Link>
        <Link href="/experiences">Experiences</Link>
        <Link href="/activities">Activities</Link>
      </div>
    </nav>
  );
}
