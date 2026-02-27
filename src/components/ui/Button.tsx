import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'default' | 'large'
  children: ReactNode
  href?: string
}

export function Button({ variant = 'primary', size = 'default', children, href, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer'

  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-primary-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-text-inverse',
  }

  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
