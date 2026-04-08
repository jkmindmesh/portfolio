'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/60 backdrop-blur-xl border-b border-white/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-black text-2xl md:text-3xl tracking-tighter group">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-blue-500 transition-all duration-300">
            Jiya
          </span>
          <span className="text-white">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link 
            href="/projects" 
            className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/experiences" 
            className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            Experience
          </Link>
          <Link 
            href="/activities" 
            className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            Activities
          </Link>
          <a 
            href="mailto:your@email.com"
            className="ml-4 px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 space-y-2">
          <Link 
            href="/projects" 
            className="block py-3 px-4 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/experiences" 
            className="block py-3 px-4 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link 
            href="/activities" 
            className="block py-3 px-4 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Activities
          </Link>
          <a 
            href="mailto:your@email.com"
            className="block py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
