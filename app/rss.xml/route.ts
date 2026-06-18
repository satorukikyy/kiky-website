export const runtime = 'edge'

import { vaptClients, grcCategories, secEngCategories, personalInfo } from '@/lib/data'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://onerrorkx.pages.dev'

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function GET() {
  const allGRC     = grcCategories.flatMap(c => c.clients.map(cl => ({ ...cl, type: 'grc', category: c.shortLabel })))
  const allSecEng  = secEngCategories.flatMap(c => c.clients.map(cl => ({ ...cl, type: 'sec-eng', category: c.shortLabel })))
  const allVAPT    = vaptClients.map(cl => ({ ...cl, type: 'vapt', category: 'Penetration Testing' }))

  const items = [...allVAPT, ...allGRC, ...allSecEng]
    .sort((a, b) => b.year - a.year)
    .map((item) => `
    <item>
      <title>${escape(item.name)}</title>
      <description>${escape(item.category)} engagement — ${item.year}</description>
      <link>${BASE}/projects/${item.type}</link>
      <guid isPermaLink="false">${escape(item.name)}-${item.year}-${item.type}</guid>
      <category>${escape(item.type.toUpperCase())}</category>
      <pubDate>${new Date(item.year, 0, 1).toUTCString()}</pubDate>
    </item>`)
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(personalInfo.name)} — Security Engagements</title>
    <link>${BASE}</link>
    <description>GRC consulting, penetration testing, and security operations engagements by ${escape(personalInfo.name)}.</description>
    <language>en</language>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
