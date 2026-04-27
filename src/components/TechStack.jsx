import React from 'react';

const stackItems = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React JS', icon: 'code' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Python', icon: 'terminal' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'Node.js', icon: 'api' },
];

const TechStack = () => {
  return (
    <section className="pt-section-padding pb-8 px-gutter max-w-7xl mx-auto" id="stack">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-h2 text-4xl font-bold text-white mb-4">Bahasa Coding</h2>
        <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {stackItems.map((item) => (
          <div key={item.name} className="glass-card p-6 flex flex-col items-center gap-4 rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center text-cyan-400">
              <span className="material-symbols-outlined text-4xl">{item.icon}</span>
            </div>
            <span className="font-label-caps text-xs text-white/80 uppercase tracking-widest">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
