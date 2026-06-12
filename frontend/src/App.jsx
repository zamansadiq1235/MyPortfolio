import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

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
      <Background />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Loader />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}