import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CV from './CV'

import './App.css'

// 🔹 Portfolio Page
function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'certifications',
        'contact'
      ]

      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-page">
      <Navigation activeSection={activeSection} />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Scroll to Top */}
      <motion.button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrollY > 300 ? 1 : 0,
          scale: scrollY > 300 ? 1 : 0
        }}
      >
        ↑
      </motion.button>
    </div>
  )
}

// 🔹 Main App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  )
}

export default App