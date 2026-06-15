import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="bg-brand-green rounded-[24px] px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-heading font-black text-[clamp(26px,3.5vw,36px)] text-white leading-[1.15] tracking-tight max-w-md">
          Let&apos;s work together on your next security project.
        </h2>
        <Link
          href="/contact"
          className="bg-white text-brand-green font-heading font-bold text-sm px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          Get In Touch →
        </Link>
      </div>
    </section>
  )
}
