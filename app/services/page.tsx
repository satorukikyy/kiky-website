import type { Metadata } from 'next'
import { services } from '@/lib/data'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description: 'ISO/IEC 27001 GRC consulting and Vulnerability Assessment & Penetration Testing services.',
}

export default function ServicesPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Services.
      </h1>

      <div className="space-y-16">
        {services.map((service, i) => (
          <div key={service.id}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-mono text-[13px] text-c-subtle">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-mono text-[12px] text-c-purple">{service.id}</span>
            </div>
            <h2 className="font-body font-semibold text-[20px] text-c-text tracking-tight mb-3">
              {service.title}
            </h2>
            <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="font-body text-[14px] text-c-muted">
                  · {item}
                </li>
              ))}
            </ul>
            {i < services.length - 1 && (
              <div className="border-t border-c-border mt-16" />
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-c-border mt-16 pt-16">
        <p className="font-body text-[15px] text-c-muted mb-4">
          Ready to start? Reach out and I&apos;ll respond within 24 hours.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-c-purple hover:text-c-purple-hover transition-colors"
          >
            {personalInfo.email}
          </a>
          <span className="text-c-border">·</span>
          <Link href="/contact" className="text-c-muted hover:text-c-text transition-colors">
            Contact form →
          </Link>
        </div>
      </div>

    </div>
  )
}
