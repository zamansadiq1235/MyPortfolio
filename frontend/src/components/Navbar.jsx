import { useState, useEffect } from 'react'

const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 30px' : '20px 30px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,16,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero') }}
        style={{
          fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 750,
          letterSpacing: '-0.8px', color: 'var(--text)', textDecoration: 'none',
        }}>
        <span style={{ color: 'var(--accent)' }}>&lt;</span>
        Zaman Sadiq
        <span style={{ color: 'var(--accent)' }}> /&gt;</span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 30, listStyle: 'none', margin: 0, padding: 0 }}
        className="hidden-mobile">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <button onClick={() => scrollTo(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--muted)', fontSize: 13, fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
              position: 'relative', padding: '4px 0',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="/cv.pdf" download
        className="hidden-mobile"
        style={{
          padding: '9px 22px',
          border: '1px solid var(--border2)',
          borderRadius: 40,
          color: 'var(--text)', fontSize: 13, fontWeight: 500,
          textDecoration: 'none',
          background: 'var(--surface)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--accent)'
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.boxShadow = '0 0 24px var(--glow)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'var(--surface)'
          e.currentTarget.style.borderColor = 'var(--border2)'
          e.currentTarget.style.boxShadow = 'none'
        }}>
        Download CV
      </a>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(p => !p)}
        className="show-mobile"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', fontSize: 24, lineHeight: 1,
        }}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(8,8,16,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--muted)', fontSize: 14, textAlign: 'left',
                fontFamily: 'var(--font-body)', textTransform: 'uppercase',
                letterSpacing: '0.08em', padding: '4px 0',
              }}>
              {link}
            </button>
          ))}
          <a href="/cv.pdf" download style={{ color: 'var(--accent)', fontSize: 14 }}>
            Download CV
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
