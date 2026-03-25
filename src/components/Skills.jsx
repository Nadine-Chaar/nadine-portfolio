import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      icon: '📈',
      title: "Growth & Performance",
      skills: [
        "CRO (Conversion Rate)",
        "A/B Testing",
        "Funnel Optimization",
        "Audience Segmentation",
        "Performance Tracking"
      ]
    },
    {
      icon: '📊',
      title: "Analytics & Data",
      skills: [
        "GA4 & Tableau",
        "RStudio",
        "Custom Dashboards",
        "Attribution Modeling",
        "Automated Reporting"
      ]
    },
    {
      icon: '🎯',
      title: "Campaigns & Content",
      skills: [
        "Campaign Strategy",
        "Social Media Management",
        "Lifecycle Campaigns",
        "Impact Storytelling",
        "SEO Fundamentals"
      ]
    },
    {
      icon: '🤖',
      title: "AI & Workflow Thinking",
      skills: [
        "Workflow Automation",
        "Structured Pipelines",
        "AI-Assisted Execution",
        "Prompt Engineering",
        "Process Optimization"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>

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