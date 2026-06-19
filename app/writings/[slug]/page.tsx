import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { writings } from '@/lib/data'
import registry from '@/lib/writingRegistry'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return writings.filter(p => !p.draft).map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = writings.find(p => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

export default async function WritingPost({ params }: Props) {
  const { slug } = await params
  const post = writings.find(p => p.slug === slug && !p.draft)
  if (!post) notFound()

  const loader = registry[slug]
  if (!loader) notFound()
  const { default: Content } = await loader()

  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <Link
        href="/writings"
        className="font-mono text-[13px] text-c-subtle hover:text-c-purple transition-colors mb-12 inline-block"
      >
        ← writings
      </Link>

      <div className="mb-10">
        <h1 className="font-body font-bold text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.5px] text-c-text mb-5">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-[13px] text-c-subtle">{formatDate(post.date)}</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="font-mono text-[11px] text-c-subtle border border-c-border px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-c-border mb-10" />

      <div className="prose-writings">
        <Content />
      </div>
    </div>
  )
}
