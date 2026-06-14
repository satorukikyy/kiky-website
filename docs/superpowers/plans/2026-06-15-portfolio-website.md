# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Light Neo-Brutalism portfolio website for Rizky Aditya (Kiky) — GRC Analyst & Security Researcher — using Next.js 14 with App Router, deployed on Vercel free tier.

**Architecture:** Hybrid multi-page approach — landing page (`/`) as a rich SPA-style scroll experience, with 8 inner pages as separate Next.js routes. All content is hardcoded in a central `lib/data.ts` file. Contact form is purely client-side, redirecting to WhatsApp via `wa.me` URL. No backend, no database.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS v3, Framer Motion, Space Grotesk + Inter via `next/font`, Jest + React Testing Library, Vercel free tier.

---

## File Structure

```
kiky-website/
├── app/
│   ├── layout.tsx                   # Root layout: fonts, metadata, Navbar, Footer
│   ├── page.tsx                     # Landing page
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── education/page.tsx
│   ├── projects/
│   │   ├── page.tsx                 # Projects hub
│   │   ├── vapt/page.tsx
│   │   └── grc/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── PageHero.tsx
│   │   └── Marquee.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   └── CertificationsStrip.tsx
│   └── contact/
│       └── ContactForm.tsx
├── lib/
│   └── data.ts                      # All content: personal info, experience, projects, services
├── public/
│   └── images/
│       └── avatar-placeholder.png
├── __tests__/
│   ├── components/
│   │   ├── Button.test.tsx
│   │   ├── Card.test.tsx
│   │   └── ContactForm.test.tsx
│   └── pages/
│       └── smoke.test.tsx
├── tailwind.config.ts
├── jest.config.ts
└── jest.setup.ts
```

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `app/globals.css`, `jest.config.ts`, `jest.setup.ts`

- [ ] **Step 1: Scaffold Next.js app**

Run inside `/Users/mekari/Documents/imphnen/mykodink/kiky-website`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"
```

When prompted: choose **Yes** for TypeScript, **Yes** for Tailwind, **Yes** for App Router, **No** for `src/` directory.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom @types/jest
```

- [ ] **Step 3: Create `jest.config.ts`**

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 4: Create `jest.setup.ts`**

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Add test script to `package.json`**

Add to the `"scripts"` section:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "feat: initialize Next.js 14 project with Tailwind and Jest"
```

---

## Task 2: Configure Tailwind Design System & Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Write the failing test**

Create `__tests__/design-system.test.ts`:

```typescript
// Smoke test: verify tailwind config exports custom colors
import config from '../../tailwind.config'

test('tailwind config has neo-brut custom colors', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['brand-red']).toBe('#E63946')
  expect(colors['brand-yellow']).toBe('#FFD166')
  expect(colors['brand-blue']).toBe('#118AB2')
  expect(colors['brand-green']).toBe('#06D6A0')
  expect(colors['brand-purple']).toBe('#7B2D8B')
})

test('tailwind config has neo-brut box shadows', () => {
  const shadows = config.theme?.extend?.boxShadow as Record<string, string>
  expect(shadows['neo']).toBe('4px 4px 0px #0A0A0A')
  expect(shadows['neo-sm']).toBe('2px 2px 0px #0A0A0A')
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/design-system.test.ts
```

Expected: FAIL — colors undefined.

- [ ] **Step 3: Replace `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E63946',
        'brand-yellow': '#FFD166',
        'brand-blue': '#118AB2',
        'brand-green': '#06D6A0',
        'brand-purple': '#7B2D8B',
        'brand-bg': '#FAFAFA',
        'brand-text': '#0A0A0A',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'neo': '4px 4px 0px #0A0A0A',
        'neo-sm': '2px 2px 0px #0A0A0A',
        'neo-lg': '6px 6px 0px #0A0A0A',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 4: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #FAFAFA;
    --foreground: #0A0A0A;
  }

  body {
    @apply bg-brand-bg text-brand-text font-body antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }

  * {
    @apply border-brand-text;
  }
}

@layer utilities {
  .neo-card {
    @apply border-2 border-brand-text shadow-neo bg-white;
  }

  .neo-card-yellow {
    @apply border-2 border-brand-text shadow-neo bg-brand-yellow;
  }

  .neo-btn-primary {
    @apply border-2 border-brand-text shadow-neo bg-brand-red text-white font-heading font-bold px-6 py-3 transition-all duration-150 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px];
  }

  .neo-btn-secondary {
    @apply border-2 border-brand-text shadow-neo bg-white text-brand-text font-heading font-bold px-6 py-3 transition-all duration-150 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px];
  }
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npx jest __tests__/design-system.test.ts
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts app/globals.css __tests__/design-system.test.ts
git commit -m "feat: configure neo-brutalism design system with custom Tailwind tokens"
```

---

## Task 3: Content Data File

**Files:**
- Create: `lib/data.ts`

- [ ] **Step 1: Write the failing test**

Create `__tests__/lib/data.test.ts`:

```typescript
import { personalInfo, experience, education, certifications, services, vaptProjects, grcProjects } from '../../lib/data'

test('personalInfo has required fields', () => {
  expect(personalInfo.name).toBe('Rizky Aditya')
  expect(personalInfo.nickname).toBe('Kiky')
  expect(personalInfo.whatsappNumber).toBe('6287889867060')
  expect(personalInfo.email).toBe('rizky@nexorasec.asia')
})

test('experience has at least one entry with required fields', () => {
  expect(experience.length).toBeGreaterThan(0)
  expect(experience[0]).toHaveProperty('role')
  expect(experience[0]).toHaveProperty('company')
  expect(experience[0]).toHaveProperty('startYear')
})

test('education has two entries', () => {
  expect(education.length).toBe(2)
})

test('certifications has three entries', () => {
  expect(certifications.length).toBe(3)
})

test('services has two entries', () => {
  expect(services.length).toBe(2)
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/lib/data.test.ts
```

Expected: FAIL — module not found.

- [ ] **Step 3: Create `lib/data.ts`**

```typescript
export const personalInfo = {
  name: 'Rizky Aditya',
  nickname: 'Kiky',
  title: 'GRC Analyst & Security Researcher',
  company: 'Whitesec.id',
  email: 'rizky@nexorasec.asia',
  whatsapp: '+62 878 8986 7060',
  whatsappNumber: '6287889867060',
  bio: "I'm Rizky Aditya, a GRC Analyst & Security Researcher based in Indonesia with 2+ years of experience in information security governance and vulnerability assessment. Currently working at Whitesec.id, specializing in ISO 27001 & ISO 27701 implementation, internal auditing, and web/mobile penetration testing.",
  shortBio: "GRC Analyst & Security Researcher at Whitesec.id, specializing in ISO 27001/27701 governance and web/mobile penetration testing.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/onerrorkx/',
    github: 'https://github.com/satorukikyy',
    instagram: 'https://www.instagram.com/kxs3c/',
    twitter: 'https://x.com/kxgapapa',
  },
}

export type ExperienceEntry = {
  role: string
  company: string
  location: string
  startYear: number
  endYear: number | null
  description: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'GRC Analyst',
    company: 'Whitesec.id',
    location: 'Indonesia',
    startYear: 2024,
    endYear: null,
    description:
      'Leading ISO 27001 and ISO 27701 implementation projects for clients across various industries. Conducting gap analysis, policy & procedure writing, risk assessments, and internal audits. Also performing web application and mobile penetration testing for client security assessments.',
    tags: ['ISO 27001', 'ISO 27701', 'Gap Analysis', 'Internal Audit', 'Policy Writing', 'VAPT'],
  },
]

export type EducationEntry = {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | null
  achievement?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Telkom University Bandung',
    degree: "Bachelor's Degree",
    field: 'Teknik Informatika (Informatics Engineering)',
    startYear: 2025,
    endYear: null,
  },
  {
    institution: 'SMK Harapan Bangsa',
    degree: 'High School Diploma',
    field: 'Teknik Komputer & Jaringan (Computer & Networking)',
    startYear: 2020,
    endYear: 2023,
    achievement: '🥇 1st Place — Mikrotik Network Competition (50+ participants)',
  },
]

export type Certification = {
  name: string
  issuer: string
  color: string
}

export const certifications: Certification[] = [
  {
    name: 'ISO 27001 Lead Auditor',
    issuer: 'International',
    color: 'brand-blue',
  },
  {
    name: 'ISO 27701 Lead Auditor',
    issuer: 'International',
    color: 'brand-purple',
  },
  {
    name: 'Certified Bug Bounty Masterclass',
    issuer: 'Wiz',
    color: 'brand-green',
  },
]

export type Service = {
  id: string
  title: string
  description: string
  items: string[]
  color: string
  accentColor: string
}

export const services: Service[] = [
  {
    id: 'vapt',
    title: 'Vulnerability Assessment & Penetration Testing',
    description:
      'Comprehensive security testing of web and mobile applications to identify vulnerabilities before attackers do. Deliverables include a detailed report with findings, risk ratings, and remediation guidance.',
    items: [
      'Web Application Penetration Testing',
      'Mobile Application Penetration Testing',
      'Vulnerability Assessment',
      'Security Review & Reporting',
    ],
    color: 'brand-red',
    accentColor: '#E63946',
  },
  {
    id: 'grc',
    title: 'Security Assessment & Compliance',
    description:
      'End-to-end information security governance support — from assessing your current posture to achieving and maintaining compliance with international standards.',
    items: [
      'Gap Analysis (ISO 27001 / ISO 27701)',
      'Policy & Procedure Writing',
      'Internal Audit',
      'Risk Assessment & Treatment',
    ],
    color: 'brand-blue',
    accentColor: '#118AB2',
  },
]

export type Project = {
  id: string
  client: string
  scope: string
  year: number
  tags: string[]
  status: 'completed' | 'ongoing'
}

export const vaptProjects: Project[] = [
  {
    id: 'vapt-1',
    client: 'Client A (Confidential)',
    scope: 'Web Application Penetration Testing',
    year: 2025,
    tags: ['Web App', 'OWASP Top 10', 'API Security'],
    status: 'completed',
  },
  {
    id: 'vapt-2',
    client: 'Client B (Confidential)',
    scope: 'Mobile Application Penetration Testing',
    year: 2025,
    tags: ['Android', 'iOS', 'Mobile Security'],
    status: 'completed',
  },
]

export const grcProjects: Project[] = [
  {
    id: 'grc-1',
    client: 'Client C (Confidential)',
    scope: 'ISO 27001 Gap Analysis & Implementation',
    year: 2024,
    tags: ['ISO 27001', 'Gap Analysis', 'ISMS'],
    status: 'completed',
  },
  {
    id: 'grc-2',
    client: 'Client D (Confidential)',
    scope: 'ISO 27701 Privacy Implementation',
    year: 2025,
    tags: ['ISO 27701', 'Privacy', 'PIMS'],
    status: 'completed',
  },
]

export const marqueeItems = [
  'GRC Analyst',
  'Security Researcher',
  'ISO 27001 Lead Auditor',
  'ISO 27701 Lead Auditor',
  'Web App Pentester',
  'Mobile Pentester',
  'Bug Bounty Hunter',
]

export const skills = [
  { name: 'ISO 27001', color: 'brand-blue' },
  { name: 'ISO 27701', color: 'brand-purple' },
  { name: 'Gap Analysis', color: 'brand-blue' },
  { name: 'Internal Audit', color: 'brand-blue' },
  { name: 'Policy Writing', color: 'brand-green' },
  { name: 'Web App Pentest', color: 'brand-red' },
  { name: 'Mobile Pentest', color: 'brand-red' },
  { name: 'Bug Bounty', color: 'brand-yellow' },
  { name: 'Mikrotik / Networking', color: 'brand-green' },
  { name: 'Risk Assessment', color: 'brand-purple' },
]
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx jest __tests__/lib/data.test.ts
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add lib/data.ts __tests__/lib/data.test.ts
git commit -m "feat: add central content data file"
```

---

## Task 4: UI Primitive Components

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/Card.tsx`
- Create: `components/ui/Badge.tsx`
- Create: `components/ui/PageHero.tsx`
- Create: `components/ui/Marquee.tsx`
- Create: `__tests__/components/Button.test.tsx`
- Create: `__tests__/components/Card.test.tsx`

- [ ] **Step 1: Write failing tests**

Create `__tests__/components/Button.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Button from '../../components/ui/Button'

test('renders primary button with correct text', () => {
  render(<Button variant="primary">Click Me</Button>)
  expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
})

test('renders secondary button', () => {
  render(<Button variant="secondary">Learn More</Button>)
  const btn = screen.getByRole('button', { name: 'Learn More' })
  expect(btn).toBeInTheDocument()
})

test('renders as anchor when href is provided', () => {
  render(<Button variant="primary" href="/about">About</Button>)
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
})
```

Create `__tests__/components/Card.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Card from '../../components/ui/Card'

test('renders card with children', () => {
  render(<Card><p>Card content</p></Card>)
  expect(screen.getByText('Card content')).toBeInTheDocument()
})

test('renders yellow card variant', () => {
  render(<Card variant="yellow"><p>Yellow</p></Card>)
  const wrapper = screen.getByText('Yellow').parentElement
  expect(wrapper?.className).toContain('bg-brand-yellow')
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npx jest __tests__/components/Button.test.tsx __tests__/components/Card.test.tsx
```

Expected: FAIL — modules not found.

- [ ] **Step 3: Create `components/ui/Button.tsx`**

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

export default function Button({ variant, href, onClick, children, className = '', type = 'button' }: ButtonProps) {
  const base = variant === 'primary' ? 'neo-btn-primary' : 'neo-btn-secondary'
  const cls = `${base} inline-block cursor-pointer ${className}`

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

- [ ] **Step 4: Create `components/ui/Card.tsx`**

```tsx
import { ReactNode } from 'react'

type CardProps = {
  variant?: 'white' | 'yellow'
  children: ReactNode
  className?: string
}

export default function Card({ variant = 'white', children, className = '' }: CardProps) {
  const bg = variant === 'yellow' ? 'bg-brand-yellow' : 'bg-white'
  return (
    <div className={`neo-card ${bg} p-6 ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 5: Create `components/ui/Badge.tsx`**

```tsx
type BadgeProps = {
  label: string
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'purple'
}

const colorMap = {
  red: 'border-brand-red text-brand-red bg-red-50',
  yellow: 'border-brand-yellow text-brand-text bg-yellow-50',
  blue: 'border-brand-blue text-brand-blue bg-blue-50',
  green: 'border-brand-green text-brand-green bg-green-50',
  purple: 'border-brand-purple text-brand-purple bg-purple-50',
}

export default function Badge({ label, color = 'blue' }: BadgeProps) {
  return (
    <span className={`inline-block border-2 px-3 py-1 text-xs font-heading font-bold rounded-none ${colorMap[color]}`}>
      {label}
    </span>
  )
}
```

- [ ] **Step 6: Create `components/ui/PageHero.tsx`**

```tsx
type PageHeroProps = {
  title: string
  subtitle?: string
  accentColor?: string
}

export default function PageHero({ title, subtitle, accentColor = '#E63946' }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
      <div className="inline-block mb-4">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-text leading-tight">
          {title.split(' ').map((word, i) => (
            <span key={i}>
              {i === 0 ? word : (
                <span style={{ color: accentColor }}> {word}</span>
              )}
            </span>
          ))}
        </h1>
      </div>
      {subtitle && (
        <p className="text-lg text-gray-600 font-body max-w-xl mt-4">{subtitle}</p>
      )}
      <div className="w-24 h-1 mt-6" style={{ backgroundColor: accentColor }} />
    </section>
  )
}
```

- [ ] **Step 7: Create `components/ui/Marquee.tsx`**

```tsx
'use client'

import { useEffect, useRef } from 'react'

type MarqueeProps = {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y-2 border-brand-text bg-brand-yellow py-3 my-8">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="text-brand-text font-heading font-bold text-sm uppercase tracking-widest flex-shrink-0">
            {item} <span className="mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

Add the marquee animation to `tailwind.config.ts` in the `extend` block:

```typescript
keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  marquee: 'marquee 20s linear infinite',
},
```

- [ ] **Step 8: Run tests to verify they pass**

```bash
npx jest __tests__/components/Button.test.tsx __tests__/components/Card.test.tsx
```

Expected: PASS

- [ ] **Step 9: Commit**

```bash
git add components/ui/ __tests__/components/ tailwind.config.ts
git commit -m "feat: add Button, Card, Badge, PageHero, Marquee UI primitives"
```

---

## Task 5: Layout Components (Navbar + Footer)

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/Footer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `components/layout/Navbar.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `components/layout/Footer.tsx`**

```tsx
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const socialLinks = [
  { label: 'LinkedIn', href: personalInfo.socials.linkedin },
  { label: 'GitHub', href: personalInfo.socials.github },
  { label: 'Instagram', href: personalInfo.socials.instagram },
  { label: 'X / Twitter', href: personalInfo.socials.twitter },
  { label: 'Email', href: `mailto:${personalInfo.email}` },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-text bg-brand-text text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-heading font-bold text-2xl mb-2">
              {personalInfo.nickname}<span className="text-brand-red">.</span>
            </p>
            <p className="text-gray-400 text-sm font-body">{personalInfo.title}</p>
            <p className="text-gray-400 text-sm font-body">{personalInfo.company}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-sm uppercase tracking-wide text-gray-300 hover:text-brand-yellow transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm font-body">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Replace `app/layout.tsx`**

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
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
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

- [ ] **Step 4: Commit**

```bash
git add components/layout/ app/layout.tsx
git commit -m "feat: add Navbar and Footer layout components"
```

---

## Task 6: Landing Page — Hero & Sections

**Files:**
- Create: `components/sections/HeroSection.tsx`
- Create: `components/sections/AboutPreview.tsx`
- Create: `components/sections/ServicesPreview.tsx`
- Create: `components/sections/ProjectsPreview.tsx`
- Create: `components/sections/CertificationsStrip.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/HeroSection.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/lib/data'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block border-2 border-brand-text bg-brand-yellow px-4 py-1 mb-6 font-heading font-bold text-sm uppercase tracking-widest">
              Available for Work
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-brand-red">{personalInfo.nickname}</span>
            </h1>
            <p className="text-xl md:text-2xl font-heading font-bold text-gray-600 mb-6">
              {personalInfo.title}
            </p>
            <p className="text-base font-body text-gray-600 mb-8 max-w-md leading-relaxed">
              {personalInfo.shortBio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/projects">View My Work</Button>
              <Button variant="secondary" href="/contact">Contact Me</Button>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 border-2 border-brand-text shadow-neo-lg bg-brand-yellow">
              {/* Replace with actual avatar image when provided */}
              <div className="w-full h-full flex items-center justify-center bg-brand-yellow">
                <span className="text-6xl">👨‍💻</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-red border-2 border-brand-text" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-brand-blue border-2 border-brand-text" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/sections/AboutPreview.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { personalInfo, skills } from '@/lib/data'

const colorMap: Record<string, string> = {
  'brand-red': 'border-brand-red text-brand-red',
  'brand-blue': 'border-brand-blue text-brand-blue',
  'brand-green': 'border-brand-green text-brand-green',
  'brand-purple': 'border-brand-purple text-brand-purple',
  'brand-yellow': 'border-brand-yellow text-brand-text',
}

export default function AboutPreview() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-red mb-3">About Me</p>
          <h2 className="text-4xl font-heading font-bold mb-6">Who I Am</h2>
          <p className="font-body text-gray-600 leading-relaxed mb-8">{personalInfo.bio}</p>
          <Button variant="primary" href="/about">Read More →</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-heading font-bold mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`border-2 px-3 py-1 font-heading font-bold text-sm ${colorMap[skill.color] ?? 'border-brand-text text-brand-text'}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `components/sections/ServicesPreview.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/data'

export default function ServicesPreview() {
  return (
    <section className="px-6 py-16 bg-brand-text text-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-yellow mb-3">What I Do</p>
        <h2 className="text-4xl font-heading font-bold mb-12 text-white">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border-2 border-white p-6 hover:bg-white hover:text-brand-text transition-colors group"
            >
              <div className="w-8 h-1 mb-4" style={{ backgroundColor: service.accentColor }} />
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-brand-text">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="font-body text-sm text-gray-300 group-hover:text-gray-600 flex items-center gap-2">
                    <span style={{ color: service.accentColor }}>▸</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="font-heading font-bold text-sm uppercase tracking-wide text-brand-yellow group-hover:text-brand-red hover:underline">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create `components/sections/ProjectsPreview.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { vaptProjects, grcProjects } from '@/lib/data'
import type { Project } from '@/lib/data'

const previewProjects = [
  ...vaptProjects.slice(0, 2),
  ...grcProjects.slice(0, 2),
]

const tagColorMap: Record<string, 'red' | 'blue' | 'green' | 'yellow' | 'purple'> = {
  'Web App': 'red',
  'Android': 'red',
  'iOS': 'red',
  'ISO 27001': 'blue',
  'ISO 27701': 'purple',
  'Gap Analysis': 'blue',
  'ISMS': 'blue',
  'PIMS': 'purple',
  'API Security': 'green',
  'Mobile Security': 'red',
  'Privacy': 'purple',
  'OWASP Top 10': 'red',
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="font-heading font-bold text-sm text-gray-500">{project.year}</span>
        <span className={`text-xs font-heading font-bold uppercase px-2 py-1 border-2 ${
          project.status === 'completed' ? 'border-brand-green text-brand-green' : 'border-brand-yellow text-brand-text'
        }`}>
          {project.status}
        </span>
      </div>
      <h3 className="font-heading font-bold text-lg mb-2">{project.client}</h3>
      <p className="font-body text-sm text-gray-600 mb-4">{project.scope}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} color={tagColorMap[tag] ?? 'blue'} />
        ))}
      </div>
    </Card>
  )
}

export default function ProjectsPreview() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-red mb-3">Portfolio</p>
          <h2 className="text-4xl font-heading font-bold">Recent Projects</h2>
        </div>
        <Link href="/projects" className="font-heading font-bold text-sm uppercase tracking-wide text-brand-red hover:underline hidden md:block">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Link href="/projects" className="font-heading font-bold text-sm uppercase text-brand-red hover:underline">
          View All Projects →
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Create `components/sections/CertificationsStrip.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/lib/data'

const bgColorMap: Record<string, string> = {
  'brand-blue': 'bg-brand-blue',
  'brand-purple': 'bg-brand-purple',
  'brand-green': 'bg-brand-green',
}

export default function CertificationsStrip() {
  return (
    <section className="px-6 py-16 bg-brand-yellow border-y-2 border-brand-text">
      <div className="max-w-6xl mx-auto">
        <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-text mb-3">Credentials</p>
        <h2 className="text-4xl font-heading font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-2 border-brand-text bg-white p-6 shadow-neo"
            >
              <div className={`w-10 h-10 ${bgColorMap[cert.color] ?? 'bg-brand-blue'} border-2 border-brand-text mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{cert.name}</h3>
              <p className="font-body text-sm text-gray-500">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Replace `app/page.tsx`**

```tsx
import HeroSection from '@/components/sections/HeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesPreview from '@/components/sections/ServicesPreview'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import CertificationsStrip from '@/components/sections/CertificationsStrip'
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
      <CertificationsStrip />
    </>
  )
}
```

- [ ] **Step 7: Run dev server to visually verify**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify: hero renders, marquee scrolls, sections show correctly.

- [ ] **Step 8: Commit**

```bash
git add components/sections/ app/page.tsx
git commit -m "feat: build landing page with hero, marquee, and all preview sections"
```

---

## Task 7: About Page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Card from '@/components/ui/Card'
import { personalInfo, skills, certifications } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About — Rizky Aditya',
  description: personalInfo.bio,
}

const colorMap: Record<string, string> = {
  'brand-red': 'border-brand-red text-brand-red',
  'brand-blue': 'border-brand-blue text-brand-blue',
  'brand-green': 'border-brand-green text-brand-green',
  'brand-purple': 'border-brand-purple text-brand-purple',
  'brand-yellow': 'border-brand-yellow text-brand-text',
}

const certBg: Record<string, string> = {
  'brand-blue': 'bg-brand-blue',
  'brand-purple': 'bg-brand-purple',
  'brand-green': 'bg-brand-green',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="GRC Analyst, Security Researcher, and lifelong learner."
        accentColor="#E63946"
      />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        {/* Bio */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="border-2 border-brand-text shadow-neo-lg bg-brand-yellow w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
            <span className="text-8xl">👨‍💻</span>
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Hi, I'm <span className="text-brand-red">{personalInfo.nickname}</span>
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-4">{personalInfo.bio}</p>
            <p className="font-body text-gray-600 leading-relaxed">
              With certifications in ISO 27001 Lead Auditor, ISO 27701 Lead Auditor, and a Certified Bug Bounty Masterclass from Wiz, I bridge the gap between governance frameworks and hands-on security testing — helping organizations both secure and comply.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`border-2 px-4 py-2 font-heading font-bold text-sm ${colorMap[skill.color] ?? 'border-brand-text text-brand-text'}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} variant="yellow">
                <div className={`w-10 h-10 ${certBg[cert.color] ?? 'bg-brand-blue'} border-2 border-brand-text mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-heading font-bold text-lg">{cert.name}</h3>
                <p className="font-body text-sm text-gray-600 mt-1">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser**

```bash
npm run dev
```

Navigate to `http://localhost:3000/about`. Check bio renders, skills grid, certifications cards.

- [ ] **Step 3: Commit**

```bash
git add app/about/
git commit -m "feat: add About page with bio, skills, and certifications"
```

---

## Task 8: Experience Page

**Files:**
- Create: `app/experience/page.tsx`

- [ ] **Step 1: Create `app/experience/page.tsx`**

```tsx
import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { experience } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Experience — Rizky Aditya',
  description: 'Professional experience in GRC and cybersecurity.',
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience"
        subtitle="My professional journey in cybersecurity and governance."
        accentColor="#E63946"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-text" />

          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={`${exp.company}-${exp.startYear}`} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-4 h-4 bg-brand-red border-2 border-brand-text -translate-x-1/2" />

                <div className="border-2 border-brand-text shadow-neo bg-white p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-2xl">{exp.role}</h3>
                      <p className="font-heading font-bold text-brand-red text-lg">{exp.company}</p>
                      <p className="font-body text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <div className="border-2 border-brand-text px-4 py-2 font-heading font-bold text-sm text-center bg-brand-yellow whitespace-nowrap">
                      {exp.startYear} — {exp.endYear ?? 'Present'}
                    </div>
                  </div>

                  <p className="font-body text-gray-600 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="border-2 border-brand-text px-3 py-1 font-heading font-bold text-xs bg-brand-bg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser at `http://localhost:3000/experience`**

- [ ] **Step 3: Commit**

```bash
git add app/experience/
git commit -m "feat: add Experience page with timeline"
```

---

## Task 9: Education Page

**Files:**
- Create: `app/education/page.tsx`

- [ ] **Step 1: Create `app/education/page.tsx`**

```tsx
import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { education } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Education — Rizky Aditya',
  description: 'Academic background of Rizky Aditya.',
}

export default function EducationPage() {
  return (
    <>
      <PageHero
        title="Education"
        subtitle="Academic foundation that shaped my technical mindset."
        accentColor="#118AB2"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-text" />

          <div className="space-y-12">
            {education.map((edu) => (
              <div key={`${edu.institution}-${edu.startYear}`} className="relative pl-16">
                <div className="absolute left-4 top-1 w-4 h-4 bg-brand-blue border-2 border-brand-text -translate-x-1/2" />

                <div className="border-2 border-brand-text shadow-neo bg-white p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-2xl">{edu.institution}</h3>
                      <p className="font-heading font-bold text-brand-blue text-lg">{edu.degree}</p>
                      <p className="font-body text-sm text-gray-600">{edu.field}</p>
                    </div>
                    <div className="border-2 border-brand-text px-4 py-2 font-heading font-bold text-sm text-center bg-brand-yellow whitespace-nowrap">
                      {edu.startYear} — {edu.endYear ?? 'Present'}
                    </div>
                  </div>

                  {edu.achievement && (
                    <div className="border-2 border-brand-green bg-green-50 px-4 py-3 mt-4">
                      <p className="font-heading font-bold text-brand-green text-sm">{edu.achievement}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser at `http://localhost:3000/education`**

- [ ] **Step 3: Commit**

```bash
git add app/education/
git commit -m "feat: add Education page with timeline and achievement highlight"
```

---

## Task 10: Projects Pages (Hub + VAPT + GRC)

**Files:**
- Create: `app/projects/page.tsx`
- Create: `app/projects/vapt/page.tsx`
- Create: `app/projects/grc/page.tsx`

- [ ] **Step 1: Create `app/projects/page.tsx`**

```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Projects — Rizky Aditya',
  description: 'VAPT and GRC projects by Rizky Aditya.',
}

const categories = [
  {
    id: 'vapt',
    title: 'VAPT Projects',
    description: 'Web and mobile application penetration testing engagements.',
    href: '/projects/vapt',
    color: 'brand-red',
    accentColor: '#E63946',
    icon: '🔍',
  },
  {
    id: 'grc',
    title: 'GRC Projects',
    description: 'ISO 27001/27701 implementation, gap analysis, and internal audit engagements.',
    href: '/projects/grc',
    color: 'brand-blue',
    accentColor: '#118AB2',
    icon: '📋',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projects" subtitle="Client engagements across offensive security and governance." />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.href} className="group block">
              <div
                className="border-2 border-brand-text shadow-neo p-8 bg-white transition-all duration-150 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <div
                  className="w-16 h-16 border-2 border-brand-text mb-6 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: cat.accentColor }}
                >
                  {cat.icon}
                </div>
                <h2 className="font-heading font-bold text-2xl mb-3" style={{ color: cat.accentColor }}>
                  {cat.title}
                </h2>
                <p className="font-body text-gray-600 mb-6">{cat.description}</p>
                <span className="font-heading font-bold text-sm uppercase tracking-wide" style={{ color: cat.accentColor }}>
                  View Projects →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Create `app/projects/vapt/page.tsx`**

```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { vaptProjects } from '@/lib/data'
import type { Project } from '@/lib/data'

export const metadata: Metadata = {
  title: 'VAPT Projects — Rizky Aditya',
  description: 'Web and mobile penetration testing project portfolio.',
}

const tagColorMap: Record<string, 'red' | 'blue' | 'green' | 'yellow' | 'purple'> = {
  'Web App': 'red', 'Android': 'red', 'iOS': 'red', 'OWASP Top 10': 'red',
  'API Security': 'green', 'Mobile Security': 'red',
}

export default function VaptProjectsPage() {
  return (
    <>
      <PageHero title="VAPT Projects" subtitle="Web and mobile application penetration testing engagements." accentColor="#E63946" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <Link href="/projects" className="font-heading font-bold text-sm text-brand-red hover:underline">← Back to Projects</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaptProjects.map((project: Project) => (
            <Card key={project.id}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-heading font-bold text-sm text-gray-500">{project.year}</span>
                <span className={`text-xs font-heading font-bold uppercase px-2 py-1 border-2 ${project.status === 'completed' ? 'border-brand-green text-brand-green' : 'border-brand-yellow text-brand-text'}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{project.client}</h3>
              <p className="font-body text-sm text-gray-600 mb-4">{project.scope}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} label={tag} color={tagColorMap[tag] ?? 'red'} />
                ))}
              </div>
            </Card>
          ))}

          {/* More coming soon */}
          <div className="border-2 border-dashed border-brand-text p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <span className="text-4xl mb-3">🔒</span>
            <p className="font-heading font-bold text-gray-500">More projects coming soon</p>
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 3: Create `app/projects/grc/page.tsx`**

```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { grcProjects } from '@/lib/data'
import type { Project } from '@/lib/data'

export const metadata: Metadata = {
  title: 'GRC Projects — Rizky Aditya',
  description: 'ISO 27001/27701 and security compliance project portfolio.',
}

const tagColorMap: Record<string, 'red' | 'blue' | 'green' | 'yellow' | 'purple'> = {
  'ISO 27001': 'blue', 'ISO 27701': 'purple', 'Gap Analysis': 'blue',
  'ISMS': 'blue', 'PIMS': 'purple', 'Privacy': 'purple',
}

export default function GrcProjectsPage() {
  return (
    <>
      <PageHero title="GRC Projects" subtitle="ISO 27001/27701 implementation, gap analysis, and audit engagements." accentColor="#118AB2" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <Link href="/projects" className="font-heading font-bold text-sm text-brand-blue hover:underline">← Back to Projects</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grcProjects.map((project: Project) => (
            <Card key={project.id}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-heading font-bold text-sm text-gray-500">{project.year}</span>
                <span className={`text-xs font-heading font-bold uppercase px-2 py-1 border-2 ${project.status === 'completed' ? 'border-brand-green text-brand-green' : 'border-brand-yellow text-brand-text'}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{project.client}</h3>
              <p className="font-body text-sm text-gray-600 mb-4">{project.scope}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} label={tag} color={tagColorMap[tag] ?? 'blue'} />
                ))}
              </div>
            </Card>
          ))}

          <div className="border-2 border-dashed border-brand-text p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <span className="text-4xl mb-3">📋</span>
            <p className="font-heading font-bold text-gray-500">More projects coming soon</p>
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 4: Verify all three project pages in browser**

- [ ] **Step 5: Commit**

```bash
git add app/projects/
git commit -m "feat: add Projects hub, VAPT, and GRC project pages"
```

---

## Task 11: Services Page

**Files:**
- Create: `app/services/page.tsx`

- [ ] **Step 1: Create `app/services/page.tsx`**

```tsx
import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services — Rizky Aditya',
  description: 'VAPT and security compliance services offered by Rizky Aditya.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" subtitle="Professional security services tailored to your needs." />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-12">
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`border-2 border-brand-text shadow-neo p-8 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-bg'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: service.accentColor }} />
                <h2 className="text-3xl font-heading font-bold mb-4" style={{ color: service.accentColor }}>
                  {service.title}
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-gray-700">
                      <span
                        className="w-6 h-6 border-2 border-brand-text flex-shrink-0 flex items-center justify-center text-xs font-bold text-white mt-0.5"
                        style={{ backgroundColor: service.accentColor }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="border-2 border-brand-text bg-brand-yellow p-12 text-center shadow-neo">
          <h2 className="text-3xl font-heading font-bold mb-4">Interested in Working Together?</h2>
          <p className="font-body text-gray-700 mb-8 max-w-md mx-auto">
            Let's discuss your security needs and find the right solution for your organization.
          </p>
          <Button variant="primary" href="/contact">Get In Touch</Button>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify in browser at `http://localhost:3000/services`**

- [ ] **Step 3: Commit**

```bash
git add app/services/
git commit -m "feat: add Services page with VAPT and GRC service details"
```

---

## Task 12: Contact Page with WhatsApp Form

**Files:**
- Create: `components/contact/ContactForm.tsx`
- Create: `app/contact/page.tsx`
- Create: `__tests__/components/ContactForm.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/components/ContactForm.test.tsx`:

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../../components/contact/ContactForm'

const WHATSAPP_NUMBER = '6287889867060'

test('renders all form fields', () => {
  render(<ContactForm whatsappNumber={WHATSAPP_NUMBER} />)
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
})

test('submit button is present', () => {
  render(<ContactForm whatsappNumber={WHATSAPP_NUMBER} />)
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx jest __tests__/components/ContactForm.test.tsx
```

Expected: FAIL — module not found.

- [ ] **Step 3: Create `components/contact/ContactForm.tsx`**

```tsx
'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/ui/Button'

type ContactFormProps = {
  whatsappNumber: string
}

export default function ContactForm({ whatsappNumber }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello Kiky!\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
  }

  const inputCls = 'w-full border-2 border-brand-text px-4 py-3 font-body bg-white focus:outline-none focus:border-brand-red transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-heading font-bold text-sm uppercase tracking-wide mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputCls}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-heading font-bold text-sm uppercase tracking-wide mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputCls}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block font-heading font-bold text-sm uppercase tracking-wide mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputCls}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-heading font-bold text-sm uppercase tracking-wide mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputCls}
          placeholder="Tell me about your project or inquiry..."
        />
      </div>

      <Button variant="primary" type="submit" className="w-full justify-center text-center">
        Send Message via WhatsApp
      </Button>
    </form>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx jest __tests__/components/ContactForm.test.tsx
```

Expected: PASS

- [ ] **Step 5: Create `app/contact/page.tsx`**

```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/contact/ContactForm'
import { personalInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact — Rizky Aditya',
  description: 'Get in touch with Rizky Aditya for security consulting.',
}

const socialLinks = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'brand-red' },
  { label: 'LinkedIn', value: 'linkedin.com/in/onerrorkx', href: personalInfo.socials.linkedin, color: 'brand-blue' },
  { label: 'GitHub', value: 'github.com/satorukikyy', href: personalInfo.socials.github, color: 'brand-text' },
  { label: 'Instagram', value: '@kxs3c', href: personalInfo.socials.instagram, color: 'brand-purple' },
  { label: 'X / Twitter', value: '@kxgapapa', href: personalInfo.socials.twitter, color: 'brand-text' },
  { label: 'WhatsApp', value: personalInfo.whatsapp, href: `https://wa.me/${personalInfo.whatsappNumber}`, color: 'brand-green' },
]

const borderColorMap: Record<string, string> = {
  'brand-red': 'border-brand-red',
  'brand-blue': 'border-brand-blue',
  'brand-text': 'border-brand-text',
  'brand-purple': 'border-brand-purple',
  'brand-green': 'border-brand-green',
}

const textColorMap: Record<string, string> = {
  'brand-red': 'text-brand-red',
  'brand-blue': 'text-brand-blue',
  'brand-text': 'text-brand-text',
  'brand-purple': 'text-brand-purple',
  'brand-green': 'text-brand-green',
}

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get In Touch" subtitle="Have a project in mind? Let's talk." accentColor="#06D6A0" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Direct contacts */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-8">Direct Contacts</h2>
            <div className="space-y-4">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 border-2 ${borderColorMap[s.color]} p-4 bg-white shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 group`}
                >
                  <div className={`font-heading font-bold text-sm uppercase tracking-wide w-24 flex-shrink-0 ${textColorMap[s.color]}`}>
                    {s.label}
                  </div>
                  <div className="font-body text-gray-600 text-sm group-hover:text-brand-text">{s.value}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-8">Send a Message</h2>
            <div className="border-2 border-brand-text shadow-neo bg-white p-8">
              <ContactForm whatsappNumber={personalInfo.whatsappNumber} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 6: Verify in browser at `http://localhost:3000/contact`**

Fill out form, click submit — should open WhatsApp web with pre-filled message.

- [ ] **Step 7: Commit**

```bash
git add components/contact/ app/contact/ __tests__/components/ContactForm.test.tsx
git commit -m "feat: add Contact page with WhatsApp form redirect"
```

---

## Task 13: Deployment & Final Polish

**Files:**
- Create: `public/favicon.ico` (placeholder — user to replace)
- Modify: `app/layout.tsx` (add viewport meta)
- Create: `vercel.json`

- [ ] **Step 1: Run all tests and verify they pass**

```bash
npx jest --passWithNoTests
```

Expected: all tests PASS.

- [ ] **Step 2: Run production build to verify no errors**

```bash
npm run build
```

Expected: build completes with no errors. Fix any TypeScript or ESLint errors before continuing.

- [ ] **Step 3: Create `vercel.json`**

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

- [ ] **Step 4: Update `app/layout.tsx` — add viewport export**

Add this below the imports, before `metadata`:

```typescript
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
```

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "feat: complete portfolio website — all pages, components, and deployment config"
```

- [ ] **Step 6: Deploy to Vercel**

```bash
npx vercel --prod
```

Or push to GitHub and connect the repo to Vercel dashboard at vercel.com (recommended for free tier — auto-deploy on push).

---

## Self-Review Checklist

- [x] All 9 routes covered: `/`, `/about`, `/experience`, `/education`, `/projects`, `/projects/vapt`, `/projects/grc`, `/services`, `/contact`
- [x] Design system: neo-brutalism colors, shadows, border, fonts configured
- [x] Content data: all personal info, experience, education, certs, services, projects in `lib/data.ts`
- [x] WhatsApp form: client-side redirect using `wa.me` URL
- [x] Responsive: mobile hamburger menu in Navbar, grid layouts responsive
- [x] Animations: Framer Motion on sections with `whileInView`
- [x] Marquee: scrolling text strip between hero and content
- [x] No backend required: works on Vercel free tier
- [x] Photo placeholder: emoji placeholder, ready to swap with real image in HeroSection and AboutPage
- [x] Tests: Button, Card, ContactForm, data file, design system config all tested
