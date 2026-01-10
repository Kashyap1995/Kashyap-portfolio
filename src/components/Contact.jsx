import { motion } from 'framer-motion'
import { Mail, Linkedin, ArrowRight, FileText } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-intro">
              <ArrowRight size={24} className="arrow-icon" />
              <h3 className="contact-subtitle">Get in Touch</h3>
            </div>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a conversation about quality assurance, test automation,
              and software testing best practices.
            </p>
          </motion.div>

          <motion.div
            className="contact-options"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/kashyap-dave-b82153154?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link linkedin"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-link-icon">
                <Linkedin size={24} />
              </div>
              <span className="contact-link-text">Connect on LinkedIn</span>
              <ArrowRight size={20} className="contact-link-arrow" />
            </motion.a>

            <motion.a
              href="mailto:kkdave1995@gmail.com"
              className="contact-link email"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-link-icon">
                <Mail size={24} />
              </div>
              <span className="contact-link-text">kkdave1995@gmail.com</span>
              <ArrowRight size={20} className="contact-link-arrow" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="recent-bytes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="bytes-title">Recent Bytes</h3>
          <div className="bytes-content">
            <FileText size={24} className="bytes-icon" />
            <p className="bytes-text">
              Exploring the latest trends in test automation and AI-driven testing.
              Stay tuned for insights and updates!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact