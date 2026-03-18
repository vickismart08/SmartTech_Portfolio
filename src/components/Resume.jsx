import { useState } from 'react';
import './Resume.css';

const tabs = ['Education', 'Experience', 'Skills'];

const education = [
  {
    period: '2020 - 2022',
    title: 'ND (National Diploma) in Computer Engineering',
    org: 'Graceland Polytechnic',
    desc: 'Focused on computer engineering fundamentals, software development, and practical technical training.',
  },
  {
    period: '2023 - 2025',
    title: 'HND (Higher National Diploma) in Software and Web Development (Computer Science)',
    org: 'Ado Ekiti Polytechnic',
    desc: 'Advanced study in software engineering, web application development, and practical computer science projects.',
  },
];

const experience = [
  {
    period: '2022 - Present',
    title: 'Senior Software Engineer',
    org: 'Tech Company Inc.',
    desc: 'Lead full-stack development, mentor junior devs, and drive architecture decisions.',
  },
  {
    period: '2023',
    title: 'Internship',
    org: 'School of Tech',
    desc: 'Completed practical internship training focused on software development workflows, collaborative coding, and real-world project delivery.',
  },
];

const professionalSkills = [
  ['Flutter', 'React.js', 'React Native'],
  ['JavaScript', 'Python', 'Node.js', 'Express.js'],
  ['Firebase', 'Supabase', 'AI'],
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="resume" className="resume">
      <div className="section">
        <h2 className="section-title">My <span className="accent">Resume</span></h2>
        <p className="section-subtitle">
          Education, experience, and professional skills
        </p>
        <div className="resume-tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`resume-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="resume-content">
          {activeTab === 0 && (
            <div className="resume-grid">
              {education.map((item) => (
                <div key={item.title} className="resume-item">
                  <span className="resume-period">{item.period}</span>
                  <h3 className="resume-title">{item.title}</h3>
                  <span className="resume-org">{item.org}</span>
                  <p className="resume-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 1 && (
            <div className="resume-grid">
              {experience.map((item) => (
                <div key={item.title} className="resume-item">
                  <span className="resume-period">{item.period}</span>
                  <h3 className="resume-title">{item.title}</h3>
                  <span className="resume-org">{item.org}</span>
                  <p className="resume-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="skills-resume">
              {professionalSkills.map((row, i) => (
                <div key={i} className="skills-row">
                  {row.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
