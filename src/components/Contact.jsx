import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper editorial-box">
          <div className="contact-header">
            <h2>Let's build something smart, strategic, and creative.</h2>
            <p>
              I am currently open to opportunities in marketing, media, agencies, entertainment, and digital-first roles. If you're looking for a hybrid talent who bridges strategy and UX, let's talk.
            </p>
          </div>
          
          <div className="contact-links">
            <a href="mailto:nadine.chaar00@gmail.com" className="editorial-btn primary">Contact me via email</a>
            <a href="https://www.linkedin.com/in/nadine-chaar-6059101a3/" target="_blank" rel="noreferrer" className="editorial-btn secondary">Connect on LinkedIn</a>
          </div>
        </div>
        
        <div className="contact-footer">
          <p>© {new Date().getFullYear()} Nadine Chaar. Designed with Antigravity.</p>
        </div>
      </div>
    </section>
  );
}
