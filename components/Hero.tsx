'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ROLES = ['Senior Frontend Developer', 'React & Next.js Engineer', 'AI Agent Developer','Mobile App Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #07090f 0%, #0d1117 60%, #0e0e1c 100%)' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute pointer-events-none" style={{ top: '15%', left: '5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle,rgba(79,158,255,0.08) 0%,transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '10%', right: '8%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle,rgba(155,127,255,0.07) 0%,transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-[#4f9eff] mb-4 uppercase">
            Available for opportunities
          </p>

          <h1 className="font-display font-black leading-[1.05] tracking-tight text-white mb-5"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}>
            Nakul<br />Tyagi
          </h1>

          <div className="h-8 mb-6 flex items-center">
            <span className="font-mono text-sm text-white/50">
              {displayed}
              <span className="inline-block w-[2px] h-4 bg-[#4f9eff] ml-0.5 align-middle animate-pulse" />
            </span>
          </div>

          <p className="text-white/50 text-base leading-relaxed max-w-md mb-10">
            5+ years building products at scale — from Flipkart&apos;s Supermoney platform
            to mobile apps used by millions. I care about clean code, fast UIs, and real impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="font-mono text-sm font-bold text-[#07090f] bg-white px-6 py-3 rounded hover:bg-[#4f9eff] hover:text-white transition-all duration-200"
            >
              View Work
            </a>
            <a
              href="https://drive.google.com/file/d/1EgKV-oCSu8iB2sV5u3U6BFEvheQs882t/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm font-bold text-white border border-white/30 px-6 py-3 rounded hover:border-white transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <a href="https://www.linkedin.com/in/nakul1tyagi/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase">
              LinkedIn
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="https://github.com/NakulTyagi" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase">
              GitHub
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="mailto:nakul1tyagi@gmail.com"
              className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase">
              Email
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg,rgba(79,158,255,0.15),rgba(155,127,255,0.1))', transform: 'translate(8px,8px)' }} />
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden border border-white/[0.06]">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/nakul_pic.png`} alt="Nakul Tyagi" fill className="object-cover object-top" priority />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
