type BadgeProps = {
  label: string
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'purple'
}

const colorMap = {
  red: 'border-brand-red text-brand-red bg-red-50',
  yellow: 'border-brand-yellow text-brand-text bg-yellow-50',
  blue: 'border-brand-blue text-brand-blue bg-blue-50',
  green: 'border-brand-green text-brand-green bg-green-50',
  purple: 'border-brand-purple text-brand-purple bg-purple-50',
}

export default function Badge({ label, color = 'blue' }: BadgeProps) {
  return (
    <span className={`inline-block border-2 px-3 py-1 text-xs font-heading font-bold rounded-none ${colorMap[color]}`}>
      {label}
    </span>
  )
}
