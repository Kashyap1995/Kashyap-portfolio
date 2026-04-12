import { motion } from 'framer-motion'
import { Target, Users, Rocket, Award } from 'lucide-react'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <Rocket size={32} />,
      title: 'Automation Frameworks',
      description: 'Built robust test automation frameworks from scratch',
    },
    {
      icon: <Target size={32} />,
      title: 'CI/CD Integration',
      description: 'Seamlessly integrated tests with CI/CD pipelines',
    },
    {
      icon: <Users size={32} />,
      title: 'Team Leadership',
      description: 'Led smoke and regression testing cycles effectively',
    },
    {
      icon: <Award size={32} />,
      title: 'Mentorship',
      description: 'Mentored junior QA engineers and shared knowledge',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="about-text">
            With 7+ years of experience in Quality Assurance, I specialize
            in building comprehensive test automation frameworks and ensuring
            software quality through systematic testing approaches. My expertise
            spans across manual testing, automation frameworks, API testing, and
            CI/CD integration.
          </p>
          <p className="about-text">
            I have a proven track record of developing automation frameworks from
            scratch, integrating them seamlessly with CI/CD pipelines, and leading
            test cycles that ensure product reliability. Additionally, I'm passionate
            about mentoring the next generation of QA professionals.
          </p>
        </motion.div>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="highlight-icon">{highlight.icon}</div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About