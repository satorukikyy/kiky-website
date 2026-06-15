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
            className="bg-white border border-brand-border text-brand-text font-heading font-semibold text-sm px-7 py-3 rounded-[10px] hover:bg-brand-soft transition-colors"
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
