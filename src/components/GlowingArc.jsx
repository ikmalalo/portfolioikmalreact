import React from 'react';

const GlowingArc = () => {
  return (
    <div className="relative w-full h-[500px] pointer-events-none flex justify-center z-10 mt-[-250px] mb-[-150px]">
      {/* Container to clip the ultra-wide SVG */}
      <div className="absolute inset-0 overflow-hidden flex justify-center">
        {/* High-Performance SVG Horizon - Epic Scale */}
        <svg 
          className="w-[300%] h-full opacity-90 scale-x-110" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#arc-glow-epic)">
            <path 
              d="M -300 380 Q 600 0 1500 380" 
              stroke="url(#arc-grad-epic)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter id="arc-glow-epic" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="arc-grad-epic" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="#00fff7" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00fff7" stopOpacity="1" />
              <stop offset="80%" stopColor="#00fff7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Central Atmospheric Glow (Transparent) */}
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[90%] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
    </div>
  );
};

export default GlowingArc;
