import type { Metadata } from 'next'
import { grcCategories } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'GRC Projects',
  description: 'Governance, Risk & Compliance engagements — ISO 27001, surveillance audit, compliance assessment.',
}

export default function GrcPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <FadeIn>
        <p className="font-mono text-[13px] text-c-subtle mb-4">// grc</p>
        <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
          GRC & Compliance.
        </h1>
        <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-4">
          GRC engagements spanning ISO/IEC 27001, ISO/IEC 27701, and ISO/IEC 42001 consulting — from
          initial gap analysis through to certification readiness and post-certification surveillance.
          Work includes control mapping to annex A, risk register development, Statement of Applicability
          preparation, and security policy authoring aligned to UU PDP requirements.
        </p>
        <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-12">
          Clients are primarily organizations in regulated industries — financial services, healthcare,
          technology, and government — seeking audit-ready ISMS programs with measurable risk reduction.
        </p>
      </FadeIn>
      <div className="space-y-10">
        {grcCategories.map((cat) => (
          <FadeIn key={cat.id}>
            <div>
              <p className="font-mono text-[12px] text-c-purple mb-4">{cat.label}</p>
              <StaggerContainer className="space-y-2">
                {cat.clients.map((client) => (
                  <StaggerItem key={client.name}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
                      <span className="font-body text-[14px] text-c-text">{client.name}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
