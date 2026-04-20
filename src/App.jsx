import './App.css';

function App() {
  return (
    <div className="portfolio-root">
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <span className="logo-mark">JC</span>
            <span className="logo-text">Joan Çako</span>
          </div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#why">Why me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn-consult">Let's talk</a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Web Developer</span>
              <h1 className="hero-title">
                Hi, I'm Joan Çako
                <span className="highlight">I build calm, modern web experiences.</span>
              </h1>
              <p className="hero-desc">
                I focus on HTML, CSS, and React basics. I enjoy turning ideas into clean,
                responsive interfaces and learning something new on every build.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn-main">See Projects</a>
                <a href="#contact" className="btn-alt">Contact Me</a>
              </div>
              <div className="hero-meta">
                <span>Junior web developer</span>
                <span>Open to internships and junior roles</span>
                <span>Based in Tirana</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-inner">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">19</span>
                  <span className="stat-label">Years old</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Year learning</span>
                </div>
                <div className="stack">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Git</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-band">
            <div className="section-inner">
              <span>Currently building portfolio-ready mini apps and polishing UI details.</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-kicker">About</p>
              <h2 className="section-title">Curious, consistent, and design-aware.</h2>
              <p className="section-subtitle">
                I’m a 19-year-old developer from Tirana who loves building sleek,
                practical interfaces. I care about clarity, spacing, and friendly UX.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <h3>Strengths</h3>
                <p>
                  HTML/CSS, basic React and JavaScript, plus a good eye for layout and
                  clean component structure.
                </p>
              </div>
              <div className="about-card">
                <h3>Also learning</h3>
                <p>
                  API integration, Node.js basics, and security testing workflows with
                  tools like Burp Suite.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section value-section" id="why">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-kicker">Why me</p>
              <h2 className="section-title">Ready for junior roles.</h2>
              <p className="section-subtitle">
                I focus on clean UI, clear communication, and steady delivery.
              </p>
            </div>
            <div className="value-grid">
              <div className="value-card">
                <h3>Clean UI fundamentals</h3>
                <p>
                  I care about spacing, typography, and a layout that reads well on
                  every screen size.
                </p>
                <span className="value-tag">Design basics</span>
              </div>
              <div className="value-card">
                <h3>Reliable and consistent</h3>
                <p>
                  I communicate clearly, ask the right questions, and keep work moving
                  until it is done.
                </p>
                <span className="value-tag">Team friendly</span>
              </div>
              <div className="value-card">
                <h3>Fast learner mindset</h3>
                <p>
                  I learn by building, shipping, and improving. I enjoy feedback and
                  apply it quickly.
                </p>
                <span className="value-tag">Growth focused</span>
              </div>
            </div>
            <div className="value-callout">
              <div>
                <h3>Looking for my first junior opportunity.</h3>
                <p>
                  If you need a motivated developer who can grow fast, I am ready to
                  contribute.
                </p>
              </div>
              <a className="btn-main" href="#contact">Hire me</a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-kicker">Skills</p>
              <h2 className="section-title">Focused on the web essentials.</h2>
            </div>
            <div className="skills-grid">
              <span className="skill-pill">HTML5</span>
              <span className="skill-pill">CSS3</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">React (basics)</span>
              <span className="skill-pill">Responsive Design</span>
              <span className="skill-pill">API Integration</span>
              <span className="skill-pill">Node.js (basics)</span>
              <span className="skill-pill">Web Security (basics)</span>
              <span className="skill-pill">Git & GitHub</span>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-kicker">Projects</p>
              <h2 className="section-title">Small builds, clear outcomes.</h2>
              <p className="section-subtitle">
                These are practice projects that show clean UI, solid HTML/CSS, and
                JavaScript basics. Demo links are included. Repos available on request.
              </p>
            </div>
            <div className="projects-grid">
              <article className="project-card">
                <div className="project-header">
                  <h3>TaskFlow - Todo App</h3>
                  <span className="project-tag">HTML/CSS/JS</span>
                </div>
                <p>
                  A clean task manager with CRUD actions, localStorage persistence, and
                  quick filters. Focused on smooth UX and fast interaction.
                </p>
                <ul className="project-list">
                  <li>Add, edit, delete tasks with keyboard support.</li>
                  <li>Filter by status and keep data after refresh.</li>
                  <li>Responsive layout for mobile and desktop.</li>
                </ul>
                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/joancako-max/taskflow-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request repo
                  </a>
                  <a
                    className="project-link"
                    href="https://joancako-max.github.io/taskflow-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See demo
                  </a>
                </div>
              </article>
              <article className="project-card">
                <div className="project-header">
                  <h3>AuthKit - Login/Signup UI</h3>
                  <span className="project-tag">React UI</span>
                </div>
                <p>
                  A modern authentication flow UI with validation states and
                  accessibility-first form controls. Built to match real product specs.
                </p>
                <ul className="project-list">
                  <li>Input validation and error messaging.</li>
                  <li>Clear focus states and keyboard navigation.</li>
                  <li>Reusable form components.</li>
                </ul>
                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/joancako-max/authkit-ui"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request repo
                  </a>
                  <a
                    className="project-link"
                    href="https://joancako-max.github.io/authkit-ui/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See demo
                  </a>
                </div>
              </article>
              <article className="project-card">
                <div className="project-header">
                  <h3>LaunchPad - Landing Page</h3>
                  <span className="project-tag">Responsive UI</span>
                </div>
                <p>
                  A marketing-style landing page with modern layout, animated sections,
                  and strong typography. Shows attention to spacing and hierarchy.
                </p>
                <ul className="project-list">
                  <li>Hero, features, and CTA sections.</li>
                  <li>Subtle motion with CSS transitions.</li>
                  <li>Mobile-first spacing and layout.</li>
                </ul>
                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/joancako-max/launchpad-landing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request repo
                  </a>
                  <a
                    className="project-link"
                    href="https://joancako-max.github.io/launchpad-landing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See demo
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-inner contact-card">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let's build something clean and useful.</h2>
              <p className="section-subtitle">
                For collaboration or job opportunities, send me a quick message and I’ll
                get back to you soon.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn-main" href="#home">Back to top</a>
              <a className="btn-alt" href="#projects">See work</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner">
          <p>© 2026 Joan Çako. Built with React and care.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
