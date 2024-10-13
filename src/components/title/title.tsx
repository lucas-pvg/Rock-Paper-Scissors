import { ComponentProps } from 'react'
import style from './title.module.css'

interface titleProps extends ComponentProps<'div'> {}

export function Title({ ...props }: titleProps) {   
  return (
    <div className={style.title} {...props}>
      <h1 className={style.h1}>Rock, Paper, Scissors!</h1>
      <p className={style.p}>A new way of playing an old game</p>
    </div>
  )
}
