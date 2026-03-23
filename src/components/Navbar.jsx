import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar neo-box">
      <div className="container nav-container">
        <a href="#" className="logo">NC</a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="neo-btn secondary">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}
