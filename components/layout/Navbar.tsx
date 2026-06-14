'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { personalInfo } from '@/lib/data'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg border-b-2 border-brand-text">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight">
          {personalInfo.nickname}<span className="text-brand-red">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading font-bold text-sm uppercase tracking-wide transition-colors hover:text-brand-red ${
                pathname === link.href ? 'text-brand-red' : 'text-brand-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="primary" href="/contact">Hire Me</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-bold text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-brand-text bg-brand-bg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-heading font-bold uppercase tracking-wide ${
                pathname === link.href ? 'text-brand-red' : 'text-brand-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" href="/contact">Hire Me</Button>
        </div>
      )}
    </nav>
  )
}
