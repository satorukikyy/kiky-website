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
