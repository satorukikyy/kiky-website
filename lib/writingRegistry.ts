import type { ComponentType } from 'react'

const registry: Record<string, () => Promise<{ default: ComponentType }>> = {
  'the-computer-that-changed-everything': () => import('@/content/writings/the-computer-that-changed-everything.mdx') as any,
  'more-than-just-games':                 () => import('@/content/writings/more-than-just-games.mdx')                 as any,
}

export default registry
