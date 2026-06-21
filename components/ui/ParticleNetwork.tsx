'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  ox: number
  oy: number
}

const COLOR = '124,58,237'
const CONNECT  = 145
const REPEL    = 115
const SPEED    = 0.32

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let raf = 0
    let particles: Particle[] = []

    const init = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H

      const count = Math.max(22, Math.min(70, Math.floor((W * H) / 15000)))
      particles = Array.from({ length: count }, () => {
        const vx = (Math.random() - 0.5) * SPEED
        const vy = (Math.random() - 0.5) * SPEED
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx, vy, ox: vx, oy: vy,
        }
      })
    }

    const tick = () => {
      ctx.clearRect(0, 0, W, H)

      const mx = mouse.current.x
      const my = mouse.current.y

      /* ── update positions ── */
      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const d  = Math.sqrt(dx * dx + dy * dy)

        if (d < REPEL && d > 0) {
          const f = (1 - d / REPEL) * 0.7
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }

        // ease back to base velocity
        p.vx += (p.ox - p.vx) * 0.03
        p.vy += (p.oy - p.vy) * 0.03

        p.x += p.vx
        p.y += p.vy

        // wall bounce
        if (p.x <= 0) { p.x = 0; p.vx = Math.abs(p.vx); p.ox = Math.abs(p.ox) }
        if (p.x >= W) { p.x = W; p.vx = -Math.abs(p.vx); p.ox = -Math.abs(p.ox) }
        if (p.y <= 0) { p.y = 0; p.vy = Math.abs(p.vy); p.oy = Math.abs(p.oy) }
        if (p.y >= H) { p.y = H; p.vy = -Math.abs(p.vy); p.oy = -Math.abs(p.oy) }
      }

      /* ── draw edges ── */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d  = Math.sqrt(dx * dx + dy * dy)

          if (d < CONNECT) {
            // lines near cursor are brighter
            const midX  = (a.x + b.x) / 2
            const midY  = (a.y + b.y) / 2
            const mdist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2)
            const boost = mdist < REPEL * 1.5 ? 1.6 : 1

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${COLOR},${((1 - d / CONNECT) * 0.14 * boost).toFixed(3)})`
            ctx.lineWidth = 0.65
            ctx.stroke()
          }
        }
      }

      /* ── draw nodes ── */
      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const d  = Math.sqrt(dx * dx + dy * dy)
        const nearCursor = d < REPEL
        const r     = nearCursor ? 2.8 : 1.9
        const alpha = nearCursor ? 0.55 : 0.32

        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${COLOR},${alpha})`
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    init()
    tick()

    const onResize    = () => init()
    const onMove      = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY } }
    const onLeave     = () => { mouse.current = { x: -9999, y: -9999 } }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      mouse.current = { x: t.clientX, y: t.clientY }
    }
    const onTouchEnd  = () => { mouse.current = { x: -9999, y: -9999 } }

    window.addEventListener('resize',    onResize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend',  onTouchEnd)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize',    onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend',  onTouchEnd)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
