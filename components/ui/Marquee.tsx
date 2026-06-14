'use client'

type MarqueeProps = {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y-2 border-brand-text bg-brand-yellow py-3 my-8">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="text-brand-text font-heading font-bold text-sm uppercase tracking-widest flex-shrink-0">
            {item} <span className="mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
