export const runtime = 'edge'

import type { MetadataRoute } from 'next'
import { writings } from '@/lib/data'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://onerrorkx.pages.dev'

const routes = [
  { path: '',              priority: 1.0,  freq: 'monthly'  },
  { path: '/about',        priority: 0.9,  freq: 'monthly'  },
  { path: '/background',   priority: 0.8,  freq: 'monthly'  },
  { path: '/projects',     priority: 0.9,  freq: 'weekly'   },
  { path: '/projects/vapt', priority: 0.8, freq: 'weekly'   },
  { path: '/projects/grc',  priority: 0.8, freq: 'weekly'   },
  { path: '/projects/sec-eng', priority: 0.8, freq: 'weekly' },
  { path: '/writings',     priority: 0.8,  freq: 'weekly'   },
  { path: '/services',     priority: 0.8,  freq: 'monthly'  },
  { path: '/contact',      priority: 0.7,  freq: 'yearly'   },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }))

  const writingRoutes = writings
    .filter(p => !p.draft)
    .map(p => ({
      url: `${BASE}/writings/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...writingRoutes]
}
