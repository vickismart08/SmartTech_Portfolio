import './Hero.css';

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/vickismart08', icon: 'GH' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/victor-amule-8352b127a/', icon: 'IN' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@smart_flutter?_r=1&_t=ZS-94z6XTLC7l3', icon: 'TK' },
    { name: 'YouTube', href: '', icon: 'YT' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-inner section">
        <div className="hero-content">
          <p className="hero-welcome">WELCOME TO MY WORLD</p>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Victor Amule</span>
          </h1>
          <p className="hero-role">a Software Developer.</p>
          <p className="hero-desc">
            I craft elegant solutions to complex problems. With expertise in full-stack development,
            I build scalable applications that users love and businesses rely on.
          </p>
          <div className="hero-social">
            <span className="social-label">CONNECT WITH ME</span>
            <div className="social-icons">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <span className="social-label mt">MY STACK</span>
            <div className="stack-icons">
              <span>Flutter</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>SQL</span>
              <span>Node.js</span>
              <span>AI</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/profile.png"
              alt="Victor Amule"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
