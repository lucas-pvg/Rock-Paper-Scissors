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
      },
      disabled: {
        true: style.disabled,
        false: style.enabled
      }
    },
    defaultVariants: {
      variant: 'button',
      disabled: false
    }
  }
)

interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    variant?: 'button' | 'card'
    disabled: boolean
    className?: string
}

export function Button({ variant, disabled, className, ...props }: ButtonProps) {
  const classes = className 
  ? `${buttonVariants({ variant, disabled })} ${className}` 
  : buttonVariants({ variant, disabled })

  return (
    <button className={classes} disabled={disabled} {...props} />
  )
}
