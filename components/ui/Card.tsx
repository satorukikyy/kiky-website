import { ReactNode } from 'react'

type CardVariant = 'default' | 'green' | 'soft'

type CardProps = {
  children: ReactNode
  variant?: CardVariant
  className?: string
}

export default function Card({ children, variant = 'default', className = '' }: CardProps) {
  const base = 'rounded-[20px] p-7'
  const variants: Record<CardVariant, string> = {
    default: 'bg-white border border-brand-border',
    green:   'bg-brand-green border border-brand-green',
    soft:    'bg-brand-soft border border-brand-border-soft',
  }

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
