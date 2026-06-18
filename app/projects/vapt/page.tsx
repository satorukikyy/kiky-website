import type { Metadata } from 'next'
import { vaptClients } from '@/lib/data'

export const metadata: Metadata = {
  title: 'VAPT Projects',
  description: 'Vulnerability Assessment & Penetration Testing engagements.',
}

export default function VaptPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <p className="font-mono text-[13px] text-c-subtle mb-4">// vapt</p>
      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Penetration Testing.
      </h1>
      <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-4">
        Vulnerability assessments and penetration tests covering web applications, mobile apps, and APIs.
        Each engagement follows a structured attack lifecycle — reconnaissance, enumeration, exploitation,
        and post-exploitation — aligned to OWASP Testing Guide and PTES standards.
      </p>
      <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-12">
        Deliverables include a detailed technical report with CVSS-rated findings, reproduction steps,
        and remediation guidance tailored to the client&apos;s stack and team maturity.
        Clients span technology, fintech, healthcare, and critical infrastructure sectors.
      </p>
      <div className="space-y-2">
        {vaptClients.map((client) => (
          <div key={client.name} className="flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
            <span className="font-body text-[14px] text-c-text">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
