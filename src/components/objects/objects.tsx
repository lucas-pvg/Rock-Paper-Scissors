import Rock from '../../assets/rock.svg?react'
import Paper from '../../assets/paper.svg?react'
import Scissors from '../../assets/scissors.svg?react'
import style from './objects.module.css'

interface ObjectsProps {
  type: 'rock' | 'paper' | 'scissors'
  size?: number
  className?: string
}

export function Objects({ type, size, className }: ObjectsProps) {
  const classes = className ? `${style.object} ${className}` : style.object

  switch (type) {
    case 'rock': return <Rock className={classes} style={{ width: size || '80px', height: 'auto' }} />
    case 'paper': return <Paper className={classes} style={{ width: size || '80px', height: 'auto' }} />
    case 'scissors': return <Scissors className={classes} style={{ width: size || '80px', height: 'auto' }} />
  }
}
