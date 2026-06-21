import HeroSection from '@/components/sections/HeroSection'
import Link from 'next/link'
import { personalInfo, services, vaptClients, grcCategories, secEngCategories } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'
import CountUp from '@/components/ui/CountUp'
import ParticleNetwork from '@/components/ui/ParticleNetwork'

const allGRCClients = grcCategories.flatMap(c => c.clients)
const allSecEngClients = secEngCategories.flatMap(c => c.clients)

export default function HomePage() {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      <ParticleNetwork />
      <HeroSection />

      {/* About */}
      <FadeIn>
        <section className="border-t border-c-border pt-16 mt-0 pb-16">
          <p className="font-mono text-[13px] text-c-subtle mb-6">// about</p>
          <div className="flex gap-10 mb-8">
            <div>
              <p className="font-body font-bold text-[30px] text-c-text leading-none tracking-tight">
                <CountUp target={24} suffix="+" />
              </p>
              <p className="font-mono text-[11px] text-c-subtle mt-1">engagements</p>
            </div>
            <div>
              <p className="font-body font-bold text-[30px] text-c-text leading-none tracking-tight">
                <CountUp target={3} />
              </p>
              <p className="font-mono text-[11px] text-c-subtle mt-1">iso lead auditor</p>
            </div>
            <div>
              <p className="font-body font-bold text-[30px] text-c-text leading-none tracking-tight">
                <CountUp target={2} suffix="+" />
              </p>
              <p className="font-mono text-[11px] text-c-subtle mt-1">years active</p>
            </div>
          </div>
          <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-4">
            {personalInfo.bio}
          </p>
          <Link href="/about" className="font-mono text-[13px] text-c-purple hover:text-c-purple-hover transition-colors">
            More about me →
          </Link>
        </section>
      </FadeIn>

      {/* Services */}
      <FadeIn delay={0.05}>
        <section className="border-t border-c-border pt-16 pb-16">
          <p className="font-mono text-[13px] text-c-subtle mb-6">// services</p>
          <StaggerContainer>
            <ol className="space-y-3">
              {services.map((s, i) => (
                <StaggerItem key={s.id}>
                  <li className="flex items-start gap-4">
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
                </StaggerItem>
              ))}
            </ol>
          </StaggerContainer>
        </section>
      </FadeIn>

      {/* Projects */}
      <FadeIn delay={0.05}>
        <section className="border-t border-c-border pt-16 pb-16">
          <div className="flex items-baseline justify-between mb-6">
            <p className="font-mono text-[13px] text-c-subtle">// projects</p>
            <Link href="/projects" className="font-mono text-[12px] text-c-purple hover:text-c-purple-hover transition-colors">
              view all →
            </Link>
          </div>
          <StaggerContainer className="space-y-2">
            {vaptClients.slice(0, 4).map((client) => (
              <StaggerItem key={client.name}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">vapt</span>
                  <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
                  <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
                </div>
              </StaggerItem>
            ))}
            {allGRCClients.slice(0, 3).map((client) => (
              <StaggerItem key={client.name}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">grc</span>
                  <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
                  <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
                </div>
              </StaggerItem>
            ))}
            {allSecEngClients.slice(0, 2).map((client) => (
              <StaggerItem key={client.name}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-c-purple w-10 flex-shrink-0">sec</span>
                  <span className="font-body text-[14px] text-c-text flex-1">{client.name}</span>
                  <span className="font-mono text-[12px] text-c-subtle">{client.year}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>
    </div>
  )
}
