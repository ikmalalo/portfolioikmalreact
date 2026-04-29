import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';
import Aurora from './Aurora';

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax and Fade effect on scroll (Scrubbing)
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        opacity: 0,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToHero = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={["#06B6D4", "#05f8e1", "#00ffc6"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-label-caps tracking-widest uppercase text-white/60">
            Wassap Pipel!
          </span>
        </motion.div>
        
        <div className="font-h1 text-5xl md:text-9xl lg:text-9xl font-black tracking-tighter leading-tight flex flex-col items-center">
          <SplitText
            text="Welcome to my"
            className="text-white block"
            delay={30}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 30, rotationX: 90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
          />
          <SplitText
            text="Portfolio."
            className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,247,0.4)] block pt-2"
            delay={40}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 30, rotationX: 90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
          />
        </div>

        <motion.div
          className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl font-body-lg flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <span>Explore everything about me on here, hope you enjoy it!</span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToHero}
      >
        <span className="text-xs font-label-caps uppercase tracking-widest text-white/40 group-hover:text-cyan-400 transition-colors">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1 group-hover:border-cyan-400/50 transition-colors">
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Welcome;
