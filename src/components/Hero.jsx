import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfileCard from './ProfileCard';
import imagePng from '../fotoprofile.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Stagger Animation (Reveal)
      // We animate the elements themselves
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "restart none none none", 
        }
      });

      // 2. Parallax Scrub Animation
      // We animate the main row container instead of individual elements to avoid conflicts
      gsap.to(".hero-parallax-wrapper", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing
        },
        y: -80,
        opacity: 0.1, // Fade out the whole section as we scroll past
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-40 pb-16 relative overflow-hidden max-w-7xl mx-auto w-full"
    >
      <div className="hero-parallax-wrapper relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00fff7] animate-pulse"></span>
            <span className="font-label-caps text-[10px] text-cyan-400 uppercase tracking-[0.2em]">Available for work</span>
          </div>
          <h1 className="hero-reveal font-h1 text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] md:leading-tight">
            Future Software <span className="text-cyan-400">Engineer</span> and Web Creator.
          </h1>
          <p className="hero-reveal font-body-lg text-sm sm:text-lg lg:text-xl text-white/60 max-w-2xl mb-8 md:mb-10">
            Senior Full-Stack Engineer specializing in high-performance SaaS platforms and immersive digital experiences with a focus on technical precision.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-[#00fff7] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,247,0.5)] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm md:text-base">rocket_launch</span>
              View My Projects
            </button>
            <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Column: Profile Card - Hidden on mobile, shown on lg+ */}
        <div className="hero-reveal hidden lg:flex lg:w-1/2 justify-center lg:justify-end mt-8 lg:mt-0 w-full scale-90 sm:scale-100">
          <ProfileCard
            name="Ikmal Ali Azhari"
            title="Software Engineer"
            handle="ikmalatte"
            status="Online"
            contactText="Hire Me"
            avatarUrl={imagePng}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            behindGlowEnabled={true}
            className="w-full max-w-[400px] sm:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
