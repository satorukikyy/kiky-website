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
