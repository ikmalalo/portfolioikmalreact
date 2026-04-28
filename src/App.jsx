import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import DotField from './components/DotField'
function App() {
  return (
    <div className="font-body-md custom-scrollbar bg-brand-bg relative">
      <div className="fixed inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="#00fff7"
          gradientTo="#0066ff"
          glowColor="#00fff733"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="grid-bg">
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
