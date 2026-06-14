import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { vaptProjects } from '@/lib/data'
import type { Project } from '@/lib/data'

export const metadata: Metadata = {
  title: 'VAPT Projects — Rizky Aditya',
  description: 'Web and mobile penetration testing project portfolio.',
}

const tagColorMap: Record<string, 'red' | 'blue' | 'green' | 'yellow' | 'purple'> = {
  'Web App': 'red', 'Android': 'red', 'iOS': 'red', 'OWASP Top 10': 'red',
  'API Security': 'green', 'Mobile Security': 'red',
}

export default function VaptProjectsPage() {
  return (
    <>
      <PageHero title="VAPT Projects" subtitle="Web and mobile application penetration testing engagements." accentColor="#E63946" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <Link href="/projects" className="font-heading font-bold text-sm text-brand-red hover:underline">← Back to Projects</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaptProjects.map((project: Project) => (
            <Card key={project.id}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-heading font-bold text-sm text-gray-500">{project.year}</span>
                <span className={`text-xs font-heading font-bold uppercase px-2 py-1 border-2 ${project.status === 'completed' ? 'border-brand-green text-brand-green' : 'border-brand-yellow text-brand-text'}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{project.client}</h3>
              <p className="font-body text-sm text-gray-600 mb-4">{project.scope}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} label={tag} color={tagColorMap[tag] ?? 'red'} />
                ))}
              </div>
            </Card>
          ))}

          {/* More coming soon */}
          <div className="border-2 border-dashed border-brand-text p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <span className="text-4xl mb-3">🔒</span>
            <p className="font-heading font-bold text-gray-500">More projects coming soon</p>
          </div>
        </div>
      </div>
    </>
  )
}
