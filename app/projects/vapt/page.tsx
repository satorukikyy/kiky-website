import PageHero from '@/components/ui/PageHero'
import { vaptProjects } from '@/lib/data'

export default function VAPTPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="VAPT"
        title="Penetration Testing Projects."
        subtitle="Web and mobile application security assessments delivered with full findings reports."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vaptProjects.map((project) => (
            <div key={project.id} className="bg-white border border-brand-border rounded-[20px] p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
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
              <h2 className="font-heading font-black text-[20px] text-brand-text tracking-tight leading-[1.25] mb-2">
                {project.scope}
              </h2>
              <p className="text-brand-muted text-sm mb-5">{project.client}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#F0F4F1] text-brand-text/70 text-[11px] font-body font-medium px-2.5 py-1 rounded-md">
                    {tag}
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
