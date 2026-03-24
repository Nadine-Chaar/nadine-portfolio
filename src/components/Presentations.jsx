import React from 'react';
import './Presentations.css';

export default function Presentations() {
  const presentations = [
    {
      title: "CCI Asia Conference, Malaysia",
      role: "Presenter",
      videoUrl: "https://www.youtube.com/embed/KOuO3vMGF4Y",
      desc: "Presented at the CCI Asia Conference in Malaysia, showcasing the Children’s Cancer Center of Lebanon’s Gift for Life program. Highlighted how GFL supports children through the emotional journey of cancer, combining medical care, psychological support, and creative expression to help young patients build resilience, hope, and joy.",
      tags: ["Speaking", "Advocacy", "Representation"]
    },
    {
      title: "St. Jude Children’s Research Hospital, Memphis, TN",
      role: "Presenter",
      videoUrl: "https://www.youtube.com/embed/BF6ekAsOXw8",
      desc: "Invited to St. Jude Children’s Research Hospital in Memphis, TN, for a week-long NGO workshop on influencer strategies. Represented the Children’s Cancer Center of Lebanon (CCCL) and delivered a separate presentation highlighting CCCL’s partnerships, challenges, and solutions.",
      tags: ["Speaking", "Workshop", "Strategy"]
    }
  ];

  return (
    <section id="presentations" className="presentations-section">
      <div className="container">
        <h2 className="section-title">Speaking & Representation</h2>
        <p className="section-subtitle">Featured presentations and global advocacy representing the Children's Cancer Center of Lebanon.</p>
        
        <div className="presentations-grid">
          {presentations.map((talk, idx) => (
            <div key={idx} className="presentation-card editorial-box">
              <div className="video-wrapper">
                <iframe 
                  src={talk.videoUrl} 
                  title={talk.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="presentation-content">
                <div className="presentation-tags">
                  {talk.tags.map((tag, i) => (
                    <span key={i} className="badge">{tag}</span>
                  ))}
                </div>
                <h3 className="presentation-title">{talk.title}</h3>
                <p className="presentation-role">{talk.role}</p>
                <p className="presentation-desc">{talk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
