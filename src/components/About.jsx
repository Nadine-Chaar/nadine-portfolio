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
              <p>I'm Nadine, a digital marketing strategist shaped by real-world impact.</p>

              <p>
                I didn't start in a typical corporate environment. I started at the <strong>Children's Cancer Center of Lebanon (CCCL)</strong>, where marketing wasn't about selling products, but about telling stories that mattered — responsibly.
              </p>

              <p>
                Working on campaigns tied to real human lives forced me to think differently: not just what performs, but what <em>feels right</em>.
              </p>

              <p>
                For four years, I built and executed digital strategies across social media, websites, and campaigns — balancing emotional storytelling with data-driven decision-making. I've worked on everything from content production and UX improvements to SEO and performance tracking, always with one goal: create work that connects and converts without losing authenticity.
              </p>

              <p>That experience shaped how I approach marketing today:</p>

              <ul className="about-list">
                <li>Strategy first, not trends</li>
                <li>Data as a guide, not a crutch</li>
                <li>People at the center of every decision</li>
              </ul>

              <p>
                Now, as I complete my <strong>MSc in Digital Marketing & Analytics</strong> at TBS Education Barcelona, I'm expanding that foundation into performance marketing, analytics, and AI-driven workflows — building systems that make marketing smarter, not just louder.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}