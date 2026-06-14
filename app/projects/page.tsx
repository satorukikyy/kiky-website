import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Projects — Rizky Aditya',
  description: 'VAPT and GRC projects by Rizky Aditya.',
}

const categories = [
  {
    id: 'vapt',
    title: 'VAPT Projects',
    description: 'Web and mobile application penetration testing engagements.',
    href: '/projects/vapt',
    accentColor: '#E63946',
    icon: '🔍',
  },
  {
    id: 'grc',
    title: 'GRC Projects',
    description: 'ISO 27001/27701 implementation, gap analysis, and internal audit engagements.',
    href: '/projects/grc',
    accentColor: '#118AB2',
    icon: '📋',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projects" subtitle="Client engagements across offensive security and governance." />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.href} className="group block">
              <div className="border-2 border-brand-text shadow-neo p-8 bg-white transition-all duration-150 hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px]">
                <div
                  className="w-16 h-16 border-2 border-brand-text mb-6 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: cat.accentColor }}
                >
                  {cat.icon}
                </div>
                <h2 className="font-heading font-bold text-2xl mb-3" style={{ color: cat.accentColor }}>
                  {cat.title}
                </h2>
                <p className="font-body text-gray-600 mb-6">{cat.description}</p>
                <span className="font-heading font-bold text-sm uppercase tracking-wide" style={{ color: cat.accentColor }}>
                  View Projects →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
