import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" style={{
      background: 'linear-gradient(to bottom, transparent, rgba(108,99,255,0.03), transparent)',
      padding: '110px 0', position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 60px' }}>

        <div ref={ref} className="reveal">
          <div className="section-label">Where I've worked</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,5vw,60px)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 60,
          }}>
            Work <span style={{ color: 'var(--accent)' }}>Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 0,
            width: 1, background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />

          {experience.map((job, i) => (
            <TimelineItem key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ job, index }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-d${index + 1}`}
      style={{ position: 'relative', marginBottom: 48 }}>

      {/* Dot */}
      <div style={{
        position: 'absolute', left: -38, top: 4,
        width: 14, height: 14, borderRadius: '50%',
        background: 'var(--accent)', boxShadow: '0 0 16px var(--glow)',
        border: '2px solid var(--bg)',
      }} />

      {/* Card */}
      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 20, padding: 28, backdropFilter: 'blur(8px)',
        transition: 'all 0.3s',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateX(6px)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700 }}>
            {job.role}
          </div>
          <div style={{
            fontSize: 12, color: 'var(--accent)', fontWeight: 500,
            background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)',
            padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap',
          }}>
            {job.period}
          </div>
        </div>

        <div style={{ color: 'var(--accent2)', fontSize: 14, fontWeight: 500, marginBottom: 16 }}>
          {job.company} · {job.type}
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {job.points.map((point, pi) => (
            <li key={pi} style={{ color: 'var(--muted)', fontSize: 14, display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>▸</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
