import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CursorGlow from '@/components/ui/CursorGlow'
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
  alternates: {
    types: { 'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://onerrorkx.pages.dev'}/rss.xml` },
  },
}

export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <meta name="google-site-verification" content="1fdaEy6NrpYoRX6trGc1HBc96cNqE3XYvenerhSibpI" />
      </head>
      <body>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
