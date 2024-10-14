import { ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import style from './button.module.css'

const buttonVariants = cva(
  style.container,
  {
    variants: {
      variant: {
        button: style.button,
        card: style.card
      }
    },
    defaultVariants: {
      variant: 'button'
    }
  }
)

interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    variant?: 'button' | 'card'
    className?: string
}

export function Button({ variant, className, ...props }: ButtonProps) {
  const classes = className 
  ? `${buttonVariants({ variant })} ${className}` 
  : buttonVariants({ variant })

  return (
    <button className={classes} {...props} />
  )
}
