import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Presentations from './components/Presentations'
import AiProjects from './components/AiProjects'
import YogaSection from './components/YogaSection'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Presentations />
      <AiProjects />
      <YogaSection />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App
