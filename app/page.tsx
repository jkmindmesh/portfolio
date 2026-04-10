import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="section">
        <div className="section-header">
          <h2>👋 About Me</h2>
        </div>
        <p>
          High school student exploring the intersection of machine learning and physical engineering. 
          Passionate about creating innovative solutions that make an impact.
        </p>
      </div>

      {/* Features Grid */}
      <div className="section">
        <div className="section-header">
          <h2>📚 Explore</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div className="card">
            <h3>🚀 Projects</h3>
            <p>Showcase of my latest projects and innovations.</p>
            <Link href="/projects">View Projects →</Link>
          </div>

          <div className="card">
            <h3>💼 Experience</h3>
            <p>Learn about my professional experience and skills.</p>
            <Link href="/experiences">View Experience →</Link>
          </div>

          <div className="card">
            <h3>🎯 Activities</h3>
            <p>Discover my passions and involvements.</p>
            <Link href="/activities">View Activities →</Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section">
        <div className="actions">
          <a href="mailto:your@email.com" className="add-btn">📧 Get in Touch</a>
          <Link href="/projects" className="generate-btn">📂 View My Work</Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #ddd' }}>
        <p>© 2026 Jiya Kapoor. Built with React, Next.js, and Tailwind CSS.</p>
      </footer>
    </main>
  );
}
