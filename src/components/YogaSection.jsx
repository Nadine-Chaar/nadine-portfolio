import React from 'react';
import './YogaSection.css';
import yogaImg from '../assets/images/newyoga.jpeg';

export default function YogaSection() {
  return (
    <section id="yoga" className="yoga-section">
      <div className="container">
        <div className="yoga-wrapper fade-up">

          <div className="yoga-content">
            <span
              className="badge"
              style={{
                backgroundColor: 'var(--secondary-color)',
                color: 'white',
                alignSelf: 'flex-start'
              }}
            >
              Beyond Marketing
            </span>

            <h2 className="yoga-title">Who am I?</h2>

            <div className="yoga-prose">
              <p>
                Outside of work, I practice yoga and hold a <strong>200-hour RYT certification</strong>.
              </p>
              <p>
                What started as a personal outlet for balance gradually became something much deeper — a space where I can disconnect, reset, and stay grounded.
              </p>
              <p>
                Over time, that mindset naturally carried into how I approach things. It's helped me stay focused under pressure, make clearer decisions, and take a step back before reacting — especially in fast-moving or high-stakes situations.
              </p>
              <p>
                In environments where everything moves quickly and noise is constant, that ability to pause, think, and act intentionally makes a real difference. It helps me approach challenges more thoughtfully, communicate more clearly, and stay grounded while managing complexity.
              </p>
            </div>
          </div>

          <div className="yoga-image-container">
            <img
              src={yogaImg}
              alt="Yoga"
              className="yoga-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="yoga-placeholder" style={{ display: 'none' }}>
              <span>Yoga Image</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}