import React from 'react';
import './Skills.css';

export default function Skills() {
  const categories = [
    {
      title: "Growth & Performance",
      accent: "blue-accent",
      items: [
        "CRO (Conversion Rate)",
        "A/B Testing",
        "Funnel Optimization",
        "Audience Segmentation",
        "Performance Tracking"
      ]
    },
    {
      title: "Analytics & Data",
      accent: "purple-accent",
      items: [
        "GA4 & Tableau",
        "RStudio",
        "Custom Dashboards",
        "Attribution Modeling",
        "Automated Reporting"
      ]
    },
    {
      title: "Campaigns & Content",
      accent: "neutral-accent",
      items: [
        "Campaign Strategy",
        "Social Media Management",
        "Lifecycle Campaigns",
        "Impact Storytelling",
        "SEO Fundamentals"
      ]
    },
    {
      title: "AI & Workflow Thinking",
      accent: "dark-accent",
      items: [
        "Workflow Automation",
        "Structured Pipelines",
        "AI-Assisted Execution",
        "Prompt Engineering",
        "Process Optimization"
      ]
    },
    {
      title: "Tools & Platforms",
      accent: "blue-accent",
      items: [
        "Meta Business Suite",
        "Canva & CapCut",
        "Figma Fundamentals",
        "Notion & Asana",
        "HubSpot CRM"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="skills-grid-editorial">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card-editorial editorial-box fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
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
