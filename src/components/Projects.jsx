import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, TestTube, Zap } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Test Automation Framework',
      description: 'A comprehensive test automation Hybrid Advance level framework built with Selenium and Java, implementing Page Object Model pattern. Features include parallel execution, cross-browser testing, and detailed reporting.',
      tech: ['Java', 'Selenium', 'TestNG', 'Maven'],
      icon: <Code size={32} />,
      color: '#3b82f6'
    },
    {
      title: 'API Testing Suite',
      description: 'Robust API testing framework using REST Assured and Postman. Includes automated test cases for REST APIs with comprehensive validation and reporting capabilities.',
      tech: ['Java', 'REST Assured', 'Postman', 'Maven'],
      icon: <TestTube size={32} />,
      color: '#10b981'
    },
    {
      title: 'Cypress E2E Framework',
      description: 'End-to-end testing framework built with Cypress for modern web applications. Features include visual regression testing, CI/CD integration, and comprehensive test coverage.',
      tech: ['JavaScript', 'Cypress', 'Mocha', 'Chai'],
      icon: <Zap size={32} />,
      color: '#f59e0b'
    },
    {
      title: 'Playwright MCP E2E Framework',
      description: 'End-to-end testing framework built with Playwright MCP (Gemini, Claude, Cursor AI) for modern web applications. Features include visual regression testing, CI/CD integration, and comprehensive test coverage.',
      tech: ['JavaScript', 'TypeScript', 'Playwright', '@playwright/test'],
      icon: <Zap size={32} />,
      color: '#f59e0b'
    },
    {
      title: 'CI/CD Test Integration',
      description: 'Seamless integration of automated tests with CI/CD pipelines using Jenkins and GitHub Actions. Includes Docker-based test execution and automated report generation.',
      tech: ['Jenkins', 'GitHub Actions', 'Docker'],
      icon: <Zap size={32} />,
      color: '#8b5cf6'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-icon" style={{ color: project.color }}>
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {/* <motion.a
                  href="#"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                  Code
                </motion.a>
                <motion.a
                  href="#"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={18} />
                  Demo
                </motion.a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects