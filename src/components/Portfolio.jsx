import './Portfolio.css';

const projects = [
  {
    title: 'Faveremit',
    category: 'Mobile',
    desc: 'Mobile banking app with gift card trading. Users can manage finances and buy or sell gift cards in one secure platform.',
    stack: ['Flutter', 'Node.js', 'Firebase'],
    link: 'https://apps.apple.com/us/app/faveremit-gift-cards-coins/id1658312826',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.faveremit.faveremit',
    image: '/faveremit.png',
  },
  {
    title: 'SmarTec Portfolio',
    category: 'Web',
    desc: 'This portfolio site: single-page layout with hero, about, skills, services, portfolio, resume, and contact. Animated tech background, EmailJS contact form, responsive design, and dark theme.',
    stack: ['React', 'Vite', 'CSS'],
    link: '#home',
    image: null,
  },
  {
    title: 'SwiftDrop',
    category: 'Mobile',
    desc: 'Delivery and logistics app for same-day and last-mile delivery. Real-time tracking, optimized routing, photo proof of delivery, and a driver-facing app for flexible courier work.',
    stack: ['Flutter', 'Node.js', 'Firebase'],
    link: 'https://github.com/vickismart08',
    image: '/swiftdrop.png',
    ongoing: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section">
        <h2 className="section-title">My Best <span className="accent">Work</span></h2>
        <p className="section-subtitle">
          Selected projects showcasing my expertise
        </p>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <>
                    <img className="project-photo" src={project.image} alt={project.title} onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.remove('project-placeholder--hidden'); }} />
                    {project.title === 'SwiftDrop' ? (
                      <div className="project-placeholder project-placeholder--title project-placeholder--hidden" aria-hidden="true">
                        <span className="project-title-logo">SwiftDrop</span>
                      </div>
                    ) : null}
                  </>
                ) : null}
                {!project.image ? (
                  project.title === 'SmarTec Portfolio' ? (
                    <div className="project-placeholder project-placeholder--title">
                      <span className="project-title-logo">SmarTec</span>
                    </div>
                  ) : project.title === 'SwiftDrop' ? (
                    <div className="project-placeholder project-placeholder--title">
                      <span className="project-title-logo">SwiftDrop</span>
                    </div>
                  ) : (
                    <div className="project-placeholder">
                      <span className="project-initial">{project.title[0]}</span>
                    </div>
                  )
                ) : null}
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.ongoing ? <span className="project-badge">Ongoing</span> : null}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.playStoreLink ? (
                    <>
                      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                        App Store →
                      </a>
                      <a href={project.playStoreLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        Play Store →
                      </a>
                    </>
                  ) : (
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
