# Portfolio Website Design Spec
**Date:** 2026-06-15
**Owner:** Rizky Aditya (Kiky)
**Project:** Personal Cybersecurity Portfolio — kiky-website

---

## 1. Overview

A professional personal portfolio website for **Rizky Aditya**, known as **Kiky** — a GRC Analyst & Security Researcher at Whitesec.id. The site showcases his expertise in ISO 27001/27701 governance, VAPT services, and security research.

**Target Audience:** Potential clients (companies needing GRC/VAPT services), recruiters, and the security community.

**Language:** English (full content)

**Hosting:** Vercel (free tier)

---

## 2. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Font | Space Grotesk (headings) + Inter (body) via next/font |
| Contact Form | WhatsApp redirect via `wa.me` link |
| Deployment | Vercel (free) |

---

## 3. Design System

### Style: Light Neo-Brutalism
- Bold black borders (2–3px solid) on all cards and components
- Offset box shadow: `4px 4px 0px #0A0A0A`
- Hover effect: shadow shifts to `2px 2px 0px #0A0A0A` + translate
- Playful but professional — inspired by bold editorial design

### Color Palette
```
Background  #FAFAFA   off-white base
Text        #0A0A0A   near black
Red         #E63946   primary CTA, VAPT accent
Yellow      #FFD166   highlight, card backgrounds
Blue        #118AB2   GRC / compliance accent
Green       #06D6A0   success badges, certifications
Purple      #7B2D8B   secondary accent
Border      #0A0A0A   all component borders
```

### Typography
- **Headings:** Space Grotesk, Bold (700)
- **Body:** Inter, Regular (400) / Medium (500)
- **Section labels:** Space Grotesk, uppercase, letter-spacing wide

### Component Patterns
- **Cards:** white or yellow bg + black border + offset shadow
- **Buttons (primary):** red fill + white text + black border + shadow
- **Buttons (secondary):** white fill + black text + black border + shadow
- **Badges/Tags:** colored pill with black border
- **Timeline:** vertical line with colored dots per entry
- **Marquee:** horizontal scrolling text strip between sections

---

## 4. Site Architecture

### Routes
```
/                   Landing Page
/about              About
/experience         Experience
/education          Education
/projects           Projects Hub
/projects/vapt      VAPT Projects
/projects/grc       GRC Projects
/services           Services
/contact            Contact
```

### Shared Components
- `<Navbar>` — Logo "Rizky Aditya" left, nav links center, [Hire Me] CTA right
- `<Footer>` — social icons + copyright
- `<PageHero>` — reusable section heading for inner pages

---

## 5. Page Designs

### `/` — Landing Page
1. **Navbar** (sticky)
2. **Hero** — left: photo placeholder + sparkle decorations | right: "Hi, I'm Kiky", title, 2 CTA buttons ([View My Work] + [Contact Me])
3. **Marquee strip** — scrolling: "GRC Analyst · Security Researcher · ISO 27001 Lead Auditor · Bug Bounty Hunter ·"
4. **About Preview** — 2-col: short bio paragraph + [Read More →] link
5. **Services Preview** — 2 cards: VAPT | Security Assessment Compliance
6. **Projects Preview** — 4 cards (2 VAPT + 2 GRC placeholder)
7. **Certifications Strip** — 3 badge cards: ISO 27001 LA | ISO 27701 LA | Certified Bug Bounty Masterclass (Wiz)
8. **Footer**

### `/about` — About
1. Hero heading "About Me"
2. 2-col: photo + bio paragraph
3. Bio text: "I'm Rizky Aditya, a GRC Analyst & Security Researcher based in Indonesia with 2+ years of experience in information security governance and vulnerability assessment. Currently working at Whitesec.id, specializing in ISO 27001 & ISO 27701 implementation, internal auditing, and web/mobile penetration testing."
4. Skills grid (card per skill): ISO 27001, ISO 27701, Gap Analysis, Internal Audit, Policy Writing, Web App Pentest, Mobile Pentest, Bug Bounty, Mikrotik/Networking
5. Certifications row: ISO 27001 Lead Auditor, ISO 27701 Lead Auditor, Certified Bug Bounty Masterclass

### `/experience` — Experience
1. Hero heading "Experience"
2. Vertical timeline (single entry for now):
   - **GRC Analyst** @ Whitesec.id | 2024 – Present (2+ years)
   - Focus: ISO 27001 & ISO 27701 implementation, gap analysis, policy & procedure writing, internal audit, client advisory

### `/education` — Education
1. Hero heading "Education"
2. Timeline (newest first):
   - **Telkom University Bandung** | Teknik Informatika | 2025 – Present
   - **SMK Harapan Bangsa** | Teknik Komputer & Jaringan | 2020 – 2023
3. Achievement card: 🥇 1st Place — Mikrotik Competition (intra-department, 50+ participants)

### `/projects` — Projects Hub
1. Hero heading "Projects"
2. Two large cards side by side:
   - **VAPT Projects** (red accent) → `/projects/vapt`
   - **GRC Projects** (blue accent) → `/projects/grc`

### `/projects/vapt` — VAPT Projects
1. Heading + back link
2. Grid of project cards (placeholder initially): Client name (anonymized), scope (Web/Mobile), year, status badge
3. "More projects coming soon" placeholder card

### `/projects/grc` — GRC Projects
1. Heading + back link
2. Grid of project cards (placeholder initially): Client PT name, standard (ISO 27001/27701), type (Gap Analysis/Audit/Implementation), year
3. "More projects coming soon" placeholder card

### `/services` — Services
1. Hero heading "Services"
2. **VAPT Card** (red):
   - Web Application Penetration Testing
   - Mobile Application Penetration Testing
   - Description of methodology/deliverables
3. **Security Assessment Compliance Card** (blue):
   - Gap Analysis (ISO 27001 / ISO 27701)
   - Policy & Procedure Writing
   - Internal Audit
   - Description of methodology/deliverables
4. CTA strip: "Interested in working together?" → [Get In Touch] button → `/contact`

### `/contact` — Contact
1. Hero heading "Get In Touch"
2. Left col — Direct Contacts:
   - Email: rizky@nexorasec.asia
   - LinkedIn: linkedin.com/in/onerrorkx
   - GitHub: github.com/satorukikyy
   - Instagram: @kxs3c
   - X/Twitter: @kxgapapa
   - WhatsApp: +62 878 8986 7060
3. Right col — Contact Form:
   - Fields: Name, Email, Subject, Message
   - Submit button → redirect to WhatsApp (`wa.me/6287889867060?text=...`) with pre-filled message from form
4. Footer

---

## 6. Personal Information Reference

| Field | Value |
|-------|-------|
| Full Name | Rizky Aditya |
| Nickname | Kiky |
| Title | GRC Analyst & Security Researcher |
| Company | Whitesec.id |
| Email | rizky@nexorasec.asia |
| WhatsApp | +62 878 8986 7060 |
| LinkedIn | linkedin.com/in/onerrorkx |
| GitHub | github.com/satorukikyy |
| Instagram | @kxs3c |
| X/Twitter | @kxgapapa |
| Certifications | ISO 27001 Lead Auditor, ISO 27701 Lead Auditor, Certified Bug Bounty Masterclass (Wiz) |

---

## 7. Vercel Free Tier Constraints

- No server-side API routes that need persistent compute (contact form uses client-side WhatsApp redirect only)
- Static generation preferred for all pages (`generateStaticParams`)
- Images optimized via `next/image`
- No database required — all content hardcoded initially, can migrate to CMS later
