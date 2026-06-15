import PageHero from '@/components/ui/PageHero'
import { education } from '@/lib/data'

export default function EducationPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Education"
        title="Academic background."
        subtitle="Formal education in informatics engineering and computer networking."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div key={edu.institution} className="bg-white border border-brand-border rounded-[20px] p-8">
              <p className="text-brand-subtle text-[11px] font-body font-semibold uppercase tracking-[1.5px] mb-3">
                {edu.startYear} — {edu.endYear ?? 'Present'}
              </p>
              <h2 className="font-heading font-black text-[22px] text-brand-text tracking-tight leading-tight mb-1">
                {edu.institution}
              </h2>
              <p className="text-brand-green font-heading font-semibold text-base mb-1">{edu.degree}</p>
              <p className="text-brand-muted text-sm mb-4">{edu.field}</p>

              {!edu.endYear && (
                <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[11px] font-heading font-bold px-3 py-1 rounded-full mb-4">
                  Currently Enrolled
                </span>
              )}

              {edu.achievement && (
                <div className="mt-2 bg-brand-soft border border-brand-border-soft rounded-xl px-4 py-3">
                  <p className="text-[12px] font-body text-brand-text leading-relaxed">{edu.achievement}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
