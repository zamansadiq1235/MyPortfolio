import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

const ALL_FILTERS = ['All', 'React', 'Node.js', 'MongoDB', 'Next.js', 'API']

export default function Projects() {
  const [active, setActive] = useState('All')
  const ref = useReveal()

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <section id="projects" style={{ padding: '110px 60px', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

      <div ref={ref} className="reveal">
        <div className="section-label">What I've built</div>
        <h2 style={{
          fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,5vw,60px)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 36,
        }}>
          My <span style={{ color: 'var(--accent)' }}>Projects</span>
        </h2>
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
        {ALL_FILTERS.map(filter => (
          <button key={filter} onClick={() => setActive(filter)}
            style={{
              padding: '7px 18px', borderRadius: 40, fontSize: 12, fontWeight: 500,
              border: '1px solid',
              borderColor: active === filter ? 'var(--accent)' : 'var(--border2)',
              background: active === filter ? 'var(--accent)' : 'transparent',
              color: active === filter ? '#fff' : 'var(--muted)',
              cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'var(--font-body)',
              boxShadow: active === filter ? '0 0 16px var(--glow)' : 'none',
            }}
            onMouseEnter={e => { if (active !== filter) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--surface)' } }}
            onMouseLeave={e => { if (active !== filter) { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' } }}>
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        className="projects-grid">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 600px) and (max-width: 900px) { .projects-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}
