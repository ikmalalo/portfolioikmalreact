import React from 'react';
import GlassSurface from './GlassSurface';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 border border-white/20 border-t-white/40 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)]">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={9999}
      >
        <div className="flex justify-between items-center px-6 py-2 font-h1 tracking-tight w-full">
          <div className="text-xl font-black tracking-tighter text-cyan-400 pl-2">DevTerminal</div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-white/60 hover:text-white transition-colors" href="#stack">Stack</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#experience">Experience</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#hobbies">Hobbies</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-cyan-400">terminal</span>
            <button className="bg-[#00fff7] text-black px-5 py-2 rounded-full font-label-caps text-xs hover:shadow-[0_0_20px_rgba(0,255,247,0.4)] transition-all">
              Hire Me
            </button>
          </div>
        </div>
      </GlassSurface>
    </nav>
  );
};

export default Navbar;
