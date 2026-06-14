import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { education } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Education — Rizky Aditya',
  description: 'Academic background of Rizky Aditya.',
}

export default function EducationPage() {
  return (
    <>
      <PageHero
        title="Education"
        subtitle="Academic foundation that shaped my technical mindset."
        accentColor="#118AB2"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-text" />

          <div className="space-y-12">
            {education.map((edu) => (
              <div key={`${edu.institution}-${edu.startYear}`} className="relative pl-16">
                <div className="absolute left-4 top-1 w-4 h-4 bg-brand-blue border-2 border-brand-text -translate-x-1/2" />

                <div className="border-2 border-brand-text shadow-neo bg-white p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-2xl">{edu.institution}</h3>
                      <p className="font-heading font-bold text-brand-blue text-lg">{edu.degree}</p>
                      <p className="font-body text-sm text-gray-600">{edu.field}</p>
                    </div>
                    <div className="border-2 border-brand-text px-4 py-2 font-heading font-bold text-sm text-center bg-brand-yellow whitespace-nowrap">
                      {edu.startYear} — {edu.endYear ?? 'Present'}
                    </div>
                  </div>

                  {edu.achievement && (
                    <div className="border-2 border-brand-green bg-green-50 px-4 py-3 mt-4">
                      <p className="font-heading font-bold text-brand-green text-sm">{edu.achievement}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
