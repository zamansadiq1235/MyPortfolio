import { useReveal } from '../hooks/useReveal'

const stats = [
  { number: '10+', label: 'Projects Delivered' },
  { number: '2+', label: 'Years Experience' },
  { number: '20+', label: 'GitHub Commits' },
  { number: '∞', label: 'Cups of Coffee' },
]

export default function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  return (
    <section id="about" style={{ padding: '110px 60px', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div ref={ref1} className="reveal">
        <div className="section-label">Who I am</div>
        <h2 style={{
          fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,5vw,60px)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 60,
        }}>
          About <span style={{ color: 'var(--accent)' }}>Me</span>
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center',
      }} className="about-grid">

        {/* Photo side */}
        <div ref={ref2} className="reveal" style={{ position: 'relative' }}>
          <div style={{
            width: '100%', aspectRatio: '4/5',
            borderRadius: 24, overflow: 'hidden',
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            border: '1px solid var(--border2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 80, fontFamily: 'var(--font-head)', fontWeight: 800,
            color: 'rgba(255,255,255,0.12)',
            position: 'relative',
          }}>
            {/* Replace with: <img src="/avatar.jpg" alt="Zaman" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
            ZS
            <div style={{
              position: 'absolute', bottom: -16, right: -16,
              background: 'var(--accent)', color: '#fff',
              fontSize: 13, fontWeight: 600, padding: '14px 20px',
              borderRadius: 16, boxShadow: '0 0 30px var(--glow)',
              fontFamily: 'var(--font-head)',
            }}>
              <span style={{ display: 'block', fontSize: 28, lineHeight: 1 }}>2+</span>
              Years of Experience
            </div>
          </div>
        </div>

        {/* Text side */}
        <div ref={ref3} className="reveal reveal-d2">
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
            I'm a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Flutter Developer</strong> based
            in Pakistan, passionate about building products that live on the internet.
            I specialize in Flutter, Dart, Firebase, Rest API Integration, Rest API, Node.js, Exoress.js, and MongoDB.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
            I love the intersection of <strong style={{ color: 'var(--text)', fontWeight: 500 }}>design and engineering</strong> —
            writing clean code that creates beautiful, performant user experiences.
            Every project gets my full attention and commitment to quality.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 36, fontWeight: 300 }}>
            Currently open to <strong style={{ color: 'var(--text)', fontWeight: 500 }}>full-time roles, freelance projects</strong>,
            and exciting collaborations. Let's build something amazing together.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {stats.map(({ number, label }) => (
              <div key={label} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 20,
                backdropFilter: 'blur(8px)', transition: 'all 0.25s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'var(--surface2)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 34, fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: 4 }}>
                  {number}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
