'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { personalInfo, certifications, skills } from '@/lib/data'

export default function AboutPreview() {
  return (
    <section className="px-5 max-w-[1120px] mx-auto mb-20">
      <div className="mb-7">
        <p className="section-tag mb-2">About Me</p>
        <h2 className="section-title">Who I am &amp; what I do.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3.5">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white border border-brand-border rounded-[20px] p-7"
        >
          <h3 className="font-heading font-black text-[22px] leading-[1.25] tracking-tight text-brand-text mb-3">
            GRC Analyst &amp; Security Researcher<br />based in Indonesia.
          </h3>
          <p className="text-brand-muted text-sm leading-[1.7] mb-5">{personalInfo.bio}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.map((s) => (
              <span
                key={s.name}
                className="bg-[#F0F4F1] text-brand-text/70 text-[11px] font-body font-medium px-2.5 py-1 rounded-md"
              >
                {s.name}
              </span>
            ))}
          </div>
          <Link href="/about" className="text-brand-green font-heading font-bold text-sm hover:opacity-80 transition-opacity">
            Read More →
          </Link>
        </motion.div>

        {/* Cert pills card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-brand-soft border border-brand-border-soft rounded-[20px] p-7"
        >
          <p className="section-tag mb-4">Certifications</p>
          <div className="flex flex-col gap-2.5">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2.5 border border-brand-border bg-white rounded-full px-4 py-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                <span className="font-body text-[13px] font-medium text-brand-text">{cert.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
