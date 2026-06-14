'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/lib/data'

const bgColorMap: Record<string, string> = {
  'brand-blue': 'bg-brand-blue',
  'brand-purple': 'bg-brand-purple',
  'brand-green': 'bg-brand-green',
}

export default function CertificationsStrip() {
  return (
    <section className="px-6 py-16 bg-brand-yellow border-y-2 border-brand-text">
      <div className="max-w-6xl mx-auto">
        <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-text mb-3">Credentials</p>
        <h2 className="text-4xl font-heading font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-2 border-brand-text bg-white p-6 shadow-neo"
            >
              <div className={`w-10 h-10 ${bgColorMap[cert.color] ?? 'bg-brand-blue'} border-2 border-brand-text mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{cert.name}</h3>
              <p className="font-body text-sm text-gray-500">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
