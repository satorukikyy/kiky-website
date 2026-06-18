# Minimalist Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the entire portfolio from editorial green/card-based to a text-first minimalist aesthetic — purple accent, white background, hybrid mono/sans typography, single-column narrow layout, no decorative cards.

**Architecture:** Replace the Tailwind design-token palette (green → purple), swap `Space_Grotesk` for `JetBrains_Mono` as the mono layer, collapse `/experience` + `/education` into `/background`, and rewrite every page/component as plain-text sections separated by 1px borders. `lib/data.ts` content is preserved; only presentation changes.

**Tech Stack:** Next.js App Router, Tailwind CSS v3, Inter + JetBrains Mono via `next/font/google`, no Framer Motion.

## Global Constraints

- Max content width: `720px` centered, `px-6` on mobile
- Background: `#FFFFFF`; Primary text: `#111111`; Purple accent: `#7C3AED`; Purple hover: `#8B5CF6`; Muted: `#6B7280`; Subtle/metadata: `#9CA3AF`; Border: `#E5E7EB`; Purple-light bg: `#EDE9FE`
- Fonts: `Inter` for heading/body; `JetBrains Mono` for all labels, dates, tags, metadata
- No cards (no background fills on content blocks, no `rounded-*` containers, no `shadow-*`)
- Section separators: `border-t border-[#E5E7EB]` with `pt-16` / `mt-16` spacing
- Section titles: `font-mono text-[11px] text-[#9CA3AF] uppercase tracking-[3px]`
- Email everywhere: `rizky@nexorasec.asia` only — no whitesec.id email
- Remove Framer Motion entirely (delete all `motion.*` imports and wrappers)
- Delete `app/experience/` and `app/education/` directories
- Create `app/background/page.tsx`
- Navbar links: About · Background · Projects · Services · Contact (no Experience, no Education)

---

## File Map

| File | Action |
|---|---|
| `tailwind.config.ts` | Replace all `brand-*` tokens with new purple palette |
| `app/globals.css` | Update base styles, fonts, remove green utility classes |
| `app/layout.tsx` | Swap `Space_Grotesk` → `JetBrains_Mono`; update font variables |
| `components/layout/Navbar.tsx` | Full rewrite — plain text links, no CTA button, new links |
| `components/layout/Footer.tsx` | Full rewrite — single line minimal |
| `app/page.tsx` | Remove Marquee + old sections; add new HomePage sections inline |
| `app/about/page.tsx` | Full rewrite — text-first, no cards |
| `app/background/page.tsx` | **Create new** — experience + education combined |
| `app/experience/` | **Delete** entire directory |
| `app/education/` | **Delete** entire directory |
| `app/projects/page.tsx` | Full rewrite — text list layout |
| `app/projects/vapt/page.tsx` | Full rewrite — text list |
| `app/projects/grc/page.tsx` | Full rewrite — text list |
| `app/services/page.tsx` | Full rewrite — numbered text list |
| `app/contact/page.tsx` | Full rewrite — contact table + simple form |
| `components/ui/PageHero.tsx` | Delete (no longer used) |
| `components/sections/HeroSection.tsx` | Full rewrite — plain text hero |
| `components/sections/AboutPreview.tsx` | Delete (homepage rebuilt inline) |
| `components/sections/ServicesPreview.tsx` | Delete (homepage rebuilt inline) |
| `components/sections/ProjectsPreview.tsx` | Delete (homepage rebuilt inline) |
| `components/sections/CertificationsStrip.tsx` | Delete (marquee removed) |
| `components/ui/Marquee.tsx` | Delete |
| `components/ui/SocialIcon.tsx` | Keep (used in contact page) |

---

## Task 1: Design Tokens + Fonts

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: CSS custom properties `--font-mono` (JetBrains Mono), `--font-body` (Inter); Tailwind utilities `font-mono`, `font-body`; color tokens `text-purple`, `border-border`, etc. — used by every subsequent task

- [ ] **Step 1: Update `tailwind.config.ts`**

Replace the entire `theme.extend` block:

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
        'c-bg':           '#FFFFFF',
        'c-text':         '#111111',
        'c-muted':        '#6B7280',
        'c-subtle':       '#9CA3AF',
        'c-border':       '#E5E7EB',
        'c-purple':       '#7C3AED',
        'c-purple-hover': '#8B5CF6',
        'c-purple-light': '#EDE9FE',
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Update `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-c-bg text-c-text font-body antialiased;
  }
}
```

- [ ] **Step 3: Update `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { personalInfo } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteTitle = `${personalInfo.name} — GRC Consultant & Penetration Tester`
const siteDesc  = 'ISO 27001 · 27701 · 42001 Lead Auditor and Penetration Tester based in Indonesia.'

export const metadata: Metadata = {
  title: { default: siteTitle, template: `%s | ${personalInfo.name}` },
  description: siteDesc,
  keywords: ['GRC', 'ISO 27001', 'ISO 27701', 'Penetration Testing', 'VAPT', 'Cybersecurity', 'Indonesia'],
  authors: [{ name: personalInfo.name }],
  robots: { index: true, follow: true },
  openGraph: { title: siteTitle, description: siteDesc, type: 'website', locale: 'en_US' },
}

export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify build still compiles**

```bash
npm run build
```

Expected: Build succeeds (pages may look broken until later tasks — that's fine).

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "feat: replace design tokens — purple palette + JetBrains Mono"
```

---

## Task 2: Navbar + Footer

**Files:**
- Modify: `components/layout/Navbar.tsx`
- Modify: `components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `personalInfo.name`, `personalInfo.nickname` from `lib/data`
- Produces: Sticky navbar with plain text links `About · Background · Projects · Services · Contact`; single-line footer

- [ ] **Step 1: Rewrite `components/layout/Navbar.tsx`**

```tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { label: 'About',      href: '/about' },
  { label: 'Background', href: '/background' },
  { label: 'Projects',   href: '/projects' },
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
```

- [ ] **Step 2: Rewrite `components/layout/Footer.tsx`**

```tsx
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-c-border mt-24">
      <div className="max-w-[720px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="font-body font-bold text-[14px] text-c-text">
          {personalInfo.nickname.toLowerCase()}
          <span className="text-c-purple">.</span>
        </Link>
        <p className="font-mono text-[12px] text-c-subtle">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Remove `SocialIcon` import from Footer** — already done above (Footer no longer uses it).

- [ ] **Step 4: Commit**

```bash
git add components/layout/Navbar.tsx components/layout/Footer.tsx
git commit -m "feat: rewrite Navbar and Footer — plain text links, minimal single-line footer"
```

---

## Task 3: Homepage

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/sections/HeroSection.tsx`
- Delete: `components/sections/AboutPreview.tsx`
- Delete: `components/sections/ServicesPreview.tsx`
- Delete: `components/sections/ProjectsPreview.tsx`
- Delete: `components/sections/CertificationsStrip.tsx`
- Delete: `components/ui/Marquee.tsx`
- Delete: `components/ui/PageHero.tsx`

**Interfaces:**
- Consumes: `personalInfo`, `experience` (first entry only), `services`, `vaptClients`, `grcCategories` from `lib/data`
- Produces: Full homepage with hero + about preview + services + projects preview sections

- [ ] **Step 1: Delete unused components**

```bash
rm components/sections/AboutPreview.tsx
rm components/sections/ServicesPreview.tsx
rm components/sections/ProjectsPreview.tsx
rm components/sections/CertificationsStrip.tsx
rm components/ui/Marquee.tsx
rm components/ui/PageHero.tsx
```

- [ ] **Step 2: Rewrite `components/sections/HeroSection.tsx`**

```tsx
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16">
      <h1 className="font-body font-bold text-[42px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-c-text mb-4">
        {personalInfo.name}
      </h1>

      <p className="font-body text-[16px] text-c-muted mb-1">
        {personalInfo.title}
      </p>
      <p className="font-mono text-[13px] text-c-subtle mb-8">
        Whitesec ID · Bandung, Indonesia
      </p>

      <p className="font-body text-[15px] text-c-muted leading-[1.75] max-w-[560px] mb-8">
        Helping organizations build security programs that are rigorous on paper
        and resilient when put to the test.
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px]">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-c-purple hover:text-c-purple-hover transition-colors"
        >
          {personalInfo.email}
        </a>
        <span className="text-c-border">·</span>
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-muted hover:text-c-text transition-colors"
        >
          GitHub
        </a>
        <span className="text-c-border">·</span>
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-muted hover:text-c-text transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-c-border">·</span>
        <a
          href={`https://wa.me/${personalInfo.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-muted hover:text-c-text transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Rewrite `app/page.tsx`**

```tsx
import HeroSection from '@/components/sections/HeroSection'
import Link from 'next/link'
import { personalInfo, services, vaptClients, grcCategories } from '@/lib/data'

const allGRCClients = grcCategories.flatMap(c => c.clients)

export default function HomePage() {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      <HeroSection />

      {/* About */}
      <section className="border-t border-c-border pt-16 mt-0 pb-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-6">About</p>
        <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-4">
          {personalInfo.bio}
        </p>
        <Link href="/about" className="font-mono text-[13px] text-c-purple hover:text-c-purple-hover transition-colors">
          More about me →
        </Link>
      </section>

      {/* Services */}
      <section className="border-t border-c-border pt-16 pb-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-6">Services</p>
        <ol className="space-y-3">
          {services.map((s, i) => (
            <li key={s.id} className="flex items-start gap-4">
              <span className="font-mono text-[13px] text-c-subtle w-6 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Link
                href={`/services`}
                className="font-body text-[15px] text-c-text hover:text-c-purple transition-colors"
              >
                {s.title}
              </Link>
            </li>
          ))}
          <li className="flex items-start gap-4">
            <span className="font-mono text-[13px] text-c-subtle w-6 flex-shrink-0">03</span>
            <span className="font-body text-[15px] text-c-text">Bug Bounty Hunting</span>
          </li>
        </ol>
      </section>

      {/* Projects */}
      <section className="border-t border-c-border pt-16 pb-16">
        <div className="flex items-baseline justify-between mb-6">
          <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px]">Projects</p>
          <Link href="/projects" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-2">
          {vaptClients.slice(0, 4).map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">vapt</span>
              <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
              <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
            </div>
          ))}
          {allGRCClients.slice(0, 3).map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">grc</span>
              <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
              <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/sections/HeroSection.tsx
git commit -m "feat: rebuild homepage — text-first hero, about/services/projects sections"
```

---

## Task 4: About Page

**Files:**
- Modify: `app/about/page.tsx`

**Interfaces:**
- Consumes: `personalInfo`, `certifications` from `lib/data`
- Produces: Text-first about page — bio, expertise lists, certifications

- [ ] **Step 1: Rewrite `app/about/page.tsx`**

```tsx
import type { Metadata } from 'next'
import { certifications } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description: 'GRC Analyst & Security Researcher based in Indonesia — ISO 27001, ISO 27701, penetration testing.',
}

const grcAreas = [
  'ISO/IEC 27001:2022 Implementation & Audit',
  'ISO/IEC 27701 Privacy Management',
  'Risk Assessment & Risk Treatment',
  'Internal Audit Support',
  'Security Policy Development',
  'Third-Party Risk Management',
]

const offensiveAreas = [
  'Web Application Penetration Testing',
  'Mobile Application Security',
  'API Security Testing',
  'Vulnerability Assessment',
  'OWASP Top 10 Assessment',
  'Attack Surface Analysis',
]

export default function AboutPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        About Me.
      </h1>

      {/* Bio */}
      <section className="mb-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-6">Introduction</p>
        <div className="space-y-4 font-body text-[15px] text-c-muted leading-[1.75]">
          <p>
            I&apos;m Rizky Aditya, a Cybersecurity Consultant specializing in{' '}
            <span className="text-c-text font-semibold">Governance, Risk &amp; Compliance (GRC)</span>{' '}
            and{' '}
            <span className="text-c-text font-semibold">Offensive Security</span>.
            Based in Indonesia, I help organizations strengthen their security posture by combining
            rigorous governance frameworks with practical, hands-on technical assessments.
          </p>
          <p>
            My work spans ISO/IEC 27001 and 27701 implementation, internal auditing, risk assessment,
            and web/mobile penetration testing — across technology, finance, and critical infrastructure.
            I hold Lead Auditor certifications in ISO 27001, 27701, and 42001, alongside ISC2 CC and
            several other professional credentials.
          </p>
          <p>
            Currently working full-time at Whitesec ID, contributing to 24+ security engagements and
            helping clients build audit-ready programs that deliver measurable risk reduction.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-c-border pt-16 mb-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-6">Areas of Expertise</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-mono text-[12px] text-c-purple mb-4">grc</p>
            <ul className="space-y-2">
              {grcAreas.map((item) => (
                <li key={item} className="font-body text-[14px] text-c-muted leading-snug">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[12px] text-c-purple mb-4">vapt</p>
            <ul className="space-y-2">
              {offensiveAreas.map((item) => (
                <li key={item} className="font-body text-[14px] text-c-muted leading-snug">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-c-border pt-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-6">Certifications</p>
        <div className="space-y-2">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-16 flex-shrink-0">{cert.category}</span>
              <span className="font-body text-[14px] text-c-text flex-1">{cert.name}</span>
              <span className="font-mono text-[12px] text-c-subtle hidden sm:block">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: rewrite About page — text-first, expertise lists, certifications"
```

---

## Task 5: Background Page (Experience + Education)

**Files:**
- Create: `app/background/page.tsx`
- Delete: `app/experience/` (entire directory)
- Delete: `app/education/` (entire directory)

**Interfaces:**
- Consumes: `experience`, `education` from `lib/data`
- Produces: `/background` page with experience + education in plain text layout

- [ ] **Step 1: Delete old route directories**

```bash
rm -rf app/experience
rm -rf app/education
```

- [ ] **Step 2: Create `app/background/page.tsx`**

```tsx
import type { Metadata } from 'next'
import { experience, education } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Background',
  description: 'Work experience and education — GRC consulting, security engineering, and penetration testing.',
}

export default function BackgroundPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Background.
      </h1>

      {/* Experience */}
      <section className="mb-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-8">Experience</p>
        <div className="space-y-10">
          {experience.map((exp) => (
            <div key={exp.role}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h2 className="font-body font-semibold text-[16px] text-c-text">{exp.role}</h2>
                <span className="font-mono text-[12px] text-c-subtle flex-shrink-0">
                  {exp.startYear} – {exp.endYear ?? 'now'}
                </span>
              </div>
              <p className="font-mono text-[13px] text-c-purple mb-3">{exp.company}</p>
              <p className="font-body text-[14px] text-c-muted leading-[1.75]">{exp.description}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                {exp.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] text-c-subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-c-border pt-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-8">Education</p>
        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.institution}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h2 className="font-body font-semibold text-[16px] text-c-text">{edu.institution}</h2>
                <span className="font-mono text-[12px] text-c-subtle flex-shrink-0">
                  {edu.startYear} – {edu.endYear ?? 'now'}
                </span>
              </div>
              <p className="font-mono text-[13px] text-c-purple mb-1">{edu.degree}</p>
              <p className="font-body text-[14px] text-c-muted">{edu.field}</p>
              {edu.achievement && (
                <p className="font-mono text-[13px] text-c-muted mt-3">
                  <span className="text-c-purple">↳</span> {edu.achievement.replace(/^🥇\s*/, '')}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/background/page.tsx
git rm -r app/experience app/education
git commit -m "feat: add /background page, delete /experience and /education routes"
```

---

## Task 6: Projects Pages

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/projects/vapt/page.tsx`
- Modify: `app/projects/grc/page.tsx`

**Interfaces:**
- Consumes: `vaptClients`, `grcCategories` from `lib/data`
- Produces: Text-list project index + detail pages

- [ ] **Step 1: Rewrite `app/projects/page.tsx`**

```tsx
import type { Metadata } from 'next'
import { vaptClients, grcCategories } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'GRC and VAPT security engagements across technology, finance, and critical infrastructure.',
}

const allGRCClients = grcCategories.flatMap(c => c.clients)

export default function ProjectsPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Projects.
      </h1>

      {/* VAPT */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px]">vapt</p>
          <Link href="/projects/vapt" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-2">
          {vaptClients.map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
              <span className="font-body text-[14px] text-c-text">{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GRC */}
      <section className="border-t border-c-border pt-16">
        <div className="flex items-baseline justify-between mb-6">
          <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px]">grc</p>
          <Link href="/projects/grc" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-6">
          {grcCategories.map((cat) => (
            <div key={cat.id}>
              <p className="font-mono text-[12px] text-c-muted mb-3">{cat.shortLabel}</p>
              <div className="space-y-2 pl-0">
                {cat.clients.map((client) => (
                  <div key={client.name} className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
                    <span className="font-body text-[14px] text-c-text">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
```

- [ ] **Step 2: Rewrite `app/projects/vapt/page.tsx`**

```tsx
import type { Metadata } from 'next'
import { vaptClients } from '@/lib/data'

export const metadata: Metadata = {
  title: 'VAPT Projects',
  description: 'Vulnerability Assessment & Penetration Testing engagements.',
}

export default function VaptPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-4">vapt</p>
      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Penetration Testing.
      </h1>
      <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-12">
        Web application, mobile application, and API security assessments across technology, finance,
        and critical infrastructure sectors.
      </p>
      <div className="space-y-2">
        {vaptClients.map((client) => (
          <div key={client.name} className="flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
            <span className="font-body text-[14px] text-c-text">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Rewrite `app/projects/grc/page.tsx`**

```tsx
import type { Metadata } from 'next'
import { grcCategories } from '@/lib/data'

export const metadata: Metadata = {
  title: 'GRC Projects',
  description: 'Governance, Risk & Compliance engagements — ISO 27001, surveillance audit, compliance assessment.',
}

export default function GrcPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-4">grc</p>
      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        GRC & Compliance.
      </h1>
      <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-12">
        ISO/IEC 27001 implementation, surveillance audit, and compliance assessment for organizations
        across regulated industries.
      </p>
      <div className="space-y-10">
        {grcCategories.map((cat) => (
          <div key={cat.id}>
            <p className="font-mono text-[12px] text-c-purple mb-4">{cat.label}</p>
            <div className="space-y-2">
              {cat.clients.map((client) => (
                <div key={client.name} className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
                  <span className="font-body text-[14px] text-c-text">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add app/projects/page.tsx app/projects/vapt/page.tsx app/projects/grc/page.tsx
git commit -m "feat: rewrite Projects pages — text list layout with vapt/grc sections"
```

---

## Task 7: Services Page

**Files:**
- Modify: `app/services/page.tsx`

**Interfaces:**
- Consumes: `services` from `lib/data`
- Produces: Numbered text services page

- [ ] **Step 1: Rewrite `app/services/page.tsx`**

```tsx
import type { Metadata } from 'next'
import { services } from '@/lib/data'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description: 'ISO/IEC 27001 GRC consulting and Vulnerability Assessment & Penetration Testing services.',
}

export default function ServicesPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Services.
      </h1>

      <div className="space-y-16">
        {services.map((service, i) => (
          <div key={service.id}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-mono text-[13px] text-c-subtle">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-mono text-[12px] text-c-purple">{service.id}</span>
            </div>
            <h2 className="font-body font-semibold text-[20px] text-c-text tracking-tight mb-3">
              {service.title}
            </h2>
            <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="font-body text-[14px] text-c-muted">
                  · {item}
                </li>
              ))}
            </ul>
            {i < services.length - 1 && (
              <div className="border-t border-c-border mt-16" />
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-c-border mt-16 pt-16">
        <p className="font-body text-[15px] text-c-muted mb-4">
          Ready to start? Reach out and I&apos;ll respond within 24 hours.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-c-purple hover:text-c-purple-hover transition-colors"
          >
            {personalInfo.email}
          </a>
          <span className="text-c-border">·</span>
          <Link href="/contact" className="text-c-muted hover:text-c-text transition-colors">
            Contact form →
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
git commit -m "feat: rewrite Services page — numbered text list"
```

---

## Task 8: Contact Page

**Files:**
- Modify: `app/contact/page.tsx`

**Interfaces:**
- Consumes: `personalInfo` from `lib/data`
- Produces: Contact page with social table + WhatsApp form

- [ ] **Step 1: Rewrite `app/contact/page.tsx`**

```tsx
'use client'

import { useState } from 'react'
import { personalInfo } from '@/lib/data'
import Link from 'next/link'

const serviceOptions = [
  { value: 'grc',     label: 'GRC Services — ISO/IEC 27001 / 27701' },
  { value: 'vapt',    label: 'VAPT — Web / Mobile Penetration Testing' },
  { value: 'audit',   label: 'Internal Audit & Compliance Review' },
  { value: 'consult', label: 'Security Consultation' },
  { value: 'other',   label: 'Other / General Inquiry' },
]

const serviceLabels: Record<string, string> = {
  grc:     'GRC Services (ISO/IEC 27001 / 27701)',
  vapt:    'VAPT / Penetration Testing',
  audit:   'Internal Audit & Compliance Review',
  consult: 'Security Consultation',
  other:   'General Inquiry',
}

const socials = [
  { label: 'Email',     href: `mailto:${personalInfo.email}`,          value: personalInfo.email },
  { label: 'WhatsApp',  href: `https://wa.me/${personalInfo.whatsappNumber}`, value: personalInfo.whatsapp },
  { label: 'LinkedIn',  href: personalInfo.socials.linkedin,            value: 'onerrorkx' },
  { label: 'GitHub',    href: personalInfo.socials.github,              value: 'satorukikyy' },
  { label: 'Instagram', href: personalInfo.socials.instagram,           value: '@kxs3c' },
]

export default function ContactPage() {
  const [name,    setName]    = useState('')
  const [org,     setOrg]     = useState('')
  const [service, setService] = useState('grc')
  const [message, setMessage] = useState('')

  const waMessage = [
    `Hello Kiky! I'm ${name}${org ? ` from ${org}` : ''}.`,
    '',
    `Service: ${serviceLabels[service] ?? service}`,
    '',
    message,
  ].join('\n')

  const waUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(waMessage)}`
  const canSubmit = name.trim() !== '' && message.trim() !== ''

  const inputClass = "w-full border-b border-c-border bg-transparent py-2.5 font-body text-[14px] text-c-text placeholder:text-c-subtle focus:outline-none focus:border-c-purple transition-colors"

  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-4">
        Let&apos;s work together.
      </h1>
      <p className="font-body text-[15px] text-c-muted mb-12">
        Have a project in mind? Fill in the form or reach out directly.
      </p>

      {/* Contact table */}
      <section className="mb-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-6">Contact</p>
        <div className="space-y-3">
          {socials.map((s) => (
            <div key={s.label} className="flex items-baseline gap-6">
              <span className="font-mono text-[12px] text-c-subtle w-24 flex-shrink-0">{s.label}</span>
              <a
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="font-body text-[14px] text-c-purple hover:text-c-purple-hover transition-colors"
              >
                {s.value}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-c-border pt-16">
        <p className="font-mono text-[11px] text-c-subtle uppercase tracking-[3px] mb-8">Send a Message</p>
        <div className="space-y-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="font-mono text-[11px] text-c-subtle uppercase tracking-[2px] block mb-2">
                Name <span className="text-c-purple">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-mono text-[11px] text-c-subtle uppercase tracking-[2px] block mb-2">
                Organization
              </label>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Company or institution"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] text-c-subtle uppercase tracking-[2px] block mb-2">
              Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border-b border-c-border bg-transparent py-2.5 font-body text-[14px] text-c-text focus:outline-none focus:border-c-purple transition-colors cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono text-[11px] text-c-subtle uppercase tracking-[2px] block mb-2">
              Message <span className="text-c-purple">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project, goals, or questions…"
              rows={5}
              className="w-full border-b border-c-border bg-transparent py-2.5 font-body text-[14px] text-c-text placeholder:text-c-subtle focus:outline-none focus:border-c-purple transition-colors resize-none"
            />
          </div>

          <div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canSubmit}
              className={`inline-flex items-center gap-2 font-mono text-[13px] px-5 py-2.5 transition-all ${
                canSubmit
                  ? 'text-white bg-c-purple hover:bg-c-purple-hover cursor-pointer'
                  : 'text-c-subtle bg-c-border pointer-events-none cursor-not-allowed'
              }`}
            >
              Send via WhatsApp →
            </a>
            {!canSubmit && (
              <p className="font-mono text-[12px] text-c-subtle mt-3">
                Fill in name and message to continue.
              </p>
            )}
          </div>

        </div>
      </section>

    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: rewrite Contact page — social table + borderless form"
```

---

## Task 9: Cleanup + Tests

**Files:**
- Modify: `__tests__/` — update or delete broken tests
- Check: `next.config.ts` for any stale references

**Interfaces:**
- Consumes: Updated components and pages from Tasks 1–8
- Produces: Clean build, passing tests

- [ ] **Step 1: Check for stale imports across the codebase**

```bash
grep -r "brand-green\|brand-bg\|brand-text\|brand-muted\|brand-border\|brand-soft\|brand-subtle\|Space_Grotesk\|font-heading\|PageHero\|Marquee\|AboutPreview\|ServicesPreview\|ProjectsPreview\|CertificationsStrip\|/experience\|/education" app components --include="*.tsx" --include="*.ts" -l
```

Fix any remaining references by replacing:
- `brand-green` → `c-purple` (for accent uses) or remove
- `brand-text` → `c-text`
- `brand-muted` → `c-muted`
- `brand-border` → `c-border`
- `font-heading` → `font-body`
- `section-tag` → inline `font-mono text-[11px] text-c-subtle uppercase tracking-[3px]`

- [ ] **Step 2: Check and update tests**

```bash
npm test -- --passWithNoTests 2>&1 | head -60
```

If tests reference deleted components (`PageHero`, `Marquee`, `CertificationsStrip`, `AboutPreview`, etc.), delete those test files:

```bash
# Only delete if the test file covers a deleted component
# Check __tests__/ directory first
ls __tests__/
```

Delete test files for deleted components, e.g.:
```bash
rm __tests__/components/ui/PageHero.test.tsx 2>/dev/null || true
rm __tests__/components/sections/CertificationsStrip.test.tsx 2>/dev/null || true
```

Update any remaining tests that reference old color tokens (`brand-green`, `bg-brand-*`) to use new tokens.

- [ ] **Step 3: Run full test suite**

```bash
npm test
```

Expected: All tests pass (or only tests for preserved components run).

- [ ] **Step 4: Run build**

```bash
npm run build
```

Expected: 0 errors, all routes compile. Routes should be: `/`, `/about`, `/background`, `/projects`, `/projects/vapt`, `/projects/grc`, `/services`, `/contact`.

- [ ] **Step 5: Check for any `/services/grc` or `/services/vapt` sub-routes**

```bash
ls app/services/
```

If `app/services/grc/` or `app/services/vapt/` exist, check if they have consumers. The current `services/page.tsx` rewrite links to `/contact` not to sub-routes, so these can be deleted if unused:

```bash
# Only if no nav links point to them
rm -rf app/services/grc 2>/dev/null || true
rm -rf app/services/vapt 2>/dev/null || true
```

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: cleanup stale tokens, tests, and unused sub-routes after redesign"
```
