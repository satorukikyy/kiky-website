# UI Redesign Design Spec — Kiky Portfolio

**Date:** 2026-06-15  
**Status:** Approved

---

## Overview

Full visual redesign of the portfolio website from neobrutalist (light bg, black borders, yellow accent) to a professional editorial style inspired by modern marketing sites (Wise). Light background, green + white color palette, bento grid layout, large bold typography.

---

## Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `brand-bg` | `#F7FAF7` | Page background |
| `brand-white` | `#FFFFFF` | Card background |
| `brand-soft` | `#F0F7F1` | Soft card background |
| `brand-green` | `#00A845` | Primary accent, CTA, marquee |
| `brand-green-dark` | `#007A32` | Label text on light |
| `brand-green-light` | `#EBF7EE` | Badge background |
| `brand-text` | `#0A0A0A` | Primary text |
| `brand-muted` | `#6B7280` | Secondary text |
| `brand-subtle` | `#9CA3AF` | Tertiary / labels |
| `brand-border` | `#E4EDE5` | Card borders |
| `brand-border-soft` | `#DDE9DE` | Soft card borders |

### Typography
- **Heading font:** Space Grotesk (weight 800–900, letter-spacing -1px to -3px)
- **Body font:** Inter (weight 400–600)
- **Display (hero h1):** clamp(52px, 6.5vw, 78px), weight 900, tracking -3px
- **Section title:** 28px, weight 900, tracking -1px
- **Card h3:** 18–22px, weight 800
- **Body text:** 14–16px, line-height 1.65–1.75

### Components
- **Cards:** `bg-white border border-brand-border rounded-[20px] p-7` — no hard shadows
- **Green cards:** `bg-brand-green border-brand-green` — white text
- **Soft cards:** `bg-brand-soft border-brand-border-soft`
- **Tags:** `bg-[#F0F4F1] text-[#4B5563] text-[11px] px-2.5 py-1 rounded-md`
- **Green tags (on green card):** `bg-white/20 text-white`
- **Buttons primary:** `bg-brand-green text-white font-bold rounded-[10px] px-7 py-3`
- **Buttons secondary:** `bg-white border border-[#D1D5DB] text-brand-text rounded-[10px] px-7 py-3`
- **Section label:** `text-[10px] text-brand-green tracking-[3px] uppercase font-bold`
- **Nav CTA:** `bg-brand-green text-white rounded-lg px-5 py-2 font-bold text-sm`
- **Cert pill:** `inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-2 text-sm`
- **Project badge:** `bg-brand-green-light border border-[#C3E6CC] text-brand-green-dark text-[10px] rounded-full px-2.5 font-bold`

### Spacing / Layout
- **Max width:** 1120px centered
- **Horizontal padding:** 52px desktop, 20px mobile
- **Section gap:** 80px between sections
- **Card gap:** 14px (gap-3.5)
- **Border radius cards:** 20px
- **Border radius CTA:** 24px

---

## Pages

### 1. Homepage (`/`)
**Sections (top to bottom):**
1. Navbar (sticky, blur backdrop)
2. Hero — label pill + h1 (3 lines) + subtitle + 2 CTAs + 4 stat cards
3. Marquee strip (green, animated)
4. Section: About Me — 3fr/2fr grid → bio card + cert pills card
5. Section: Services — 2-col equal → VAPT card (white) + GRC card (green)
6. Section: Projects — 1fr/2fr grid → count card + 2×2 project cards
7. CTA block (green full-width card)
8. Footer

### 2. About (`/about`)
- PageHero: "About Me." headline
- Bio section with full text
- Skills bento grid
- Experience preview card → link to /experience
- Education preview card → link to /education

### 3. Experience (`/experience`)
- PageHero: "Experience."
- Timeline cards (vertical, dark left border accent)
- Each card: role, company, dates, description, tags

### 4. Education (`/education`)
- PageHero: "Education."
- Cards per institution (university + high school)
- Achievement badge if present

### 5. Services (`/services`)
- PageHero: "Services."
- 2 full service cards (VAPT + GRC) — detailed with all items listed
- CTA block at bottom

### 6. Projects (`/projects`)
- PageHero: "Projects."
- Two sub-sections: VAPT Projects + GRC Projects
- Each project as card with badge, title, tags, status

### 7. VAPT Detail (`/projects/vapt`)
- PageHero: "Penetration Testing Projects."
- Full list of VAPT projects

### 8. GRC Detail (`/projects/grc`)
- PageHero: "GRC & Compliance Projects."
- Full list of GRC projects

### 9. Contact (`/contact`)
- PageHero: "Let's Work Together."
- Contact form (WhatsApp redirect)
- Social links

---

## Navbar
- Logo: `kiky.` (green dot)
- Links: About, Experience, Projects, Services
- CTA: `Hire Me →` (green button)
- Sticky with `backdrop-blur` + subtle border-bottom

## Footer
- Logo left, social links center, copyright right
- Border-top, minimal

---

## Marquee
- Green background strip
- Infinite scroll animation (CSS keyframes)
- Items: GRC Analyst · ISO 27001 Lead Auditor · ISO 27701 Lead Auditor · Web App Pentester · Mobile Pentester · Bug Bounty Hunter · Security Researcher
- Separator: ✦ (white, 35% opacity)

---

## Removed from old design
- All neobrutalist classes: `neo-card`, `neo-btn-*`, `neo-label`, box-shadow `neo`
- Yellow/red/blue/purple color palette
- Hard black borders
- `shadow-neo` utilities

---

## Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (hero entrance, marquee)
- **Fonts:** Google Fonts via `next/font` — Space Grotesk + Inter
- **Data:** `lib/data.ts` (unchanged — only visual layer changes)
