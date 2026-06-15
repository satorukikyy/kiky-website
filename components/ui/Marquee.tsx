type MarqueeProps = {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className="bg-brand-green overflow-hidden py-3.5 my-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center">
            <span className="font-heading font-extrabold text-[11px] text-white uppercase tracking-[2.5px] px-7">
              {item}
            </span>
            <span className="text-white/35 text-[10px] pr-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
