# UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rombak total visual portfolio dari neobrutalist (putih + kuning + border hitam) ke editorial professional (putih + hijau #00A845, bento grid, tipografi besar).

**Architecture:** Ganti design tokens di tailwind.config.ts + globals.css, rebuild semua komponen UI dan section dengan class baru, tidak ada perubahan di lib/data.ts. Semua halaman (9 page) disesuaikan dengan design system baru.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 3.4, Framer Motion 12, Space Grotesk + Inter via next/font.

---

## File Map

| File | Action | Tanggung Jawab |
|---|---|---|
| `tailwind.config.ts` | Modify | Token warna baru, hapus neo shadows |
| `app/globals.css` | Modify | Base styles baru, hapus neo-* utilities |
| `app/layout.tsx` | Modify | Tambah font weight 800/900 Space Grotesk |
| `components/ui/Button.tsx` | Modify | Variant green primary + outline secondary |
| `components/ui/Card.tsx` | Modify | Card putih border halus, card green, card soft |
| `components/ui/Badge.tsx` | Modify | Tag style baru |
| `components/ui/Marquee.tsx` | Modify | Strip hijau |
| `components/ui/PageHero.tsx` | Modify | Hero page minimal clean |
| `components/layout/Navbar.tsx` | Modify | Sticky blur, links abu, CTA hijau |
| `components/layout/Footer.tsx` | Modify | Light footer, border atas, logo kiri |
| `components/sections/HeroSection.tsx` | Modify | Headline besar + 4 stat bento cards |
| `components/sections/AboutPreview.tsx` | Modify | 2-col grid: bio + cert pills |
| `components/sections/ServicesPreview.tsx` | Modify | 2-col: VAPT card putih + GRC card hijau |
| `components/sections/ProjectsPreview.tsx` | Modify | 1fr/2fr: count card + 2×2 project grid |
| `components/sections/CertificationsStrip.tsx` | Modify | Hapus konten lama, jadikan HomeCTA section |
| `app/page.tsx` | Modify | Susun ulang section homepage |
| `app/about/page.tsx` | Modify | Bio + skills bento + education/exp links |
| `app/experience/page.tsx` | Modify | Timeline cards clean |
| `app/education/page.tsx` | Modify | Institution cards |
| `app/services/page.tsx` | Modify | Detail VAPT + GRC cards |
| `app/projects/page.tsx` | Modify | Hub dengan 2 kategori |
| `app/projects/vapt/page.tsx` | Modify | List VAPT projects |
| `app/projects/grc/page.tsx` | Modify | List GRC projects |
| `app/contact/page.tsx` | Modify | Form + social links |

---

## Task 1: Design System Foundation

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update tailwind.config.ts**

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg':           '#F7FAF7',
        'brand-soft':         '#F0F7F1',
        'brand-green':        '#00A845',
        'brand-green-dark':   '#007A32',
        'brand-green-light':  '#EBF7EE',
        'brand-green-border': '#C3E6CC',
        'brand-text':         '#0A0A0A',
        'brand-muted':        '#6B7280',
        'brand-subtle':       '#9CA3AF',
        'brand-border':       '#E4EDE5',
        'brand-border-soft':  '#DDE9DE',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Update app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #F7FAF7;
    --foreground: #0A0A0A;
  }

  body {
    @apply bg-brand-bg text-brand-text font-body antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
}

@layer utilities {
  .section-tag {
    @apply text-[10px] text-brand-green tracking-[3px] uppercase font-bold font-heading;
  }
  .section-title {
    @apply text-2xl font-heading font-black text-brand-text tracking-tight;
  }
}
```

- [ ] **Step 3: Update app/layout.tsx — tambah font weight 800/900**

```tsx
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { personalInfo } from '@/lib/data'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.shortBio,
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.shortBio,
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Jalankan dev server, pastikan tidak ada error**

```bash
cd /Users/mekari/Documents/imphnen/mykodink/kiky-website && npm run dev
```

Expected: server jalan di localhost:3000 tanpa error TypeScript.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "feat: new design system — green/white tokens, updated fonts"
```

---

## Task 2: UI Primitives

**Files:**
- Modify: `components/ui/Button.tsx`
- Modify: `components/ui/Card.tsx`
- Modify: `components/ui/Badge.tsx`
- Modify: `components/ui/Marquee.tsx`
- Modify: `components/ui/PageHero.tsx`

- [ ] **Step 1: Update components/ui/Button.tsx**

```tsx
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  variant,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'bg-brand-green text-white font-heading font-bold text-sm px-7 py-3 rounded-[10px] inline-block transition-opacity hover:opacity-90 active:scale-[0.98]'
      : 'bg-white border border-[#D1D5DB] text-brand-text font-heading font-semibold text-sm px-7 py-3 rounded-[10px] inline-block transition-colors hover:bg-brand-soft active:scale-[0.98]'

  const cls = `${base} cursor-pointer ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Update components/ui/Card.tsx**

```tsx
import { ReactNode } from 'react'

type CardVariant = 'default' | 'green' | 'soft'

type CardProps = {
  children: ReactNode
  variant?: CardVariant
  className?: string
}

export default function Card({ children, variant = 'default', className = '' }: CardProps) {
  const base = 'rounded-[20px] p-7'
  const variants: Record<CardVariant, string> = {
    default: 'bg-white border border-brand-border',
    green:   'bg-brand-green border border-brand-green',
    soft:    'bg-brand-soft border border-brand-border-soft',
  }

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 3: Update components/ui/Badge.tsx**

```tsx
type BadgeProps = {
  label: string
  variant?: 'default' | 'green'
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const base = 'inline-block text-[11px] font-body font-medium px-2.5 py-1 rounded-md'
  const variants = {
    default: 'bg-[#F0F4F1] text-[#4B5563]',
    green:   'bg-brand-green-light border border-brand-green-border text-brand-green-dark',
  }

  return <span className={`${base} ${variants[variant]}`}>{label}</span>
}
```

- [ ] **Step 4: Update components/ui/Marquee.tsx**

```tsx
type MarqueeProps = {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className="bg-brand-green overflow-hidden py-3.5 my-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-heading font-extrabold text-[11px] text-white uppercase tracking-[2.5px] px-7">
              {item}
            </span>
            <span className="text-white/35 text-[10px] pr-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Update components/ui/PageHero.tsx**

```tsx
type PageHeroProps = {
  tag?: string
  title: string
  subtitle?: string
}

export default function PageHero({ tag = 'Portfolio', title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-28 pb-10 px-5 max-w-[1120px] mx-auto">
      <p className="section-tag mb-4">{tag}</p>
      <h1 className="text-[clamp(40px,5vw,64px)] font-heading font-black tracking-[-2px] leading-[1.05] text-brand-text mb-5">
        {title}
      </h1>
      {subtitle && (
        <p className="text-brand-muted text-base leading-relaxed max-w-lg">{subtitle}</p>
      )}
      <div className="mt-8 h-px bg-brand-border w-full" />
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add components/ui/
git commit -m "feat: rebuild UI primitives — Button, Card, Badge, Marquee, PageHero"
```

---

## Task 3: Layout Components

**Files:**
- Modify: `components/layout/Navbar.tsx`
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Update components/layout/Navbar.tsx**

```tsx
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
```

- [ ] **Step 2: Update components/layout/Footer.tsx**

```tsx
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const socials = [
  { label: 'LinkedIn',  href: personalInfo.socials.linkedin },
  { label: 'GitHub',    href: personalInfo.socials.github },
  { label: 'Instagram', href: personalInfo.socials.instagram },
  { label: 'Twitter',   href: personalInfo.socials.twitter },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-20">
      <div className="max-w-[1120px] mx-auto px-5 py-9 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="font-heading font-black text-[17px] text-brand-text">
          {personalInfo.nickname.toLowerCase()}
          <span className="text-brand-green">.</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-subtle text-[13px] font-medium hover:text-brand-text transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>

        <p className="text-[#D1D5DB] text-xs">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/
git commit -m "feat: redesign Navbar and Footer — light sticky nav, minimal footer"
```

---

## Task 4: Homepage Sections

**Files:**
- Modify: `components/sections/HeroSection.tsx`
- Modify: `components/sections/AboutPreview.tsx`
- Modify: `components/sections/ServicesPreview.tsx`
- Modify: `components/sections/ProjectsPreview.tsx`
- Modify: `components/sections/CertificationsStrip.tsx` → repurpose as HomeCTA

- [ ] **Step 1: Update components/sections/HeroSection.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const stats = [
  { num: '2+',  label: 'Years Experience', green: true },
  { num: '10+', label: 'Engagements',      green: false },
  { num: 'ISO', label: 'Lead Auditor',     green: false },
  { num: 'VAPT',label: 'Web & Mobile',     green: false },
]

export default function HeroSection() {
  return (
    <section className="pt-[90px] pb-14 px-5 max-w-[1120px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        {/* Available pill */}
        <div className="inline-flex items-center gap-2 border border-brand-green-border bg-brand-green-light text-brand-green-dark text-[11px] font-heading font-bold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          Available for Work
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(52px,6.5vw,78px)] font-heading font-black leading-[1.0] tracking-[-3px] mb-5">
          {personalInfo.title.split('&')[0].trim()}<br />
          &amp; Security<br />
          <span className="text-brand-green">Researcher.</span>
        </h1>

        {/* Sub */}
        <p className="text-brand-muted text-base leading-[1.75] max-w-[480px] mb-9">
          {personalInfo.name} — ISO 27001/27701 Lead Auditor &amp; Web/Mobile Pentester at{' '}
          <span className="text-brand-text font-medium">{personalInfo.company}</span>.
          Securing businesses across Indonesia.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/projects"
            className="bg-brand-green text-white font-heading font-bold text-sm px-7 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            View Projects →
          </Link>
          <Link
            href="/contact"
            className="bg-white border border-[#D1D5DB] text-brand-text font-heading font-semibold text-sm px-7 py-3 rounded-[10px] hover:bg-brand-soft transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {stats.map((s) => (
            <div
              key={s.num}
              className={`rounded-[14px] px-5 py-5 border ${
                s.green
                  ? 'bg-brand-green border-brand-green'
                  : 'bg-white border-brand-border'
              }`}
            >
              <p className={`text-[28px] font-heading font-black tracking-tight ${s.green ? 'text-white' : 'text-brand-text'}`}>
                {s.num}
              </p>
              <p className={`text-[10px] font-body font-semibold uppercase tracking-[1px] mt-0.5 ${s.green ? 'text-white/70' : 'text-brand-subtle'}`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Update components/sections/AboutPreview.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { personalInfo, certifications, skills } from '@/lib/data'

export default function AboutPreview() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="mb-7">
        <p className="section-tag mb-2">About Me</p>
        <h2 className="section-title">Who I am &amp; what I do.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3.5">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white border border-brand-border rounded-[20px] p-7"
        >
          <h3 className="font-heading font-black text-[22px] leading-[1.25] tracking-tight text-brand-text mb-3">
            GRC Analyst &amp; Security Researcher<br />based in Indonesia.
          </h3>
          <p className="text-brand-muted text-sm leading-[1.7] mb-5">{personalInfo.bio}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.map((s) => (
              <span
                key={s.name}
                className="bg-[#F0F4F1] text-[#4B5563] text-[11px] font-body font-medium px-2.5 py-1 rounded-md"
              >
                {s.name}
              </span>
            ))}
          </div>
          <Link href="/about" className="text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
            Read More →
          </Link>
        </motion.div>

        {/* Cert pills card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7"
        >
          <p className="section-tag mb-4">Certifications</p>
          <div className="flex flex-col gap-2.5">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2.5 border border-brand-border bg-white rounded-full px-4 py-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                <span className="font-body text-[13px] font-medium text-brand-text">{cert.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Update components/sections/ServicesPreview.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/data'

export default function ServicesPreview() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="mb-7">
        <p className="section-tag mb-2">Services</p>
        <h2 className="section-title">What I can do for you.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className={`rounded-[20px] p-7 border flex flex-col ${
              i === 1
                ? 'bg-brand-green border-brand-green'
                : 'bg-white border-brand-border'
            }`}
          >
            <p className={`text-[40px] font-heading font-black tracking-[-2px] leading-none mb-3 ${
              i === 1 ? 'text-white/15' : 'text-[#E8F0E9]'
            }`}>
              0{i + 1}
            </p>
            <p className={`section-tag mb-2 ${i === 1 ? 'text-white/60' : ''}`}>
              {service.id.toUpperCase()}
            </p>
            <h3 className={`font-heading font-black text-[18px] leading-[1.3] tracking-tight mb-2 ${
              i === 1 ? 'text-white' : 'text-brand-text'
            }`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-[1.7] mb-5 ${i === 1 ? 'text-white/80' : 'text-brand-muted'}`}>
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {service.items.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-body font-medium px-2.5 py-1 rounded-md ${
                    i === 1
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F0F4F1] text-[#4B5563]'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/services"
              className={`mt-5 text-[13px] font-heading font-bold hover:opacity-80 transition-opacity ${
                i === 1 ? 'text-white' : 'text-brand-green'
              }`}
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Update components/sections/ProjectsPreview.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { vaptProjects, grcProjects } from '@/lib/data'

const previewProjects = [
  ...vaptProjects.slice(0, 2),
  ...grcProjects.slice(0, 2),
]

const totalProjects = vaptProjects.length + grcProjects.length

export default function ProjectsPreview() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="mb-7">
        <p className="section-tag mb-2">Projects</p>
        <h2 className="section-title">Recent engagements.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3.5">
        {/* Count card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7 flex flex-col"
        >
          <p className="section-tag mb-2">Total</p>
          <p className="text-[72px] font-heading font-black tracking-[-4px] leading-none text-brand-text my-3">
            {totalProjects}+
          </p>
          <p className="text-brand-muted text-sm leading-relaxed">
            Security engagements across various industries.
          </p>
          <Link
            href="/projects"
            className="mt-auto pt-5 text-brand-green font-heading font-bold text-[13px] hover:opacity-80 transition-opacity"
          >
            View All Projects →
          </Link>
        </motion.div>

        {/* 2x2 project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {previewProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-brand-border rounded-[20px] p-6 flex flex-col"
            >
              <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full mb-3 self-start">
                {project.scope.includes('GRC') || project.scope.includes('ISO') ? 'GRC' : 'VAPT'} · {project.year}
              </span>
              <h3 className="font-heading font-black text-[16px] text-brand-text tracking-tight leading-[1.3] mb-2">
                {project.scope}
              </h3>
              <p className="text-brand-muted text-[13px] leading-relaxed mb-4">{project.client}</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#F0F4F1] text-[#4B5563] text-[10px] font-body font-medium px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Repurpose CertificationsStrip → HomeCTA**

```tsx
// components/sections/CertificationsStrip.tsx
import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="bg-brand-green rounded-[24px] px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-heading font-black text-[clamp(26px,3.5vw,36px)] text-white leading-[1.15] tracking-tight max-w-md">
          Let&apos;s work together on your next security project.
        </h2>
        <Link
          href="/contact"
          className="bg-white text-brand-green font-heading font-bold text-sm px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          Get In Touch →
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add components/sections/
git commit -m "feat: redesign all homepage sections — hero, about, services, projects, CTA"
```

---

## Task 5: Homepage Composition

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update app/page.tsx**

```tsx
import HeroSection from '@/components/sections/HeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesPreview from '@/components/sections/ServicesPreview'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import HomeCTA from '@/components/sections/CertificationsStrip'
import Marquee from '@/components/ui/Marquee'
import { marqueeItems } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee items={marqueeItems} />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <HomeCTA />
    </>
  )
}
```

- [ ] **Step 2: Buka browser http://localhost:3000, cek homepage**

Expected: hero besar + marquee hijau + 3 section bento + CTA hijau + footer minimal.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rebuild homepage with bento grid layout"
```

---

## Task 6: About Page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Update app/about/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { personalInfo, skills, experience, education } from '@/lib/data'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="About Me"
        title="GRC Analyst & Security Researcher."
        subtitle={`${personalInfo.name} — based in Indonesia, specializing in information security governance and penetration testing.`}
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20 space-y-14">

        {/* Bio + skills */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3.5">
          <div className="bg-white border border-brand-border rounded-[20px] p-7">
            <p className="section-tag mb-3">Background</p>
            <p className="text-brand-muted text-sm leading-[1.75]">{personalInfo.bio}</p>
          </div>
          <div className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7">
            <p className="section-tag mb-4">Skills</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s.name} className="bg-white border border-brand-border text-brand-text text-[12px] font-body font-medium px-3 py-1.5 rounded-full">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience preview */}
        <div>
          <div className="mb-5">
            <p className="section-tag mb-1">Experience</p>
            <h2 className="section-title">Where I've worked.</h2>
          </div>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.role} className="bg-white border border-brand-border rounded-[20px] p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading font-black text-[18px] text-brand-text tracking-tight">{exp.role}</h3>
                    <p className="text-brand-green font-heading font-semibold text-sm">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-brand-subtle text-[12px] font-body shrink-0">
                    {exp.startYear} — {exp.endYear ?? 'Present'}
                  </span>
                </div>
                <p className="text-brand-muted text-sm leading-[1.7] mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="bg-[#F0F4F1] text-[#4B5563] text-[11px] font-body font-medium px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/experience" className="inline-block mt-4 text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
            Full Experience →
          </Link>
        </div>

        {/* Education preview */}
        <div>
          <div className="mb-5">
            <p className="section-tag mb-1">Education</p>
            <h2 className="section-title">Academic background.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {education.map((edu) => (
              <div key={edu.institution} className="bg-white border border-brand-border rounded-[20px] p-7">
                <p className="text-brand-subtle text-[11px] font-body font-semibold uppercase tracking-[1px] mb-2">
                  {edu.startYear} — {edu.endYear ?? 'Present'}
                </p>
                <h3 className="font-heading font-black text-[17px] text-brand-text tracking-tight mb-1">{edu.institution}</h3>
                <p className="text-brand-green font-heading font-semibold text-sm mb-1">{edu.degree}</p>
                <p className="text-brand-muted text-sm">{edu.field}</p>
                {edu.achievement && (
                  <p className="mt-3 text-[12px] font-body text-brand-green-dark bg-brand-green-light border border-brand-green-border rounded-lg px-3 py-2">
                    {edu.achievement}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: redesign About page — bio, skills, experience preview, education preview"
```

---

## Task 7: Experience Page

**Files:**
- Modify: `app/experience/page.tsx`

- [ ] **Step 1: Update app/experience/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { experience } from '@/lib/data'

export default function ExperiencePage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Experience"
        title="Where I've worked."
        subtitle="Professional roles in information security governance and penetration testing."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.role} className="bg-white border border-brand-border rounded-[20px] p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h2 className="font-heading font-black text-[22px] text-brand-text tracking-tight leading-tight">
                    {exp.role}
                  </h2>
                  <p className="text-brand-green font-heading font-semibold text-base mt-0.5">
                    {exp.company}
                  </p>
                  <p className="text-brand-subtle text-sm mt-0.5">{exp.location}</p>
                </div>
                <div className="bg-brand-soft border border-brand-border-soft rounded-xl px-4 py-2 text-center shrink-0">
                  <p className="font-heading font-bold text-sm text-brand-text">
                    {exp.startYear} — {exp.endYear ?? 'Present'}
                  </p>
                  {!exp.endYear && (
                    <span className="text-[10px] font-body text-brand-green font-semibold">● Current</span>
                  )}
                </div>
              </div>

              <div className="border-l-2 border-brand-border pl-5 mb-5">
                <p className="text-brand-muted text-sm leading-[1.75]">{exp.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span key={t} className="bg-[#F0F4F1] text-[#4B5563] text-[11px] font-body font-medium px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/experience/page.tsx
git commit -m "feat: redesign Experience page — clean timeline cards"
```

---

## Task 8: Education Page

**Files:**
- Modify: `app/education/page.tsx`

- [ ] **Step 1: Update app/education/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { education } from '@/lib/data'

export default function EducationPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Education"
        title="Academic background."
        subtitle="Formal education in informatics engineering and computer networking."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div key={edu.institution} className="bg-white border border-brand-border rounded-[20px] p-8">
              <p className="text-brand-subtle text-[11px] font-body font-semibold uppercase tracking-[1.5px] mb-3">
                {edu.startYear} — {edu.endYear ?? 'Present'}
              </p>
              <h2 className="font-heading font-black text-[22px] text-brand-text tracking-tight leading-tight mb-1">
                {edu.institution}
              </h2>
              <p className="text-brand-green font-heading font-semibold text-base mb-1">{edu.degree}</p>
              <p className="text-brand-muted text-sm mb-4">{edu.field}</p>

              {!edu.endYear && (
                <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[11px] font-heading font-bold px-3 py-1 rounded-full mb-4">
                  Currently Enrolled
                </span>
              )}

              {edu.achievement && (
                <div className="mt-2 bg-brand-soft border border-brand-border-soft rounded-xl px-4 py-3">
                  <p className="text-[12px] font-body text-brand-text leading-relaxed">{edu.achievement}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/education/page.tsx
git commit -m "feat: redesign Education page — institution cards with achievement badge"
```

---

## Task 9: Services Page

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Update app/services/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { services } from '@/lib/data'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Services"
        title="What I can do for you."
        subtitle="Professional security services for businesses that take information security seriously."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20 space-y-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`rounded-[20px] p-8 border flex flex-col ${
                i === 1
                  ? 'bg-brand-green border-brand-green'
                  : 'bg-white border-brand-border'
              }`}
            >
              <p className={`text-[48px] font-heading font-black tracking-[-2px] leading-none mb-4 ${
                i === 1 ? 'text-white/15' : 'text-[#E8F0E9]'
              }`}>
                0{i + 1}
              </p>
              <p className={`section-tag mb-2 ${i === 1 ? 'text-white/60' : ''}`}>
                {service.id.toUpperCase()}
              </p>
              <h2 className={`font-heading font-black text-[22px] leading-[1.25] tracking-tight mb-3 ${
                i === 1 ? 'text-white' : 'text-brand-text'
              }`}>
                {service.title}
              </h2>
              <p className={`text-sm leading-[1.75] mb-6 ${i === 1 ? 'text-white/80' : 'text-brand-muted'}`}>
                {service.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                      i === 1 ? 'bg-white/20 text-white' : 'bg-brand-green text-white'
                    }`}>
                      ✓
                    </span>
                    <span className={`text-sm font-body ${i === 1 ? 'text-white/90' : 'text-brand-text'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-auto inline-block text-center font-heading font-bold text-sm px-6 py-3 rounded-[10px] transition-opacity hover:opacity-90 ${
                  i === 1
                    ? 'bg-white text-brand-green'
                    : 'bg-brand-green text-white'
                }`}
              >
                Get a Quote →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-brand-soft border border-brand-border-soft rounded-[24px] px-10 py-12 text-center">
          <p className="section-tag mb-3">Ready to Start?</p>
          <h3 className="font-heading font-black text-[28px] tracking-tight text-brand-text mb-3">
            Let&apos;s discuss your security needs.
          </h3>
          <p className="text-brand-muted text-sm max-w-md mx-auto mb-6">
            Reach out via WhatsApp or email and I&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-brand-green text-white font-heading font-bold text-sm px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity inline-block"
          >
            Contact Me →
          </Link>
        </div>

      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: redesign Services page — detailed VAPT + GRC cards with CTA"
```

---

## Task 10: Projects Pages

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/projects/vapt/page.tsx`
- Modify: `app/projects/grc/page.tsx`

- [ ] **Step 1: Update app/projects/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { vaptProjects, grcProjects } from '@/lib/data'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Projects"
        title="Security engagements."
        subtitle="A selection of VAPT and GRC projects delivered for clients across various industries."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20 space-y-16">

        {/* VAPT */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="section-tag mb-1">VAPT</p>
              <h2 className="section-title">Penetration Testing Projects</h2>
            </div>
            <Link href="/projects/vapt" className="text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {vaptProjects.map((project) => (
              <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                    VAPT · {project.year}
                  </span>
                  <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-[#F0F4F1] text-[#4B5563]'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                </div>
                <h3 className="font-heading font-black text-[17px] text-brand-text tracking-tight leading-[1.3] mb-2">
                  {project.scope}
                </h3>
                <p className="text-brand-muted text-sm mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#F0F4F1] text-[#4B5563] text-[10px] font-body font-medium px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GRC */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="section-tag mb-1">GRC</p>
              <h2 className="section-title">Compliance & Governance Projects</h2>
            </div>
            <Link href="/projects/grc" className="text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {grcProjects.map((project) => (
              <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                    GRC · {project.year}
                  </span>
                  <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-[#F0F4F1] text-[#4B5563]'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                </div>
                <h3 className="font-heading font-black text-[17px] text-brand-text tracking-tight leading-[1.3] mb-2">
                  {project.scope}
                </h3>
                <p className="text-brand-muted text-sm mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#F0F4F1] text-[#4B5563] text-[10px] font-body font-medium px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
```

- [ ] **Step 2: Update app/projects/vapt/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { vaptProjects } from '@/lib/data'

export default function VAPTPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="VAPT"
        title="Penetration Testing Projects."
        subtitle="Web and mobile application security assessments delivered with full findings reports."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vaptProjects.map((project) => (
            <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                  VAPT · {project.year}
                </span>
                <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${
                  project.status === 'completed'
                    ? 'bg-[#F0F4F1] text-[#4B5563]'
                    : 'bg-yellow-50 text-yellow-700'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </span>
              </div>
              <h2 className="font-heading font-black text-[20px] text-brand-text tracking-tight leading-[1.25] mb-2">
                {project.scope}
              </h2>
              <p className="text-brand-muted text-sm mb-5">{project.client}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#F0F4F1] text-[#4B5563] text-[11px] font-body font-medium px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Update app/projects/grc/page.tsx**

```tsx
import PageHero from '@/components/ui/PageHero'
import { grcProjects } from '@/lib/data'

export default function GRCPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="GRC"
        title="Compliance & Governance Projects."
        subtitle="ISO 27001 and ISO 27701 implementation, gap analysis, and internal audit engagements."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {grcProjects.map((project) => (
            <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                  GRC · {project.year}
                </span>
                <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${
                  project.status === 'completed'
                    ? 'bg-[#F0F4F1] text-[#4B5563]'
                    : 'bg-yellow-50 text-yellow-700'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </span>
              </div>
              <h2 className="font-heading font-black text-[20px] text-brand-text tracking-tight leading-[1.25] mb-2">
                {project.scope}
              </h2>
              <p className="text-brand-muted text-sm mb-5">{project.client}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#F0F4F1] text-[#4B5563] text-[11px] font-body font-medium px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add app/projects/
git commit -m "feat: redesign Projects pages — hub, VAPT, and GRC with clean card layout"
```

---

## Task 11: Contact Page

**Files:**
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Read current contact page to understand the WhatsApp form logic**

Read: `app/contact/page.tsx`

- [ ] **Step 2: Update app/contact/page.tsx**

```tsx
'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { personalInfo } from '@/lib/data'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const waGreeting = `Hello ${personalInfo.nickname}, I'm ${name}. ${message}`
  const waUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(waGreeting)}`

  const socials = [
    { label: 'LinkedIn',  href: personalInfo.socials.linkedin,  description: 'Connect professionally' },
    { label: 'GitHub',    href: personalInfo.socials.github,    description: 'See my code' },
    { label: 'Instagram', href: personalInfo.socials.instagram, description: '@kxs3c' },
    { label: 'Twitter',   href: personalInfo.socials.twitter,   description: '@kxgapapa' },
  ]

  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Contact"
        title="Let's work together."
        subtitle="Have a security project in mind? Reach out via WhatsApp or connect on social media."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">

          {/* WhatsApp form */}
          <div className="bg-white border border-brand-border rounded-[20px] p-8">
            <p className="section-tag mb-4">Send a Message</p>
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] font-heading font-bold text-brand-text mb-1.5 tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm font-body text-brand-text placeholder:text-brand-subtle focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors bg-brand-bg"
                />
              </div>
              <div>
                <label className="block text-[12px] font-heading font-bold text-brand-text mb-1.5 tracking-wide">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I need help with a security assessment..."
                  rows={5}
                  className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm font-body text-brand-text placeholder:text-brand-subtle focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors resize-none bg-brand-bg"
                />
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center bg-brand-green text-white font-heading font-bold text-sm py-3.5 rounded-[10px] transition-opacity ${
                  name && message ? 'hover:opacity-90' : 'opacity-50 pointer-events-none'
                }`}
              >
                Send via WhatsApp →
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3.5">
            <div className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7">
              <p className="section-tag mb-4">Direct Contact</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] font-body text-brand-subtle uppercase tracking-[1px] mb-0.5">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-brand-text font-heading font-semibold text-sm hover:text-brand-green transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-body text-brand-subtle uppercase tracking-[1px] mb-0.5">WhatsApp</p>
                  <p className="text-brand-text font-heading font-semibold text-sm">{personalInfo.whatsapp}</p>
                </div>
                <div>
                  <p className="text-[11px] font-body text-brand-subtle uppercase tracking-[1px] mb-0.5">Company</p>
                  <p className="text-brand-text font-heading font-semibold text-sm">{personalInfo.company}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-border rounded-[20px] p-7">
              <p className="section-tag mb-4">Social Media</p>
              <div className="space-y-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-green transition-colors">
                        {s.label}
                      </p>
                      <p className="text-brand-subtle text-[11px] font-body">{s.description}</p>
                    </div>
                    <span className="text-brand-subtle group-hover:text-brand-green transition-colors text-sm">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: redesign Contact page — WhatsApp form + social links cards"
```

---

## Task 12: Final QA

- [ ] **Step 1: Start dev server dan cek semua halaman**

```bash
npm run dev
```

Buka satu per satu:
- http://localhost:3000 (homepage)
- http://localhost:3000/about
- http://localhost:3000/experience
- http://localhost:3000/education
- http://localhost:3000/services
- http://localhost:3000/projects
- http://localhost:3000/projects/vapt
- http://localhost:3000/projects/grc
- http://localhost:3000/contact

Expected: semua halaman tampil rapi, tidak ada teks merah/kuning lama, tidak ada border hitam tebal, navbar sticky bekerja, marquee animasi jalan.

- [ ] **Step 2: Cek mobile responsiveness** (resize browser ke <768px)

Expected: navbar collapse jadi hamburger, grid jadi single column, teks masih terbaca.

- [ ] **Step 3: Run tests**

```bash
npm test
```

Expected: tests pass (atau update test yang expect class lama).

- [ ] **Step 4: Build check**

```bash
npm run build
```

Expected: build sukses tanpa error TypeScript.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete UI redesign — green/white editorial bento layout, all 9 pages"
```
