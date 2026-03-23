import React from 'react';
import './Hero.css';
import heroPortrait from '../assets/images/hero-portrait.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-shape shape-1"></div>
      <div className="hero-background-shape shape-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge purple mb-4">Hybrid Digital Marketer</div>
          
          <h1 className="hero-title">
            Merging <em>strategy</em>, <em>creativity</em>, and <span className="highlight-ai">AI innovation.</span>
          </h1>
          
          <p className="hero-subtitle">
            I'm Nadine Chaar. I combine digital marketing, AI-powered workflows, and human-centric UX to build elegant campaigns and conversion-focused experiences. Let's make something memorable.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="editorial-btn primary">View My Work</a>
            <a href="#contact" className="editorial-btn secondary">Contact Me</a>
            <a href="#" className="editorial-btn text-link">Download CV ↗</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="portrait-wrapper">
             {heroPortrait ? (
               <img src={heroPortrait} alt="Nadine Chaar" className="hero-img" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
             ) : null}
             <div className="portrait-placeholder" style={{ display: heroPortrait ? 'none' : 'flex' }}>
               <span className="placeholder-text">Portrait Image Placeholder</span>
             </div>
             <div className="floating-card ai-card editorial-box">
               <span className="icon">✨</span> AI Workflows
             </div>
             <div className="floating-card ux-card editorial-box">
               <span className="icon">📐</span> Strategic UX
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
