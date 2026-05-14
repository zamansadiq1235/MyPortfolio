import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/portfolioData'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" style={{
      background: 'linear-gradient(to bottom, transparent, rgba(108,99,255,0.03), transparent)',
      padding: '110px 0', position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 60px' }}>

        <div ref={ref} className="reveal">
          <div className="section-label">What I know</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,5vw,60px)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 60,
          }}>
            My <span style={{ color: 'var(--accent)' }}>Skills</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
          className="skills-grid">
          {Object.entries(skills).map(([category, { icon, items }], i) => (
            <SkillCard key={category} category={category} icon={icon} items={items} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function SkillCard({ category, icon, items, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-d${Math.ceil((delay + 0.1) * 10)}`}
      style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 20, padding: '28px 28px 24px',
        backdropFilter: 'blur(8px)', transition: 'all 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border2)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.querySelector('.top-bar').style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'none'
        e.currentTarget.querySelector('.top-bar').style.opacity = '0'
      }}>
      <div className="top-bar" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        opacity: 0, transition: 'opacity 0.3s',
      }} />
      <div style={{
        fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 700,
        marginBottom: 16, color: 'var(--text)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
        {category}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {items.map(skill => (
          <span key={skill} style={{
            padding: '6px 14px', borderRadius: 40, fontSize: 12, fontWeight: 500,
            border: '1px solid var(--border2)', color: 'var(--muted)',
            background: 'var(--surface)', transition: 'all 0.2s', cursor: 'default',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'rgba(108,99,255,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--muted)'
              e.currentTarget.style.borderColor = 'var(--border2)'
              e.currentTarget.style.background = 'var(--surface)'
            }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
