import React, { useState } from 'react';
import './Projects.css';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Advocacy & Fundraising Digital Campaign",
      context: "Need to drive awareness and donations for a critical cause at CCCL.",
      approach: "Developed a multi-platform storytelling strategy focusing on human-centric impact.",
      impact: "Increased campaign reach, engagement, and cross-channel donor conversion.",
      tags: ["Digital Strategy", "Storytelling", "Social Media"],
      image: project1,
      details: {
        problem: "The Children's Cancer Center of Lebanon (CCCL) needed to drastically increase digital fundraising awareness during a critical period, combating platform fatigue and fragmented messaging.",
        strategy: "Anchored the campaign around human-centric storytelling. Instead of standard donation pushes, the focus shifted to empathetic, real-life impact stories designed specifically for social sharing and community advocacy.",
        execution: "Coordinated a multi-platform rollout using social media channels, crafted SEO-aware landing page copy, and mapped out a structured donor conversion funnel to capture high-intent traffic.",
        results: "Successfully increased overall campaign reach, boosted engagement across key platforms, and generated a measurable lift in cross-channel donor conversions."
      }
    },
    {
      title: "AI-Assisted Content Workflow",
      context: "Manual content creation was causing bottlenecks in publishing frequency.",
      approach: "Built a structured pipeline using ChatGPT for ideation and drafting.",
      impact: "Accelerated production time by 40% and improved content consistency.",
      tags: ["AI Automation", "Content Creation"],
      image: project2,
      details: {
        problem: "The marketing team was experiencing severe bottlenecks in content production. Manual drafting, editing, and scheduling for various platforms resulted in inconsistent posting frequencies and creative burnout.",
        strategy: "Integrate LLMs (like ChatGPT) as a structured sparring partner to handle the heavy lifting of zero-to-one drafting, leaving the team to focus on strategic human editing and brand voice alignment.",
        execution: "Designed structured prompt templates for blog outlines, social captions, and A/B ad variations. Mapped these outputs into Notion and Asana for seamless team review and approval.",
        results: "Accelerated overall content production time by 40%, eliminated blank-page syndrome, and allowed the team to launch campaigns faster while maintaining a high empathetic standard."
      }
    },
    {
      title: "Analytics & Conversion Dashboard",
      context: "Marketing decisions were relying on fragmented reporting across platforms.",
      approach: "Aggregated data using GA4 and Tableau to visualize user journeys.",
      impact: "Enabled the team to make rapid, data-backed optimization decisions.",
      tags: ["GA4", "Tableau", "Analytics"],
      image: project3,
      details: {
        problem: "Crucial marketing decisions were being delayed because performance data was siloed across Meta, Google Ads, and independent website analytics. We lacked a unified view of the customer journey.",
        strategy: "Break down data silos by aggregating core metrics into a single, accessible visualization ecosystem that non-technical stakeholders could understand and act upon.",
        execution: "Configured advanced tracking in GA4, extracted the data, and built dynamic, automated visual dashboards in Tableau. Mapped out specific landing page drop-off points and campaign attribution models.",
        results: "Enabled the marketing team to transition from reactive reporting to proactive, real-time optimization. Cut weekly reporting hours in half and improved overall ROAS visibility."
      }
    },
    {
      title: "Website SEO & UX Overhaul",
      context: "A brand's website had high bounce rates and low organic visibility.",
      approach: "Conducted a UX audit, rewrote copy for conversion, and implemented on-page SEO.",
      impact: "Improved organic traffic and reduced bounce rate.",
      tags: ["UX Strategy", "SEO", "Copywriting"],
      image: project4,
      details: {
        problem: "Despite strong social media off-site marketing, the core brand website suffered from high bounce rates and failed to rank competitively for key organic search terms.",
        strategy: "Perform a holistic audit bridging technical SEO and human-centered UX. The goal was to solve search intent while simultaneously guiding the user smoothly toward a conversion action.",
        execution: "Conducted comprehensive wireframing adjustments to fix broken user journeys. Rewrote core landing page copy to balance keyword density with persuasive, conversion-focused storytelling.",
        results: "Achieved a significant reduction in overall site bounce rate, increased organic traffic visibility, and established a scalable framework for future product page rollouts."
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected Case Studies</h2>
        <p className="section-subtitle">Real experience, digital strategy, and AI workflows.</p>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card editorial-box editorial-box-hover">
              <div className="project-content">
                <div className="project-tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-summary">
                  <p><strong>Context:</strong> {proj.context}</p>
                </div>
                <button 
                  className="editorial-btn secondary mt-auto"
                  onClick={() => setSelectedProject(proj)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content editorial-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <div className="modal-header">
               <div className="project-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="badge">{tag}</span>
                  ))}
               </div>
               <h2>{selectedProject.title}</h2>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>1. Context / Problem</h3>
                <p>{selectedProject.details.problem}</p>
              </div>
              <div className="modal-section">
                <h3>2. Strategy / Thinking</h3>
                <p>{selectedProject.details.strategy}</p>
              </div>
              <div className="modal-section">
                <h3>3. Execution</h3>
                <p>{selectedProject.details.execution}</p>
              </div>
              <div className="modal-section highlight">
                <h3>4. Impact / Results</h3>
                <p>{selectedProject.details.results}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
