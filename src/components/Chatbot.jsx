import React, { useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Nadine's AI Assistant. You can ask me about her experience, education, projects, or how she uses AI in her workflow!"
    }
  ]);
  const [input, setInput] = useState('');

  const getBotReply = (userMessage) => {
    const lowerInput = userMessage.toLowerCase().trim();

    const hasAny = (keywords) => keywords.some((word) => lowerInput.includes(word));

    if (
      hasAny([
        'study',
        'studied',
        'school',
        'university',
        'college',
        'education',
        'degree',
        'master',
        'masters',
        'msc',
        'ba',
        'bachelor',
        'aub',
        'toulouse',
        'barcelona'
      ])
    ) {
      return "Nadine studied at the American University of Beirut (AUB), where she earned her BA in Media & Communications, and she is currently completing her MSc in Digital Marketing & Analytics at Toulouse Business School in Barcelona.";
    }

    if (
      hasAny([
        'experience',
        'worked',
        'work',
        'job',
        'jobs',
        'role',
        'roles',
        'career',
        'background',
        'marketing'
      ])
    ) {
      return "Nadine has around 4 years of experience in digital marketing and communications. She worked as a Social Media Coordinator at the Children's Cancer Center of Lebanon (CCCL), and also held Marketing & Communications roles where she worked on campaigns, content, social media, websites, and performance tracking.";
    }

    if (
      hasAny([
        'ai',
        'automation',
        'automate',
        'workflow',
        'workflows',
        'prompt',
        'prompts',
        'agent',
        'agents'
      ])
    ) {
      return "Nadine uses AI to support marketing workflows, idea generation, structuring content, and improving efficiency across strategy and execution. She is especially interested in AI-assisted workflows that bridge creative marketing, analytics, and user experience.";
    }

    if (
      hasAny([
        'project',
        'projects',
        'portfolio',
        'work',
        'case study',
        'case studies',
        'campaign',
        'campaigns'
      ])
    ) {
      return "Her portfolio includes campaign strategy, storytelling, analytics, and presentation work. A few highlights are the Cancer Amidst War campaign, CCCL MARCOM strategy analysis, and speaking presentations representing CCCL internationally.";
    }

    if (
      hasAny([
        'ux',
        'design',
        'ui',
        'user experience'
      ])
    ) {
      return "Nadine approaches UX through clarity, empathy, and conversion-focused thinking. She looks at how content, structure, and user flow work together to make digital experiences feel intuitive and effective.";
    }

    if (
      hasAny([
        'contact',
        'email',
        'linkedin',
        'reach',
        'message'
      ])
    ) {
      return "You can reach Nadine through the contact section on this site, or connect with her on LinkedIn.";
    }

    if (
      hasAny([
        'skills',
        'skill',
        'tools',
        'tool',
        'software'
      ])
    ) {
      return "Nadine's skills include digital strategy, content marketing, social media, campaign planning, analytics, UX thinking, and AI-assisted workflows. She has also worked with tools related to reporting, content creation, and digital execution.";
    }

    return "I can help with questions about Nadine's background, education, work, projects, skills, or how she uses AI in marketing workflows.";
  };

  const handleSend = () => {
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    setTimeout(() => {
      const botReply = getBotReply(userMessage);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button
          className="chat-toggle editorial-box editorial-box-hover"
          onClick={() => setIsOpen(true)}
        >
          <span className="chat-icon">✨</span> Ask Nadine AI
        </button>
      )}

      {isOpen && (
        <div className="chat-window editorial-box">
          <div className="chat-header">
            <div className="header-info">
              <span className="status-dot"></span>
              <h3>Nadine's AI Assistant</h3>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                <div
                  className={`message-bubble ${msg.sender === 'bot' ? 'bot-bubble' : 'user-bubble'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ask about her skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="editorial-btn primary send-btn" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}