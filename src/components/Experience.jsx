import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Laboratory Assistant',
    company: 'Universitas Mulawarman',
    type: 'Internship',
    period: 'Jul 2025 — Present',
    duration: '10 mos',
    location: 'Kecamatan Samarinda Ilir, East Kalimantan, Indonesia',
    mode: 'On-site',
    description: 'Serving as a laboratory assistant for programming courses. Responsible for guiding students in Java development and Object-Relational Mapping (ORM) concepts.',
    skills: ['Java', 'NetBeans', 'ORM'],
    media: [{ title: 'Penggunaan JDBC' }, { title: 'Pengenalan JDBC' }, { title: 'ORM Concepts' }],
    logo: 'school'
  },
  {
    title: 'React & Back-End with AI',
    company: 'Asah led by Dicoding',
    type: 'Internship',
    period: 'Aug 2025 — Present',
    duration: '9 mos',
    location: 'Indonesia',
    mode: 'Remote',
    description: 'Participating in the ASAH program focused on modern web development. Building AI-integrated full-stack applications using React.js and Node.js.',
    skills: ['React.js', 'JavaScript', 'Node.js', 'AI Integration'],
    logo: 'psychology'
  },
  {
    title: 'Inforsa Mengabdi 2025',
    company: 'Information System Association (INFORSA)',
    type: 'Internship',
    period: 'Aug 2025 — Oct 2025',
    duration: '3 mos',
    location: 'Kecamatan Samarinda Ilir, East Kalimantan, Indonesia',
    mode: 'Hybrid',
    description: 'Community service activities at SMP Wahidiyah Samarinda with the theme "Digital Vitality for Community Empowerment in the Technology Era."',
    skills: ['Front-End Development', 'Laravel', 'Public Speaking'],
    logo: 'groups'
  },
  {
    title: 'Staff — RPPM',
    company: 'Information System Association (INFORSA)',
    type: 'Internship',
    period: 'Mar 2024 — Dec 2024',
    duration: '10 mos',
    location: 'Kecamatan Samarinda Ilir, East Kalimantan, Indonesia',
    mode: 'On-site',
    description: 'Served as staff in the Research and Student Potential Development (RPPM) department. Involved in internal research and developing member potential.',
    skills: ['Public Speaking', 'Effective Communication', 'Research'],
    media: [{ title: 'All Staff of RPPM' }],
    logo: 'person'
  }
];

const CardContent = ({ exp }) => (
  <div className="flex gap-4">
    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-xl text-cyan-400">{exp.logo}</span>
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-h2 text-lg font-bold text-white">{exp.title}</h3>
      <div className="flex flex-wrap items-center gap-x-1.5 text-sm text-white/70 mt-0.5">
        <span className="font-semibold">{exp.company}</span>
        <span className="text-white/30">·</span>
        <span>{exp.type}</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-1.5 text-xs text-white/40 mt-1">
        <span>{exp.period}</span>
        <span className="text-white/20">·</span>
        <span>{exp.duration}</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-1.5 text-xs text-white/40 mt-0.5">
        <span>{exp.location}</span>
        <span className="text-white/20">·</span>
        <span>{exp.mode}</span>
      </div>
      <p className="text-white/55 text-sm mt-3 leading-relaxed">{exp.description}</p>
      {exp.media && (
        <div className="flex flex-wrap gap-2 mt-3">
          {exp.media.map((item, i) => (
            <div key={i} className="w-20 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[9px] text-white/25 text-center px-1">
              {item.title}
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-white/70">
        <span className="material-symbols-outlined text-sm text-white/30">diamond</span>
        <span>
          {exp.skills.slice(0, 2).join(', ')}
          {exp.skills.length > 2 && ` and +${exp.skills.length - 2} skills`}
        </span>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const sectionRef = useRef(null);
  const pinnedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.exp-card');
      const numCards = cards.length;
      const STACK_OFFSET = 14; // px gap between stacked cards

      // Cards 1+ start hidden below the stack area
      gsap.set(cards.slice(1), { yPercent: 110, opacity: 0 });

      // Build a timeline: each "step" = one card sliding in
      const tl = gsap.timeline({ defaults: { ease: 'none' } });

      cards.forEach((card, i) => {
        if (i === 0) return;

        // Push previous cards up & shrink them
        cards.slice(0, i).forEach((prev, j) => {
          tl.to(prev, {
            scale: 1 - (i - j) * 0.04,
            y: -(i - j) * STACK_OFFSET,
            opacity: 1 - (i - j) * 0.12,
            duration: 1,
          }, i - 1);
        });

        // Slide this card in from below
        tl.fromTo(card,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: 'power2.out' },
          i - 1
        );
      });

      // Pin the inner container; scrub the timeline with scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (numCards - 1)}`,
        pin: pinnedRef.current,
        pinSpacing: true,
        scrub: 0.6,
        animation: tl,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative">
      {/* Pinned viewport container */}
      <div
        ref={pinnedRef}
        className="min-h-screen flex flex-col items-center justify-start pt-28 pb-16 px-4"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="font-h2 text-4xl font-bold text-white mb-4">My Experiences</h2>
          <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Stack area — cards are absolutely layered on top of each other */}
        <div className="relative max-w-3xl w-full" style={{ minHeight: '280px' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`exp-card w-full bg-[#111316] border border-white/10 rounded-2xl p-6 ${
                index === 0 ? 'relative' : 'absolute top-0 left-0'
              }`}
              style={{ zIndex: index + 1 }}
            >
              <CardContent exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
