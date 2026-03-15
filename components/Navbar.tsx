'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'work' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090f]/90 backdrop-blur-xl border-b border-white/[0.05] shadow-lg'
          : ''
      }`}
    >
      {/* blend overlay so logo/links are always legible over both hero halves */}
      <div
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        style={!scrolled ? { mixBlendMode: 'difference' } : {}}
      >
        {/* Logo */}
        <a href="#hero" className="font-mono font-bold text-white text-sm tracking-wider">
          NT<span style={{ color: '#4f9eff' }}>_</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right — socials + resume */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.linkedin.com/in/nakul1tyagi/" target="_blank" rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200 text-xs font-mono">
            in
          </a>
          <a href="https://github.com/NakulTyagi" target="_blank" rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200 text-xs font-mono">
            gh
          </a>
          <a
            href="https://drive.google.com/file/d/1EgKV-oCSu8iB2sV5u3U6BFEvheQs882t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-white border border-white/40 rounded px-3 py-1.5 hover:border-white transition-all duration-200"
          >
            resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono text-xs text-white/60 border border-white/20 rounded px-3 py-1.5"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#08090f] border-b border-white/[0.05] px-6 py-6 flex flex-col gap-5"
        >
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-[#5a6478] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
