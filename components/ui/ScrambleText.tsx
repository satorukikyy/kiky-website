'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&*!<>/'

export default function ScrambleText({
  text,
  className,
  delay = 120,
  duration = 1000,
}: {
  text: string
  className?: string
  delay?: number
  duration?: number
}) {
  const [output, setOutput] = useState(text)
  const [cursor, setCursor] = useState(false)
  const [rev, setRev] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cursorTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const startedAt = useRef<number | null>(null)

  useEffect(() => {
    const nonSpaceLen = text.replace(/ /g, '').length

    const tick = () => {
      const now = Date.now()
      if (startedAt.current === null) startedAt.current = now
      const progress = Math.min((now - startedAt.current) / duration, 1)
      const locked = Math.floor(progress * nonSpaceLen)

      let idx = 0
      const result = text
        .split('')
        .map((ch) => {
          if (ch === ' ') return ' '
          idx++
          if (idx <= locked) return ch
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setOutput(result)

      if (progress < 1) {
        timer.current = setTimeout(tick, 40)
      } else {
        setOutput(text)
        setCursor(true)
        cursorTimer.current = setTimeout(() => setCursor(false), 1800)
      }
    }

    // immediately scramble, then resolve after delay
    setOutput(
      text
        .split('')
        .map((c) => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join('')
    )

    const kickoff = setTimeout(() => {
      startedAt.current = null
      tick()
    }, delay)

    return () => {
      clearTimeout(kickoff)
      if (timer.current) clearTimeout(timer.current)
      if (cursorTimer.current) clearTimeout(cursorTimer.current)
    }
  }, [text, delay, duration, rev])

  return (
    <span
      className={className}
      onClick={() => { setCursor(false); setRev(v => v + 1) }}
      style={{ cursor: 'pointer' }}
      title="click to replay"
    >
      {output}
      {cursor && <span className="scramble-cursor" aria-hidden="true">|</span>}
    </span>
  )
}
