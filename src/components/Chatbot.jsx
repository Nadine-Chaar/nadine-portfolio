import React, { useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm Nadine's AI Assistant. You can ask me about her experience, education, or how she uses AI in her workflow!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    
    setTimeout(() => {
      let botReply = "That's a great question! While I'm a simple demo agent, Nadine builds complex automated workflows that bridge creative marketing and data analytics.";
      
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('marketing') || lowerInput.includes('experience')) {
        botReply = "Nadine has 4 years of experience, including roles as Social Media Coordinator at CCCL and Marketing & Communications Officer. She's great at multi-platform campaigns!";
      } else if (lowerInput.includes('education') || lowerInput.includes('degree')) {
        botReply = "She holds a BA in Media & Comm from AUB and is currently completing her MSc in Digital Marketing & Analytics at Toulouse Business School in Barcelona.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        botReply = "You can reach her directly at nadine.chaar00@gmail.com or connect on LinkedIn!";
      } else if (lowerInput.includes('ux') || lowerInput.includes('design')) {
        botReply = "She approaches UX through the lens of conversion and storytelling—mapping user journeys to ensure the digital experience is seamless and empathetic.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);
    
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chat-toggle editorial-box editorial-box-hover" onClick={() => setIsOpen(true)}>
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
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                <div className={`message-bubble ${msg.sender === 'bot' ? 'bot-bubble' : 'user-bubble'}`}>
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
              onKeyPress={handleKeyPress}
            />
            <button className="editorial-btn primary send-btn" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
