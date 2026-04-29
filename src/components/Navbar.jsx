import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsCollapsed(true);
        setIsMobileMenuOpen(false); // Close menu on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsCollapsed(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hobbies', href: '#hobbies' },
  ];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl z-50 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.5)] rounded-[32px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isCollapsed ? 'w-[200px] h-[60px]' : isMobileMenuOpen ? 'w-[95%] h-[150px]' : 'w-[95%] h-[60px]'
      }`}
    >
      <div className="relative w-full h-full">
        {/* Header Area (Always visible part) */}
        <div className="h-[60px] w-full flex items-center justify-between px-6">
          {/* Logo */}
          <div 
            className={`text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,247,0.5)] whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isCollapsed ? 'absolute left-1/2 -translate-x-1/2' : ''
            }`}
          >
            Ikmalatte
          </div>

          <AnimatePresence>
            {!isCollapsed && (
              <>
                {/* Desktop Menu */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="hidden md:flex gap-8 items-center"
                >
                  {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm font-medium" 
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  ))}
                </motion.div>

                {/* Desktop Email Button */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="hidden md:flex items-center gap-4"
                >
                  <span className="material-symbols-outlined text-cyan-400">mail</span>
                  <a 
                    href="mailto:itsikmlal@gmail.com"
                    className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-full font-label-caps text-xs hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,247,0.2)] transition-all whitespace-nowrap"
                  >
                    itsikmlal@gmail.com
                  </a>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden text-white p-2 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-2xl">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </motion.button>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && !isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 pb-6"
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
