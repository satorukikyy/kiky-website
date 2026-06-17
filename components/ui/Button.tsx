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

export default function Button({
  variant,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'bg-c-purple text-white font-body font-bold text-sm px-7 py-3 rounded-[10px] inline-block transition-opacity hover:opacity-90 active:scale-[0.98]'
      : 'bg-white border border-c-border text-c-text font-body font-semibold text-sm px-7 py-3 rounded-[10px] inline-block transition-colors hover:bg-c-purple-light active:scale-[0.98]'

  const cls = `${base} cursor-pointer ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
