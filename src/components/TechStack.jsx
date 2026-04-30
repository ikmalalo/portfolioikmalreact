import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const languages = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'PHP', icon: 'devicon-php-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
];

const frameworks = [
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Express JS', icon: 'devicon-express-original' },
  { name: 'Laravel', icon: 'devicon-laravel-original' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  { name: 'Flutter', icon: 'devicon-flutter-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
];

const SkillCard = ({ item }) => (
  <div className="skill-card-reveal group glass-card p-4 flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors duration-300">
      <i className={`${item.icon} text-4xl drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all`}></i>
    </div>
    <span className="font-label-caps text-[9px] text-white/60 group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-300 text-center">
      {item.name}
    </span>
  </div>
);

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial refresh to handle anchor links
      setTimeout(() => ScrollTrigger.refresh(), 100);

      // Title and Underline Reveal
      gsap.fromTo(".stack-title-reveal", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Headers Reveal
      gsap.fromTo(".stack-header-reveal", 
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power4.out",
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards Stagger Reveal
      gsap.fromTo(".skill-card-reveal", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12, // Increased for clearer one-by-one feel
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-section-padding pb-8 px-gutter max-w-7xl mx-auto" id="stack">
      <div className="stack-title-reveal flex flex-col items-center mb-16">
        <h2 className="font-h2 text-4xl font-bold text-white mb-4">My Skills</h2>
        <div className="h-1 w-20 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Programming Languages */}
        <div className="space-y-8">
          <div className="stack-header-reveal flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <h3 className="font-h2 text-xs sm:text-lg text-white/40 uppercase tracking-[0.1em] sm:tracking-[0.3em] font-semibold text-center">Programming Languages</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {languages.map((item) => <SkillCard key={item.name} item={item} />)}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="space-y-8">
          <div className="stack-header-reveal flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <h3 className="font-h2 text-xs sm:text-lg text-white/40 uppercase tracking-[0.1em] sm:tracking-[0.3em] font-semibold text-center">Frameworks & Tools</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {frameworks.map((item) => <SkillCard key={item.name} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
