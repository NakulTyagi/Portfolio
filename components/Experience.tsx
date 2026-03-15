'use client'
import { motion } from 'framer-motion'

const jobs = [
  {
    role: 'Senior Frontend Developer',
    company: 'Flipkart (Supermoney)',
    period: 'Jun 2025 — Present',
    location: 'Bangalore',
    current: true,
    color: '#00e5cc',
    tags: ['React', 'TypeScript', 'Fintech', 'Performance'],
    bullets: [
      'Led SuperCard Onboarding, boosting card customers by **30%** through scalable, optimized frontend.',
      'Integrated Pay in 3 payment journey with a **98% success rate**.',
      'Improved initial load performance by **25%**, mentored junior developers on best practices.',
    ],
  },
  {
    role: 'Software Development Engineer — 2',
    company: 'Signzy',
    period: 'Jan 2024 — May 2025',
    location: 'Bangalore',
    current: false,
    color: '#4f9eff',
    tags: ['Angular', 'AWS', 'KYC', 'AI/ML', 'Design System'],
    bullets: [
      'Spearheaded flagship **KYC platform for UAE Government (ICP)** — increasing revenue by ~**25%**.',
      'Created Live Video Verification platforms (LivenessSecure, Consenz AI) — top-grossing products, **+8% revenue**.',
      'Enhanced platform accuracy by **15%** with passive liveness detection and multi-face recognition.',
      'Built **UI Design Library** reducing cross-team implementation time by **30%**.',
    ],
  },
  {
    role: 'Software Development Engineer — 2',
    company: 'Coding Ninjas',
    period: 'Aug 2020 — Nov 2023',
    location: 'Gurugram',
    current: false,
    color: '#9b7fff',
    tags: ['Angular', 'Ruby on Rails', 'CI/CD', 'EdTech'],
    bullets: [
      'Built Coding Ninjas Studio from scratch — grew to **2.5M users** within a year, **35K+ DAU**.',
      'Revamped UI driving **30K unique visitors/week**.',
      'Partnered with AI to build hint recommendation system — boosted retention by **5%**.',
      'Integrated CI/CD, led code reviews and e2e testing.',
    ],
  },
  {
    role: 'Software Development Engineer — Mobile',
    company: 'Coding Ninjas (Mobile Division)',
    period: 'Coding Ninjas Studio App',
    location: '',
    current: false,
    color: '#ff6b35',
    tags: ['React Native', 'Android', 'A/B Testing'],
    bullets: [
      'Led end-to-end build & Play Store launch — **20K+ organic users** in months, exceeding targets by **30%**.',
      'A/B testing & feedback mechanisms increased engagement by **15%**.',
      'Engineered interactive **chart library** in React Native driving **5%** user adoption uplift.',
    ],
  },
]

function Bold({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? (
          <strong key={i} className="text-[#e8edf5] font-semibold">{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="section-number text-[5rem] opacity-[0.06]">03</span>
          <div>
            <p className="text-[#4f9eff] text-xs font-bold tracking-[0.18em] uppercase mb-1">Experience</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8edf5]" style={{ letterSpacing: '-0.03em' }}>
              Where I've<br />made impact.
            </h2>
          </div>
        </motion.div>

        <div className="relative pl-6 border-l border-white/[0.07]">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[33px] top-6 w-3 h-3 rounded-full border-2 border-[#0d1117]"
                style={{ background: job.color, boxShadow: job.current ? `0 0 12px ${job.color}88` : undefined }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0f1420] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.15] transition-colors duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <h3 className="font-display font-bold text-[#e8edf5] text-lg">{job.role}</h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      color: job.current ? '#00e5cc' : '#5a6478',
                      borderColor: job.current ? 'rgba(0,229,204,0.3)' : 'rgba(255,255,255,0.08)',
                      background: job.current ? 'rgba(0,229,204,0.07)' : 'transparent',
                    }}
                  >
                    {job.period}
                  </span>
                </div>

                <p className="text-sm font-semibold mb-4" style={{ color: job.color }}>
                  {job.company}{job.location && <span className="text-[#5a6478] font-normal"> · {job.location}</span>}
                </p>

                <ul className="space-y-2 mb-4">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-[#8b96a8] leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color }} />
                      <Bold text={b} />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(t => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{ background: `${job.color}14`, color: job.color, border: `1px solid ${job.color}28` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
