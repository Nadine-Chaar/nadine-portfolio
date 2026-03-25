import React from 'react';
import './Education.css';

export default function Education() {
  const education = [
    {
      degree: "<span class='degree-highlight'>MSc</span> in Digital Marketing & Analytics",
      school: "Toulouse Business School (TBS Education)",
      location: "Barcelona, Spain",
      period: "2025 – 2026"
    },
    {
      degree: "<span class='degree-highlight'>BA</span> in Media & Communications",
      school: "American University of Beirut (AUB)",
      location: "Beirut, Lebanon",
      period: "2018 – 2021",
      minor: "Minor in Film & Visual Culture"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="edu-card"
            >
              <p className="edu-period">{edu.period}</p>

              <h3
                className="degree"
                dangerouslySetInnerHTML={{ __html: edu.degree }}
              />

              <p className="school">{edu.school}</p>
              <p className="edu-location">{edu.location}</p>
              {edu.minor && <p className="edu-minor">{edu.minor}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}