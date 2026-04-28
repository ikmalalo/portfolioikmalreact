
import TiltedCard from './TiltedCard';
import imagePng from '../image.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-gutter pt-24 relative overflow-hidden max-w-7xl mx-auto w-full">
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00fff7] animate-pulse"></span>
            <span className="font-label-caps text-[10px] text-cyan-400 uppercase tracking-[0.2em]">Available for work</span>
          </div>
          <h1 className="font-h1 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architectures</span> that Matter.
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-white/60 max-w-2xl mb-10">
            Senior Full-Stack Engineer specializing in high-performance SaaS platforms and immersive digital experiences with a focus on technical precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#00fff7] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,247,0.5)] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">rocket_launch</span>
              View My Projects
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Column: Tilted Image Card */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <TiltedCard
            imageSrc={imagePng}
            altText="Ikmal Portfolio Image"
            captionText="Hi, I'm Ikmal!"
            containerHeight="400px"
            containerWidth="100%"
            imageHeight="400px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-5 py-2 rounded-xl border border-white/10 shadow-lg whitespace-nowrap">
                <p className="text-white font-label-caps font-bold tracking-wider">Ikmal Ali Azhari</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
