import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-container">

          <div className="timeline-card editorial-box fade-up">
            <div className="timeline-dot"></div>

            <p className="timeline-period">2021 – 2025</p>

            <h4 className="role">Social Media Coordinator</h4>

            <p className="company">
              Children's Cancer Center of Lebanon (CCCL)
            </p>

            <p className="desc">
              Led digital marketing, content, and communications initiatives for one of the region's leading nonprofit healthcare organizations, supporting fundraising, awareness, advocacy, and patient-focused campaigns.
            </p>

            <p className="desc" style={{ marginTop: '12px' }}>
              Managed projects across social media, websites, content production, storytelling, and performance reporting, translating complex and sensitive topics into impactful digital communications.
            </p>

            <ul className="exp-bullets">
              <li>Developed and executed multi-platform content strategies across Instagram, Facebook, LinkedIn, and web channels.</li>

              <li>Created patient stories, donor communications, campaign content, videos, and social media assets that strengthened audience engagement and community support.</li>

              <li>Managed website content updates, SEO improvements, and user experience enhancements to improve accessibility and engagement.</li>

              <li>Tracked campaign performance, audience behavior, and engagement metrics to optimize content and reporting.</li>

              <li>Represented CCCL at international conferences, workshops, and events across the United States, Malaysia, UAE, Kuwait, and Qatar.</li>

              <li>Contributed to fundraising campaigns, awareness initiatives, and advocacy efforts, including the Cancer Amidst War campaign.</li>
            </ul>

            <div className="exp-impact">
              <span className="detail-label">Highlights</span>
              <p>
                Combined storytelling, strategy, and analytics to strengthen donor engagement, amplify patient and family voices, and support the organization's digital growth across multiple platforms.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}