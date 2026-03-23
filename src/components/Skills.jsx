import React from 'react';
import './Skills.css';

export default function Skills() {
  const categories = [
    {
      title: "AI & Automation",
      accent: "blue-accent",
      items: [
        "ChatGPT & Prompting",
        "Workflow Thinking",
        "Automation Logic",
        "AI-Assisted Content",
        "Productivity Systems"
      ]
    },
    {
      title: "Digital Marketing",
      accent: "purple-accent",
      items: [
        "Campaign Strategy",
        "Social Media",
        "Content Creation",
        "Copywriting",
        "SEO & Analytics",
        "Performance Mindset"
      ]
    },
    {
      title: "UX / Digital Experience",
      accent: "neutral-accent",
      items: [
        "UX Thinking",
        "User Journeys",
        "Website Content Strategy",
        "Wireframing Fundamentals",
        "Conversion-Focused Content"
      ]
    },
    {
      title: "Tools & Platforms",
      accent: "dark-accent",
      items: [
        "GA4 & Tableau",
        "RStudio",
        "Meta Business Suite",
        "Canva & CapCut",
        "Figma Fundamentals",
        "Notion & Asana"
      ]
    }
  ];

  return (
    <section id="skills" className="expertise-section">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <p className="section-subtitle">A multi-disciplinary toolkit bridging creative storytelling and technical strategy.</p>
        
        <div className="expertise-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className={`expertise-card editorial-box editorial-box-hover ${cat.accent}`}>
              <h3>{cat.title}</h3>
              <ul className="expertise-list">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
