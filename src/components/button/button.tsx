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
}

export function Button({ variant, ...props }: ButtonProps) { 
  return (
    <button className={buttonVariants({ variant })} {...props} />
  )
}
