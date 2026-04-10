'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <button id="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <header>
        <h1>Jiya Kapoor</h1>
        <p>Engineering • AI • Innovation</p>
      </header>

      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/projects">Projects</Link>
          <Link href="/experiences">Experience</Link>
          <Link href="/activities">Activities</Link>
          <a href="mailto:your@email.com" className="add-btn">Get in touch</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="section">
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/experiences" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
          <a href="mailto:your@email.com" className="add-btn">Get in touch</a>
        </div>
      )}
    </>
  );
}
