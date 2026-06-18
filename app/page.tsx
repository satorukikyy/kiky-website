import HeroSection from '@/components/sections/HeroSection'
import Link from 'next/link'
import { personalInfo, services, vaptClients, grcCategories, secEngCategories } from '@/lib/data'

const allGRCClients = grcCategories.flatMap(c => c.clients)
const allSecEngClients = secEngCategories.flatMap(c => c.clients)

export default function HomePage() {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      <HeroSection />

      {/* About */}
      <section className="border-t border-c-border pt-16 mt-0 pb-16">
        <p className="font-mono text-[13px] text-c-subtle mb-6">// about</p>
        <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-4">
          {personalInfo.bio}
        </p>
        <Link href="/about" className="font-mono text-[13px] text-c-purple hover:text-c-purple-hover transition-colors">
          More about me →
        </Link>
      </section>

      {/* Services */}
      <section className="border-t border-c-border pt-16 pb-16">
        <p className="font-mono text-[13px] text-c-subtle mb-6">// services</p>
        <ol className="space-y-3">
          {services.map((s, i) => (
            <li key={s.id} className="flex items-start gap-4">
              <span className="font-mono text-[13px] text-c-subtle w-6 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Link
                href="/services"
                className="font-body text-[15px] text-c-text hover:text-c-purple transition-colors"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Projects */}
      <section className="border-t border-c-border pt-16 pb-16">
        <div className="flex items-baseline justify-between mb-6">
          <p className="font-mono text-[13px] text-c-subtle">// projects</p>
          <Link href="/projects" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-2">
          {vaptClients.slice(0, 4).map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">vapt</span>
              <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
              <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
            </div>
          ))}
          {allGRCClients.slice(0, 3).map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">grc</span>
              <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
              <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
            </div>
          ))}
          {allSecEngClients.slice(0, 2).map((client) => (
            <div key={client.name} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">sec</span>
              <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
              <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
