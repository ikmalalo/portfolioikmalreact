import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SplashScreen = ({ finishLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the text and trigger the exit animation after 1.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={finishLoading}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="overflow-hidden flex items-center">
            <motion.h1
              className="font-h1 text-5xl md:text-7xl font-bold tracking-tighter"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Welcome
              </span>
              <span className="text-white">.</span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
