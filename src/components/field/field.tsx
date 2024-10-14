import { ComponentProps } from 'react'
import { Objects } from '../objects/objects'
import VS from '../../assets/VS.svg?react'
import style from './field.module.css'

interface FieldProps extends ComponentProps<'div'> {
  className?: string
}

export function Field({ className, ...props }: FieldProps) {
  const classes = className 
    ? `${style.grid} ${style.field} ${className}`
    : `${style.grid} ${style.field}`

  return (
    <div className={classes} {...props}>
      <Objects className={style.player} type='rock' size={120} />
      <div className={`${style.divider} ${style.top}`} />
      <VS className={style.vs} />
      <div className={`${style.divider} ${style.bottom}`} />
      <Objects className={style.robot} type='scissors' size={120} />
    </div>
  )
}
