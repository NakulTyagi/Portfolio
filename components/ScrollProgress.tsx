'use client'
import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (barRef.current) {
        barRef.current.style.width = `${(scrolled / total) * 100}%`
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full w-0 shadow-[0_0_8px_rgba(79,158,255,0.7)]"
        style={{ background: 'linear-gradient(90deg, #4f9eff, #9b7fff, #00e5cc)' }}
      />
    </div>
  )
}
