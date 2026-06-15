'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/data'

export default function ServicesPreview() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="mb-7">
        <p className="section-tag mb-2">Services</p>
        <h2 className="section-title">What I can do for you.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className={`rounded-[20px] p-7 border flex flex-col ${
              i === 1
                ? 'bg-brand-green border-brand-green'
                : 'bg-white border-brand-border'
            }`}
          >
            <p className={`text-[40px] font-heading font-black tracking-[-2px] leading-none mb-3 ${
              i === 1 ? 'text-white/15' : 'text-[#E8F0E9]'
            }`}>
              0{i + 1}
            </p>
            <p className={`section-tag mb-2 ${i === 1 ? 'text-white/60' : ''}`}>
              {service.id.toUpperCase()}
            </p>
            <h3 className={`font-heading font-black text-[18px] leading-[1.3] tracking-tight mb-2 ${
              i === 1 ? 'text-white' : 'text-brand-text'
            }`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-[1.7] mb-5 ${i === 1 ? 'text-white/80' : 'text-brand-muted'}`}>
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {service.items.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-body font-medium px-2.5 py-1 rounded-md ${
                    i === 1
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F0F4F1] text-brand-text/70'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/services"
              className={`mt-5 text-[13px] font-heading font-bold hover:opacity-80 transition-opacity ${
                i === 1 ? 'text-white' : 'text-brand-green'
              }`}
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
