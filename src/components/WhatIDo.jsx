import './WhatIDo.css';

const services = [
  {
    icon: '⚛',
    title: 'Frontend Development',
    desc: 'Building cross-platform user interfaces with Flutter, React.js, and React Native. I focus on smooth performance, clean component architecture, and consistent user experiences across web and mobile.',
  },
  {
    icon: '🖥',
    title: 'Backend Development',
    desc: 'Building robust backend systems with Node.js and Express.js, plus scalable cloud backends using Firebase and Supabase. I design secure APIs, real-time features, and reliable data workflows.',
  },
  {
    icon: '☁',
    title: 'Cloud & DevOps',
    desc: 'I deploy and scale applications using Firebase and Supabase, with modern CI/CD workflows via GitHub Actions and containerized services using Docker.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile app development with Flutter first, then React Native, delivering high-performance iOS and Android apps from a shared and maintainable codebase.',
  },
  {
    icon: '🗄',
    title: 'Database Design',
    desc: 'Schema design, query optimization, and data modeling for PostgreSQL, MongoDB, and Redis. Migration strategies.',
  },
  {
    icon: '🔧',
    title: 'Technical Consulting',
    desc: 'Architecture reviews, code audits, and technical guidance. Helping teams ship faster with best practices.',
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="whatido">
      <div className="section">
        <h2 className="section-title">What I <span className="accent">Do</span></h2>
        <p className="section-subtitle">
          Full-stack expertise tailored to your project needs
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
