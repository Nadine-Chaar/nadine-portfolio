import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "Social Media Coordinator",
      company: "Children’s Cancer Center of Lebanon (CCCL)",
      desc: "Managed advocacy communications, fundraising campaigns storytelling, and multi-platform content creation.",
      type: "work"
    },
    {
      role: "Marketing & Communications Officer",
      company: "Professional Experience",
      desc: "Handled digital campaign execution, overall brand voice consistency, multimedia production, and data-informed strategy adjustments.",
      type: "work"
    },
    {
      role: "Marketing Intern",
      company: "Professional Experience",
      desc: "Supported website backend content, SEO initiatives, UX tweaks, and assisted in producing creative collateral.",
      type: "work"
    }
  ];

  const education = [
    {
      degree: "MSc in Digital Marketing & Analytics",
      school: "Toulouse Business School, Barcelona"
    },
    {
      degree: "BA in Media & Communications",
      school: "American University of Beirut",
      meta: "Minor in Film & Visual Culture"
    }
  ];

  const certifications = [
    "Google Ads Search & Display",
    "Google Analytics",
    "HubSpot Marketing Hub Software",
    "Intoact Digital Marketing"
  ];

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Journey & Credentials</h2>
        <p className="section-subtitle">Bridging academic rigor with years of hands-on agency and advocacy experience.</p>
        
        <div className="resume-split">
          <div className="experience-column">
            <h3 className="column-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item editorial-box">
                  <h4 className="role">{exp.role}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="desc">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="credentials-column">
            <h3 className="column-title">Education</h3>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-card editorial-box">
                  <h4 className="degree">{edu.degree}</h4>
                  <p className="school">{edu.school}</p>
                  {edu.meta && <p className="meta">{edu.meta}</p>}
                </div>
              ))}
            </div>
            
            <h3 className="column-title mt-top">Certifications</h3>
            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <span key={idx} className="badge purple mb-2 mr-2">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
