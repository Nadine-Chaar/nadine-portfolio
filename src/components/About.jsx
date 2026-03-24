import React from 'react';
import './About.css';
import project1 from '../assets/images/project-1.jpg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid editorial-box fade-up">
          <div className="about-heading-col">
            <h2 className="about-title">
              <span className="text-highlight blue">Strategy</span> grounded in real experience.
            </h2>
            <div className="about-decorative-line"></div>
          </div>
          <div className="about-text-col">
            <div className="about-prose">
              <p>
                My journey in digital marketing started at the front lines of advocacy communications. As the <strong>Social Media Coordinator at the Children’s Cancer Center of Lebanon (CCCL)</strong>, I learned how to turn empathetic <span className="text-highlight pink">storytelling</span> into measurable performance, driving tangible engagement and donation growth.
              </p>
              <p>
                From there, I expanded into comprehensive campaign execution—combining content <span className="text-highlight yellow">strategy</span> with rigorous <span className="text-highlight pink">analytics</span> to build user journeys that actually convert. I realized that the best campaigns don't just look good; they solve problems and accelerate growth.
              </p>
              <p>
                Currently completing my MSc in Digital Marketing & Analytics at Toulouse Business School in Barcelona, my focus is firmly on the intersection of performance marketing, <span className="text-highlight yellow">UX</span> optimization, and <span className="text-highlight pink">AI</span> automation. I build efficient, data-driven workflows that deliver outsized impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
