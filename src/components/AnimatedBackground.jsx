import './AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      {/* Perspective tech grid */}
      <div className="animated-bg-grid" />
      <div className="animated-bg-grid-overlay" />

      {/* Flowing data particles */}
      <div className="animated-bg-particles">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              '--i': i,
              '--x': `${5 + (i * 8) % 90}%`,
              '--delay': `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Circuit trace - horizontal moving light */}
      <div className="animated-bg-circuit">
        <div className="circuit-line circuit-h" />
        <div className="circuit-line circuit-v" />
        <div className="circuit-trace" />
      </div>

      {/* Diagonal data streams */}
      <div className="animated-bg-streams">
        <span className="stream" />
        <span className="stream" style={{ animationDelay: '2s' }} />
        <span className="stream" style={{ animationDelay: '4s' }} />
      </div>

      {/* Orbiting nodes */}
      <div className="animated-bg-orbit">
        <span className="orbit-dot" />
        <span className="orbit-dot" />
        <span className="orbit-dot" />
      </div>

      {/* Gradient orbs */}
      <div className="animated-bg-gradient animated-bg-gradient-1" />
      <div className="animated-bg-gradient animated-bg-gradient-2" />
    </div>
  );
}
