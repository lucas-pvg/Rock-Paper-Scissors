import { GameState } from './gameSlice'

export function generateRobotChoice(): Promise<GameState['robot']> {
  return new Promise((resolve, reject) => {
    const objects: Array<GameState['robot']> = ['rock', 'paper', 'scissors']
    const choice = objects[Math.floor(objects.length * Math.random())]

    if (objects.includes(choice) && choice !== '') {
      resolve(choice)
    } else {
      reject ('The robot could not decide what to play')
    }
  })
}

export function computeWinner(
  player: GameState['player'],
  robot: GameState['robot']
): Promise<GameState['result']>
{
  return new Promise((resolve, reject) => {
    let result: GameState['result'] = _computeResult(player, robot)

    if (result && ['lose', 'win', 'draw'].includes(result)) {
      resolve(result)
    }

    reject('Not possible to determine winner!')
  })
}

function _computeResult(
  player: GameState['player'],
  robot: GameState['robot']
): GameState['result'] 
{
  if (player === robot) return 'draw'
  else if (
    (player === 'rock' && robot === 'scissors') ||
    (player === 'scissors' && robot === 'paper') ||
    (player === 'paper' && robot === 'rock')
  ) {
    return 'win';
  }

  return 'lose';
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
