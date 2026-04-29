import React from 'react';

const experiences = [
  {
    title: 'Lead Software Architect',
    company: 'Nova Dynamics',
    location: 'Jakarta, ID',
    period: '2021 — PRESENT',
    description: 'spearheading the development of core SaaS architecture serving 1M+ active users. Implementing scalable microservices and optimizing database performance by 40%.',
    icon: 'work',
    active: true
  },
  {
    title: 'Full Stack Developer',
    company: 'Pixel Labs',
    location: 'Remote',
    period: '2018 — 2021',
    description: 'Developed responsive web applications using React and Node.js. Collaborated with design teams to translate Figma wireframes into pixel-perfect interactive components.',
    icon: 'work',
    active: false
  }
];

const Experience = () => {
  return (
    <section className="pt-32 pb-section-padding px-gutter bg-surface-container-lowest/50" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-h2 text-4xl font-bold text-white mb-4">My Experiences</h2>
          <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
        </div>
        <div className="space-y-12 relative before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-14">
              <div className={`absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0a0a0a] border ${exp.active ? 'border-cyan-400' : 'border-white/20'} flex items-center justify-center z-10`}>
                <span className={`material-symbols-outlined text-sm ${exp.active ? 'text-cyan-400' : 'text-white/40'}`} style={{ fontVariationSettings: exp.active ? "'FILL' 1" : "" }}>
                  {exp.icon}
                </span>
              </div>
              <div className="glass-card p-8 h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="font-h2 text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400 font-label-caps text-xs uppercase tracking-widest">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-white/40 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
