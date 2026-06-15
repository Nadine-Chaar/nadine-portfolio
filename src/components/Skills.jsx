import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      icon: '📱',
      title: "Social Media & Content",
      skills: [
        "Social Media Management",
        "Content Strategy",
        "Community Engagement",
        "Copywriting",
        "Visual Content Planning"
      ]
    },
    {
      icon: '🎯',
      title: "Campaigns & Strategy",
      skills: [
        "Campaign Planning",
        "Digital Strategy",
        "Audience Segmentation",
        "Impact Storytelling",
        "Brand Positioning"
      ]
    },
    {
      icon: '📊',
      title: "Analytics & Reporting",
      skills: [
        "GA4",
        "Tableau",
        "Power BI",
        "Performance Tracking",
        "Campaign Reporting"
      ]
    },
    {
      icon: '🛠️',
      title: "Tools & Workflows",
      skills: [
        "Meta Business Suite",
        "Canva",
        "CapCut",
        "SEO Fundamentals",
        "AI-Assisted Workflows"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>

              <ul className="skill-list">
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}