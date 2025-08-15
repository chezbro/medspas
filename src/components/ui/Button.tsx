import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-500 focus-visible:outline-secondary-600',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600',
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    }
    
    const classes = twMerge(baseStyles, variants[variant], sizes[size], className)
    
    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }
    
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
