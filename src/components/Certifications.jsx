import { motion } from 'framer-motion'
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Bug,
  KanbanSquare,
  Sparkles,
  TestTube,
} from 'lucide-react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'ISTQB Certified Tester Foundation Level (CTFL)',
      issuer: 'ISTQB',
      icon: <BadgeCheck size={40} />,
    },
    {
      title: 'Scrum Master',
      issuer: 'Udemy',
      icon: <KanbanSquare size={40} />,
    },
    {
      title: 'Project Management',
      issuer: 'Great Learning',
      icon: <Briefcase size={40} />,
    },
    {
      title: 'Bug Mania Competition — Won',
      issuer: 'Competition',
      icon: <Bug size={40} />,
    },
    {
      title: 'Cypress Automation',
      issuer: 'Udemy',
      icon: <TestTube size={40} />,
    },
    {
      title: 'Gen AI in Software Testing',
      issuer: 'Udemy',
      icon: <Sparkles size={40} />,
    },
    {
      title: 'Google Prompting Essentials',
      issuer: 'Google',
      icon: <BookOpen size={40} />,
    },
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="cert-icon-wrapper">
                <div className="cert-icon">{cert.icon}</div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications