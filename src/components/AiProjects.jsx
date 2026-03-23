import React from 'react';
import './AiProjects.css';

export default function AiProjects() {
  const workflows = [
    {
      title: "Idea Generation & Brainstorming",
      desc: "Using LLMs as a structured sparring partner to expand campaign themes, generate A/B test variations, and build creative briefs rapidly."
    },
    {
      title: "Content Acceleration",
      desc: "Creating systems that draft initial copy, social media captions, and blog outlines, freeing up time to focus on editing for human empathy and brand voice."
    },
    {
      title: "Research & Synthesis",
      desc: "Automating the summarization of market research, competitor analysis, and audience sentiment data into actionable marketing insights."
    },
    {
      title: "AI-Enhanced Strategy",
      desc: "Blending predictive analytics and natural language processing to inform UX decisions, plan multi-channel campaigns, and optimize conversion funnels."
    }
  ];

  return (
    <section id="ai-workflow" className="ai-section">
      <div className="container">
        <div className="ai-split">
          <div className="ai-text">
            <h2 className="ai-title">AI in My Workflow</h2>
            <p className="ai-description">
              I view Artificial Intelligence not as a replacement for creativity, but as an amplifier for strategy. By building smart, practical AI systems into my daily workflow, I accelerate execution while maintaining a strongly human-led marketing vision.
            </p>
            
            <div className="workflow-diagram">
              <div className="workflow-node node-1">Idea</div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-2">AI</div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-3">Content</div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-4">Optimiz...</div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node node-5">Insights</div>
            </div>
            
          </div>
          
          <div className="ai-grid">
            {workflows.map((item, idx) => (
              <div key={idx} className="ai-card editorial-box">
                <div className="ai-card-icon">✧</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
