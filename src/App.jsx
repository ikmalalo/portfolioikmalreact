import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="font-body-md custom-scrollbar bg-brand-bg relative">
      <div className="relative z-10">
        <Navbar />
        <main className="grid-bg">
          <Welcome />
          <Hero />
          <TechStack />
          <Experience />
          <Projects />
          <Hobbies />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
