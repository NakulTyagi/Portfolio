'use client'
import { motion } from 'framer-motion'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nakul1tyagi/', icon: 'fab fa-linkedin-in', color: '#4f9eff' },
  { label: 'GitHub', href: 'https://github.com/NakulTyagi', icon: 'fab fa-github', color: '#9b7fff' },
  { label: '+91 9953000442', href: 'tel:+919953000442', icon: 'fas fa-phone', color: '#00e5cc' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1EgKV-oCSu8iB2sV5u3U6BFEvheQs882t/view?usp=sharing', icon: 'fas fa-file-alt', color: '#ff6b35' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#07090f]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="section-number text-[4rem] opacity-[0.06] mb-0">05</p>

          <p className="text-[#4f9eff] text-xs font-bold tracking-[0.18em] uppercase mb-4">Get in touch</p>

          <h2 className="font-display font-black leading-none tracking-tighter mb-6 text-[#e8edf5]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            Let's build something<br />
            <span className="text-gradient">great together.</span>
          </h2>

          <p className="text-[#8b96a8] text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Whether it's a new role, a side project, or just a conversation about
            frontend architecture — I'm always open.
          </p>

          {/* Big email CTA */}
          <motion.a
            href="mailto:nakul1tyagi@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block font-display font-bold text-[#e8edf5] hover:text-transparent transition-all duration-300 mb-12"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              letterSpacing: '-0.02em',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg,#4f9eff,#9b7fff)'
              ;(e.currentTarget as HTMLElement).style.webkitBackgroundClip = 'text'
              ;(e.currentTarget as HTMLElement).style.webkitTextFillColor = 'transparent'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.background = ''
              ;(e.currentTarget as HTMLElement).style.webkitBackgroundClip = ''
              ;(e.currentTarget as HTMLElement).style.webkitTextFillColor = ''
            }}
          >
            nakul1tyagi@gmail.com
          </motion.a>

          {/* Divider */}
          <div className="w-16 h-[2px] mx-auto mb-10 rounded-full"
            style={{ background: 'linear-gradient(90deg,#4f9eff,#9b7fff)' }} />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {links.map(l => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#0f1420] border border-white/[0.07] rounded-xl text-sm font-semibold text-[#8b96a8] hover:text-[#e8edf5] hover:border-white/20 transition-colors duration-200"
              >
                <i className={l.icon} style={{ color: l.color }} />
                {l.label}
              </motion.a>
            ))}
          </div>

          <p className="mt-10 text-[#5a6478] text-sm flex items-center justify-center gap-2">
            <i className="fas fa-map-marker-alt" style={{ color: '#4f9eff' }} />
            Bangalore, India · Open to remote & relocation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
