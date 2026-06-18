import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { personalInfo } from '@/lib/data'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteTitle = `${personalInfo.name} — GRC Consultant · Penetration Tester · Security Engineer`
const siteDesc  = 'ISO 27001 · 27701 · 42001 Lead Auditor, Penetration Tester, and Security Engineer based in Indonesia.'

export const metadata: Metadata = {
  title: { default: siteTitle, template: `%s | ${personalInfo.name}` },
  description: siteDesc,
  keywords: ['GRC', 'ISO 27001', 'ISO 27701', 'ISO 42001', 'Penetration Testing', 'VAPT', 'SOC', 'Security Operations', 'Blue Team', 'Cybersecurity', 'Indonesia'],
  authors: [{ name: personalInfo.name }],
  robots: { index: true, follow: true },
  openGraph: { title: siteTitle, description: siteDesc, type: 'website', locale: 'en_US' },
}

export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
