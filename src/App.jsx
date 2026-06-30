import './App.css'

const NAV_LINKS = ['About', 'Work', 'Skills', 'Contact']

const PROJECTS = [
  {
    id: 'tcgscanner',
    title: 'TCGScanner',
    subtitle: 'Real-time trading card scanner built with Flask and leveraging Google Cloud Vision OCR',
    description:
      'Real-time trading card scanner using your laptop camera, Google Cloud Vision OCR, and live pricing from TCGPlayer.',
    tags: ['Flask', 'Python', 'Google Cloud Vision'],
    github: 'https://github.com/darrenkim247/TCGScanner',
    highlight: true,
  },
  {
    id: 'rustychat',
    title: 'RustYChat',
    subtitle: 'Chat Application built with Rust, hosted on Shuttle, and leverages OpenAI API',
    description:
      'A Rust-built chat application that runs OpenAI\'s Whisper model to help generate responses to text chat',
    tags: ['Rust', 'HTML', 'JavaScript', 'CSS'],
    github: 'https://github.com/darrenkim247/chat',
    highlight: true,
  },
  {
    id: 'basicxr',
    title: 'BasicXR',
    subtitle: 'On-device voice commands for Meta Quest',
    description:
      'A Unity XR application that runs OpenAI\'s Whisper speech-to-text model entirely on-device — no internet required. Enables wake-word detection and natural voice commands on Meta Quest using frame-budgeted inference to hold 72 fps.',
    tags: ['C#', 'Unity', 'XR', 'ONNX', 'Machine Learning'],
    github: 'https://github.com/darrenkim247/BasicXR',
    highlight: true,
  },
  {
    id: 'williamtell',
    title: 'William Tell',
    subtitle: '3D browser game in WebGL',
    description:
      'A 3D archery game built from scratch for a Computer Graphics course using a custom WebGL mini-engine. Features physics-based arrow trajectories, procedural apple spawning across 3 escalating levels, and a golden apple power-up mechanic.',
    tags: ['JavaScript', 'WebGL', 'Computer Graphics', 'Game Dev'],
    github: 'https://github.com/darrenkim247/WilliamTell',
    highlight: false,
  },
]

const SKILLS = [
  { category: 'Languages', items: ['JavaScript', 'C#', 'Python', 'HTML/CSS'] },
  { category: 'Graphics & XR', items: ['WebGL', 'Unity', 'HLSL', 'ShaderLab', 'Meta Quest SDK'] },
  { category: 'AI / ML', items: ['ONNX Runtime', 'Whisper', 'Unity Inference Engine'] },
  { category: 'Tools', items: ['Git', 'GitHub Actions', 'Vite', 'React'] },
]

function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a href="#top" className="nav-name">Darren Kim</a>
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
          <li>
            <a
              href="https://github.com/darrenkim247"
              target="_blank"
              rel="noreferrer"
              className="nav-gh"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <img
          src="/headshot.jpg"
          alt="Darren Kim"
          className="hero-photo"
        />
        <p className="hero-eyebrow">Software Engineer</p>
        <h1 className="hero-name">Darren Kim</h1>
        <p className="hero-bio">
          <em>Memento vivere.</em>
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary">See my work</a>
          <a
            href="https://www.linkedin.com/in/darren-kim-62392b167/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="hero-deco" aria-hidden="true">
        <span className="deco-line" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner about-inner">
        <h2 className="section-heading">About</h2>
        <p className="about-text">
          Hi, my name is Darren and I'm a grad student at the
          University of Pennsylvania. I am currently working as an
          AI Engineer where my work sits at the intersection between
          applying agents to backend systems. In this space, AI does
          not solely generate static outputs, but
          perceives, reasons, and acts inside deployed systems. My
          recent work spans building on-device voice agents for XR headsets
          and reporting telemetry in real-time, and I'm increasingly
          curious about how autonomous systems can understand, navigate, and
          manipulate backend environments in real time.
        </p>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.highlight ? 'project-card--featured' : ''}`}>
      <div className="project-card-inner">
        <div className="project-meta">
          {project.highlight && <span className="badge">Featured</span>}
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-footer">
          <ul className="tag-list">
            {project.tags.map(t => <li key={t} className="tag">{t}</li>)}
          </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </article>
  )
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="section-inner">
        <h2 className="section-heading">Work</h2>
        <div className="projects-grid">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section--tinted" id="skills">
      <div className="section-inner">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <ul className="skill-list">
                {items.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-inner contact-inner">
        <h2 className="section-heading">Contact</h2>
        <p className="contact-lead">
          Open to new opportunities, collaborations, or just a good conversation.
        </p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/darren-kim-62392b167/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-arrow">↗</span>
          </a>
          <a
            href="https://github.com/darrenkim247"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Darren Kim</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
