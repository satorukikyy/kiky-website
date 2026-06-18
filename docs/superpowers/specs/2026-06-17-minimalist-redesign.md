# Minimalist Redesign — Kiky Portfolio

**Date:** 2026-06-17
**Status:** Approved

---

## Overview

Full UI/UX overhaul from the current editorial green/card-based design to a text-first minimalist aesthetic inspired by mll.sh. Light theme, purple accent, hybrid mono/sans typography, single-column narrow layout. No cards, no bento grids, no heavy animations.

---

## Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| `bg` | `#FFFFFF` | Page background |
| `text` | `#111111` | Primary text |
| `muted` | `#6B7280` | Secondary text, descriptions |
| `subtle` | `#9CA3AF` | Metadata, dates, labels |
| `border` | `#E5E7EB` | Section dividers (1px) |
| `purple` | `#7C3AED` | Links, active nav, highlights, mono labels |
| `purple-light` | `#EDE9FE` | Inline code bg, subtle highlight bg |
| `purple-muted` | `#8B5CF6` | Hover states |

Replace all current `brand-*` Tailwind tokens with these. The green palette (`brand-green`, `brand-soft`, etc.) is removed entirely.

### Typography

- **Heading / Body:** `Inter` (already loaded via `next/font`)
- **Mono (labels, tags, dates, metadata):** `JetBrains Mono` — add via `next/font/google`
- **Hero name:** Inter, 800 weight, 48–64px, letter-spacing `-2px`
- **Section titles:** `font-mono`, 11px, ALL CAPS, `color: #9CA3AF`, `letter-spacing: 3px`
- **Body text:** Inter, 15px, line-height 1.75, `color: #111111`
- **Metadata / dates:** JetBrains Mono, 13px, `color: #9CA3AF`

### Spacing & Layout

- **Max width:** `720px` centered (down from 1120px)
- **Horizontal padding:** `24px` mobile, `0` desktop
- **Section gap:** `80–100px` vertical spacing between sections
- **Section separator:** `border-top: 1px solid #E5E7EB`
- **No cards** — no background fills, no border-radius blocks, no box shadows
- **Indentation:** `padding-left: 16px` for sub-content under a heading

### No Decorative Elements

Remove: marquee strip, bento grid, stat cards, certification pills, green CTA blocks, profile card, Framer Motion entrance animations (keep only if subtle — no y-axis slides). Replace with generous whitespace and typographic hierarchy.

---

## Navigation

- **Logo:** `kiky.` — Inter bold, purple dot (`.` in `#7C3AED`)
- **Links:** `About · Background · Projects · Services · Contact` — plain text, Inter 14px, `color: #6B7280` default, `#111111` hover, purple `border-bottom 2px` for active
- **No button CTA** — Contact is a plain nav link
- **Sticky:** yes, `background: #FFFFFF`, `border-bottom: 1px solid #E5E7EB`, no blur/shadow
- **Mobile:** hamburger → simple dropdown text list (same style, full-width)

---

## Route Structure

Collapsed from 9 routes to 8:

| Route | Content | Change |
|---|---|---|
| `/` | Hero + about preview + services list + projects list | Redesign |
| `/about` | Full bio + skills + certifications | Redesign |
| `/background` | Experience + Education combined | **New** (replaces `/experience` + `/education`) |
| `/projects` | All projects index | Redesign |
| `/projects/vapt` | VAPT detail list | Redesign |
| `/projects/grc` | GRC detail list | Redesign |
| `/services` | Services detail | Redesign |
| `/contact` | Contact form + social links | Redesign |

Delete `/experience` and `/education` routes. Create `/background`.

---

## Page Designs

### Homepage (`/`)

```
[navbar]

Rizky Aditya

GRC Analyst & Security Researcher
Whitesec.id · Bandung, Indonesia

Helping organizations build security programs that are rigorous
on paper and resilient when put to the test.

rizky@nexorasec.asia  ·  GitHub  ·  LinkedIn  ·  WhatsApp

──────────────────────────────────────────────
ABOUT

[2–3 sentence bio excerpt]          → /about

──────────────────────────────────────────────
SERVICES

01  Web & Mobile Penetration Testing
02  GRC Consulting (ISO 27001 / 27701)
03  Bug Bounty Hunting

──────────────────────────────────────────────
PROJECTS                            → view all

vapt    Web Application Pentest · PT. X      2025
grc     ISO 27001 Implementation · PT. Y     2024

──────────────────────────────────────────────
[footer]
```

- Hero: no card, no background, straight text on white
- Contact links inline, horizontal, as `<a>` elements, purple on hover
- Section titles: mono ALL CAPS + border-top separator
- Services: numbered list, plain text
- Projects table: mono `vapt`/`grc` tag (purple), mono date right-aligned

### `/about`

```
ABOUT

[Full bio paragraphs]

──────────────────────────────────────────────
SKILLS

[skill list — plain text, comma-separated or short lines]

──────────────────────────────────────────────
CERTIFICATIONS

· ISO 27001 Lead Auditor
· ISO 27701 Lead Auditor
· ISO 42001 Lead Auditor
· Certified Bug Bounty Masterclass (Wiz)
```

### `/background`

```
EXPERIENCE

2024 – now   GRC Analyst & Security Researcher
             Whitesec.id · Bandung, Indonesia

             ISO 27001 / 27701 / 42001 governance consulting,
             web & mobile penetration testing, bug bounty.

──────────────────────────────────────────────
EDUCATION

2025 – now   Teknik Informatika
             Telkom University · Bandung

2020 – 2023  Teknik Komputer & Jaringan
             SMK Harapan Bangsa
             ↳ 1st place · Mikrotik Competition (50+ students)
```

- Dates: mono muted
- `↳` achievement indicator: purple
- Separator between EXPERIENCE and EDUCATION: 1px border

### `/projects`

```
PROJECTS

──────────────────────────────────────────────
vapt

2025 · 04    Web Application Pentest · PT. XXXX
2025 · 02    Mobile Application Pentest · PT. YYYY

──────────────────────────────────────────────
grc

2025 · 03    ISO 27001 Implementation · PT. AAAA
2024 · 10    ISO 27701 Gap Analysis · Fintech BB
```

- `vapt` / `grc` sub-headers: mono small purple
- Dates: `YYYY · MM` mono muted, fixed-width left column
- Project title: body bold black

### `/contact`

```
CONTACT

Let's work together.

Email        rizky@nexorasec.asia  (mailto link)
WhatsApp     +62 878 8986 7060
LinkedIn     onerrorkx
GitHub       satorukikyy
Instagram    @kxs3c

──────────────────────────────────────────────
[contact form: name, message, send via WhatsApp]
```

- Labels: mono muted (left column, fixed width)
- Values: body purple as clickable links
- Email: always `rizky@nexorasec.asia` — no whitesec.id email anywhere in codebase

---

## Footer

```
kiky.                          © 2026 Rizky Aditya
```

- Minimal single line
- `border-top: 1px solid #E5E7EB`
- Logo left, copyright right
- No social icons (they're on contact page)

---

## Content Changes

- **Email:** Replace all instances of `cyber@whitesec.id` with `rizky@nexorasec.asia` in `lib/data.ts` and any hardcoded references
- **Routes removed:** `/experience` and `/education` — delete `app/experience/` and `app/education/` directories entirely
- **New route:** `/background` combining experience + education data

---

## Stack

- **Framework:** Next.js (App Router) — unchanged
- **Styling:** Tailwind CSS — update `tailwind.config.ts` with new tokens
- **Fonts:** `Inter` (keep) + `JetBrains Mono` (add) via `next/font/google`
- **Animations:** Remove Framer Motion entrance animations; keep none or use CSS `opacity` fade only
- **Data:** `lib/data.ts` — update email, no structural changes needed
