import React from 'react';
import './Hero.css';
import heroPortrait from '../assets/images/herojune.png';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge pink mb-4">
              Digital Marketing · Content Strategy · Analytics · Social Media
            </div>

            <h1 className="hero-title">
              Turning ideas<br />
              into <span className="text-highlight yellow">impact</span><br />
              through strategy and storytelling.
            </h1>

            <p className="hero-subtitle">
              Digital marketing professional with experience in content strategy,
              social media, campaign planning, analytics, and audience engagement.
            </p>

            <p className="hero-subtitle hero-subtitle-spacing">
              From advocacy initiatives to brand campaigns, I create work that
              combines creativity, data, and human insight to drive meaningful results.
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