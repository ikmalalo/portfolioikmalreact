import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 250, mass: 0.5 });

  const pointsRef = useRef([]);
  const [pathStr, setPathStr] = useState('');
  const requestRef = useRef();

  // Reverted history limit to 15
  const historyLimit = 15;

  const animate = (time) => {
    if (pointsRef.current.length > 0) {
      const currentHead = { x: mouseX.get(), y: mouseY.get() };
      const newPoints = [...pointsRef.current];
      
      newPoints[0] = currentHead;

      for (let i = newPoints.length - 1; i > 0; i--) {
        const p = newPoints[i];
        const prev = newPoints[i - 1];
        
        // Reverted factor to 0.15
        const factor = 0.15; 
        p.x += (prev.x - p.x) * factor;
        p.y += (prev.y - p.y) * factor;
      }

      pointsRef.current = newPoints;
      setPathStr(newPoints.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '));
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const moveMouse = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      if (!isVisible) setIsVisible(true);

      if (pointsRef.current.length === 0) {
        pointsRef.current = Array(historyLimit).fill({ x: clientX, y: clientY });
      } else {
        pointsRef.current[0] = { x: clientX, y: clientY };
      }
    };

    const handleHover = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('glass-card') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
      cancelAnimationFrame(requestRef.current);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Glowing Line Trail - Reverted widths and blurs */}
      {!isHovered && pathStr && (
        <svg className="absolute inset-0 w-full h-full overflow-visible mix-blend-screen">
          {/* Outer Glow */}
          <polyline
            points={pathStr}
            fill="none"
            stroke="#00fff7"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.2, filter: 'blur(8px)' }}
          />
          {/* Middle Glow */}
          <polyline
            points={pathStr}
            fill="none"
            stroke="#00fff7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.5, filter: 'blur(2px)' }}
          />
          {/* Core Line */}
          <polyline
            points={pathStr}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.8 }}
          />
        </svg>
      )}

      {/* Primary Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          backgroundColor: isHovered ? 'rgba(0, 255, 247, 0.15)' : 'rgba(0, 255, 247, 0)',
          borderColor: isHovered ? 'rgba(0, 255, 247, 0.5)' : 'rgba(0, 255, 247, 0.3)',
        }}
        className="fixed top-0 left-0 border-2 rounded-full mix-blend-screen"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.5 : 1,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(0,255,247,1)]"
      />
    </div>
  );
};

export default CustomCursor;
