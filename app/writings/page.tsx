import type { Metadata } from 'next'
import Link from 'next/link'
import { writings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Writings',
  description: 'Notes and articles on GRC, penetration testing, security operations, and the craft of building security programs.',
}

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

export default function WritingsPage() {
  const published = writings.filter(p => !p.draft)
  const byYear = published.reduce<Record<number, typeof published>>((acc, post) => {
    const year = new Date(post.date).getFullYear()
    acc[year] = acc[year] ? [...acc[year], post] : [post]
    return acc
  }, {})
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a)

  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-24">
      <h1 className="font-body font-bold text-[36px] md:text-[44px] leading-[1.1] tracking-[-1px] text-c-text mb-4">
        // writings
      </h1>
      <p className="font-body text-[15px] text-c-muted leading-[1.75] mb-16 max-w-[520px]">
        Notes on security programs, compliance frameworks, and lessons from the field.
      </p>

      {years.length === 0 ? (
        <p className="font-mono text-[13px] text-c-subtle">No writings yet.</p>
      ) : (
        <div className="space-y-14">
          {years.map((year) => (
            <div key={year}>
              <p className="font-mono text-[12px] text-c-subtle mb-6">{year}</p>
              <div className="space-y-8">
                {byYear[year].map((post) => (
                  <article key={post.slug}>
                    <Link href={`/writings/${post.slug}`} className="group block">
                      <h2 className="font-body font-semibold text-[17px] text-c-text group-hover:text-c-purple transition-colors mb-2 leading-snug">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="font-body text-[14px] text-c-muted leading-[1.7] mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[12px] text-c-subtle">{formatDate(post.date)}</span>
                      <div className="flex gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="font-mono text-[11px] text-c-subtle border border-c-border px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
