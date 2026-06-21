import type { Metadata } from 'next'
import { secEngCategories } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Security Engineering Projects',
  description: 'Blue team engagements — SOC monitoring and incident management across regulated industries.',
}

export default function SecEngPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <FadeIn>
        <p className="font-mono text-[13px] text-c-subtle mb-4">// sec-eng</p>
        <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
          Security Engineering.
        </h1>
        <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-4">
          Blue team engagements covering security operations center (SOC) monitoring and
          incident management. Work involved deploying and operating SIEM environments,
          building detection rules, triaging alerts, and coordinating response activities
          across client organizations.
        </p>
        <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-12">
          Clients span healthcare, banking, and critical infrastructure — industries with
          strict regulatory requirements around security monitoring and incident reporting.
        </p>
      </FadeIn>
      <div className="space-y-10">
        {secEngCategories.map((cat) => (
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
