'use client'

import { useState } from 'react'
import { personalInfo } from '@/lib/data'

const serviceOptions = [
  { value: 'vapt',    label: 'VAPT — Web / Mobile Penetration Testing' },
  { value: 'grc',     label: 'GRC Consulting — ISO/IEC 27001 / 27701 / 42001' },
  { value: 'seceng',  label: 'Security Operations — SOC / Incident Management' },
  { value: 'bugbounty', label: 'Bug Bounty Collaboration' },
  { value: 'other',   label: 'Other / General Inquiry' },
]

const serviceLabels: Record<string, string> = {
  vapt:      'VAPT / Penetration Testing',
  grc:       'GRC Consulting (ISO/IEC 27001 / 27701 / 42001)',
  seceng:    'Security Operations / Blue Team',
  bugbounty: 'Bug Bounty Collaboration',
  other:     'General Inquiry',
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
  const [service, setService] = useState('vapt')
  const [message, setMessage] = useState('')

  const waMessage = [
    `Hello, I'm ${name}${org ? ` from ${org}` : ''}.`,
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
        <p className="font-mono text-[13px] text-c-subtle mb-6">// contact</p>
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
        <p className="font-mono text-[13px] text-c-subtle mb-8">// send a message</p>
        <div className="space-y-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="font-mono text-[12px] text-c-subtle block mb-2">
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
              <label className="font-mono text-[12px] text-c-subtle block mb-2">
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
            <label className="font-mono text-[12px] text-c-subtle block mb-2">
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
            <label className="font-mono text-[12px] text-c-subtle block mb-2">
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
            {canSubmit ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[13px] px-5 py-2.5 text-white bg-c-purple hover:bg-c-purple-hover transition-colors cursor-pointer"
              >
                Send via WhatsApp →
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-[13px] px-5 py-2.5 text-c-subtle bg-c-border cursor-not-allowed">
                Send via WhatsApp →
              </span>
            )}
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
