import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-h1 tracking-tight">
        <div className="text-xl font-black tracking-tighter text-cyan-400">DevTerminal</div>
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
    </nav>
  );
};

export default Navbar;
