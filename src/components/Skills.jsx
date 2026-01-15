import { motion } from 'framer-motion'
import { 
  ClipboardCheck, 
  Settings, 
  Code, 
  GitBranch, 
  Target, 
  Bug,
  Sparkles
} from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <ClipboardCheck size={40} />,
      title: 'Testing Methodologies',
      skills: [
        'Manual Testing',
        'Automation Testing',
        'API Testing',
        'Performance Testing',
        'Integration Testing',
        'Security Testing'
      ],
      color: '#10b981'
    },
    {
      icon: <Settings size={40} />,
      title: 'Automation Tools',
      skills: [
        'Selenium Java',
        'Cypress',
        'Playwright MCP',
        'Maven',
        'REST Assured & Postman',
        'JMeter'
      ],
      color: '#f59e0b'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'AI Automation Tools',
      skills: [
        'Testim',
        'Mabl',
        'Browserstack',
        'Katalon AI',
        'Gen AI Tools'
      ],
      color: '#a855f7'
    },
    {
      icon: <Code size={40} />,
      title: 'Programming Languages',
      skills: [
        'Java',
        'JavaScript',
        'TypeScript',
        'SQL'
      ],
      color: '#3b82f6'
    },
    {
      icon: <GitBranch size={40} />,
      title: 'CI/CD Tools',
      skills: [
        'GitHub Actions',
        'Jenkins',
        'GitLab CI',
        'Docker'
      ],
      color: '#8b5cf6'
    },
    {
      icon: <Target size={40} />,
      title: 'Testing Frameworks',
      skills: [
        'TestNG/JUnit',
        'Selenium + Cucumber (BDD)',
        'Data-Driven Testing',
        'Hybrid Advance POM Framework',
        'Mocha, Chai',
      ],
      color: '#ec4899'
    },
    {
      icon: <Bug size={40} />,
      title: 'Tools & Methodologies',
      skills: [
        'Agile /Scrum/Kanban',
        'Jira',
        'ClickUp',
        'TestRail',
        'Postman',
        'Swagger'
      ],
      color: '#14b8a6'
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="skill-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills