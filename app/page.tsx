export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">DEVIN LEE</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="greeting">SENIOR DATA ANALYST</p>

          <h1>
            Devin <span>Lee</span>
          </h1>

          <h2>Data Analytics • Automation • Business Intelligence</h2>

          <p className="hero-description">
            I turn operational and performance data into actionable
            insights through analytics, automation, and data
            visualization.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h3>50%+</h3>
          <p>Manual Reporting Reduced</p>
        </div>

        <div className="stat">
          <h3>4</h3>
          <p>Internal Data Applications</p>
        </div>

        <div className="stat">
          <h3>85–90%</h3>
          <p>Reporting Coverage</p>
        </div>

        <div className="stat">
          <h3>Millions</h3>
          <p>Rows Processed</p>
        </div>
      </section>

      {/* ABOUT */}
{/* ABOUT */}
<section id="about" className="section">
  <div className="about-grid">
    <div>
      <p className="section-label">ABOUT ME</p>

      <h2>Data-driven problem solver.</h2>
    </div>

    <div className="about-content">
      <p>
        Senior Data Analyst with cross-industry experience across
        Oil & Gas, Heavy Equipment, and E-Commerce. I specialize in
        operational and performance analytics, data quality,
        reporting automation, dashboard development, and KPI
        monitoring.
      </p>

      <p>
        I enjoy transforming complex datasets into reliable
        reporting systems and actionable insights that help teams
        make better business decisions.
      </p>

      <div className="about-highlights">
        <div>
          <strong>SQL</strong>
          <span>Data Analysis</span>
        </div>

        <div>
          <strong>Python</strong>
          <span>Automation</span>
        </div>

        <div>
          <strong>Power BI</strong>
          <span>Business Intelligence</span>
        </div>

        <div>
          <strong>ETL</strong>
          <span>Data Automation</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SKILLS */}
<section id="skills" className="section">
  <p className="section-label">SKILLS</p>

  <h2>Tools & Expertise</h2>

  <div className="skills-category-grid">

    <div className="skills-category">
      <h3>Data Analytics</h3>

      <div className="skill-tags">
        <span>SQL</span>
        <span>Python</span>
        <span>Advanced Excel</span>
      </div>
    </div>

    <div className="skills-category">
      <h3>Business Intelligence</h3>

      <div className="skill-tags">
        <span>Power BI</span>
        <span>DAX</span>
        <span>Data Modeling</span>
        <span>Looker Studio</span>
      </div>
    </div>

    <div className="skills-category">
      <h3>Data Quality & Automation</h3>

      <div className="skill-tags">
        <span>Data Validation</span>
        <span>Data Cleaning</span>
        <span>ETL Automation</span>
        <span>Google Apps Script</span>
      </div>
    </div>

    <div className="skills-category">
      <h3>Tools</h3>

      <div className="skill-tags">
        <span>Git</span>
        <span>Google Workspace</span>
        <span>Microsoft PowerPoint</span>
        <span>SAP ECC</span>
      </div>
    </div>

  </div>
</section>

{/* EXPERIENCE */}
<section id="experience" className="section">
  <p className="section-label">EXPERIENCE</p>

  <h2>Professional Journey</h2>

  <div className="experience-list">

    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3>Data Analyst</h3>
          <p className="company">PT. Kawan Lama Group</p>
        </div>

        <span className="period">
          July 2026 – Present
        </span>
      </div>

      <p className="experience-description">
        Manage data requests, Power BI dashboards, data validation,
        reconciliation, and data processing across sales, customer,
        and operational datasets.
      </p>

      <div className="experience-tags">
        <span>SQL</span>
        <span>Python</span>
        <span>Power BI</span>
        <span>SAP ECC</span>
        <span>ETL</span>
      </div>
    </article>


    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3>Senior Data Analyst</h3>
          <p className="company">PT. Sany Makmur Perkasa</p>
        </div>

        <span className="period">
          March 2024 – July 2026
        </span>
      </div>

      <p className="experience-description">
        Led operational and performance analytics, developed
        Python-based automation, executive dashboards, data quality
        pipelines, and KPI monitoring systems.
      </p>

      <div className="experience-tags">
        <span>Python</span>
        <span>Power BI</span>
        <span>Looker Studio</span>
        <span>SQL</span>
        <span>Automation</span>
      </div>

      <div className="experience-impact">
        <strong>50%+</strong>
        <span>reduction in manual reporting workload</span>
      </div>
    </article>


    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3>Key Account Management FMCG</h3>
          <p className="company">Lazada Indonesia</p>
        </div>

        <span className="period">
          October 2022 – April 2023
        </span>
      </div>

      <p className="experience-description">
        Performed seller performance and campaign analysis using
        Excel and SQL-based reporting to support commercial
        decision-making.
      </p>

      <div className="experience-tags">
        <span>SQL</span>
        <span>Excel</span>
        <span>KPI Reporting</span>
        <span>Performance Analysis</span>
      </div>
    </article>


    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3>Junior Geologist</h3>
          <p className="company">
            Petrochina International Jabung, Ltd
          </p>
        </div>

        <span className="period">
          November 2019 – February 2020
        </span>
      </div>

      <p className="experience-description">
        Performed quantitative analysis on petrophysical and
        reservoir datasets, data validation, statistical analysis,
        and integration of geological and operational data.
      </p>

      <div className="experience-tags">
        <span>Data Analysis</span>
        <span>Statistics</span>
        <span>Data Validation</span>
      </div>
    </article>

  </div>
</section>

{/* PROJECTS */}
<section id="projects" className="section">
  <p className="section-label">SELECTED WORK</p>

  <h2>Projects & Impact</h2>

  <div className="project-showcase">

    <article className="project-featured">
      <div className="project-number">01</div>

      <div className="project-content">
        <p className="project-type">
          AUTOMATION · PYTHON
        </p>

        <h3>Operational Monitoring Automation</h3>

        <p>
          Developed a semi-real-time Python-based automation system
          to monitor resource availability, operational readiness,
          and utilization, supporting maintenance and resource
          planning.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>Automation</span>
          <span>Data Processing</span>
        </div>
      </div>
    </article>


    <article className="project-featured">
      <div className="project-number">02</div>

      <div className="project-content">
        <p className="project-type">
          BUSINESS INTELLIGENCE · POWER BI
        </p>

        <h3>Executive Performance Dashboards</h3>

        <p>
          Designed and maintained executive dashboards to monitor
          operational performance, resource availability, and KPI
          trends for management review and decision-making.
        </p>

        <div className="project-tags">
          <span>Power BI</span>
          <span>DAX</span>
          <span>Data Modeling</span>
          <span>Looker Studio</span>
        </div>
      </div>
    </article>


    <article className="project-featured">
      <div className="project-number">03</div>

      <div className="project-content">
        <p className="project-type">
          WEB APPLICATION · AUTOMATION
        </p>

        <h3>Internal Data Applications</h3>

        <p>
          Designed and deployed 4 internal web-based applications
          using Google Apps Script, HTML, CSS, and JavaScript to
          standardize and automate operational data collection.
        </p>

        <div className="project-impact">
          <strong>4</strong>
          <span>internal applications delivered</span>
        </div>

        <div className="project-tags">
          <span>Google Apps Script</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>
    </article>


    <article className="project-featured">
      <div className="project-number">04</div>

      <div className="project-content">
        <p className="project-type">
          DATA QUALITY · ETL
        </p>

        <h3>Data Validation & Cleaning Pipeline</h3>

        <p>
          Established automated data validation and cleaning
          pipelines to improve data accuracy, integrity, and
          reporting reliability across multiple departments.
        </p>

        <div className="project-impact">
          <strong>85–90%</strong>
          <span>reporting coverage achieved</span>
        </div>

        <div className="project-tags">
          <span>Python</span>
          <span>ETL</span>
          <span>Data Validation</span>
          <span>Data Cleaning</span>
        </div>
      </div>
    </article>


    <article className="project-featured">
      <div className="project-number">05</div>

      <div className="project-content">
        <p className="project-type">
          DATA SCIENCE · ANALYTICS
        </p>

        <h3>End-to-End Data Science Project</h3>

        <p>
          Executed an end-to-end analytics project covering data
          preparation, exploratory analysis, statistical analysis,
          predictive techniques, and insight generation to support
          business decision-making.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>Statistics</span>
          <span>EDA</span>
          <span>Predictive Analysis</span>
        </div>
      </div>
    </article>


    <article className="project-featured">
      <div className="project-number">06</div>

      <div className="project-content">
        <p className="project-type">
          REPORTING · PROCESS IMPROVEMENT
        </p>

        <h3>Reporting Workflow Automation</h3>

        <p>
          Improved reporting workflows by automating repetitive
          data preparation and reporting processes, reducing manual
          workload and improving reporting turnaround time.
        </p>

        <div className="project-impact">
          <strong>50%+</strong>
          <span>reduction in manual reporting workload</span>
        </div>

        <div className="project-tags">
          <span>Automation</span>
          <span>Python</span>
          <span>Power Automate</span>
          <span>Google Apps Script</span>
        </div>
      </div>
    </article>

  </div>
</section>

{/* EDUCATION */}
<section className="section">
  <p className="section-label">EDUCATION & CERTIFICATIONS</p>

  <h2>Background</h2>

  <div className="education-grid">

    <article className="education-card">
      <p className="education-type">EDUCATION</p>

      <h3>Trisakti University</h3>

      <p>
        Bachelor of Geological Engineering
      </p>

      <span>2015 – 2020</span>
    </article>

    <article className="education-card">
      <p className="education-type">DATA SCIENCE</p>

      <h3>Hacktiv8</h3>

      <p>
        Full-time Data Science Program
      </p>

      <span>September – December 2023</span>
    </article>

  </div>

  <div className="certifications">
    <h3>Certifications</h3>

    <div className="certification-list">
      <div>
        <span>01</span>
        <p>
          Data Scientist Project-Based Internship Program –
          ID/x Partners
        </p>
        <small>2024</small>
      </div>

      <div>
        <span>02</span>
        <p>
          BCG Data Science Job Simulation – Forage
        </p>
        <small>2023</small>
      </div>

      <div>
        <span>03</span>
        <p>
          Python Certification – HackerRank
        </p>
        <small>2023</small>
      </div>
    </div>
  </div>
</section>

{/* CONTACT */}
<section id="contact" className="section contact">
  <p className="section-label">CONTACT</p>

  <h2>Let's Connect</h2>

  <p className="section-text">
    Interested in data analytics, automation, and business
    intelligence? Feel free to get in touch.
  </p>

  <div className="contact-links">
    <a
      href="mailto:your@email.com"
      className="contact-link"
    >
      <span>Email</span>
      <strong>lee.devinlee14@gmail.com</strong>
    </a>

    <a
      href="https://www.linkedin.com/in/devin-lee-5566b6206/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      <span>LinkedIn</span>
      <strong>View Profile ↗</strong>
    </a>

    <a
      href="https://github.com/devinlee14"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      <span>GitHub</span>
      <strong>View Profile ↗</strong>
    </a>
  </div>
</section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Devin Yaung Lee. All rights reserved.</p>
      </footer>
    </main>
  );
}