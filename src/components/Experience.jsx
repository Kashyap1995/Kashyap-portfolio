import { motion } from 'framer-motion'
import { Briefcase, Calendar, Sparkles } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'AI-Powered QA Automation',
      description:
        'An AI-driven test automation workflow: enter a Jira ID and the system fetches the user story from Jira with Zephyr integration. Gemini AI and GitHub Copilot analyze the story and generate comprehensive test cases—positive, negative, and edge scenarios. Includes dynamic story retrieval, AI-based test generation, Copilot-assisted development, an automated Playwright execution flow, Allure reports for results, and end-to-end QA with minimal manual effort.',
      techHighlight: 'Jira, Zephyr, Gemini AI, GitHub Copilot, Playwright, Allure Reports.',
      year: 'Ongoing',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Built Automation Frameworks from Scratch',
      description: 'Designed and developed comprehensive test automation frameworks using Selenium, Cypress, and Playwright. Implemented Page Object Model (POM) and Data-Driven Testing approaches for maintainable and scalable test suites.',
      year: 'Ongoing',
      icon: <Briefcase size={24} />
    },
    {
      title: 'CI/CD Pipeline Integration',
      description: 'Integrated automated test suites with CI/CD pipelines using Jenkins and GitHub Actions. Implemented Docker containers for test report generation and ensured seamless test execution in continuous integration workflows.',
      year: 'Ongoing',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Led Smoke & Regression Cycles',
      description: 'Orchestrated and managed comprehensive smoke and regression testing cycles for multiple product releases. Coordinated with cross-functional teams to ensure quality gates and timely delivery.',
      year: '2020 - Present',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Mentored Junior QA Engineers',
      description: 'Provided guidance and mentorship to junior QA engineers, sharing best practices in test automation, framework design, and quality assurance methodologies. Conducted knowledge-sharing sessions and code reviews.',
      year: '2021 - Present',
      icon: <Briefcase size={24} />
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience Highlights</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-year">
                    <Calendar size={16} />
                    {exp.year}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
                {exp.techHighlight && (
                  <p className="experience-tech-highlight">
                    <span className="experience-tech-label">Tech:</span>{' '}
                    {exp.techHighlight}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience