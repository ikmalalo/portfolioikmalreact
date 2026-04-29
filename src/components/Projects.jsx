import React from 'react';

const projects = [
  {
    title: 'OmniAnalytica Dashboard',
    description: 'A high-performance analytics engine for real-time monitoring of cloud infrastructure with automated reporting.',
    tags: ['React', 'GraphQL'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5lkY31fZpXeKj-4Vaw-lXfa1tVSGNNup5pbIDbOc5gs1JF2NNSWrRrFI3y4zSVLsXn7Fhy4F_DQHi009v6acEHIMK1unBqNPh6vlrU_M1bs352zLWIoiwqbvppoFFuKv6xnZfrhdUaLxogPbQmfgLVlvw1Yr1SJqR4U4Hh2jP_pXmt60A3LgfyBwEIEsMKy-nb0GZBT0kDybPewq2tAxXs2WG2okL8lJ6i3auFgKqqKt7HSOGIc0GQVk0qkyflPS5rZZQJg9uFqk'
  },
  {
    title: 'Cryptoslate Wallet',
    description: 'Next-gen decentralized crypto wallet with advanced biometric security and instant atomic swaps.',
    tags: ['SwiftUI', 'Node.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_XhaTx4oqoEaBdlmxIkVV247xG1NpUvGeQWm-aOeyrAEIWgLjvcOlUtPCFow7tl-MNz5VhK-mhdmWXNKrdDqvJNrTIb3rixEG3tDoklFkOG0L9doHhF4tqSc58xPITivooSIqcdqIFbyObFdQm8jxn_aF31DIUqQs_xSs6UNqv-02v07tgry6awunAREPOPFxtPz0JkuqrQ1w5LNnliWfoT7npC2sh_5qGOE-76o6cGMFfVLXDWPLP1WWYF_YiW5nlD7Owca5Lbo'
  }
];

const Projects = () => {
  return (
    <section className="py-section-padding px-gutter max-w-7xl mx-auto" id="projects">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-h2 text-4xl font-bold text-white mb-4">My Projects</h2>
        <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card group rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden relative">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" 
                src={project.image} 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-cyan-400/20 text-cyan-400 text-[10px] px-2 py-1 rounded border border-cyan-400/30 backdrop-blur-md uppercase tracking-wider font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-h2 text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 mb-6 line-clamp-2">{project.description}</p>
              <a className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all" href="#">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
