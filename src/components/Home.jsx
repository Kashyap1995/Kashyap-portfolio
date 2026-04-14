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
  const navigate = useNavigate() // ✅ FIXED

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          transition={{ duration: 0.7 }}
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
          transition={{ duration: 0.8 }}
        >
          <div className="home-cert-strip">
            <Trophy size={18} className="home-cert-icon" />
            <span>
              <strong>ISTQB CTFL</strong> Certified
            </span>
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
              I'm a <strong>Senior QA Engineer</strong> with <strong>7+ years</strong> of
              experience in enterprise web apps, automation, and CI/CD.
            </p>

            <p>
              I build AI-powered QA workflows using Jira, Gemini, GitHub Copilot,
              Playwright MCP, and Allure reporting.
            </p>

            <p>
              My mission: make QA smarter, faster, and measurable through AI and automation.
            </p>
          </div>

          {/* Skills */}
          <div className="home-skill-chips">
            {skillChips.map((label) => (
              <span key={label} className="home-chip">
                {label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="cta-buttons">
            <motion.button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
            >
              Hire Me — Let's Talk →
            </motion.button>

            <button
              className="btn-primary btn-cv"
              onClick={() => navigate('/cv')} // ✅ WORKING
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