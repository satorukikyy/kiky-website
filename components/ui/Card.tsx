import { ReactNode } from 'react'

type CardProps = {
  variant?: 'white' | 'yellow'
  children: ReactNode
  className?: string
}

export default function Card({ variant = 'white', children, className = '' }: CardProps) {
  const bg = variant === 'yellow' ? 'bg-brand-yellow' : 'bg-white'
  return (
    <div className={`neo-card ${bg} p-6 ${className}`}>
      {children}
    </div>
  )
}
