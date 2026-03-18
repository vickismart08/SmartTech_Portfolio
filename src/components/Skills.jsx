import './Skills.css';

const skills = [
  { name: 'Flutter', color: '#02569b' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'AI', color: '#3b82f6' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section">
        <h2 className="section-title">My <span className="accent">Skills</span></h2>
        <p className="section-subtitle">
          Technologies and tools I work with every day
        </p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ '--skill-color': skill.color }}
            >
              <span className="skill-icon">{skill.name[0]}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
