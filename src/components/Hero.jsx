import GridScan from './GridScan';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-gutter pt-24 text-center relative overflow-hidden bg-black">
      {/* Dynamic Grid Scan Backdrop */}
      <div className="absolute inset-0 pointer-events-auto z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#0066ff"
          gridScale={0.1}
          scanColor="#00fff7"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00fff7] animate-pulse"></span>
          <span className="font-label-caps text-[10px] text-cyan-400 uppercase tracking-[0.2em]">Available for work</span>
        </div>
        <h1 className="font-h1 text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
          Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architectures</span> that Matter.
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-white/60 max-w-2xl mb-10">
          Senior Full-Stack Engineer specializing in high-performance SaaS platforms and immersive digital experiences with a focus on technical precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-[#00fff7] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,247,0.5)] transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">rocket_launch</span>
            View My Projects
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-lg hover:bg-white/10 transition-all">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
