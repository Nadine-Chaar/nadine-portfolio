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
            <p className="timeline-period">2021 – 2024</p>
            <h4 className="role">Social Media Coordinator</h4>
            <p className="company">Children's Cancer Center of Lebanon (CCCL)</p>
            <p className="desc">
              Led digital marketing efforts for one of the region's leading nonprofit healthcare organizations, managing campaigns across social media, website, and content production.
            </p>
            <p className="desc" style={{ marginTop: '12px' }}>
              Owned the full content and campaign cycle, from strategy and storytelling to execution and performance tracking, in an environment where communication required both sensitivity and precision.
            </p>
            <ul className="exp-bullets">
              <li>Directed multi-platform content strategy (Instagram, Facebook, LinkedIn) aligned with fundraising and awareness goals.</li>
              <li>Produced and managed multimedia content, including on-ground coverage of international events (UAE, Kuwait, Qatar).</li>
              <li>Optimized website content to enhance user journeys and engagement.</li>
              <li>Monitored performance metrics and iterated campaigns based on engagement and conversion insights.</li>
            </ul>
            <div className="exp-impact">
              <span className="detail-label">Impact</span>
              <p>Contributed to ~65% growth in social media engagement and supported a 22% increase in online donations over three years.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}