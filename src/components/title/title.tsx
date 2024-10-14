import { ComponentProps } from 'react'
import style from './title.module.css'

interface titleProps extends ComponentProps<'div'> {
  className?: string
}

export function Title({ className, ...props }: titleProps) {  
  const classes = className ? `${style.title} ${className}` : style.title

  return (
    <div className={classes} {...props}>
      <h1 className={style.h1}>Rock, Paper, Scissors!</h1>
      <p className={style.p}>A new way of playing an old game</p>
    </div>
  )
}
