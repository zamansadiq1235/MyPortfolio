import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Animated orbs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(90px)', opacity: 0.25,
          width: 600, height: 600, background: 'var(--accent)', top: -100, left: -150,
          animation: 'drift1 12s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(90px)', opacity: 0.25,
          width: 400, height: 400, background: 'var(--accent2)', bottom: -50, right: -100,
          animation: 'drift2 10s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(90px)', opacity: 0.2,
          width: 300, height: 300, background: 'var(--accent3)',
          top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
          animation: 'drift3 14s ease-in-out infinite alternate',
        }} />
      </div>

      <style>{`
        @keyframes drift1 { to { transform: translate(60px, 40px); } }
        @keyframes drift2 { to { transform: translate(-40px, -60px); } }
        @keyframes drift3 { to { transform: translate(-40px, 30px); } }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        @keyframes scroll-line { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      {/* Available badge */}
      <motion.div {...fadeUp(0)} style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 16px 6px 8px',
        border: '1px solid var(--border2)', borderRadius: 40,
        fontSize: 12, color: 'var(--muted)',
        background: 'var(--surface)', backdropFilter: 'blur(8px)',
        marginBottom: 32,
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%',
          background: '#4ade80', boxShadow: '0 0 8px #4ade80',
          animation: 'pulse-dot 2s ease infinite', display: 'inline-block',
        }} />
        Open to new opportunities
      </motion.div>

      {/* Name */}
      <motion.h1 {...fadeUp(0.1)} style={{
        fontFamily: 'var(--font-head)',
        fontSize: 'clamp(52px, 10vw, 110px)',
        fontWeight: 800, lineHeight: 0.95,
        letterSpacing: '-3px', marginBottom: 24,
      }}>
        Flutter
        <span style={{ display: 'block' }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 50%, var(--accent3) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Developer.
          </span>
        </span>
      </motion.h1>

      {/* Subtitle with typing */}
      <motion.p {...fadeUp(0.2)} style={{
        fontSize: 'clamp(16px, 2.5vw, 20px)',
        color: 'var(--muted)', fontWeight: 300,
        marginBottom: 40, letterSpacing: '0.02em',
        lineHeight: 1.7,
      }}>
        Hi, I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Zaman Sadiq</strong> — I build fast, beautiful mobile apps
        <br />with{' '}
        <TypeAnimation
          sequence={['Flutter', 1500, 'Firebase', 1500, 'API Integaration', 1500, ' Rest API', 1500, 'Node.js', 1500, 'MongoDB', 1500, 'Express.js', 1500]}
          repeat={Infinity}
          style={{ color: 'var(--accent3)', fontWeight: 500 }}
        />
      </motion.p>

      {/* Social icons */}
      <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 14, marginBottom: 32 }}>
        {[
          {
            label: 'GitHub', href: 'https://github.com/zamansadiq1235',
            svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
          },
          {
            label: 'LinkedIn', href: 'www.linkedin.com/in/zaman-sadiq-a981263b0',
            svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>
          },
          {
            label: 'Email', href: 'mailto:zamansadiqofficial@gmail.com',
            svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
          },
        ].map(({ label, href, svg }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: 42, height: 42, borderRadius: '50%',
              border: '1px solid var(--border2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)', textDecoration: 'none',
              background: 'var(--surface)', transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 0 20px var(--glow)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--muted)'
              e.currentTarget.style.borderColor = 'var(--border2)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}>
            {svg}
          </a>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => scrollTo('contact')} style={{
          padding: '14px 34px', background: 'var(--accent)',
          color: '#fff', fontWeight: 500, fontSize: 14,
          border: 'none', borderRadius: 40, cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          transition: 'all 0.25s', boxShadow: '0 0 30px var(--glow)',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 50px var(--glow)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 30px var(--glow)' }}>
          Let's Work Together
        </button>
        <button onClick={() => scrollTo('projects')} style={{
          padding: '14px 34px', background: 'transparent',
          color: 'var(--text)', fontWeight: 500, fontSize: 14,
          border: '1px solid var(--border2)', borderRadius: 40, cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          transition: 'all 0.25s', backdropFilter: 'blur(8px)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border2)' }}>
          View My Work
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'var(--muted)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>
        <div style={{
          width: 1, height: 48,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scroll-line 2s ease-in-out infinite',
        }} />
        <span>scroll</span>
      </div>
    </section>
  )
}
