import React from 'react';
import './About.css';
import project1 from '../assets/images/project-1.jpg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-column">
             <div className="abstract-visual-block editorial-box" style={{ padding: 0, border: 'none' }}>
                <img src={project1} alt="About Nadine" className="about-img" />
             </div>
          </div>
          
          <div className="about-text-column">
            <h2>Redefining how we connect.</h2>
            <div className="about-prose">
              <p>
                As a digital marketing professional with over 4 years of experience, I’ve managed multi-platform campaigns, crafted advocacy communications, and built strategies that genuinely connect with audiences.
              </p>
              <p>
                My journey spans from working as the <strong>Social Media Coordinator at the Children’s Cancer Center of Lebanon (CCCL)</strong> to agency roles where I honed my skills in multimedia production, storytelling, and analytics. 
              </p>
              <p>
                Currently completing my MSc in Digital Marketing & Analytics at Toulouse Business School in Barcelona, I am focused on the intersection of <strong>creativity, user experience, and AI</strong>. I believe the best marketing isn't just about targeting—it's about creating intuitive, memorable digital journeys powered by smart, automated workflows.
              </p>
            </div>
            
            <div className="signature">
              Nadine Chaar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
