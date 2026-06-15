type BadgeProps = {
  label: string
  variant?: 'default' | 'green'
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const base = 'inline-block text-[11px] font-body font-medium px-2.5 py-1 rounded-md'
  const variants = {
    default: 'bg-[#F0F4F1] text-[#4B5563]',
    green:   'bg-brand-green-light border border-brand-green-border text-brand-green-dark',
  }

  return <span className={`${base} ${variants[variant]}`}>{label}</span>
}
