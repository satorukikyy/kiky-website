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
