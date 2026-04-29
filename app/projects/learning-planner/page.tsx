'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

interface Resource {
  id: string;
  title: string;
  type: 'Tutorial' | 'Article' | 'Video' | 'Course' | 'Book';
  description: string;
  estimatedTime: number;
  status: 'to-learn' | 'in-progress' | 'completed';
  completedDate?: string;
  createdDate: string;
}

const typeColors: { [key in Resource['type']]: { bg: string; text: string; badge: string } } = {
  'Tutorial': { bg: '#dbeafe', text: '#0284c7', badge: '#e0f2fe' },
  'Article': { bg: '#f3e8ff', text: '#7c3aed', badge: '#ede9fe' },
  'Video': { bg: '#fecaca', text: '#dc2626', badge: '#fee2e2' },
  'Course': { bg: '#dcfce7', text: '#16a34a', badge: '#f0fdf4' },
  'Book': { bg: '#fef3c7', text: '#d97706', badge: '#fef9e7' },
};

const resourceTypeEmojis: { [key in Resource['type']]: string } = {
  'Tutorial': '📚',
  'Article': '📄',
  'Video': '🎥',
  'Course': '🎓',
  'Book': '📖',
};

export default function LearningPlanner() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<Resource['type'] | 'all'>('all');
  const [draggedResource, setDraggedResource] = useState<Resource | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    type: 'Tutorial' as Resource['type'],
    description: '',
    estimatedTime: 30,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedResources = localStorage.getItem('learningResources');
    if (savedResources) {
      try {
        setResources(JSON.parse(savedResources));
      } catch (error) {
        console.error('Failed to load resources:', error);
      }
    }
  }, []);

  // Save to localStorage whenever resources change
  useEffect(() => {
    localStorage.setItem('learningResources', JSON.stringify(resources));
  }, [resources]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a resource title');
      return;
    }

    if (editingId) {
      // Update existing resource
      setResources(resources.map(r =>
        r.id === editingId
          ? { ...r, ...formData }
          : r
      ));
      setEditingId(null);
    } else {
      // Create new resource
      const newResource: Resource = {
        id: Date.now().toString(),
        ...formData,
        status: 'to-learn',
        createdDate: new Date().toLocaleDateString(),
      };
      setResources([...resources, newResource]);
    }

    // Reset form
    setFormData({
      title: '',
      type: 'Tutorial',
      description: '',
      estimatedTime: 30,
    });
    setShowForm(false);
  };

  // Handle edit
  const handleEdit = (resource: Resource) => {
    setFormData({
      title: resource.title,
      type: resource.type,
      description: resource.description,
      estimatedTime: resource.estimatedTime,
    });
    setEditingId(resource.id);
    setShowForm(true);
  };

  // Handle delete
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      setResources(resources.filter(r => r.id !== id));
    }
  };

  // Handle drag start
  const handleDragStart = (resource: Resource) => {
    setDraggedResource(resource);
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.style.opacity = '0.8';
  };

  // Handle drag leave
  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.style.opacity = '1';
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent, newStatus: Resource['status']) => {
    e.preventDefault();
    e.currentTarget.style.opacity = '1';

    if (draggedResource) {
      setResources(resources.map(r =>
        r.id === draggedResource.id
          ? {
              ...r,
              status: newStatus,
              completedDate: newStatus === 'completed' ? new Date().toLocaleDateString() : undefined,
            }
          : r
      ));
      setDraggedResource(null);
    }
  };

  // Clear all resources
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL resources? This cannot be undone.')) {
      setResources([]);
    }
  };

  // Filter resources
  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         r.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || r.type === filterType;
    return matchesSearch && matchesFilter;
  });

  // Get resources by status
  const getResourcesByStatus = (status: Resource['status']) => {
    return filteredResources.filter(r => r.status === status);
  };

  // Calculate statistics
  const stats = {
    total: resources.length,
    toLearn: resources.filter(r => r.status === 'to-learn').length,
    inProgress: resources.filter(r => r.status === 'in-progress').length,
    completed: resources.filter(r => r.status === 'completed').length,
    totalTime: resources.reduce((sum, r) => sum + r.estimatedTime, 0),
  };

  return (
    <main style={{ minHeight: "100vh", padding: "20px", paddingTop: "60px", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", color: "#0078d7", margin: "0 0 10px 0" }}>📚 Learning Planner</h1>
            <p style={{ color: "#666", margin: "0", fontSize: "1.05rem" }}>Organize and track your learning journey with drag-and-drop simplicity</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              backgroundColor: "#0078d7",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#005baa";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0078d7";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            {showForm ? '✕ Cancel' : '+ Add Resource'}
          </button>
        </div>
      </div>

      {/* Statistics Dashboard */}
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
          <div className="card" style={{ textAlign: "center", borderLeft: "4px solid #0078d7" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#0078d7" }}>{stats.total}</div>
            <p style={{ margin: "5px 0 0 0", color: "#666", fontSize: "0.9rem" }}>Total Resources</p>
          </div>
          <div className="card" style={{ textAlign: "center", borderLeft: "4px solid #d97706" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#d97706" }}>{stats.toLearn}</div>
            <p style={{ margin: "5px 0 0 0", color: "#666", fontSize: "0.9rem" }}>To Learn</p>
          </div>
          <div className="card" style={{ textAlign: "center", borderLeft: "4px solid #7c3aed" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#7c3aed" }}>{stats.inProgress}</div>
            <p style={{ margin: "5px 0 0 0", color: "#666", fontSize: "0.9rem" }}>In Progress</p>
          </div>
          <div className="card" style={{ textAlign: "center", borderLeft: "4px solid #16a34a" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a" }}>{stats.completed}</div>
            <p style={{ margin: "5px 0 0 0", color: "#666", fontSize: "0.9rem" }}>Completed</p>
          </div>
          <div className="card" style={{ textAlign: "center", borderLeft: "4px solid #0284c7" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#0284c7" }}>{Math.round(stats.totalTime / 60)}h</div>
            <p style={{ margin: "5px 0 0 0", color: "#666", fontSize: "0.9rem" }}>Total Time</p>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="section" style={{ backgroundColor: "#f0f7ff", border: "2px solid #0078d7", borderRadius: "10px" }}>
          <h2 style={{ color: "#0078d7", marginTop: "0" }}>{editingId ? '✏️ Edit Resource' : '➕ Add New Resource'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginBottom: "15px" }}>
              {/* Title */}
              <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>
                  Resource Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., JavaScript Basics Tutorial"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #bbb",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }}
                />
              </div>

              {/* Type */}
              <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>
                  Resource Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as Resource['type'] })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #bbb",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }}
                >
                  <option value="Tutorial">📚 Tutorial</option>
                  <option value="Article">📄 Article</option>
                  <option value="Video">🎥 Video</option>
                  <option value="Course">🎓 Course</option>
                  <option value="Book">📖 Book</option>
                </select>
              </div>

              {/* Estimated Time */}
              <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>
                  Estimated Time (minutes)
                </label>
                <input
                  type="number"
                  value={formData.estimatedTime}
                  onChange={(e) => setFormData({ ...formData, estimatedTime: parseInt(e.target.value) || 0 })}
                  min="1"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #bbb",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of the resource..."
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #bbb",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  minHeight: "100px",
                  boxSizing: "border-box",
                  fontFamily: "inherit"
                }}
              />
            </div>

            {/* Form Buttons */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#16a34a",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#15803d";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#16a34a";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {editingId ? '💾 Update Resource' : '➕ Add Resource'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ title: '', type: 'Tutorial', description: '', estimatedTime: 30 });
                }}
                style={{
                  backgroundColor: "#999",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search and Filter */}
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
          {/* Search */}
          <div>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: "8px", color: "#333" }}>
              🔍 Search Resources
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or description..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #bbb",
                borderRadius: "6px",
                fontSize: "0.95rem",
                boxSizing: "border-box",
                fontFamily: "inherit"
              }}
            />
          </div>

          {/* Filter */}
          <div>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: "8px", color: "#333" }}>
              🏷️ Filter by Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as Resource['type'] | 'all')}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #bbb",
                borderRadius: "6px",
                fontSize: "0.95rem",
                boxSizing: "border-box",
                fontFamily: "inherit"
              }}
            >
              <option value="all">All Types</option>
              <option value="Tutorial">📚 Tutorial</option>
              <option value="Article">📄 Article</option>
              <option value="Video">🎥 Video</option>
              <option value="Course">🎓 Course</option>
              <option value="Book">📖 Book</option>
            </select>
          </div>

          {/* Clear All Button */}
          {resources.length > 0 && (
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <button
                onClick={handleClearAll}
                style={{
                  width: "100%",
                  backgroundColor: "#dc2626",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b91c1c";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#dc2626";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                🗑️ Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Kanban Board */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        {/* To Learn Column */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'to-learn')}
          style={{
            backgroundColor: "#fff",
            border: "2px solid #d97706",
            borderRadius: "10px",
            padding: "15px",
            minHeight: "600px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <span style={{ fontSize: "1.5rem" }}>📋</span>
            <h3 style={{ margin: "0", color: "#d97706", fontSize: "1.2rem" }}>To Learn</h3>
            <span style={{ backgroundColor: "#d97706", color: "white", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.9rem" }}>
              {getResourcesByStatus('to-learn').length}
            </span>
          </div>

          {getResourcesByStatus('to-learn').length === 0 ? (
            <div style={{ textAlign: "center", color: "#999", padding: "20px" }}>
              <p style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>📚</p>
              <p style={{ margin: "0" }}>No resources yet. Add one to get started!</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {getResourcesByStatus('to-learn').map(resource => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDragStart={handleDragStart}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>

        {/* In Progress Column */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'in-progress')}
          style={{
            backgroundColor: "#fff",
            border: "2px solid #7c3aed",
            borderRadius: "10px",
            padding: "15px",
            minHeight: "600px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <span style={{ fontSize: "1.5rem" }}>⚡</span>
            <h3 style={{ margin: "0", color: "#7c3aed", fontSize: "1.2rem" }}>In Progress</h3>
            <span style={{ backgroundColor: "#7c3aed", color: "white", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.9rem" }}>
              {getResourcesByStatus('in-progress').length}
            </span>
          </div>

          {getResourcesByStatus('in-progress').length === 0 ? (
            <div style={{ textAlign: "center", color: "#999", padding: "20px" }}>
              <p style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>✍️</p>
              <p style={{ margin: "0" }}>Start learning! Drag a resource here.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {getResourcesByStatus('in-progress').map(resource => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDragStart={handleDragStart}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>

        {/* Completed Column */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'completed')}
          style={{
            backgroundColor: "#fff",
            border: "2px solid #16a34a",
            borderRadius: "10px",
            padding: "15px",
            minHeight: "600px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <span style={{ fontSize: "1.5rem" }}>✅</span>
            <h3 style={{ margin: "0", color: "#16a34a", fontSize: "1.2rem" }}>Completed</h3>
            <span style={{ backgroundColor: "#16a34a", color: "white", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.9rem" }}>
              {getResourcesByStatus('completed').length}
            </span>
          </div>

          {getResourcesByStatus('completed').length === 0 ? (
            <div style={{ textAlign: "center", color: "#999", padding: "20px" }}>
              <p style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>🎉</p>
              <p style={{ margin: "0" }}>Complete resources to celebrate!</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {getResourcesByStatus('completed').map(resource => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDragStart={handleDragStart}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Back to Projects */}
      <div className="section" style={{ textAlign: "center" }}>
        <Link href="/projects" style={{ color: "#0078d7", textDecoration: "none", fontWeight: "bold", fontSize: "1.05rem" }}>
          ← Back to Projects
        </Link>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #ddd", marginTop: "40px" }}>
        <p style={{ color: "#999", margin: "0" }}>© 2026 Jiya Kapoor. Learning Planner - Keep Your Learning Organized!</p>
      </footer>
    </main>
  );
}

// Resource Card Component
interface ResourceCardProps {
  resource: Resource;
  onDragStart: (resource: Resource) => void;
  onEdit: (resource: Resource) => void;
  onDelete: (id: string) => void;
}

function ResourceCard({ resource, onDragStart, onEdit, onDelete }: ResourceCardProps) {
  const colors = typeColors[resource.type];
  const emoji = resourceTypeEmojis[resource.type];

  return (
    <div
      draggable
      onDragStart={() => onDragStart(resource)}
      style={{
        backgroundColor: colors.bg,
        border: `2px solid ${colors.text}`,
        borderRadius: "8px",
        padding: "12px",
        cursor: "grab",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
        <span style={{ fontSize: "1.2rem" }}>{emoji}</span>
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            onClick={() => onEdit(resource)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              padding: "2px",
              transition: "transform 0.2s ease"
            }}
            title="Edit"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(resource.id)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              padding: "2px",
              transition: "transform 0.2s ease"
            }}
            title="Delete"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            🗑️
          </button>
        </div>
      </div>

      <h4 style={{ margin: "0 0 5px 0", color: colors.text, fontSize: "0.95rem", fontWeight: "bold" }}>
        {resource.title}
      </h4>

      <p style={{ margin: "5px 0", color: "#666", fontSize: "0.85rem", lineHeight: "1.4" }}>
        {resource.description}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", flexWrap: "wrap", gap: "5px" }}>
        <span style={{
          backgroundColor: colors.badge,
          color: colors.text,
          padding: "3px 8px",
          borderRadius: "12px",
          fontSize: "0.75rem",
          fontWeight: "bold"
        }}>
          {resource.type}
        </span>
        <span style={{
          color: "#666",
          fontSize: "0.8rem",
          fontWeight: "500"
        }}>
          ⏱️ {resource.estimatedTime}min
        </span>
      </div>

      {resource.completedDate && (
        <p style={{ margin: "5px 0 0 0", color: "#16a34a", fontSize: "0.8rem", fontStyle: "italic" }}>
          ✓ Completed on {resource.completedDate}
        </p>
      )}
    </div>
  );
}
