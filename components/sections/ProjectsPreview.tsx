'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { vaptProjects, grcProjects } from '@/lib/data'

const previewProjects = [
  ...vaptProjects.slice(0, 2),
  ...grcProjects.slice(0, 2),
]

const totalProjects = vaptProjects.length + grcProjects.length

export default function ProjectsPreview() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="mb-7">
        <p className="section-tag mb-2">Projects</p>
        <h2 className="section-title">Recent engagements.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3.5">
        {/* Count card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7 flex flex-col"
        >
          <p className="section-tag mb-2">Total</p>
          <p className="text-[72px] font-heading font-black tracking-[-4px] leading-none text-brand-text my-3">
            {totalProjects}+
          </p>
          <p className="text-brand-muted text-sm leading-relaxed">
            Security engagements across various industries.
          </p>
          <Link
            href="/projects"
            className="mt-auto pt-5 text-brand-green font-heading font-bold text-[13px] hover:opacity-80 transition-opacity"
          >
            View All Projects →
          </Link>
        </motion.div>

        {/* 2x2 project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {previewProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-brand-border rounded-[20px] p-6 flex flex-col"
            >
              <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full mb-3 self-start">
                {project.scope.includes('GRC') || project.scope.includes('ISO') ? 'GRC' : 'VAPT'} · {project.year}
              </span>
              <h3 className="font-heading font-black text-[16px] text-brand-text tracking-tight leading-[1.3] mb-2">
                {project.scope}
              </h3>
              <p className="text-brand-muted text-[13px] leading-relaxed mb-4">{project.client}</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#F0F4F1] text-brand-text/70 text-[10px] font-body font-medium px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
