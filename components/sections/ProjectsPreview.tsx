'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { vaptProjects, grcProjects } from '@/lib/data'
import type { Project } from '@/lib/data'

const previewProjects = [
  ...vaptProjects.slice(0, 2),
  ...grcProjects.slice(0, 2),
]

const tagColorMap: Record<string, 'red' | 'blue' | 'green' | 'yellow' | 'purple'> = {
  'Web App': 'red',
  'Android': 'red',
  'iOS': 'red',
  'ISO 27001': 'blue',
  'ISO 27701': 'purple',
  'Gap Analysis': 'blue',
  'ISMS': 'blue',
  'PIMS': 'purple',
  'API Security': 'green',
  'Mobile Security': 'red',
  'Privacy': 'purple',
  'OWASP Top 10': 'red',
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="font-heading font-bold text-sm text-gray-500">{project.year}</span>
        <span className={`text-xs font-heading font-bold uppercase px-2 py-1 border-2 ${
          project.status === 'completed' ? 'border-brand-green text-brand-green' : 'border-brand-yellow text-brand-text'
        }`}>
          {project.status}
        </span>
      </div>
      <h3 className="font-heading font-bold text-lg mb-2">{project.client}</h3>
      <p className="font-body text-sm text-gray-600 mb-4">{project.scope}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} color={tagColorMap[tag] ?? 'blue'} />
        ))}
      </div>
    </Card>
  )
}

export default function ProjectsPreview() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-red mb-3">Portfolio</p>
          <h2 className="text-4xl font-heading font-bold">Recent Projects</h2>
        </div>
        <Link href="/projects" className="font-heading font-bold text-sm uppercase tracking-wide text-brand-red hover:underline hidden md:block">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Link href="/projects" className="font-heading font-bold text-sm uppercase text-brand-red hover:underline">
          View All Projects →
        </Link>
      </div>
    </section>
  )
}
