import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CV.css';

function CV() {
  const navigate = useNavigate();

  return (
    <div className="cv-container">

      {/* Buttons */}
      <div className="cv-actions">
        <button onClick={() => navigate('/')}>⬅ Back to Portfolio</button>
        <button onClick={() => window.print()}>⬇ Save CV</button>
      </div>

      <div className="cv">

        {/* HEADER */}
        <div className="cv-header">
          <h1>Kashyap Dave</h1>
          <h3>Senior QA Analyst</h3>
          <p>📞 7383803552 / 8200739241</p>
          <p>✉ kkdave1995@gmail.com</p>
          <p>📍 Ahmedabad, India</p>
        </div>

        {/* ABOUT */}
        <section>
          <h2>About Me</h2>
          <p>
            7.5+ years in Software Quality Engineering specializing in Automation
            and AI-driven QA. Experienced in Selenium (Java), Cypress, Playwright,
            MCP, and API testing with REST Assured.
          </p>
          <p>
            Built AI-assisted automation workflows integrating Jira, Zephyr,
            Playwright MCP, and AI models to auto-generate test cases and Allure reports.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Manual Testing (E-commerce, Healthcare, Business domains)</li>
            <li>Automation: Selenium (Java), Cypress, Playwright</li>
            <li>API Testing: REST Assured, Postman</li>
            <li>CI/CD: Jenkins, GitHub Actions, Docker</li>
            <li>Performance Testing: JMeter</li>
            <li>Security Testing: OWASP ZAP, Burp Suite, Nmap</li>
            <li>Tools: Jira, Zephyr, ClickUp</li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2>Professional Experience</h2>

          <div className="job">
            <h4>Sr. QA Analyst — Krish Technolabs</h4>
            <span>Feb 2024 – Present | Ahmedabad</span>
            <ul>
              <li>Leading QA for web & mobile applications</li>
              <li>Magento, ReactJS & GraphQL testing</li>
              <li>Security, API & performance testing</li>
              <li>Built Cypress & Playwright automation frameworks</li>
            </ul>
          </div>

          <div className="job">
            <h4>Sr. QA Engineer — Plutus Pvt Ltd</h4>
            <span>Jan 2021 – Feb 2024 | Ahmedabad</span>
            <ul>
              <li>Led QA team and handled client communication</li>
              <li>Developed Selenium frameworks (POM, Data-driven)</li>
              <li>CI/CD integration using Jenkins</li>
              <li>API & UI automation testing</li>
            </ul>
          </div>

          <div className="job">
            <h4>QA Tester — CompuBrain</h4>
            <span>Sep 2018 – Jan 2021 | Ahmedabad</span>
            <ul>
              <li>Manual, UI, responsive & cross-browser testing</li>
              <li>Katalon Studio for regression testing</li>
            </ul>
          </div>

        </section>

        {/* PROJECTS */}
        <section>
          <h2>Key Projects</h2>

          <ul>
            <li><strong>HNAK Tech Upgrade:</strong> Magento + ReactJS app, full QA ownership</li>
            <li><strong>Galeries Lafayette:</strong> Adobe Commerce + Capillary integration</li>
            <li><strong>Bateel Automation:</strong> Selenium + CI/CD + Docker setup</li>
            <li><strong>POS Application:</strong> Payment validation, store workflows</li>
            <li><strong>AI Automation Framework:</strong> Jira + Playwright MCP integration</li>
          </ul>

        </section>

        {/* EDUCATION */}
        <section>
          <h2>Education</h2>
          <p><strong>MCA</strong> — Ahmedabad (2016–2018) | Grade: 7.34</p>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2>Certifications</h2>
          <ul>
            <li>ISTQB Foundation Level</li>
            <li>Scrum Master (Udemy)</li>
            <li>Gen AI Certification</li>
            <li>Project Management Certification</li>
          </ul>
        </section>

        {/* AWARDS */}
        <section>
          <h2>Awards</h2>
          <ul>
            <li>Bug Mania Competition Winner</li>
            <li>CI/CD GitHub Actions Recognition</li>
            <li>Best Garba Male Prize</li>
            <li>Carrom Competition Winner</li>
          </ul>
        </section>

        {/* STRENGTHS */}
        <section>
          <h2>Strengths</h2>
          <ul>
            <li>Leadership</li>
            <li>Quick Learner</li>
            <li>Multitasking</li>
            <li>Timely Delivery</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default CV;