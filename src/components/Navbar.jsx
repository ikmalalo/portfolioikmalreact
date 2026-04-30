import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    
    // Initial setup
    gsap.set(nav, { width: '95%', height: '60px' });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      
      if (currentScrollY > 100) {
        if (isScrollingDown) {
          setIsCollapsed(true);
          setIsMobileMenuOpen(false);
          gsap.to(nav, {
            width: window.innerWidth < 768 ? '90%' : '200px',
            duration: 0.6,
            ease: "power4.out",
            overwrite: true
          });
        } else {
          setIsCollapsed(false);
          gsap.to(nav, {
            width: '95%',
            duration: 0.6,
            ease: "power4.out",
            overwrite: true
          });
        }
      } else {
        setIsCollapsed(false);
        gsap.to(nav, {
          width: '95%',
          duration: 0.6,
          ease: "power4.out",
          overwrite: true
        });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Mobile Menu Height separately
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, { 
        height: isMobileMenuOpen ? 'auto' : '60px', 
        duration: 0.4, 
        ease: "power2.out" 
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hobbies', href: '#hobbies' },
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.5)] rounded-[32px] overflow-hidden"
    >
      <div className="relative w-full flex flex-col items-center">
        {/* Header Row (Always 60px) */}
        <div className="w-full h-[60px] flex items-center px-6 relative z-20">
          {/* Desktop Menu (Left Side) */}
          {!isCollapsed && (
            <div className="hidden md:flex items-center gap-8 flex-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm font-medium" 
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Logo (Centered) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,247,0.5)] transition-all duration-500 whitespace-nowrap pt-[4px]"
          >
            Ikmalatte
          </div>

          {/* Right Side (Email/Toggle) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {!isCollapsed && (
              <div className="hidden md:flex items-center gap-4">
                <span className="material-symbols-outlined text-cyan-400 text-sm">mail</span>
                <a 
                  href="mailto:itsikmlal@gmail.com" 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-4 py-1.5 rounded-full font-label-caps text-[10px] hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  itsikmlal@gmail.com
                </a>
              </div>
            )}
            
            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-white p-2 flex items-center justify-center relative z-30 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content (Expandable) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full md:hidden flex flex-col items-center gap-4 px-6 pb-6"
            >
              <div className="h-[1px] w-full bg-white/10"></div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-white/70 hover:text-white text-sm font-medium transition-all" 
                    href={link.href}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a 
                href="mailto:itsikmlal@gmail.com" 
                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full font-label-caps text-[10px] hover:bg-white/10 transition-all flex items-center gap-2 mt-1"
              >
                <span className="material-symbols-outlined text-cyan-400 text-sm">mail</span>
                Email
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
