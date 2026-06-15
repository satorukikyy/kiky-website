import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const socials = [
  { label: 'LinkedIn',  href: personalInfo.socials.linkedin },
  { label: 'GitHub',    href: personalInfo.socials.github },
  { label: 'Instagram', href: personalInfo.socials.instagram },
  { label: 'Twitter',   href: personalInfo.socials.twitter },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-20">
      <div className="max-w-[1120px] mx-auto px-5 py-9 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="font-heading font-black text-[17px] text-brand-text">
          {personalInfo.nickname.toLowerCase()}
          <span className="text-brand-green">.</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-subtle text-[13px] font-medium hover:text-brand-text transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>

        <p className="text-[#D1D5DB] text-xs">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  )
}
