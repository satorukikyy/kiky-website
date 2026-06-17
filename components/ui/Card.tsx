import { ReactNode } from 'react'

type CardVariant = 'default' | 'purple' | 'soft'

type CardProps = {
  children: ReactNode
  variant?: CardVariant
  className?: string
}

export default function Card({ children, variant = 'default', className = '' }: CardProps) {
  const base = 'rounded-[20px] p-7'
  const variants: Record<CardVariant, string> = {
    default: 'bg-white border border-c-border',
    purple:  'bg-c-purple border border-c-purple',
    soft:    'bg-c-purple-light border border-c-border',
  }

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
