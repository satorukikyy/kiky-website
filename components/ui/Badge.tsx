type BadgeProps = {
  label: string
  variant?: 'default' | 'green'
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const base = 'inline-block text-[11px] font-body font-medium px-2.5 py-1 rounded-md'
  const variants: Record<'default' | 'green', string> = {
    default: 'bg-[#F3F0FF] text-c-text/70',
    green:   'bg-c-purple-light border border-c-purple text-c-purple',
  }

  return <span className={`${base} ${variants[variant]}`}>{label}</span>
}
