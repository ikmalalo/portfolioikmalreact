import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import SoftAurora from './components/SoftAurora'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-body-md custom-scrollbar bg-brand-bg relative">
      <div className="relative z-10">
        <Navbar />
        <main className="grid-bg">
          <Hero />
          <TechStack />
          <SoftAurora
            speed={0.8}
            scale={2.0}
            brightness={1.2}
            color1="#00fff7"
            color2="#0066ff"
            bandHeight={0.5}
            bandSpread={1.2}
          />
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
