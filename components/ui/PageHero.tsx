type PageHeroProps = {
  title: string
  subtitle?: string
  accentColor?: string
}

export default function PageHero({ title, subtitle, accentColor = '#E63946' }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
      <div className="inline-block mb-4">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-text leading-tight">
          {title.split(' ').map((word, i) => (
            <span key={i}>
              {i === 0 ? word : (
                <span style={{ color: accentColor }}> {word}</span>
              )}
            </span>
          ))}
        </h1>
      </div>
      {subtitle && (
        <p className="text-lg text-gray-600 font-body max-w-xl mt-4">{subtitle}</p>
      )}
      <div className="w-24 h-1 mt-6" style={{ backgroundColor: accentColor }} />
    </section>
  )
}
