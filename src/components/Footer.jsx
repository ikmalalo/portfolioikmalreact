import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 max-w-7xl mx-auto">
        <div className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-widest text-white/30">
          © 2024 ARCHITECTED BY CODE. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
            <a key={social} className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-widest text-white/30 hover:text-cyan-300 transition-colors" href="#">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
