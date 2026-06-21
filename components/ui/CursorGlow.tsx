'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    let raf: number
    let x = -500
    let y = -500

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const animate = () => {
      if (el) {
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full"
      style={{
        width: 520,
        height: 520,
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
