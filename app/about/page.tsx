import PageHero from '@/components/ui/PageHero'
import { personalInfo, skills, experience, education } from '@/lib/data'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="About Me"
        title="GRC Analyst & Security Researcher."
        subtitle={`${personalInfo.name} — based in Indonesia, specializing in information security governance and penetration testing.`}
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20 space-y-14">

        {/* Bio + skills */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3.5">
          <div className="bg-white border border-brand-border rounded-[20px] p-7">
            <p className="section-tag mb-3">Background</p>
            <p className="text-brand-muted text-sm leading-[1.75]">{personalInfo.bio}</p>
          </div>
          <div className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7">
            <p className="section-tag mb-4">Skills</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s.name} className="bg-white border border-brand-border text-brand-text text-[12px] font-body font-medium px-3 py-1.5 rounded-full">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience preview */}
        <div>
          <div className="mb-5">
            <p className="section-tag mb-1">Experience</p>
            <h2 className="section-title">Where I&apos;ve worked.</h2>
          </div>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.role} className="bg-white border border-brand-border rounded-[20px] p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading font-black text-[18px] text-brand-text tracking-tight">{exp.role}</h3>
                    <p className="text-brand-green font-heading font-semibold text-sm">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-brand-subtle text-[12px] font-body shrink-0">
                    {exp.startYear} — {exp.endYear ?? 'Present'}
                  </span>
                </div>
                <p className="text-brand-muted text-sm leading-[1.7] mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="bg-[#F0F4F1] text-brand-text/70 text-[11px] font-body font-medium px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/experience" className="inline-block mt-4 text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
            Full Experience →
          </Link>
        </div>

        {/* Education preview */}
        <div>
          <div className="mb-5">
            <p className="section-tag mb-1">Education</p>
            <h2 className="section-title">Academic background.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {education.map((edu) => (
              <div key={edu.institution} className="bg-white border border-brand-border rounded-[20px] p-7">
                <p className="text-brand-subtle text-[11px] font-body font-semibold uppercase tracking-[1px] mb-2">
                  {edu.startYear} — {edu.endYear ?? 'Present'}
                </p>
                <h3 className="font-heading font-black text-[17px] text-brand-text tracking-tight mb-1">{edu.institution}</h3>
                <p className="text-brand-green font-heading font-semibold text-sm mb-1">{edu.degree}</p>
                <p className="text-brand-muted text-sm">{edu.field}</p>
                {edu.achievement && (
                  <p className="mt-3 text-[12px] font-body text-brand-green-dark bg-brand-green-light border border-brand-green-border rounded-lg px-3 py-2">
                    {edu.achievement}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
