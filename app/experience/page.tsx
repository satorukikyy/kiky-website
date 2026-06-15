import PageHero from '@/components/ui/PageHero'
import { experience } from '@/lib/data'

export default function ExperiencePage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Experience"
        title="Where I've worked."
        subtitle="Professional roles in information security governance and penetration testing."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.role} className="bg-white border border-brand-border rounded-[20px] p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h2 className="font-heading font-black text-[22px] text-brand-text tracking-tight leading-tight">
                    {exp.role}
                  </h2>
                  <p className="text-brand-green font-heading font-semibold text-base mt-0.5">
                    {exp.company}
                  </p>
                  <p className="text-brand-subtle text-sm mt-0.5">{exp.location}</p>
                </div>
                <div className="bg-brand-soft border border-brand-border-soft rounded-xl px-4 py-2 text-center shrink-0">
                  <p className="font-heading font-bold text-sm text-brand-text">
                    {exp.startYear} — {exp.endYear ?? 'Present'}
                  </p>
                  {!exp.endYear && (
                    <span className="text-[10px] font-body text-brand-green font-semibold">● Current</span>
                  )}
                </div>
              </div>

              <div className="border-l-2 border-brand-border pl-5 mb-5">
                <p className="text-brand-muted text-sm leading-[1.75]">{exp.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span key={t} className="bg-[#F0F4F1] text-brand-text/70 text-[11px] font-body font-medium px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
