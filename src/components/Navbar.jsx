import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsCollapsed(true);
      } else if (currentScrollY < lastScrollY) {
        setIsCollapsed(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl z-50 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.5)] rounded-full overflow-hidden min-h-[60px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isCollapsed ? 'w-[200px]' : 'w-[95%]'
      }`}
    >
      <div className="relative w-full h-[60px] flex items-center justify-center font-h1 tracking-tight">
        {/* Logo */}
        <div 
          className={`absolute text-xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,247,0.5)] whitespace-nowrap z-20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isCollapsed ? 'left-1/2 -translate-x-1/2' : 'left-6 translate-x-0'
          }`}
        >
          Ikmalatte
        </div>
        
        {/* Menus & Button */}
        <AnimatePresence>
          {!isCollapsed && (
            <>
              {/* Center/Right Links - Hidden on mobile, shown on md+ */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex gap-8 items-center whitespace-nowrap z-10 text-sm md:text-base"
              >
                <a className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" href="#stack">Stack</a>
                <a className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" href="#experience">Experience</a>
                <a className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" href="#projects">Projects</a>
                <a className="text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" href="#hobbies">Hobbies</a>
              </motion.div>

              {/* Right Button */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute right-6 hidden md:flex items-center gap-4 z-10"
              >
                <span className="material-symbols-outlined text-cyan-400">mail</span>
                <a
                  href="mailto:itsikmlal@gmail.com"
                  className="block bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-full font-label-caps text-xs hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,255,247,0.3)] transition-all cursor-pointer whitespace-nowrap"
                >
                  itsikmlal@gmail.com
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
