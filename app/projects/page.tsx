import PageHero from '@/components/ui/PageHero'
import { vaptProjects, grcProjects } from '@/lib/data'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Projects"
        title="Security engagements."
        subtitle="A selection of VAPT and GRC projects delivered for clients across various industries."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20 space-y-16">

        {/* VAPT */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="section-tag mb-1">VAPT</p>
              <h2 className="section-title">Penetration Testing Projects</h2>
            </div>
            <Link href="/projects/vapt" className="text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {vaptProjects.map((project) => (
              <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                    VAPT · {project.year}
                  </span>
                  <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-[#F0F4F1] text-brand-text/70'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                </div>
                <h3 className="font-heading font-black text-[17px] text-brand-text tracking-tight leading-[1.3] mb-2">
                  {project.scope}
                </h3>
                <p className="text-brand-muted text-sm mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#F0F4F1] text-brand-text/70 text-[10px] font-body font-medium px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GRC */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="section-tag mb-1">GRC</p>
              <h2 className="section-title">Compliance &amp; Governance Projects</h2>
            </div>
            <Link href="/projects/grc" className="text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {grcProjects.map((project) => (
              <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-block bg-brand-green-light border border-brand-green-border text-brand-green-dark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                    GRC · {project.year}
                  </span>
                  <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-[#F0F4F1] text-brand-text/70'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                </div>
                <h3 className="font-heading font-black text-[17px] text-brand-text tracking-tight leading-[1.3] mb-2">
                  {project.scope}
                </h3>
                <p className="text-brand-muted text-sm mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#F0F4F1] text-brand-text/70 text-[10px] font-body font-medium px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
