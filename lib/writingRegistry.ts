import type { ComponentType } from 'react'

const registry: Record<string, () => Promise<{ default: ComponentType }>> = {
  'mengenal-dunia-cybersecurity':   () => import('@/content/writings/mengenal-dunia-cybersecurity.mdx')   as any,
  'pengalaman-soc-monitoring':      () => import('@/content/writings/pengalaman-soc-monitoring.mdx')      as any,
  'iso-27001-implementation-journey': () => import('@/content/writings/iso-27001-implementation-journey.mdx') as any,
}

export default registry
