import { ComponentProps } from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import style from './scroll-text.module.css'

interface ScrollTextProps extends ComponentProps<'div'> {
  direction: 'up' | 'down'
  className?: string
}

export function ScrollText({ direction, className, ...props }: ScrollTextProps) {
  const classes = className ? `${style['scroll-text']} ${className}` : style['scroll-text']

  return (
    <div className={classes} {...props}>
      {
        direction === 'up'
        ? <FaArrowUp className={style.icon} size={20} />
        : <FaArrowDown className={style.icon} size={20} />
      }
      
      <p className={style.p}>{direction === 'up' ? "I'm ready!" : "Teach me how to play"}</p>
    </div>
  )
}
