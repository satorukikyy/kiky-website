import PageHero from '@/components/ui/PageHero'
import { services } from '@/lib/data'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="pt-[60px]">
      <PageHero
        tag="Services"
        title="What I can do for you."
        subtitle="Professional security services for businesses that take information security seriously."
      />

      <div className="max-w-[1120px] mx-auto px-5 pb-20 space-y-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`rounded-[20px] p-8 border flex flex-col ${
                i === 1
                  ? 'bg-brand-green border-brand-green'
                  : 'bg-white border-brand-border'
              }`}
            >
              <p className={`text-[48px] font-heading font-black tracking-[-2px] leading-none mb-4 ${
                i === 1 ? 'text-white/15' : 'text-[#E8F0E9]'
              }`}>
                0{i + 1}
              </p>
              <p className={`section-tag mb-2 ${i === 1 ? 'text-white/60' : ''}`}>
                {service.id.toUpperCase()}
              </p>
              <h2 className={`font-heading font-black text-[22px] leading-[1.25] tracking-tight mb-3 ${
                i === 1 ? 'text-white' : 'text-brand-text'
              }`}>
                {service.title}
              </h2>
              <p className={`text-sm leading-[1.75] mb-6 ${i === 1 ? 'text-white/80' : 'text-brand-muted'}`}>
                {service.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                      i === 1 ? 'bg-white/20 text-white' : 'bg-brand-green text-white'
                    }`}>
                      ✓
                    </span>
                    <span className={`text-sm font-body ${i === 1 ? 'text-white/90' : 'text-brand-text'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-auto inline-block text-center font-heading font-bold text-sm px-6 py-3 rounded-[10px] transition-opacity hover:opacity-90 ${
                  i === 1
                    ? 'bg-white text-brand-green'
                    : 'bg-brand-green text-white'
                }`}
              >
                Get a Quote →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-brand-soft border border-brand-border-soft rounded-[24px] px-10 py-12 text-center">
          <p className="section-tag mb-3">Ready to Start?</p>
          <h3 className="font-heading font-black text-[28px] tracking-tight text-brand-text mb-3">
            Let&apos;s discuss your security needs.
          </h3>
          <p className="text-brand-muted text-sm max-w-md mx-auto mb-6">
            Reach out via WhatsApp or email and I&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-brand-green text-white font-heading font-bold text-sm px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity inline-block"
          >
            Contact Me →
          </Link>
        </div>

      </div>
    </div>
  )
}
