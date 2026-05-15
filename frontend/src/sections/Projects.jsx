import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

const ALL_FILTERS = [
  'All',
  'Flutter',
  'Firebase',
  'GetX',
  'Provider',
  'sqflite',
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const ref = useReveal()

  const filtered =
    active === 'All'
      ? projects
      : projects.filter(project => project.tags.includes(active))

  return (
    <section
      id="projects"
      style={{
        padding: '110px 24px',
        maxWidth: 1250,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Heading */}
      <div ref={ref} className="reveal">
        <div className="section-label">What I've built</div>

        <h2
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: 36,
          }}
        >
          My <span style={{ color: 'var(--accent)' }}>Projects</span>
        </h2>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          marginBottom: 45,
        }}
      >
        {ALL_FILTERS.map(filter => {
          const isActive = active === filter

          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              style={{
                padding: '10px 20px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                border: `1px solid ${
                  isActive ? 'var(--accent)' : 'var(--border2)'
                }`,
                background: isActive
                  ? 'var(--accent)'
                  : 'rgba(255,255,255,0.03)',
                color: isActive ? '#fff' : 'var(--muted)',
                cursor: 'pointer',
                transition: '0.3s ease',
                fontFamily: 'var(--font-body)',
                boxShadow: isActive
                  ? '0 0 20px var(--glow)'
                  : 'none',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.background =
                    'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.background =
                    'rgba(255,255,255,0.03)'
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.transform = 'translateY(0px)'
                }
              }}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Responsive Grid */}
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 1000px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}