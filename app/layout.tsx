import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { personalInfo } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteTitle = `${personalInfo.name} — GRC Consultant & Penetration Tester`
const siteDesc  = 'ISO 27001 · 27701 · 42001 Lead Auditor and Penetration Tester based in Indonesia.'

export const metadata: Metadata = {
  title: { default: siteTitle, template: `%s | ${personalInfo.name}` },
  description: siteDesc,
  keywords: ['GRC', 'ISO 27001', 'ISO 27701', 'Penetration Testing', 'VAPT', 'Cybersecurity', 'Indonesia'],
  authors: [{ name: personalInfo.name }],
  robots: { index: true, follow: true },
  openGraph: { title: siteTitle, description: siteDesc, type: 'website', locale: 'en_US' },
}

export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
