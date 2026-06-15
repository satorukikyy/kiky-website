type PageHeroProps = {
  tag?: string
  title: string
  subtitle?: string
}

export default function PageHero({ tag = '', title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-28 pb-10 px-5 max-w-[1120px] mx-auto">
      {tag && <p className="section-tag mb-4">{tag}</p>}
      <h1 className="text-[clamp(40px,5vw,64px)] font-heading font-black tracking-[-2px] leading-[1.05] text-brand-text mb-5">
        {title}
      </h1>
      {subtitle && (
        <p className="text-brand-muted text-base leading-relaxed max-w-lg">{subtitle}</p>
      )}
      <div className="mt-8 h-px bg-brand-border w-full" />
    </section>
  )
}
