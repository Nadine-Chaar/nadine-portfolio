import React from 'react';
import './Hero.css';
import heroPortrait from '../assets/images/hero-portrait.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-grid editorial-box">
          <div className="hero-content">
            <div className="badge pink mb-4">Marketing • Analytics • AI • UX</div>
            
            <h1 className="hero-title">
              Driving measurable growth through <span className="text-highlight yellow">strategy</span> & <span className="text-highlight pink">data.</span>
            </h1>
            
            <p className="hero-subtitle">
              I'm Nadine Chaar. I combine performance marketing, AI-assisted workflows, and conversion-focused UX to build impactful digital campaigns that drive real engagement and revenue.
            </p>
            
            <div className="hero-cta">
              <a href="#projects" className="editorial-btn primary">View My Work</a>
              <a href="#contact" className="editorial-btn secondary">Contact Me</a>
            </div>
          </div>
          
          <div className="hero-visual">
               <img src={heroPortrait} alt="Nadine Chaar" className="hero-img" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
               <div className="portrait-placeholder" style={{ display: heroPortrait ? 'none' : 'flex' }}>
                 <span className="placeholder-text">Portrait Image Placeholder</span>
               </div>
          </div>
        </div>

      </div>
    </section>
  );
}
