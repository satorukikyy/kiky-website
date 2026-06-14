import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { experience } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Experience — Rizky Aditya',
  description: 'Professional experience in GRC and cybersecurity.',
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience"
        subtitle="My professional journey in cybersecurity and governance."
        accentColor="#E63946"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-text" />

          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={`${exp.company}-${exp.startYear}`} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-4 h-4 bg-brand-red border-2 border-brand-text -translate-x-1/2" />

                <div className="border-2 border-brand-text shadow-neo bg-white p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-2xl">{exp.role}</h3>
                      <p className="font-heading font-bold text-brand-red text-lg">{exp.company}</p>
                      <p className="font-body text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <div className="border-2 border-brand-text px-4 py-2 font-heading font-bold text-sm text-center bg-brand-yellow whitespace-nowrap">
                      {exp.startYear} — {exp.endYear ?? 'Present'}
                    </div>
                  </div>

                  <p className="font-body text-gray-600 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="border-2 border-brand-text px-3 py-1 font-heading font-bold text-xs bg-brand-bg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
