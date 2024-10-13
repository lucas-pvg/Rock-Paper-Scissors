import Rock from '../../assets/rock.svg?react'
import Paper from '../../assets/paper.svg?react'
import Scissors from '../../assets/scissors.svg?react'
import style from './objects.module.css'

interface ObjectsProps {
  type: 'rock' | 'paper' | 'scissors'
  size?: number
}

export function Objects({ type, size }: ObjectsProps) {
  switch (type) {
    case 'rock': return <Rock className={style.object} style={{ width: size || '80px', height: 'auto' }} />
    case 'paper': return <Paper className={style.object} style={{ width: size || '80px', height: 'auto' }} />
    case 'scissors': return <Scissors className={style.object} style={{ width: size || '80px', height: 'auto' }} />
  }
}
