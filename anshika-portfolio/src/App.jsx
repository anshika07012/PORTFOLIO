import "./App.css";
import quriScreenshot from "./image.png";
import profilePortrait from "./image_2.jpeg";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ANSHIKA SINGH</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="https://github.com/anshika07012" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/anshika-singh-10a448378" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-top-tag">COMPUTER SCIENCE & ENGINEERING • SRMCEM</div>
          
          <div className="hero-main-content">
            <div className="hero-text-block">
              <h1>
                I build. <br />
                <span>I learn.</span> <br />
                I keep going.
              </h1>
              <p className="hero-description">
                A CSE undergraduate working passionately towards her dreams and building practical software applications.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="primary-button">Explore Work ↗</a>
                <a href="https://github.com/anshika07012" target="_blank" rel="noreferrer" className="secondary-button">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/anshika-singh-10a448378" target="_blank" rel="noreferrer" className="secondary-button">LinkedIn ↗</a>
              </div>
            </div>

            {/* PORTRAIT PHOTO CONTAINER */}
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img 
                  src={profilePortrait} 
                  alt="Anshika Singh" 
                  className="hero-portrait-img" 
                />
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span> Scroll to discover
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <span>01</span>
            <h2>About me</h2>
          </div>
          <div className="about-grid">
            <div className="about-intro">
              <p>
                I am heavily driven towards technical challenges, combining a quick-learning mindset 
                with an innate curiosity to understand how things work under the hood.
              </p>
              <p>
                Beyond code, I pride myself on being an attentive listener and a clear communicator. 
                I thrive in high-pressure situations, keeping a cool head and structured perspective when 
                challenges arise—all while holding high aspirations to build impactful solutions.
              </p>
            </div>
            <div className="about-details">
              <div className="detail-item">
                <span>Status</span>
                <strong>B.Tech CSE Student (2nd Year)</strong>
              </div>
              <div className="detail-item">
                <span>Mindset</span>
                <strong>Quick Learner & Tech-Driven</strong>
              </div>
              <div className="detail-item">
                <span>Strengths</span>
                <strong>Calm Under Pressure & Clear Communicator</strong>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & STATS */}
        <section className="section education-section">
          <div className="section-heading">
            <span>02</span>
            <h2>Education & Academics</h2>
          </div>
          <div className="education-card">
            <div>
              <p className="card-label">2025 — 2029</p>
              <h3>Bachelor of Technology</h3>
              <p className="card-subtitle">Computer Science & Engineering</p>
              <p className="college">SRM CEM · Lucknow</p>
            </div>
            <div className="academic-stats">
              <div>
                <strong>8.58</strong>
                <span>1st Year CGPA</span>
              </div>
              <div>
                <strong>8.77</strong>
                <span>Sem 1 SGPA</span>
              </div>
              <div>
                <strong>8.60</strong>
                <span>Sem 2 SGPA</span>
              </div>
            </div>
          </div>
          <div className="school-stats">
            <div>
              <strong>96%</strong>
              <span>Class X Board</span>
            </div>
            <div>
              <strong>89%</strong>
              <span>Class XII Board</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span>03</span>
            <h2>Selected Work</h2>
          </div>
          <div className="projects-grid">
            
            {/* QURIO */}
            <article className="project-card featured-project">
              <div className="project-number">01</div>
              <div className="project-content">
                <p className="project-type">FEATURED PLATFORM · SIH 2026</p>
                <h3>QURIO</h3>
                <p>
                  An AI-assisted quantum learning platform and circuit builder designed to 
                  simplify complex quantum algorithms through interactive simulation and visualization.
                </p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Vite</span>
                  <span>FastAPI</span>
                  <span>Qiskit</span>
                </div>
                <div className="project-links">
                  <a href="#contact" className="project-link">Live Demo ↗</a>
                  <a href="https://github.com/anshika07012" target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
                </div>
              </div>
              
              {/* QURIO UI SCREENSHOT CONTAINER */}
              <div className="project-screenshot-container">
                <img 
                  src={quriScreenshot} 
                  alt="QURIO Quantum Circuit Builder Interface" 
                  className="project-screenshot" 
                />
              </div>
            </article>

            {/* PLACEMENT PREDICTOR */}
            <article className="project-card">
              <div className="project-number">02</div>
              <div className="project-content">
                <p className="project-type">MACHINE LEARNING APP</p>
                <h3>Placement Prediction App</h3>
                <p>
                  A predictive web application built using Python, scikit-learn, and Streamlit 
                  to evaluate student placement likelihood using academic performance markers.
                </p>
                <div className="tech-stack">
                  <span>Python</span>
                  <span>Scikit-Learn</span>
                  <span>Streamlit</span>
                  <span>Pandas</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/anshika07012" target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Technical Arsenal</h2>
          </div>
          <div className="skills-list">
            <div className="skill-row">
              <span>01</span>
              <h3>Languages</h3>
              <p>Python · C · C++ · JavaScript</p>
            </div>
            <div className="skill-row">
              <span>02</span>
              <h3>Frontend & UI</h3>
              <p>HTML · CSS · React · Vite</p>
            </div>
            <div className="skill-row">
              <span>03</span>
              <h3>Tools & Workflow</h3>
              <p>Git · GitHub · VS Code</p>
            </div>
          </div>
        </section>

        {/* PERSONALITY SECTION */}
        <section className="section personal-section">
          <div className="section-heading">
            <span>05</span>
            <h2>Off the Screen</h2>
          </div>
          <div className="personal-card">
            <p className="personal-quote">
              &ldquo;When I am not debugging code or tweaking UI layouts, you will usually find me 
              exploring new things, lost in music, or singing along whenever the mood strikes—always 
              keeping life a little curious and creative.&rdquo;
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="contact-label">06 · GET IN TOUCH</p>
          <h2>Let's build something <span>meaningful.</span></h2>
          <div className="contact-buttons-container" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:your-email@example.com" className="contact-button">Say Hello ↗</a>
            <a href="https://www.linkedin.com/in/anshika-singh-10a448378" target="_blank" rel="noreferrer" className="contact-button" style={{ background: '#333' }}>LinkedIn ↗</a>
            <a href="https://github.com/anshika07012" target="_blank" rel="noreferrer" className="contact-button" style={{ background: '#333' }}>GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Anshika Singh</span>
        <span>Built with React & Passion</span>
      </footer>
    </div>
  );
}

export default App;