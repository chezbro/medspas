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
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap relative overflow-hidden group'
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-500 focus-visible:outline-secondary-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600 hover:border-primary-500 hover:text-primary-700 hover:shadow-md',
    }
    
    const sizes = {
      sm: 'px-3 py-2 text-xs sm:px-4 sm:text-sm',
      md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base',
      lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
    }
    
    const classes = twMerge(baseStyles, variants[variant], sizes[size], className)
    
    // Enhanced button with shimmer effect
    const ButtonContent = (
      <>
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        {variant === 'secondary' && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary-500 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </>
    )
    
    if (href) {
      return (
        <Link href={href} className={classes}>
          {ButtonContent}
        </Link>
      )
    }
    
    return (
      <button ref={ref} className={classes} {...props}>
        {ButtonContent}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
