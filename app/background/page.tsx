import type { Metadata } from 'next'
import { experience, education } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Background',
  description: 'Work experience and education — GRC consulting, security engineering, and penetration testing.',
}

export default function BackgroundPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Background.
      </h1>

      {/* Experience */}
      <section className="mb-16">
        <p className="font-mono text-[13px] text-c-subtle mb-8">// experience</p>
        <div className="space-y-10">
          {experience.map((exp) => (
            <div key={exp.role}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h2 className="font-body font-semibold text-[16px] text-c-text">{exp.role}</h2>
                <span className="font-mono text-[12px] text-c-subtle flex-shrink-0">
                  {exp.startYear} – {exp.endYear ?? 'now'}
                </span>
              </div>
              <p className="font-mono text-[13px] text-c-purple mb-3">{exp.company}</p>
              <p className="font-body text-[14px] text-c-muted leading-[1.75]">{exp.description}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                {exp.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] text-c-subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-c-border pt-16">
        <p className="font-mono text-[13px] text-c-subtle mb-8">// education</p>
        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.institution}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h2 className="font-body font-semibold text-[16px] text-c-text">{edu.institution}</h2>
                <span className="font-mono text-[12px] text-c-subtle flex-shrink-0">
                  {edu.startYear} – {edu.endYear ?? 'now'}
                </span>
              </div>
              <p className="font-mono text-[13px] text-c-purple mb-1">{edu.degree}</p>
              <p className="font-body text-[14px] text-c-muted">{edu.field}</p>
              {edu.achievement && (
                <p className="font-mono text-[13px] text-c-muted mt-3">
                  <span className="text-c-purple">↳</span> {edu.achievement.replace(/^🥇\s*/, '')}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
