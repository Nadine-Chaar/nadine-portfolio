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
      title: "CCCL Digital Fundraising Campaign",
      context: "Need to drive digital donations and advocacy for the Children's Cancer Center of Lebanon during a critical fundraising period.",
      approach: "Anchored the campaign on empathetic, human-centric storytelling instead of standard donation pushes.",
      impact: "Achieved a +22% increase in donations and 65%+ engagement growth.",
      tags: ["Digital Strategy", "Storytelling", "Social Media"],
      image: project1,
      details: {
        problem: "CCCL needed to drastically increase digital fundraising awareness, combating platform fatigue and fragmented messaging during a high-stakes period.",
        strategy: "Shifting the focus from transactional donation requests to empathetic, real-life impact stories designed for social sharing, community advocacy, and emotional connection.",
        execution: "Managed end-to-end rollout across multiple platforms, optimizing landing page UX/SEO for higher intent traffic, and structuring a multi-touchpoint donor conversion funnel.",
        results: "Successfully skyrocketed campaign reach by 65%+ in overall engagement, generating a +22% measurable increase in cross-channel donor conversions."
      }
    },
    {
      title: "Content Production AI Pipeline",
      context: "Manual drafting and scheduling bottlenecks restricted the marketing team's publishing rhythm.",
      approach: "Built a systematic AI-assisted workflow for content ideation and structured drafting.",
      impact: "Accelerated production by 40% while preserving brand voice.",
      tags: ["AI Automation", "Content Creation"],
      image: project2,
      details: {
        problem: "The team faced severe bottlenecks in content production. Heavy manual drafting across different formats caused inconsistent posting schedules and hampered strategic growth.",
        strategy: "Integrate LLMs (like ChatGPT) as a structured sparring partner to handle zero-to-one drafting, enabling the human team to focus strictly on strategic editing, emotion, and brand alignment.",
        execution: "Designed and implemented structured prompt workflows for blog outlines, social captions, and A/B ad variations, integrated smoothly into a centralized team workspace.",
        results: "Cut overall content production time by 40%, completely eliminated blank-page syndrome, and improved cross-channel content consistency without sacrificing quality."
      }
    },
    {
      title: "Omnichannel Analytics Dashboard",
      context: "Siloed data across Meta, Google Ads, and GA4 made performance optimization slow and reactive.",
      approach: "Aggregated core metrics into customized, dynamic Tableau dashboards.",
      impact: "Halved reporting time and unlocked proactive optimization.",
      tags: ["GA4", "Tableau", "Analytics"],
      image: project3,
      details: {
        problem: "Crucial marketing decisions were delayed because performance data was fragmented across multiple independent platforms. There was no single source of truth for the entire user journey.",
        strategy: "Break down data silos by extracting and aggregating core metrics into a centralized visualization ecosystem that non-technical stakeholders could quickly interpret and act upon.",
        execution: "Configured accurate tracking events in GA4, extracted cross-channel data, and built automated, dynamic dashboards in Tableau to map landing page drop-offs and campaign attribution.",
        results: "Transitioned the team from reactive reporting to proactive, real-time campaign optimization. Reduced weekly reporting hours by 50% while vastly improving overall ROAS visibility."
      }
    },
    {
      title: "Landing Page UX & SEO Overhaul",
      context: "Brand website suffered from high bounce rates and low organic search visibility.",
      approach: "Executed a comprehensive UX audit and conversion-focused copy rewrite to address search intent.",
      impact: "Significantly boosted organic traffic and improved conversion rates.",
      tags: ["UX Strategy", "SEO", "Copywriting"],
      image: project4,
      details: {
        problem: "Despite generating strong top-of-funnel social traffic, the core website landing pages failed to rank organically and exhibited high bounce rates, leading to lost conversion opportunities.",
        strategy: "Deploy a holistic site overhaul bridging technical SEO foundations with human-centered UX design. The goal was to seamlessly map user search intent to a friction-free conversion journey.",
        execution: "Identified broken user paths via analytics, conducted wireframing adjustments, and entirely rewrote the core landing page copy to balance keyword density with persuasive storytelling.",
        results: "Achieved a measurable drop in site bounce rate, established a consistent flow of inbound organic traffic, and built a scalable framework applied to subsequent product launches."
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected Case Studies</h2>
        <p className="section-subtitle">Real experience, digital strategy, and AI workflows.</p>
        
        <div className="projects-grid-presentation">
          {projects.map((proj, idx) => (
            <div key={idx} className="presentation-project-card fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="project-header">
                <div className="project-tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{proj.title}</h3>
              </div>
              
              <div className="project-details-grid">
                <div className="detail-block">
                  <h4 className="detail-label">Context</h4>
                  <p>{proj.details.problem}</p>
                </div>
                
                <div className="detail-block">
                  <h4 className="detail-label">Approach</h4>
                  <p>{proj.details.strategy}</p>
                </div>
                
                <div className="detail-block impact-block">
                  <h4 className="detail-label">Impact</h4>
                  <p>{proj.details.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
