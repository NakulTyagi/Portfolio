'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = ref.current!
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }
    const enter = () => el.classList.add('hovering')
    const leave = () => el.classList.remove('hovering')
    window.addEventListener('mousemove', move, { passive: true })
    document.querySelectorAll('a, button').forEach(n => {
      n.addEventListener('mouseenter', enter)
      n.addEventListener('mouseleave', leave)
    })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div id="cursor" ref={ref} />
}
