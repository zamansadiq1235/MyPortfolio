const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

const NAV = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '36px 60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 16,
      position: 'relative', zIndex: 1,
    }}>
      <button onClick={() => scrollTo('hero')} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 800, color: 'var(--text)',
      }}>
        <span style={{ color: 'var(--accent)' }}>&lt;</span>
        ZamanSadiq
        <span style={{ color: 'var(--accent)' }}> /&gt;</span>
      </button>

      <div style={{ color: 'var(--muted)', fontSize: 13 }}>
        © {year} Zaman Sadiq. Built with React &amp; Node.js ♥
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        {NAV.map(link => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-body)',
              textTransform: 'capitalize', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
            {link}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { footer { padding: 28px 24px !important; flex-direction: column; align-items: flex-start; } }
      `}</style>
    </footer>
  )
}
