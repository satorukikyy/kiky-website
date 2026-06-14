import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services — Rizky Aditya',
  description: 'VAPT and security compliance services offered by Rizky Aditya.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" subtitle="Professional security services tailored to your needs." />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-12">
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`border-2 border-brand-text shadow-neo p-8 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-bg'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: service.accentColor }} />
                <h2 className="text-3xl font-heading font-bold mb-4" style={{ color: service.accentColor }}>
                  {service.title}
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-gray-700">
                      <span
                        className="w-6 h-6 border-2 border-brand-text flex-shrink-0 flex items-center justify-center text-xs font-bold text-white mt-0.5"
                        style={{ backgroundColor: service.accentColor }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="border-2 border-brand-text bg-brand-yellow p-12 text-center shadow-neo">
          <h2 className="text-3xl font-heading font-bold mb-4">Interested in Working Together?</h2>
          <p className="font-body text-gray-700 mb-8 max-w-md mx-auto">
            Let&apos;s discuss your security needs and find the right solution for your organization.
          </p>
          <Button variant="primary" href="/contact">Get In Touch</Button>
        </div>
      </div>
    </>
  )
}
