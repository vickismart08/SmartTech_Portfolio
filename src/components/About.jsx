import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-frame">
              <img
                src="/profile-about.png"
                alt="Victor Amule"
                className="about-image-photo"
              />
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title">About <span className="accent">Me</span></h2>
            <p className="section-subtitle">
              Mobile Application Developer & Software Engineer
            </p>
            <p className="about-text">
              I am a passionate Mobile Application Developer and Software Engineer with a strong interest in building scalable, user-focused digital products. I combine academic knowledge with hands-on development experience to create practical solutions.
            </p>
            <p className="about-text">
              Over the years, I have worked on several projects focused on mobile application development and backend systems, gaining experience in designing efficient architectures, integrating APIs, and building reliable user experiences. My technical interests also extend to algorithms, system design, and performance optimization, which helps me approach problems with both creativity and efficiency.
            </p>
            <p className="about-text">
              I enjoy turning ideas into functional applications and continuously improving my skills by exploring new technologies and solving real-world problems through software.
            </p>
            <p className="about-text">
              My goal is to contribute to innovative teams, build impactful products, and grow into a well-rounded software engineer capable of delivering scalable and high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
