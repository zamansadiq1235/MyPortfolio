import { useEffect, useRef, useState } from 'react'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

/* ────────────────────────────────────────────────────
   Animated Mesh Background
──────────────────────────────────────────────────── */
function MeshBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
          top: '-200px',
          left: '-150px',
          filter: 'blur(40px)',
          animation: 'orbFloat1 20s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* Orb 2 */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,101,132,0.14) 0%, transparent 70%)',
          top: '20%',
          right: '-100px',
          filter: 'blur(50px)',
          animation: 'orbFloat2 17s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* Orb 3 */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(67,232,216,0.12) 0%, transparent 70%)',
          bottom: '10%',
          left: '20%',
          filter: 'blur(45px)',
          animation: 'orbFloat3 22s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* Orb 4 */}
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
          bottom: '30%',
          right: '15%',
          filter: 'blur(60px)',
          animation: 'orbFloat4 19s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridPulse 8s ease-in-out infinite',
        }}
      />

      {/* Accent Beams */}
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '100vh',
          background:
            'linear-gradient(to bottom, transparent, rgba(108,99,255,0.15), rgba(255,101,132,0.1), transparent)',
          left: '15%',
          top: 0,
          animation: 'beamSlide1 12s ease-in-out infinite alternate',
          transformOrigin: 'top center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '100vh',
          background:
            'linear-gradient(to bottom, transparent, rgba(67,232,216,0.12), transparent)',
          right: '20%',
          top: 0,
          animation: 'beamSlide2 15s ease-in-out infinite alternate',
          transformOrigin: 'top center',
        }}
      />

      {/* Corner Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 300,
          height: 300,
          background:
            'radial-gradient(ellipse at top left, rgba(108,99,255,0.12), transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 400,
          height: 400,
          background:
            'radial-gradient(ellipse at bottom right, rgba(255,101,132,0.1), transparent 70%)',
        }}
      />

      <style>{`
        @keyframes orbFloat1 {
          from {
            transform: translate3d(0,0,0) scale(1);
          }
          to {
            transform: translate3d(80px,60px,0) scale(1.15);
          }
        }

        @keyframes orbFloat2 {
          from {
            transform: translate3d(0,0,0) scale(1);
          }
          to {
            transform: translate3d(-60px,80px,0) scale(1.2);
          }
        }

        @keyframes orbFloat3 {
          from {
            transform: translate3d(0,0,0) scale(1);
          }
          to {
            transform: translate3d(50px,-70px,0) scale(1.1);
          }
        }

        @keyframes orbFloat4 {
          from {
            transform: translate3d(0,0,0) scale(1.1);
          }
          to {
            transform: translate3d(-40px,50px,0) scale(1);
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.6;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes beamSlide1 {
          from {
            opacity: 0.4;
            transform: rotate(15deg) translate3d(0,0,0);
          }

          to {
            opacity: 1;
            transform: rotate(15deg) translate3d(30px,0,0);
          }
        }

        @keyframes beamSlide2 {
          from {
            opacity: 0.4;
            transform: rotate(-12deg) translate3d(0,0,0);
          }

          to {
            opacity: 1;
            transform: rotate(-12deg) translate3d(-30px,0,0);
          }
        }
      `}</style>
    </div>
  )
}

/* ────────────────────────────────────────────────────
   Particle Field
──────────────────────────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext('2d')

    let raf

    const resize = () => {
      const dpr = window.devicePixelRatio || 1

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    window.addEventListener('resize', resize)

    const COLORS = [
      'rgba(108,99,255,',
      'rgba(255,101,132,',
      'rgba(67,232,216,',
    ]

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach((p) => {
        p.pulse += 0.012

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = window.innerWidth
        if (p.x > window.innerWidth) p.x = 0

        if (p.y < 0) p.y = window.innerHeight
        if (p.y > window.innerHeight) p.y = 0

        const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + a + ')'
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y

          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            ctx.beginPath()

            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            ctx.strokeStyle = `rgba(108,99,255,${
              0.05 * (1 - dist / 130)
            })`

            ctx.lineWidth = 0.5

            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

/* ────────────────────────────────────────────────────
   Scroll Progress
──────────────────────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = document.documentElement

          const percent =
            (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100

          setPct(Math.min(100, percent))

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 999,
        background: 'rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          background:
            'linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3))',
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px var(--accent)',
        }}
      />
    </div>
  )
}

/* ────────────────────────────────────────────────────
   Cursor Glow
──────────────────────────────────────────────────── */
function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 768) return

    const el = ref.current

    if (!el) return

    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 175}px, ${
        e.clientY - 175
      }px)`
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        zIndex: 2,
        pointerEvents: 'none',
        width: 350,
        height: 350,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
        willChange: 'transform',
        left: 0,
        top: 0,
      }}
    />
  )
}

/* ────────────────────────────────────────────────────
   Section Divider
──────────────────────────────────────────────────── */
function SectionDivider({ flip = false }) {
  return (
    <div
      style={{
        position: 'relative',
        height: 80,
        overflow: 'hidden',
        transform: flip ? 'scaleY(-1)' : 'none',
        zIndex: 2,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill="rgba(108,99,255,0.04)"
        />

        <path
          d="M0,55 C480,10 960,70 1440,30 L1440,80 L0,80 Z"
          fill="rgba(255,101,132,0.03)"
        />
      </svg>
    </div>
  )
}

/* ────────────────────────────────────────────────────
   Floating Shapes
──────────────────────────────────────────────────── */
function FloatingShapes() {
  const shapes = [
    {
      size: 60,
      top: '12%',
      left: '5%',
      delay: '0s',
      dur: '18s',
      opacity: 0.06,
      rotate: 45,
    },
    {
      size: 40,
      top: '25%',
      right: '8%',
      delay: '3s',
      dur: '22s',
      opacity: 0.05,
      rotate: 20,
    },
    {
      size: 80,
      top: '55%',
      left: '3%',
      delay: '6s',
      dur: '16s',
      opacity: 0.04,
      rotate: 60,
    },
  ]

  return (
    <>
      {shapes.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            border: `1px solid rgba(108,99,255,${s.opacity * 3})`,
            borderRadius:
              i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '0',
            opacity: s.opacity * 8,
            transform: `rotate(${s.rotate}deg)`,
            animation: `shapeFloat${i % 3} ${s.dur} ${s.delay} ease-in-out infinite alternate`,
            zIndex: 1,
            pointerEvents: 'none',
            background:
              i % 2 === 0
                ? `rgba(108,99,255,${s.opacity * 0.3})`
                : `rgba(255,101,132,${s.opacity * 0.2})`,
          }}
        />
      ))}

      <style>{`
        @keyframes shapeFloat0 {
          from {
            transform: rotate(45deg) translateY(0);
          }

          to {
            transform: rotate(55deg) translateY(-25px);
          }
        }

        @keyframes shapeFloat1 {
          from {
            transform: rotate(20deg) translateX(0);
          }

          to {
            transform: rotate(30deg) translateX(20px);
          }
        }

        @keyframes shapeFloat2 {
          from {
            transform: rotate(60deg) translate(0, 0);
          }

          to {
            transform: rotate(70deg) translate(15px, -15px);
          }
        }
      `}</style>
    </>
  )
}

/* ────────────────────────────────────────────────────
   Main App
──────────────────────────────────────────────────── */
export default function App() {
  return (
    <div
      style={{
        background: 'var(--bg)',
        color: 'var(--text)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Background Layers */}
      <MeshBackground />
      <ParticleField />
      <FloatingShapes />
      <CursorGlow />

      {/* UI */}
      <ScrollProgress />
      <Loader />

      {/* Navbar */}
      <div
        style={{
          position: 'relative',
          zIndex: 50,
        }}
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Hero />

        <SectionDivider />
        <About />

        <SectionDivider flip />
        <Skills />

        <SectionDivider />
        <Projects />

        <SectionDivider flip />
        <Experience />

        <SectionDivider />
        <Contact />
      </main>

      {/* Footer */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Footer />
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        main > * {
          position: relative;
        }

        main::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.015) 2px,
            rgba(0,0,0,0.015) 4px
          );
          pointer-events: none;
          z-index: 3;
        }

        main::after {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 60%,
            rgba(0,0,0,0.35) 100%
          );
          pointer-events: none;
          z-index: 3;
        }

        ::selection {
          background: rgba(108,99,255,0.35);
          color: #fff;
        }

        section {
          position: relative;
          isolation: isolate;
        }
      `}</style>
    </div>
  )
}