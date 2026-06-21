import Link from 'next/link'
import { personalInfo } from '@/lib/data'
import ScrambleText from '@/components/ui/ScrambleText'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16">
      <h1 className="font-body font-bold text-[42px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-c-text mb-4">
        <ScrambleText text={personalInfo.name} delay={200} duration={1100} />
      </h1>

      <p className="font-body text-[16px] text-c-muted mb-1">
        {personalInfo.title}
        <span className="scramble-cursor ml-0.5">|</span>
      </p>
      <p className="font-mono text-[13px] text-c-subtle mb-8">
        Whitesec ID · South Jakarta, Indonesia
      </p>

      <p className="font-body text-[15px] text-c-muted leading-[1.75] max-w-[560px] mb-8">
        i build security programs that hold up — on paper and when someone&apos;s actually trying.
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px]">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-c-purple hover:text-c-purple-hover transition-colors"
        >
          {personalInfo.email}
        </a>
        <span className="text-c-border">·</span>
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-muted hover:text-c-text transition-colors"
        >
          GitHub
        </a>
        <span className="text-c-border">·</span>
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-muted hover:text-c-text transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-c-border">·</span>
        <a
          href={`https://wa.me/${personalInfo.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-muted hover:text-c-text transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
