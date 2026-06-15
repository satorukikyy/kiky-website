'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { label: 'About',      href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Services',   href: '/services' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-[1120px] mx-auto px-5 h-[60px] flex items-center justify-between">

        <Link href="/" className="font-heading font-black text-lg tracking-tight text-brand-text">
          {personalInfo.nickname.toLowerCase()}
          <span className="text-brand-green">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-brand-text font-semibold'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-brand-green text-white font-heading font-bold text-[13px] px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Hire Me →
        </Link>

        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-brand-text transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brand-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brand-text transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-bg border-t border-brand-border px-5 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-body text-sm font-medium ${
                pathname === link.href ? 'text-brand-text' : 'text-brand-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand-green text-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg text-center"
          >
            Hire Me →
          </Link>
        </div>
      )}
    </nav>
  )
}
