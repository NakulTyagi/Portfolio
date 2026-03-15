export default function Footer() {
  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#07090f' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-display font-bold"
          style={{ background: 'linear-gradient(135deg,#4f9eff,#9b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Nakul Tyagi
        </span>
        <span className="text-[#5a6478] text-sm">Designed & built with care · 2025</span>
        <div className="flex gap-3">
          {[
            { href: 'https://www.linkedin.com/in/nakul1tyagi/', icon: 'fab fa-linkedin-in' },
            { href: 'https://github.com/NakulTyagi', icon: 'fab fa-github' },
            { href: 'mailto:nakul1tyagi@gmail.com', icon: 'fas fa-envelope' },
          ].map(s => (
            <a
              key={s.href}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-white/[0.07] rounded-lg text-[#5a6478] hover:text-[#4f9eff] hover:border-[#4f9eff]/30 transition-all duration-200 text-xs"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
