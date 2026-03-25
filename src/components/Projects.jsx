import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Cancer Amidst War — CCCL Digital Campaign",
      tags: ["Crisis Response", "Storytelling", "Social Media"],
      link: null,
      context: "Led digital campaigns in one of the most sensitive and high-stakes contexts, where communication required both emotional intelligence and strategic clarity.",
      body: "During the war in Lebanon, many children undergoing cancer treatment were displaced, making access to life-saving care increasingly difficult. Patients were no longer just fighting cancer, they were navigating war.\n\nIn response, CCCL launched the \"Cancer Amidst War\" campaign as an urgent call for support.\n\nI worked closely with patients and their families to capture and produce real stories — filming, editing, and publishing content that reflected their reality with honesty and dignity. The goal was not just to raise awareness, but to mobilize immediate support.",
      bullets: [
        "Produced and managed emotionally-driven video and social content",
        "Collaborated directly with affected families to ensure authentic storytelling",
        "Supported rapid-response campaign execution under crisis conditions"
      ],
      impact: "The campaign drove strong engagement and contributed to increased donation efforts during a critical period, demonstrating how storytelling, when done responsibly, can mobilize real action."
    },
    {
      title: "CCCL MARCOM Strategy & Share of Voice Growth (2025)",
      tags: ["Analytics", "MARCOM", "Campaign Strategy"],
      link: null,
      context: "Led the analysis and tracking of a full-scale MARCOM strategy aimed at increasing public awareness and maintaining media dominance in Lebanon.",
      body: "The objective was clear: implement a comprehensive yearly communication plan while sustaining a minimum 50% Share of Voice (SOV) in a competitive and sensitive healthcare landscape.\n\nI worked on monitoring campaign performance across the first half of 2025, evaluating how different initiatives contributed to overall visibility and identifying gaps between strategy and execution.",
      bullets: [
        "Tracked Share of Voice across media coverage and campaign activity",
        "Evaluated execution of MARCOM initiatives across digital, events, and partnerships",
        "Connected campaign performance to visibility outcomes and engagement trends",
        "Identified strategic gaps and areas for optimization"
      ],
      impact: "Achieved an average 64.85% Share of Voice, exceeding the target across all six months. Insights from this analysis informed strategic decisions for upcoming campaigns, helping CCCL maintain strong visibility and improve the effectiveness of its communication efforts in a highly competitive awareness space."
    },
    {
      title: "Bridge & Boost — Digital Strategy & UX",
      tags: ["UX", "Strategy", "Analytics"],
      link: "https://bridgeandboost.com/",
      context: "Worked closely with my teammates to build a digital foundation for a student-led initiative from scratch.",
      body: null,
      bullets: [
        "Website structure",
        "Messaging",
        "User flows",
        "Analytics tracking system"
      ],
      bulletsLabel: "Defined",
      impact: "A clear, credible platform ready for growth."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected Work & Experience</h2>
        <p className="section-subtitle">Real campaigns, real organizations, real impact.</p>

        <div className="projects-grid-presentation">
          {projects.map((proj, idx) => (
            <div key={idx} className="presentation-project-card fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="project-header">
                <div className="project-tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge">{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-title-link"
                    >
                      {proj.title} ↗
                    </a>
                  ) : (
                    proj.title
                  )}
                </h3>
              </div>

              <div className="project-details-grid">
                <div className="detail-block detail-context">
                  <h4 className="detail-label">Context</h4>
                  <p>{proj.context}</p>
                  {proj.body && proj.body.split('\n\n').map((para, i) => (
                    <p key={i} className="project-paragraph">{para}</p>
                  ))}
                </div>

                <div className="detail-block detail-actions">
                  <h4 className="detail-label">{proj.bulletsLabel || "What I Did"}</h4>
                  <ul className="project-bullets">
                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>

                <div className="detail-block impact-block">
                  <h4 className="detail-label">Impact</h4>
                  <p>{proj.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}