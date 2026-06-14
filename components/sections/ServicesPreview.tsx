'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/data'

export default function ServicesPreview() {
  return (
    <section className="px-6 py-16 bg-brand-text text-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-yellow mb-3">What I Do</p>
        <h2 className="text-4xl font-heading font-bold mb-12 text-white">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border-2 border-white p-6 hover:bg-white hover:text-brand-text transition-colors group"
            >
              <div className="w-8 h-1 mb-4" style={{ backgroundColor: service.accentColor }} />
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-brand-text">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="font-body text-sm text-gray-300 group-hover:text-gray-600 flex items-center gap-2">
                    <span style={{ color: service.accentColor }}>▸</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="font-heading font-bold text-sm uppercase tracking-wide text-brand-yellow group-hover:text-brand-red hover:underline">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
