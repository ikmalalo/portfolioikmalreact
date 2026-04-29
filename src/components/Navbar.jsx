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
            width: '200px',
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
        height: isMobileMenuOpen ? '150px' : '60px', 
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
      className="fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl z-50 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.5)] rounded-[32px] overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Logo */}
        <div 
          className={`absolute text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,247,0.5)] transition-all duration-500 ease-out whitespace-nowrap ${
            isCollapsed ? 'left-1/2 -translate-x-1/2' : 'left-6'
          }`}
        >
          Ikmalatte
        </div>

        {/* Content Container */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex items-center justify-between px-6"
            >
              {/* Spacer for Logo alignment */}
              <div className="w-[100px] hidden md:block"></div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8 items-center">
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

              {/* Desktop Email */}
              <div className="hidden md:flex items-center gap-4">
                <span className="material-symbols-outlined text-cyan-400">mail</span>
                <a 
                  href="mailto:itsikmlal@gmail.com" 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-full font-label-caps text-xs hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,247,0.2)] transition-all whitespace-nowrap"
                >
                  itsikmlal@gmail.com
                </a>
              </div>

              {/* Mobile Toggle */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
                <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && !isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[60px] left-0 w-full md:hidden flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 pb-6"
            >
              <div className="h-[1px] w-full bg-white/10 mb-2"></div>
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
              <a 
                href="mailto:itsikmlal@gmail.com" 
                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full font-label-caps text-[10px] hover:bg-white/10 transition-all flex items-center gap-2"
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
