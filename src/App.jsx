import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import AiProjects from './components/AiProjects'
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
      <Projects />
      <Experience />
      <AiProjects />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App
