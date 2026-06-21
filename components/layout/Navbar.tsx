'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { label: 'About',      href: '/about' },
  { label: 'Background', href: '/background' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Writings',   href: '/writings' },
  { label: 'Services',   href: '/services' },
  { label: 'Contact',    href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-c-border shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="max-w-[720px] mx-auto px-6 h-14 flex items-center justify-between">

        <Link
          href="/"
          className="font-body font-bold text-[16px] text-c-text select-none"
        >
          {personalInfo.nickname.toLowerCase()}
          <span className="text-c-purple">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-body text-[13px] transition-colors pb-[3px] ${
                isActive(link.href) ? 'text-c-text' : 'text-c-muted hover:text-c-text'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-c-purple rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-px bg-c-text transition-all ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-4 h-px bg-c-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-px bg-c-text transition-all ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-b border-c-border px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-body text-[14px] ${
                isActive(link.href) ? 'text-c-text font-semibold' : 'text-c-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
