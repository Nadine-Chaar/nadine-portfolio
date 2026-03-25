import React from 'react';
import './Hero.css';
import heroPortrait from '../assets/images/nchero.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge pink mb-4">
              Digital Marketing · Strategy · Analytics · Social Media
            </div>

            <h1 className="hero-title">
              Turning ideas<br />
              into <span className="text-highlight yellow">impact</span><br />
              through strategy and storytelling.
            </h1>

            <p className="hero-subtitle">
              Driven by a passion for communication and digital strategy, I turn stories into action, leading digital campaigns that bring together marketing, advocacy, and audience engagement.
            </p>

            <p className="hero-subtitle hero-subtitle-spacing">
              Whether building content strategies or analyzing performance, I focus on creating work that drives real, measurable impact.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="editorial-btn primary">View My Work</a>
              <a href="#contact" className="editorial-btn secondary">Contact Me</a>
            </div>
          </div>

          <div className="hero-visual">
            <img src={heroPortrait} alt="Nadine" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}