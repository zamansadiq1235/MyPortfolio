export default function ProjectCard({ project }) {
  return (
    <div 
      className="project-card"
      style={{
        background: 'var(--surface)', 
        border: '1px solid var(--border)',
        borderRadius: 24, 
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(.23,1,.32,1)',
        cursor: 'pointer', 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-10px)'
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}>

      {/* Image Container - This is where the magic happens */}
      <div style={{
        height: 260, // Fixed height for a uniform grid
        width: '100%',
        background: '#0a0a0a',
        position: 'relative', 
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}>
        <img 
          src={project.image} 
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Fills the div without stretching
            objectPosition: 'top center', // Keeps the App Header visible
            transition: 'transform 0.6s cubic-bezier(.23,1,.32,1)',
          }}
          className="card-img"
        />

        {/* Featured Badge */}
        {project.featured && (
          <span style={{
            position: 'absolute', top: 16, right: 16,
            background: 'var(--accent)', color: '#fff',
            fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
            padding: '5px 12px', borderRadius: 50, textTransform: 'uppercase',
            zIndex: 2,
          }}>
            Featured
          </span>
        )}
      </div>

      {/* Body Content */}
      <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
          {project.title}
        </h3>
        
        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 600,
              background: 'rgba(108,99,255,0.08)', color: 'var(--accent)',
              border: '1px solid rgba(108,99,255,0.15)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 20 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontWeight: 600 }}>
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
              Demo ↗
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card:hover .card-img {
          transform: scale(1.08); /* Subtle zoom on hover */
        }
      `}</style>
    </div>
  )
}