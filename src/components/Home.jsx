import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import './Home.css'

const skillChips = [
  'ISTQB CTFL',
  'Enterprise QA',
  'AI Tool Builder',
  'Vibe Coder',
  'Team Mentor',
  'Agile · Scrum',
]

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="home-profile-top"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="home-profile-frame">
            <img
              src="/profile-hero.png"
              alt="Kashyap Dave"
              className="home-profile-img"
              width={800}
              height={600}
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="home-cert-strip"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <Trophy size={18} className="home-cert-icon" aria-hidden />
            <span className="home-cert-text">
              <strong>ISTQB CTFL</strong> Certified
            </span>
          </motion.div>

          <motion.p
            className="greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="name"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Kashyap Dave
          </motion.h1>

          <motion.h2
            className="role"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="role-title">Senior QA Engineer</span>
            <span className="role-sep"> | </span>
            <span className="role-ai">AI Driven Testing</span>
            <span className="role-sep"> | </span>
            <span className="role-ai">Automation</span>
          </motion.h2>

          <motion.p
            className="home-headline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
          >
            Turning Bugs Into Better Software — Now With AI
          </motion.p>

          <motion.div
            className="home-details"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
          >
            <p>
              I&apos;m a <strong>Senior QA Engineer</strong> with <strong>7+ years</strong> of
              experience in enterprise web apps, automation, and complex delivery environments.
              I own quality end-to-end across discovery, test design, automation, CI/CD, and
              release.
            </p>
            <p>
              What makes me different: I <em>build AI-assisted workflows that make testing smarter</em>
              — from AI-powered QA with <strong>Jira &amp; Zephyr</strong>, <strong>Gemini</strong>, and{' '}
              <strong>GitHub Copilot</strong>, to <strong>Playwright</strong> automation with MCP,
              and <strong>Allure</strong> reporting. Built using <span className="home-vibe">Vibe Coding</span>{' '}
              with modern AI IDEs — production-ready patterns my teams use every day.
            </p>
            <p>
              {/* Ensure the profile picture fully fills a square box with no overflow and matching width/height */}
              <div
                className="home-pic-wrapper"
                style={{
                  width: '180px',
                  height: '180px',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  background: '#f5f6fa'
                }}
              >
                <img
                  src="/profile.jpg" // Use your correct pic path
                  alt="Kashyap Dave"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    display: 'block'
                  }}
                  className="home-pic"
                />
              </div>
        
              <p>My mission: make QA smarter, faster, and measurable through AI and
              automation.</p>
            </p>
          </motion.div>

          <motion.div
            className="home-skill-chips"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.55 }}
          >
            {skillChips.map((label) => (
              <span key={label} className="home-chip">
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
          >
            <motion.button
              className="btn-primary btn-hire"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me — Let&apos;s Talk →
            </motion.button>
            {/* <motion.a
              href="#"
              className="btn-secondary"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="visual-grid">
            <motion.div
              className="visual-card card-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="card-icon">✓</div>
            </motion.div>
            <motion.div
              className="visual-card card-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="card-icon">⚡</div>
            </motion.div>
            <motion.div
              className="visual-card card-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="card-icon">🔧</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="background-glow"></div>
    </section>
  )
}

export default Home