import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { sendContactMessage } from '../api/api'
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock
} from 'react-icons/fi'

// const API = import.meta.env.VITE_API_URL || 'http://localhost:9000/api'
console.log('API URL:', import.meta.env.VITE_API_URL)

const contactDetails = [
  {
    icon: <FiMail size={18} strokeWidth={2.5} />,
    label: 'Email Me',
    value: 'zamansadiqofficial@gmail.com',
    href: 'mailto:zamansadiqofficial@gmail.com',
  },
  {
    icon: <FiPhone size={18} strokeWidth={2.5} />,
    label: 'Phone',
    value: '+92 322 9462358',
    href: 'tel:+923285438340',
  },
  {
    icon: <FiMapPin size={18} strokeWidth={2.5} />,
    label: 'Location',
    value: 'Bahawalpur, Pakistan',
    href: null,
  },
  {
    icon: <FiClock size={18} strokeWidth={2.5} />,
    label: 'Timezone',
    value: 'PKT (UTC+5)',
    href: null,
  },
]

const inputStyle = {
  width: '100%', padding: '14px 18px',
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 14, color: 'var(--text)',
  fontFamily: 'var(--font-body)', fontSize: 14,
  outline: 'none', transition: 'all 0.25s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')
  const ref = useReveal()

  const handleChange = e =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('loading')
  setError('')

  try {
    await sendContactMessage(form)     // ← calls your Express API
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  } catch (err) {
    setStatus('error')
    setError(err.message)             // ← shows backend error to user
  }
}

  return (
    <section id="contact" style={{ padding: '110px 60px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

      <div ref={ref} className="reveal">
        <div className="section-label">Let's connect</div>
        <h2 style={{
          fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,5vw,60px)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 60,
        }}>
          Get In <span style={{ color: 'var(--accent)' }}>Touch</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }}
        className="contact-grid">

        {/* Left info */}
        <div className="reveal">
          <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
            Let's work together
          </h3>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 36 }}>
            I'm currently open to new opportunities. Whether you have a project in mind
            or just want to say hello — my inbox is always open.
          </p>
          {contactDetails.map(({ icon, label, value, href }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 1, letterSpacing: '0.05em' }}>{label}</div>
                {href
                  ? <a href={href} style={{ fontSize: 14, color: 'var(--text)', textDecoration: 'none' }}>{value}</a>
                  : <div style={{ fontSize: 14 }}>{value}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Right form */}
        <div className="reveal reveal-d2">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', padding: '60px 20px', textAlign: 'center',
                  background: 'rgba(74,222,128,0.06)', borderRadius: 20,
                  border: '1px solid rgba(74,222,128,0.2)',
                  gap: 14,
                }}>
                <div style={{ fontSize: 52 }}>✅</div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 700, color: '#4ade80' }}>
                  Message Sent!
                </div>
                <div style={{ color: 'var(--muted)', fontSize: 14 }}>
                  Thanks! I'll get back to you within 24 hours.
                </div>
                <button onClick={() => setStatus('idle')}
                  style={{ marginTop: 8, background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: 14, fontFamily: 'var(--font-body)' }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Your Name
                  </label>
                  <input name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" required style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'rgba(108,99,255,0.05)'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--surface)'; e.target.style.boxShadow = 'none' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Email Address
                  </label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="john@example.com" required style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'rgba(108,99,255,0.05)'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--surface)'; e.target.style.boxShadow = 'none' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Message
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..." required
                    rows={5} style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'rgba(108,99,255,0.05)'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--surface)'; e.target.style.boxShadow = 'none' }} />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: 13 }}>⚠ {error}</p>
                )}

                <button type="submit" disabled={status === 'loading'}
                  style={{
                    padding: 16, background: 'var(--accent)', color: '#fff',
                    fontWeight: 600, fontSize: 14, border: 'none', borderRadius: 14,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-body)', transition: 'all 0.25s',
                    boxShadow: '0 0 24px var(--glow)',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px var(--glow)' } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 24px var(--glow)' }}>
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
