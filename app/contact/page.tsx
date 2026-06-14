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
  { label: 'LinkedIn', value: personalInfo.socials.linkedin.replace('https://www.', '').replace('https://', ''), href: personalInfo.socials.linkedin, color: 'brand-blue' },
  { label: 'GitHub', value: personalInfo.socials.github.replace('https://www.', '').replace('https://', ''), href: personalInfo.socials.github, color: 'brand-text' },
  { label: 'Instagram', value: personalInfo.socials.instagram.replace('https://www.', '').replace('https://', ''), href: personalInfo.socials.instagram, color: 'brand-purple' },
  { label: 'X / Twitter', value: personalInfo.socials.twitter.replace('https://www.', '').replace('https://', ''), href: personalInfo.socials.twitter, color: 'brand-text' },
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
