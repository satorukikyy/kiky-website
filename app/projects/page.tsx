import type { Metadata } from 'next'
import { vaptClients, grcCategories } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'GRC and VAPT security engagements across technology, finance, and critical infrastructure.',
}

const allGRCClients = grcCategories.flatMap(c => c.clients)

export default function ProjectsPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">

      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-12">
        Projects.
      </h1>

      {/* VAPT */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <p className="font-mono text-[13px] text-c-subtle">// vapt</p>
          <Link href="/projects/vapt" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-2">
          {vaptClients.map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
              <span className="font-body text-[14px] text-c-text">{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GRC */}
      <section className="border-t border-c-border pt-16">
        <div className="flex items-baseline justify-between mb-6">
          <p className="font-mono text-[13px] text-c-subtle">// grc</p>
          <Link href="/projects/grc" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-6">
          {grcCategories.map((cat) => (
            <div key={cat.id}>
              <p className="font-mono text-[12px] text-c-muted mb-3">{cat.shortLabel}</p>
              <div className="space-y-2 pl-0">
                {cat.clients.map((client) => (
                  <div key={client.name} className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] text-c-subtle w-12 flex-shrink-0">{client.year}</span>
                    <span className="font-body text-[14px] text-c-text">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
