import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="contact-wrapper editorial-box">
          <div className="contact-header">
            <h2>Let's build something!</h2>

            <p>
              I'm currently open to opportunities in digital marketing, strategy, and creative roles across agencies, media, and digital-first companies.
            </p>

            <p style={{ marginTop: '16px' }}>
              If you're looking for someone who can think strategically, execute creatively, and back it up with data — let's talk!
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:Nadine.chaar00@gmail.com" className="editorial-btn primary">
              Contact me via email
            </a>

            <a
              href="https://www.linkedin.com/in/nadine-chaar-6059101a3/"
              target="_blank"
              rel="noreferrer"
              className="editorial-btn secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="contact-meta">
            <div className="contact-location">
              📍 Barcelona, Spain<br />
              Beirut, Lebanon
            </div>

            <div className="contact-languages">
              <span className="meta-label">Languages:</span>
              <span className="language-list">English, Arabic, Spanish (A1)</span>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2026 — Nadine Chaar</p>
        </div>

      </div>
    </section>
  );
}