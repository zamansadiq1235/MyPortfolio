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
   Aurora Mesh Background
──────────────────────────────────────────────────── */
function MeshBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0,
      pointerEvents: 'none', overflow: 'hidden',
    }}>
      {/* Deep base */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #07080f 0%, #0d0f1a 40%, #090b14 70%, #07080f 100%)',
      }} />

      {/* Orb 1 — main blue */}
      <div style={{
        position: 'absolute', width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 40%, rgba(85,105,255,0.22) 0%, rgba(61,90,254,0.08) 45%, transparent 70%)',
        top: '-300px', left: '-250px',
        filter: 'blur(60px)',
        animation: 'orb1 25s ease-in-out infinite alternate',
        willChange: 'transform',
      }} />

      {/* Orb 2 — cyan right */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 50%, rgba(0,229,255,0.15) 0%, rgba(0,200,255,0.05) 50%, transparent 70%)',
        top: '15%', right: '-180px',
        filter: 'blur(55px)',
        animation: 'orb2 20s ease-in-out infinite alternate',
        willChange: 'transform',
      }} />

      {/* Orb 3 — violet bottom */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, rgba(124,77,255,0.18) 0%, rgba(100,60,220,0.06) 50%, transparent 70%)',
        bottom: '5%', left: '30%',
        filter: 'blur(50px)',
        animation: 'orb3 28s ease-in-out infinite alternate',
        willChange: 'transform',
      }} />

      {/* Orb 4 — mid right */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, rgba(61,90,254,0.12) 0%, transparent 70%)',
        bottom: '25%', right: '10%',
        filter: 'blur(70px)',
        animation: 'orb4 22s ease-in-out infinite alternate',
        willChange: 'transform',
      }} />

      {/* Orb 5 — micro accent top right */}
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
        top: '-50px', right: '22%',
        filter: 'blur(40px)',
        animation: 'orb5 16s ease-in-out infinite alternate',
        willChange: 'transform',
      }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(85,105,255,0.2) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        animation: 'dotFade 10s ease-in-out infinite',
        opacity: 0.35,
      }} />

      {/* Horizontal scan lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(
          0deg, transparent, transparent 60px,
          rgba(85,105,255,0.018) 60px, rgba(85,105,255,0.018) 61px
        )`,
      }} />

      {/* Beam left */}
      <div style={{
        position: 'absolute', width: 2, height: '140vh',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(85,105,255,0.22) 30%, rgba(0,229,255,0.14) 60%, transparent 100%)',
        left: '18%', top: '-20vh',
        transform: 'rotate(18deg)', transformOrigin: 'top center',
        animation: 'beam1 14s ease-in-out infinite alternate',
        filter: 'blur(1px)',
      }} />

      {/* Beam right */}
      <div style={{
        position: 'absolute', width: 2, height: '140vh',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(124,77,255,0.18) 35%, rgba(0,229,255,0.12) 65%, transparent 100%)',
        right: '22%', top: '-10vh',
        transform: 'rotate(-15deg)', transformOrigin: 'top center',
        animation: 'beam2 18s ease-in-out infinite alternate',
        filter: 'blur(1px)',
      }} />

      {/* Glowing horizontal line */}
      <div style={{
        position: 'absolute',
        width: '60%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(85,105,255,0.3), rgba(0,229,255,0.22), transparent)',
        top: '38%', left: '20%',
        animation: 'lineGlow 6s ease-in-out infinite',
        filter: 'blur(0.5px)',
      }} />

      {/* Corner glows */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: 500, height: 500,
        background: 'radial-gradient(ellipse at top left, rgba(85,105,255,0.12), transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0, width: 600, height: 600,
        background: 'radial-gradient(ellipse at bottom right, rgba(0,229,255,0.08), transparent 65%)',
      }} />

      <style>{`
        @keyframes orb1 {
          from { transform: translate3d(0,0,0) scale(1); }
          33%  { transform: translate3d(70px,50px,0) scale(1.12); }
          to   { transform: translate3d(90px,60px,0) scale(1.18); }
        }
        @keyframes orb2 {
          from { transform: translate3d(0,0,0) scale(1); }
          to   { transform: translate3d(-50px,90px,0) scale(1.2); }
        }
        @keyframes orb3 {
          from { transform: translate3d(0,0,0) scale(1); }
          to   { transform: translate3d(-40px,-70px,0) scale(1.15); }
        }
        @keyframes orb4 {
          from { transform: translate3d(0,0,0) scale(1.1); }
          to   { transform: translate3d(-50px,40px,0) scale(1); }
        }
        @keyframes orb5 {
          from { transform: translate3d(0,0,0) scale(1); }
          to   { transform: translate3d(-30px,30px,0) scale(1.2); }
        }
        @keyframes dotFade {
          0%,100% { opacity: 0.28; }
          50%      { opacity: 0.5; }
        }
        @keyframes beam1 {
          from { opacity: 0.5; transform: rotate(18deg) translate3d(0,0,0); }
          to   { opacity: 1;   transform: rotate(18deg) translate3d(28px,0,0); }
        }
        @keyframes beam2 {
          from { opacity: 0.4; transform: rotate(-15deg) translate3d(0,0,0); }
          to   { opacity: 0.9; transform: rotate(-15deg) translate3d(-24px,0,0); }
        }
        @keyframes lineGlow {
          0%,100% { opacity: 0.3; transform: scaleX(0.85); }
          50%      { opacity: 1;   transform: scaleX(1); }
        }
      `}</style>
    </div>
  )
}

/* ────────────────────────────────────────────────────
   Constellation Particle Field
──────────────────────────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width  = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMouse, { passive: true })

    const COLORS = [
      { r: 85,  g: 105, b: 255 },
      { r: 0,   g: 229, b: 255 },
      { r: 124, g: 77,  b: 255 },
    ]

    const particles = Array.from({ length: 60 }, () => {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)]
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.45 + 0.15,
        pulse: Math.random() * Math.PI * 2,
        pSpeed: Math.random() * 0.008 + 0.006,
        c,
      }
    })

    const stars = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 0.7 + 0.2,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pSpeed: Math.random() * 0.015 + 0.005,
    }))

    const CONNECT_DIST  = 140
    const MOUSE_DIST    = 180
    const MOUSE_REPULSE = 0.04

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Stars
      stars.forEach(s => {
        s.pulse += s.pSpeed
        const a = s.alpha * (0.5 + 0.5 * Math.sin(s.pulse))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,220,255,${a})`
        ctx.fill()
      })

      // Particles
      particles.forEach(p => {
        p.pulse += p.pSpeed
        const dx = p.x - mx
        const dy = p.y - my
        const md = Math.sqrt(dx * dx + dy * dy)
        if (md < MOUSE_DIST && md > 0) {
          const force = (MOUSE_DIST - md) / MOUSE_DIST
          p.vx += (dx / md) * force * MOUSE_REPULSE
          p.vy += (dy / md) * force * MOUSE_REPULSE
        }
        p.vx *= 0.99; p.vy *= 0.99
        p.x += p.vx;  p.y += p.vy
        if (p.x < 0) p.x = window.innerWidth
        if (p.x > window.innerWidth)  p.x = 0
        if (p.y < 0) p.y = window.innerHeight
        if (p.y > window.innerHeight) p.y = 0

        const a = p.alpha * (0.65 + 0.35 * Math.sin(p.pulse))
        const { r, g, b } = p.c

        // Glow ring
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        grad.addColorStop(0, `rgba(${r},${g},${b},${a})`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(a * 1.5, 1)})`
        ctx.fill()
      })

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const t = 1 - dist / CONNECT_DIST
            const grad = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            const ci = particles[i].c, cj = particles[j].c
            grad.addColorStop(0, `rgba(${ci.r},${ci.g},${ci.b},${t * 0.12})`)
            grad.addColorStop(1, `rgba(${cj.r},${cj.g},${cj.b},${t * 0.12})`)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = grad
            ctx.lineWidth = t * 0.8
            ctx.stroke()
          }
        }
        // Mouse lines
        const dx   = particles[i].x - mx
        const dy   = particles[i].y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST) {
          const t  = 1 - dist / MOUSE_DIST
          const ci = particles[i].c
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(${ci.r},${ci.g},${ci.b},${t * 0.2})`
          ctx.lineWidth = t * 1.2
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
    }} />
  )
}

/* ────────────────────────────────────────────────────
   Scroll Progress Bar
──────────────────────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = document.documentElement
          setPct(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100))
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 2, zIndex: 999,
      background: 'rgba(255,255,255,0.04)',
    }}>
      <div style={{
        height: '100%', width: `${pct}%`,
        background: 'linear-gradient(90deg, #5569ff 0%, #00e5ff 50%, #9f5eff 100%)',
        transition: 'width 0.12s linear',
        boxShadow: '0 0 10px rgba(85,105,255,0.8), 0 0 20px rgba(0,229,255,0.4)',
        borderRadius: '0 2px 2px 0',
      }} />
    </div>
  )
}

/* ────────────────────────────────────────────────────
   Cursor Glow — dual ring with smooth lerp
──────────────────────────────────────────────────── */
function CursorGlow() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const posRef   = useRef({ x: -999, y: -999 })
  const curRef   = useRef({ x: -999, y: -999 })
  const rafRef   = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 768) return
    const onMove = (e) => { posRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove, { passive: true })

    const animate = () => {
      curRef.current.x += (posRef.current.x - curRef.current.x) * 0.1
      curRef.current.y += (posRef.current.y - curRef.current.y) * 0.1
      if (outerRef.current)
        outerRef.current.style.transform = `translate(${curRef.current.x - 200}px, ${curRef.current.y - 200}px)`
      if (innerRef.current)
        innerRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={outerRef} style={{
        position: 'fixed', zIndex: 2, pointerEvents: 'none',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(85,105,255,0.07) 0%, rgba(0,229,255,0.03) 40%, transparent 70%)',
        willChange: 'transform', left: 0, top: 0, filter: 'blur(2px)',
      }} />
      <div ref={innerRef} style={{
        position: 'fixed', zIndex: 100, pointerEvents: 'none',
        width: 8, height: 8, borderRadius: '50%',
        background: 'rgba(0,229,255,0.9)',
        boxShadow: '0 0 8px rgba(0,229,255,0.9), 0 0 18px rgba(85,105,255,0.6)',
        willChange: 'transform', left: 0, top: 0,
        mixBlendMode: 'screen',
      }} />
    </>
  )
}

/* ────────────────────────────────────────────────────
   Floating Geometric Shapes — formal wireframe
──────────────────────────────────────────────────── */
function FloatingShapes() {
  const shapes = [
    { type: 'ring', size: 100, top: '8%',  left: '4%',   dur: '24s', delay: '0s',   color: 'rgba(85,105,255,0.14)', anim: 0 },
    { type: 'ring', size: 60,  top: '22%', right: '6%',  dur: '20s', delay: '4s',   color: 'rgba(0,229,255,0.12)',  anim: 1 },
    { type: 'ring', size: 140, top: '60%', left: '2%',   dur: '28s', delay: '2s',   color: 'rgba(124,77,255,0.1)',  anim: 2 },
    { type: 'ring', size: 80,  top: '75%', right: '4%',  dur: '22s', delay: '6s',   color: 'rgba(85,105,255,0.12)', anim: 0 },
    { type: 'sq',   size: 40,  top: '35%', left: '7%',   dur: '18s', delay: '3s',   color: 'rgba(0,229,255,0.1)',   anim: 1 },
    { type: 'sq',   size: 28,  top: '50%', right: '9%',  dur: '26s', delay: '1s',   color: 'rgba(85,105,255,0.12)', anim: 2 },
    { type: 'dia',  size: 24,  top: '45%', left: '12%',  dur: '21s', delay: '7s',   color: 'rgba(85,105,255,0.15)', anim: 2 },
    { type: 'dia',  size: 32,  top: '30%', right: '14%', dur: '25s', delay: '0.5s', color: 'rgba(0,229,255,0.12)',  anim: 0 },
  ]

  return (
    <>
      {shapes.map((s, i) => {
        const base = {
          position: 'fixed',
          top: s.top, left: s.left, right: s.right,
          width: s.size, height: s.size,
          zIndex: 1, pointerEvents: 'none',
          animation: `fshape${s.anim} ${s.dur} ${s.delay} ease-in-out infinite alternate`,
          willChange: 'transform',
        }

        if (s.type === 'ring') return (
          <div key={i} style={{
            ...base, borderRadius: '50%',
            border: `1px solid ${s.color}`,
            boxShadow: `0 0 14px ${s.color}, inset 0 0 14px ${s.color}`,
            background: 'transparent',
          }} />
        )
        if (s.type === 'sq') return (
          <div key={i} style={{
            ...base,
            border: `1px solid ${s.color}`,
            boxShadow: `0 0 10px ${s.color}`,
            transform: `rotate(${20 + i * 7}deg)`,
            background: s.color.replace(/[\d.]+\)$/, '0.03)'),
          }} />
        )
        if (s.type === 'dia') return (
          <div key={i} style={{
            ...base,
            border: `1px solid ${s.color}`,
            transform: 'rotate(45deg)',
            boxShadow: `0 0 10px ${s.color}`,
            background: s.color.replace(/[\d.]+\)$/, '0.03)'),
          }} />
        )
        return null
      })}

      {/* Large orbital rings */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        width: 800, height: 800, borderRadius: '50%',
        border: '1px solid rgba(85,105,255,0.05)',
        transform: 'translate(-50%,-50%)',
        animation: 'orbital1 45s linear infinite',
        zIndex: 1, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        width: 550, height: 550, borderRadius: '50%',
        border: '1px solid rgba(0,229,255,0.06)',
        transform: 'translate(-50%,-50%)',
        animation: 'orbital2 32s linear infinite reverse',
        zIndex: 1, pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes fshape0 {
          from { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          to   { transform: translateY(-22px) rotate(8deg); opacity: 1; }
        }
        @keyframes fshape1 {
          from { transform: translateX(0px) rotate(0deg); opacity: 0.6; }
          to   { transform: translateX(18px) rotate(-10deg); opacity: 1; }
        }
        @keyframes fshape2 {
          from { transform: translate(0,0) rotate(0deg); opacity: 0.7; }
          to   { transform: translate(14px,-18px) rotate(12deg); opacity: 1; }
        }
        @keyframes orbital1 {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes orbital2 {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
      `}</style>
    </>
  )
}

/* ────────────────────────────────────────────────────
   Mouse Spotlight
──────────────────────────────────────────────────── */
function SectionSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.innerWidth < 768) return
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth)  * 100
      const y = (e.clientY / window.innerHeight) * 100
      el.style.background =
        `radial-gradient(circle at ${x}% ${y}%, rgba(85,105,255,0.045) 0%, transparent 55%)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={ref} style={{
      position: 'fixed', inset: 0, zIndex: 2,
      pointerEvents: 'none', transition: 'background 0.3s ease',
    }} />
  )
}

/* ────────────────────────────────────────────────────
   Section Divider — elegant gradient wave
──────────────────────────────────────────────────── */
function SectionDivider({ flip = false, variant = 0 }) {
  const paths = [
    {
      p1: 'M0,30 C240,70 480,0 720,40 C960,80 1200,10 1440,45 L1440,80 L0,80 Z',
      p2: 'M0,50 C360,15 720,65 1080,35 C1260,20 1380,55 1440,40 L1440,80 L0,80 Z',
    },
    {
      p1: 'M0,20 C180,60 540,0 900,50 C1100,75 1300,20 1440,40 L1440,80 L0,80 Z',
      p2: 'M0,45 C300,10 600,60 960,30 C1140,15 1350,50 1440,35 L1440,80 L0,80 Z',
    },
  ]
  const v = paths[variant % paths.length]
  const uid = `div${variant}${flip?'f':''}`

  return (
    <div style={{
      position: 'relative', height: 80, overflow: 'hidden',
      transform: flip ? 'scaleY(-1)' : 'none',
      zIndex: 2, pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id={`${uid}a`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"   stopColor="rgba(85,105,255,0.07)" />
            <stop offset="50%"  stopColor="rgba(0,229,255,0.05)" />
            <stop offset="100%" stopColor="rgba(124,77,255,0.07)" />
          </linearGradient>
          <linearGradient id={`${uid}b`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"   stopColor="rgba(0,229,255,0.04)" />
            <stop offset="100%" stopColor="rgba(85,105,255,0.04)" />
          </linearGradient>
        </defs>
        <path d={v.p1} fill={`url(#${uid}a)`} />
        <path d={v.p2} fill={`url(#${uid}b)`} />
      </svg>
    </div>
  )
}

/* ────────────────────────────────────────────────────
   Main App
──────────────────────────────────────────────────── */
export default function App() {
  return (
    <div style={{
      background: 'var(--bg)',
      color: 'var(--text)',
      minHeight: '100vh',
      position: 'relative',
    }}>

      {/* Background layers */}
      <MeshBackground />
      <ParticleField />
      <FloatingShapes />
      <SectionSpotlight />
      <CursorGlow />

      {/* UI chrome */}
      <ScrollProgress />
      <Loader />

      {/* Navbar */}
      <div style={{ position: 'relative', zIndex: 50 }}>
        <Navbar />
      </div>

      {/* Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <SectionDivider variant={0} />
        <About />
        <SectionDivider flip variant={1} />
        <Skills />
        <SectionDivider variant={0} />
        <Projects />
        <SectionDivider flip variant={1} />
        <Experience />
        <SectionDivider variant={0} />
        <Contact />
      </main>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Footer />
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; }
        *, *::before, *::after { box-sizing: border-box; }

        /* Scanlines overlay */
        main::before {
          content: '';
          position: fixed; inset: 0; z-index: 4;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 3px,
            rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px
          );
          pointer-events: none;
        }

        /* Edge vignette */
        main::after {
          content: '';
          position: fixed; inset: 0; z-index: 4;
          background: radial-gradient(
            ellipse at center,
            transparent 55%, rgba(0,0,0,0.42) 100%
          );
          pointer-events: none;
        }

        section { position: relative; isolation: isolate; }

        /* Hide cursor on desktop — show custom dot */
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #5569ff, #00e5ff);
          border-radius: 4px;
        }

        /* Selection */
        ::selection {
          background: rgba(85,105,255,0.42);
          color: #fff;
        }
      `}</style>
    </div>
  )
}