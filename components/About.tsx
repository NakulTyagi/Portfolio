'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '2.5M+', label: 'Users reached' },
  { value: '30%', label: 'Revenue impact' },
  { value: '400+', label: 'Students mentored' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="section-number text-[5rem] opacity-[0.06]">01</span>
          <div>
            <p className="text-[#4f9eff] text-xs font-bold tracking-[0.18em] uppercase mb-1">About</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8edf5] leading-tight" style={{ letterSpacing: '-0.03em' }}>
              The person<br />behind the code.
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/[0.07]"
              style={{ boxShadow: '0 0 60px rgba(79,158,255,0.1)' }}>
              <Image
                src="/images/nakul_pic.png"
                alt="Nakul Tyagi"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0f1420] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-lg">
              <p className="text-[#e8edf5] font-display font-bold text-sm">Senior FE Dev</p>
              <p className="text-[#4f9eff] text-xs font-semibold">@ Flipkart</p>
            </div>
            {/* Decorative border accent */}
            <div className="absolute -inset-1 rounded-2xl -z-10 opacity-40"
              style={{ background: 'linear-gradient(135deg,#4f9eff,#9b7fff,transparent)' }} />
          </motion.div>

          {/* Text */}
          <div ref={ref}>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-display font-semibold text-[#e8edf5] leading-snug mb-8"
              style={{ letterSpacing: '-0.02em' }}
            >
              "I turn complex problems into{' '}
              <span className="text-gradient">products people love."</span>
            </motion.blockquote>

            {[
              `I'm a Senior Frontend Developer currently at Flipkart (Supermoney), where I lead the SuperCard Onboarding experience — boosting card customers by 30% through a highly optimized, scalable frontend.`,
              `Over 5+ years I've worked across fintech, edtech, and identity verification — building platforms that serve millions. At Signzy, I led a flagship KYC platform for the UAE Government and created AI-powered video verification products that became the company's top-grossing offerings.`,
              `I bring deep frontend expertise (React, Angular, Next.js, React Native), a product mindset, and an obsession with performance-first, accessible UI.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                className="text-[#8b96a8] leading-relaxed mb-4 text-[0.975rem]"
              >
                {para}
              </motion.p>
            ))}

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {stats.map(s => (
                <div key={s.label} className="bg-[#0f1420] border border-white/[0.06] rounded-xl p-4 text-center hover:border-[#4f9eff]/30 transition-colors duration-200">
                  <p className="font-display font-bold text-2xl text-gradient">{s.value}</p>
                  <p className="text-[#5a6478] text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {[
                { icon: '📍', text: 'Bangalore, India' },
                { icon: '🎓', text: 'B.Tech CS — 8.5 CGPA' },
                { icon: '✉️', text: 'nakul1tyagi@gmail.com' },
              ].map(p => (
                <span key={p.text} className="flex items-center gap-2 text-sm text-[#8b96a8] border border-white/[0.07] rounded-full px-3 py-1 bg-[#0f1420]">
                  <span>{p.icon}</span> {p.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
