import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import './Home.css'

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
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Kashyap Dave
          </motion.h1>

          <motion.h2
            className="role"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Senior QA Engineer
          </motion.h2>

          <motion.p
            className="tagline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            7.5+ years of experience in Quality Assurance, Automation Testing,
            and CI/CD Integration. Building robust test frameworks and ensuring
            software excellence through systematic testing methodologies.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Say Hi!
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