import React from 'react';
import './About.css';
import aboutImage from '../assets/images/aboutmephoto.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid fade-up">

          <div className="about-visual-col">
            <div className="about-image-card">
              <img src={aboutImage} alt="Nadine" className="about-image" />
            </div>
          </div>

          <div className="about-text-col">
            <h2 className="about-title">
              About <span className="text-highlight yellow">me</span>
            </h2>

            <div className="about-prose">
              <p>
                I'm Nadine, a digital marketing and communications professional with four years of experience building content, campaigns, and digital strategies that connect with people and drive measurable results.
              </p>

              <p>
                My career began at the <strong>Children's Cancer Center of Lebanon (CCCL)</strong>, where storytelling carried real responsibility. Working closely with patients, families, donors, and advocates taught me that effective marketing is not just about performance metrics — it's about creating meaningful connections.
              </p>

              <p>
                Throughout my time at CCCL, I led social media initiatives, content production, website projects, SEO improvements, campaign planning, and performance reporting, combining creative storytelling with data-driven decision-making.
              </p>

              <p>
                As I conclude my <strong>MSc in Digital Marketing & Analytics</strong> at TBS Education Barcelona, I continue to build on my foundation in analytics, strategy, and emerging AI-powered marketing tools, combining academic learning with hands-on industry experience.
              </p>

              <ul className="about-list">
                <li>Content Strategy & Storytelling</li>
                <li>Social Media & Community Building</li>
                <li>Analytics & Performance Marketing</li>
                <li>Campaign Planning & Digital Strategy</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}