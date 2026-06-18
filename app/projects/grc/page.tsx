import type { Metadata } from 'next'
import { grcCategories } from '@/lib/data'

export const metadata: Metadata = {
  title: 'GRC Projects',
  description: 'Governance, Risk & Compliance engagements — ISO 27001, surveillance audit, compliance assessment.',
}

export default function GrcPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <p className="font-mono text-[13px] text-c-subtle mb-4">// grc</p>
      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        GRC & Compliance.
      </h1>
      <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-12">
        ISO/IEC 27001 implementation, surveillance audit, and compliance assessment for organizations
        across regulated industries.
      </p>
      <div className="space-y-10">
        {grcCategories.map((cat) => (
          <div key={cat.id}>
            <p className="font-mono text-[12px] text-c-purple mb-4">{cat.label}</p>
            <div className="space-y-2">
              {cat.clients.map((client) => (
                <div key={client.name} className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
                  <span className="font-body text-[14px] text-c-text">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
