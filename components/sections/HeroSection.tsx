'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/lib/data'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block border-2 border-brand-text bg-brand-yellow px-4 py-1 mb-6 font-heading font-bold text-sm uppercase tracking-widest">
              Available for Work
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="text-brand-red">{personalInfo.nickname}</span>
            </h1>
            <p className="text-xl md:text-2xl font-heading font-bold text-gray-600 mb-6">
              {personalInfo.title}
            </p>
            <p className="text-base font-body text-gray-600 mb-8 max-w-md leading-relaxed">
              {personalInfo.shortBio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/projects">View My Work</Button>
              <Button variant="secondary" href="/contact">Contact Me</Button>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 border-2 border-brand-text shadow-neo-lg bg-brand-yellow">
              {/* Replace with actual avatar image when provided */}
              <div className="w-full h-full flex items-center justify-center bg-brand-yellow">
                <span className="text-6xl">👨‍💻</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-red border-2 border-brand-text" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-brand-blue border-2 border-brand-text" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
