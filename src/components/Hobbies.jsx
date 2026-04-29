import React from 'react';
import MagicBento from './MagicBento';

const Hobbies = () => {
  return (
    <section className="py-section-padding px-gutter" id="hobbies">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-h2 text-4xl font-bold text-white mb-4">My Hobbies</h2>
          <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
        </div>
        <div className="relative">
          <MagicBento 
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={15}
            glowColor="0, 255, 247"
          />
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
