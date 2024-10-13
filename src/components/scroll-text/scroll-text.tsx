import { ComponentProps } from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import style from './scroll-text.module.css'

interface ScrollTextProps extends ComponentProps<'div'> {
  direction: 'up' | 'down'
}

export function ScrollText({ direction, ...props }: ScrollTextProps) {
  return (
    <div className={style['scroll-text']} {...props}>
      {
        direction === 'up'
        ? <FaArrowUp className={style.icon} size={20} />
        : <FaArrowDown className={style.icon} size={20} />
      }
      
      <p className={style.p}>{direction === 'up' ? "I'm ready!" : "Teach me how to play"}</p>
    </div>
  )
}
