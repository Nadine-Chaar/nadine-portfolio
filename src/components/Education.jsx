import React from 'react';
import './Education.css';

export default function Education() {
  const education = [
    {
      degree: "MSc in Digital Marketing & Analytics",
      school: "Toulouse Business School, Barcelona",
      highlight: true
    },
    {
      degree: "BA in Media & Communications",
      school: "American University of Beirut",
      meta: "Minor in Film & Visual Culture"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Academic Background</h2>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className={`edu-card editorial-box fade-up ${edu.highlight ? 'highlight-card' : ''}`} style={{ animationDelay: `${idx * 150}ms` }}>
              <h3 className="degree">{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              {edu.meta && <span className="badge mt-3">{edu.meta}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
