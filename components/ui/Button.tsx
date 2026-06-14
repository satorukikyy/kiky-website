import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({ variant, href, onClick, children, className = '', type = 'button' }: ButtonProps) {
  const base = variant === 'primary' ? 'neo-btn-primary' : 'neo-btn-secondary'
  const cls = `${base} inline-block cursor-pointer ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
