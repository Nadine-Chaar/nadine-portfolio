import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "Social Media Coordinator",
      company: "Children’s Cancer Center of Lebanon (CCCL)",
      desc: "Achieved 65%+ engagement growth and +22% increase in donations through end-to-end campaign management, analytics optimization, and UX/SEO improvements.",
      type: "work"
    },
    {
      role: "Marketing & Communications Officer",
      company: "Professional Experience",
      desc: "Executed content campaigns focused on audience engagement and storytelling, ensuring impactful multi-channel performance.",
      type: "work"
    },
    {
      role: "Marketing Intern",
      company: "Professional Experience",
      desc: "Supported content generation, campaign execution, and monitored basic performance analytics.",
      type: "work"
    }
  ];

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-card editorial-box fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="timeline-dot"></div>
              <h4 className="role">{exp.role}</h4>
              <p className="company">{exp.company}</p>
              <p className="desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
