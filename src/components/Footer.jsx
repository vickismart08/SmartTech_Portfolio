import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} Victor Amule. All Rights Reserved.
        </p>
        <p className="footer-tagline">
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
}
