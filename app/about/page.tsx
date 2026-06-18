import type { Metadata } from 'next'
import { certifications } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description: 'GRC Analyst & Security Researcher based in Indonesia — ISO 27001, ISO 27701, penetration testing.',
}

const grcAreas = [
  'ISO/IEC 27001:2022 Implementation & Certification',
  'ISO/IEC 27701 Privacy Information Management',
  'ISO/IEC 42001 AI Management System',
  'Gap Analysis & Readiness Assessment',
  'Risk Assessment & Risk Treatment Plan',
  'Statement of Applicability (SoA) Development',
  'Security Policy & Procedure Development',
  'Internal Audit Support & Evidence Preparation',
  'Incident Management & Response Planning',
  'Business Continuity & Disaster Recovery Planning',
  'Third-Party & Supplier Risk Management',
  'Data Protection Impact Assessment (DPIA)',
  'UU PDP Compliance Advisory',
  'Security Awareness Program Development',
  'Asset Management & Information Classification',
  'Compliance Monitoring & Continuous Improvement',
]

const offensiveAreas = [
  'Web Application Penetration Testing',
  'Mobile Application Security',
  'API Security Testing',
  'Vulnerability Assessment',
  'OWASP Top 10 Assessment',
  'Attack Surface Analysis',
]

export default function AboutPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        About Me.
      </h1>

      {/* Bio */}
      <section className="mb-16">
        <p className="font-mono text-[13px] text-c-subtle mb-6">// introduction</p>
        <div className="space-y-4 font-body text-[15px] text-c-muted leading-[1.75]">
          <p>
            I&apos;m Rizky Aditya, a Cybersecurity Consultant specializing in{' '}
            <span className="text-c-text font-semibold">Governance, Risk &amp; Compliance (GRC)</span>{' '}
            and{' '}
            <span className="text-c-text font-semibold">Offensive Security</span>.
            Based in Indonesia, I help organizations strengthen their security posture by combining
            rigorous governance frameworks with practical, hands-on technical assessments.
          </p>
          <p>
            My work spans ISO/IEC 27001 and 27701 implementation, internal auditing, risk assessment,
            and web/mobile penetration testing — across technology, finance, and critical infrastructure.
            I hold Lead Auditor certifications in ISO 27001, 27701, and 42001, alongside ISC2 CC and
            several other professional credentials.
          </p>
          <p>
            Currently working full-time at Whitesec ID, contributing to 24+ security engagements and
            helping clients build audit-ready programs that deliver measurable risk reduction.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-c-border pt-16 mb-16">
        <p className="font-mono text-[13px] text-c-subtle mb-6">// expertise</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-mono text-[12px] text-c-purple mb-4">grc</p>
            <ul className="space-y-2">
              {grcAreas.map((item) => (
                <li key={item} className="font-body text-[14px] text-c-muted leading-snug">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[12px] text-c-purple mb-4">vapt</p>
            <ul className="space-y-2">
              {offensiveAreas.map((item) => (
                <li key={item} className="font-body text-[14px] text-c-muted leading-snug">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-c-border pt-16">
        <p className="font-mono text-[13px] text-c-subtle mb-6">// certifications</p>
        <div className="space-y-2">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-16 flex-shrink-0">{cert.category}</span>
              <span className="font-body text-[14px] text-c-text flex-1">{cert.name}</span>
              <span className="font-mono text-[12px] text-c-subtle hidden sm:block">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
