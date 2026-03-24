import React from 'react';
import './YogaSection.css';
import yogaImg from '../assets/images/yoga.JPG'; 

export default function YogaSection() {
  return (
    <section id="yoga" className="yoga-section">
      <div className="container">
        <div className="yoga-wrapper fade-up">
          <div className="yoga-content">
            <span className="badge" style={{backgroundColor: 'var(--secondary-color)', color: 'white', alignSelf: 'flex-start'}}>Personal Journey</span>
            <h2 className="yoga-title">Finding balance.</h2>
            <div className="yoga-prose">
              <p>
                Beyond digital strategy and analytics, I am deeply passionate about yoga. My journey on the mat has taught me the invaluable importance of staying grounded, maintaining focus, and breathing through challenges.
              </p>
              <p>
                Yoga is more than just a physical practice for me—it's a mindset that influences how I approach life and work. It instills a sense of calm resilience that I bring into every campaign, project, and collaboration. 
              </p>
            </div>
          </div>
          <div className="yoga-image-container">
            <img src={yogaImg} alt="Yoga journey" className="yoga-img" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <div className="yoga-placeholder" style={{ display: 'none' }}>
              <span>Yoga Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
