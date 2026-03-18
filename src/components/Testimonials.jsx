import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Engineering Manager, TechCorp',
    quote: 'An exceptional developer who delivers clean, maintainable code. Always proactive and great at communicating complex technical concepts to stakeholders.',
    avatar: null,
  },
  {
    name: 'James Wilson',
    role: 'CTO, StartupXYZ',
    quote: 'Transformed our product architecture and shipped features faster than we thought possible. A true full-stack powerhouse and a pleasure to work with.',
    avatar: null,
  },
  {
    name: 'Maria Garcia',
    role: 'Product Lead, InnovateCo',
    quote: 'Technical excellence combined with strong product sense. Consistently exceeded expectations and brought valuable insights to every project.',
    avatar: null,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="testimonials">
      <div className="section">
        <h2 className="section-title"><span className="accent">Testimonial</span></h2>
        <p className="section-subtitle">
          What colleagues and clients say about working with me
        </p>
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <span>{t.name[0]}</span>
          </div>
          <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
          <div className="testimonial-author">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
          <div className="testimonial-nav">
            <button
              onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <span className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? 'active' : ''}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </span>
            <button
              onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
