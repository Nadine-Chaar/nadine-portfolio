import React from 'react';
import './Presentations.css';
import cciThumb from '../assets/images/cci.png';
import stjudeThumb from '../assets/images/stjude.png';

export default function Presentations() {
  const presentations = [
    {
      title: "CCI Asia Conference, Malaysia",
      role: "Presenter",
      videoLink: "https://www.youtube.com/watch?v=KOuO3vMGF4Y",
      thumbnail: cciThumb,
      desc: "Presented at the CCI Asia Conference in Malaysia, showcasing the Children’s Cancer Center of Lebanon’s Gift for Life program. Highlighted how GFL supports children through the emotional journey of cancer, combining medical care, psychological support, and creative expression to help young patients build resilience, hope, and joy.",
      tags: ["Speaking", "Advocacy", "Representation"]
    },
    {
      title: "St. Jude Children’s Research Hospital, Memphis, TN",
      role: "Presenter",
      videoLink: "https://www.youtube.com/watch?v=BF6ekAsOXw8",
      thumbnail: stjudeThumb,
      desc: "Invited to St. Jude Children’s Research Hospital in Memphis, TN, for a week-long NGO workshop on influencer strategies. Represented the Children’s Cancer Center of Lebanon (CCCL) and delivered a separate presentation highlighting CCCL’s partnerships, challenges, and solutions.",
      tags: ["Speaking", "Workshop", "Strategy"]
    }
  ];

  return (
    <section id="presentations" className="presentations-section">
      <div className="container">
        <h2 className="section-title">Speaking & Representation</h2>
        <p className="section-subtitle">
          Featured presentations and global advocacy representing the Children&apos;s Cancer Center of Lebanon.
        </p>

        <div className="presentations-grid">
          {presentations.map((talk, idx) => (
            <div key={idx} className="presentation-row">
              <a
                href={talk.videoLink}
                target="_blank"
                rel="noreferrer"
                className="video-card"
                aria-label={`Watch ${talk.title}`}
              >
                <div className="video-thumbnail-shell">
                  <img
                    src={talk.thumbnail}
                    alt={talk.title}
                    className="video-thumbnail-img"
                  />
                  <div className="video-thumbnail-overlay"></div>
                  <div className="play-button">
                    <svg viewBox="0 0 68 48" aria-hidden="true">
                      <path
                        d="M66.52 7.74a8 8 0 0 0-5.64-5.66C56.1 1 34 1 34 1S11.9 1 7.12 2.08a8 8 0 0 0-5.64 5.66A83.5 83.5 0 0 0 0 24a83.5 83.5 0 0 0 1.48 16.26 8 8 0 0 0 5.64 5.66C11.9 47 34 47 34 47s22.1 0 26.88-1.08a8 8 0 0 0 5.64-5.66A83.5 83.5 0 0 0 68 24a83.5 83.5 0 0 0-1.48-16.26Z"
                        fill="#ff0033"
                      />
                      <path d="M27 34V14l18 10-18 10Z" fill="#fff" />
                    </svg>
                  </div>
                </div>
              </a>

              <div className="presentation-content-card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}