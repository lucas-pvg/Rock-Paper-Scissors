import { ComponentProps } from 'react'
import { Objects } from '../objects/objects'
import VS from '../../assets/VS.svg?react'

import style from './field.module.css'

interface FieldProps extends ComponentProps<'div'> {}

export function Field({ ...props }: FieldProps) { 
  return (
    <div className={`${style.grid} ${style.field}`} {...props}>
      <Objects className={style.player} type='rock' size={180} />
      <div className={`${style.divider} ${style.top}`} />
      <VS className={style.vs} />
      <div className={`${style.divider} ${style.bottom}`} />
      <Objects className={style.robot} type='scissors' size={180} />
    </div>
  )
}
