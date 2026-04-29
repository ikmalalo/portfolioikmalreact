import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlowingArc from './components/GlowingArc'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // 2. Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="font-body-md custom-scrollbar bg-brand-bg relative">
      <div className="relative z-10">
        <Navbar />
        <main className="grid-bg">
          <Welcome />
          <Hero />
          <div className="relative">
            <GlowingArc />
            <div className="relative z-10 mt-[-150px]">
              <TechStack />
            </div>
          </div>
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
