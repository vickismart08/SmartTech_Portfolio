import './Clients.css';

export default function Clients() {
  return (
    <section className="clients">
      <div className="section">
        <h2 className="section-title">Happy <span className="accent">Client</span></h2>
        <p className="section-subtitle">
          Client satisfaction and delivery quality
        </p>
        <div className="rating-card">
          <span className="rating-badge">Top Performance</span>
          <div className="rating-ring">
            <span className="rating-value">88%</span>
          </div>
          <span className="rating-label">Client Satisfaction Rating</span>
          <div className="rating-stars" aria-label="4.4 out of 5 stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="star-muted">★</span>
          </div>
          <p className="rating-note">Based on project feedback and delivery consistency.</p>
        </div>
      </div>
    </section>
  );
}
