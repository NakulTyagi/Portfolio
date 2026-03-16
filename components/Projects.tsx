'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const projects = [
  {
    title: 'Claude Super Engineer',
    category: 'AI · Developer Tool',
    desc: 'AI-powered GitHub repo analyzer providing code surgery, architecture reviews, automated refactoring, and feature suggestions.',
    image: `${BASE}/images/cse.png`,
    fallbackBg: 'linear-gradient(135deg, #1a0f2e 0%, #0d1117 100%)',
    fallbackEmoji: '🤖',
    accent: '#9b7fff',
    links: [
      { label: 'Live Demo', href: 'https://claude-super-engineer.vercel.app/' },
      { label: 'View on GitHub', href: 'https://github.com/NakulTyagi' },
    ],
    tags: ['Claude AI', 'React', 'TypeScript'],
  },
  {
    title: 'Coding Ninjas Studio',
    category: 'EdTech · Web + Mobile',
    desc: 'Co-created the e-learning platform from zero to 2.5M users. Interview prep, DSA, competitive programming across web and mobile.',
    image: `${BASE}/images/cn-2.png`,
    fallbackBg: 'linear-gradient(135deg, #1a0a05 0%, #0d1117 100%)',
    fallbackEmoji: '🎓',
    accent: '#ff6b35',
    links: [
      { label: 'Visit site', href: 'https://www.codingninjas.com/studio/' },
    ],
    tags: ['Angular', 'React Native', 'Ruby on Rails'],
  },
  {
    title: 'Netflix Replica',
    category: 'Frontend · UI Clone',
    desc: 'A pixel-perfect Netflix UI clone exploring streaming platform architecture with curated movie/show browsing and modern state management.',
    image: `${BASE}/images/netflix-project.png`,
    fallbackBg: 'linear-gradient(135deg, #1a0003 0%, #0d1117 100%)',
    fallbackEmoji: '🎬',
    accent: '#4f9eff',
    links: [{ label: 'View on GitHub', href: 'https://github.com/NakulTyagi' }],
    tags: ['React', 'JavaScript', 'REST APIs'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#08090f]">
      <div className="max-w-6xl mx-auto">

        {/* Section header — Adham style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-[#3a4050] text-xs tracking-[0.22em] uppercase mb-4">selected work</p>
          <h2 className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}>
            Some of my<br />
            <span style={{ color: '#4f9eff' }}>latest work.</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-40px' }}
              className="group relative bg-[#0d1117] border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col hover:border-white/[0.14] transition-all duration-400"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.accent}0e, transparent 60%)` }}
              />

              {/* Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden" style={{ background: p.fallbackBg }}>
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    {p.fallbackEmoji}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-2" style={{ color: p.accent }}>
                  {p.category}
                </p>
                <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">{p.title}</h3>
                <p className="text-[#5a6478] text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                      style={{ background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}22` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-white/[0.06] pt-4">
                  {p.links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-[#5a6478] hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                    >
                      {l.label}
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
