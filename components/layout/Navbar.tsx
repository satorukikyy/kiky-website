'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-c-border">
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
              className={`font-body text-[13px] transition-colors pb-px ${
                isActive(link.href)
                  ? 'text-c-text border-b-2 border-c-purple'
                  : 'text-c-muted hover:text-c-text'
              }`}
            >
              {link.label}
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
        <div className="md:hidden bg-white border-b border-c-border px-6 py-5 flex flex-col gap-4">
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
