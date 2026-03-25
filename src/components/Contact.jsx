import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not configured yet. Add your EmailJS keys in .env.');
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        publicKey,
      );
      alert('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section">
        <h2 className="section-title">Contact <span className="accent">With Me</span></h2>
        <p className="section-subtitle">
          Let's build something great together
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-visual">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="contact-details">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:victoramule18@gmail.com">victoramule18@gmail.com</a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+2347017105782">+234(0)7017105782</a>
              </p>
              <p>
                <strong>Location:</strong> Lagos, Nigeria
              </p>
            </div>
            <div className="contact-social">
              <a
                href="https://github.com/vickismart08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/victor-amule-8352b127a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LN
              </a>
              <a
                href="https://www.tiktok.com/@smart_flutter?_r=1&_t=ZS-94z6XTLC7l3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                TK
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-send" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
