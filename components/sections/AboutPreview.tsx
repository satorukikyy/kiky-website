'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { personalInfo, skills } from '@/lib/data'

const colorMap: Record<string, string> = {
  'brand-red': 'border-brand-red text-brand-red',
  'brand-blue': 'border-brand-blue text-brand-blue',
  'brand-green': 'border-brand-green text-brand-green',
  'brand-purple': 'border-brand-purple text-brand-purple',
  'brand-yellow': 'border-brand-yellow text-brand-text',
}

export default function AboutPreview() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading font-bold text-sm uppercase tracking-widest text-brand-red mb-3">About Me</p>
          <h2 className="text-4xl font-heading font-bold mb-6">Who I Am</h2>
          <p className="font-body text-gray-600 leading-relaxed mb-8">{personalInfo.bio}</p>
          <Button variant="primary" href="/about">Read More →</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-heading font-bold mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`border-2 px-3 py-1 font-heading font-bold text-sm ${colorMap[skill.color] ?? 'border-brand-text text-brand-text'}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
