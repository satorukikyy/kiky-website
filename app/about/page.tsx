import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Card from '@/components/ui/Card'
import { personalInfo, skills, certifications } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About — Rizky Aditya',
  description: personalInfo.bio,
}

const colorMap: Record<string, string> = {
  'brand-red': 'border-brand-red text-brand-red',
  'brand-blue': 'border-brand-blue text-brand-blue',
  'brand-green': 'border-brand-green text-brand-green',
  'brand-purple': 'border-brand-purple text-brand-purple',
  'brand-yellow': 'border-brand-yellow text-brand-text',
}

const certBg: Record<string, string> = {
  'brand-blue': 'bg-brand-blue',
  'brand-purple': 'bg-brand-purple',
  'brand-green': 'bg-brand-green',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="GRC Analyst, Security Researcher, and lifelong learner."
        accentColor="#E63946"
      />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        {/* Bio */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="border-2 border-brand-text shadow-neo-lg bg-brand-yellow w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
            <span className="text-8xl">👨‍💻</span>
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Hi, I&apos;m <span className="text-brand-red">{personalInfo.nickname}</span>
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-4">{personalInfo.bio}</p>
            <p className="font-body text-gray-600 leading-relaxed">
              With certifications in ISO 27001 Lead Auditor, ISO 27701 Lead Auditor, and a Certified Bug Bounty Masterclass from Wiz, I bridge the gap between governance frameworks and hands-on security testing — helping organizations both secure and comply.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`border-2 px-4 py-2 font-heading font-bold text-sm ${colorMap[skill.color] ?? 'border-brand-text text-brand-text'}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} variant="yellow">
                <div className={`w-10 h-10 ${certBg[cert.color] ?? 'bg-brand-blue'} border-2 border-brand-text mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-heading font-bold text-lg">{cert.name}</h3>
                <p className="font-body text-sm text-gray-600 mt-1">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
