export default function ProjectCard({ project }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 20, overflow: 'hidden',
      transition: 'all 0.35s cubic-bezier(.23,1,.32,1)',
      cursor: 'pointer', position: 'relative',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.borderColor = 'var(--border2)'
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}>

      {/* Project image/emoji */}
      <div style={{
        height: 200, background: 'linear-gradient(135deg, var(--bg2), #1a1a2e)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 52, borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))',
        }} />
        <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
        {project.featured && (
          <span style={{
            position: 'absolute', top: 12, right: 12,
            background: 'var(--accent)', color: '#fff',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.08em',
            padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase',
          }}>
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 24 }}>
        <div style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
          {project.title}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 500,
              background: 'rgba(108,99,255,0.12)', color: 'var(--accent)',
              border: '1px solid rgba(108,99,255,0.2)',
            }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
              ⟁ GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
