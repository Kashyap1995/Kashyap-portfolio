import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate() // ✅ correct

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">

        {/* Profile */}
        <motion.div
          className="home-profile-top"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="home-profile-frame">
            <img
              src="/profile-hero.png"
              alt="Kashyap Dave"
              className="home-profile-img"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="home-cert-strip">
            <Trophy size={18} />
            <span><strong>ISTQB CTFL</strong> Certified</span>
          </div>

          <p className="greeting">Hi, I'm</p>
          <h1 className="name">Kashyap Dave</h1>

          <h2 className="role">
            Senior QA Engineer | AI Driven Testing | Automation
          </h2>

          <p className="home-headline">
            Turning Bugs Into Better Software — Now With AI
          </p>

          <div className="home-details">
            <p>
              Senior QA Engineer with 7+ years in automation, CI/CD, and enterprise applications.
            </p>
            <p>
              Specialized in AI-powered QA workflows using Playwright, Cypress, Selenium & AI tools.
            </p>
          </div>

          {/* Skills */}
          <div className="home-skill-chips">
            {skillChips.map((label) => (
              <span key={label} className="home-chip">{label}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="cta-buttons">
            <motion.button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
            >
              Hire Me →
            </motion.button>

            {/* ✅ FINAL FIX */}
            <button
              className="btn-primary btn-cv"
              onClick={() => navigate('/cv')}
            >
              View CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home