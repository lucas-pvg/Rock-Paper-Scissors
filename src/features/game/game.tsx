import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setPlayer, playRobot, determineWinner, reset } from './gameSlice'
import { GameState } from './gameSlice'

import { Field } from '../../components/field/field'
import { Button } from '../../components/button/button'
import { Objects } from '../../components/objects/objects'
import styles from './game.module.css'

export function Game() {
  const { phase, player, robot } = useAppSelector(state => state.game)
  const disabled = phase === 'waiting' ? false : true
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(phase === 'waiting') {
      dispatch(reset())
    }

    if (phase === 'playing') {
      dispatch(playRobot())
    }

    if (phase === 'ended') {
      dispatch(determineWinner({ player: player, robot: robot }))
    }
  }, [phase, dispatch])

  function handleClick(object: GameState['player']) {
    dispatch(setPlayer(object))
  }

  return (
    <>
      <div className={styles.grid}>
        <Field className={styles['field-grid']} player={player} robot={robot} />

        <Button 
          disabled={disabled}
          className={styles['rock-grid']}
          variant='card'
          onClick={() => handleClick('rock')}
        >
          <Objects type='rock' size={80} />
        </Button>

        <Button
          disabled={disabled}
          className={styles['paper-grid']} 
          variant='card'
          onClick={() => handleClick('paper')}
        >
          <Objects type='paper' size={60} />
        </Button>

        <Button
          disabled={disabled}
          className={styles['scissors-grid']}
          variant='card'
          onClick={() => handleClick('scissors')}
        >
          <Objects type='scissors' size={70} />
        </Button>
      </div>
    </>
  )
}
