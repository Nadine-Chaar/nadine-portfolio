import React from 'react';
import './Certifications.css';

export default function Certifications() {
  const certifications = [
    "Google Ads Search & Display",
    "Google Analytics Certification",
    "HubSpot Marketing Hub Software Certified",
    "Intoact International A-Z Practical Training in Digital Marketing"
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-badge editorial-box fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <span className="cert-icon">✦</span>
              <span className="cert-name">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
