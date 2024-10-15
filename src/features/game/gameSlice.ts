import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { generateRobotChoice, computeWinner, delay } from './game.utils'

export interface GameState {
  mode: 'normal' | 'hard'
  phase: 'waiting' | 'playing' | 'ended'
  player: 'rock' | 'paper' | 'scissors' | ''
  robot: 'rock' | 'paper' | 'scissors' | ''
  result: 'win' | 'lose' | 'draw' | ''
}

const initialState: GameState = {
  mode: 'normal',
  phase: 'waiting',
  player: '',
  robot: '',
  result: ''
}

export const playRobot = createAsyncThunk(
  'game/playRobot',
  async () => {
    await delay(1000)
    const response = await generateRobotChoice()
    return response
  }
)

export const determineWinner = createAsyncThunk(
  'game/determineWinner',
  async ({ player, robot }: { player: GameState['player']; robot: GameState['player'] }) => {
    await delay(1000)
    const response = await computeWinner(player, robot)
    return response
  }
)

export const gameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    changeMode: (state, action: PayloadAction<GameState['mode']>) => {
      state.mode = action.payload
    },

    setPlayer: (state, action: PayloadAction<GameState['player']>) => {
      state.player = action.payload
      state.phase = 'playing'
    },

    reset: (state) => {
      state.result = ''
      state.phase = 'waiting'
      state.player = ''
      state.robot = ''
    }
  },

  extraReducers: (builder) => {
    builder.addCase(playRobot.fulfilled, (state, action) => {
      state.robot = action.payload
      state.phase = 'ended'
    })
    .addCase(playRobot.rejected, (state) => {
      state.robot = ''
      state.phase = 'ended'
    })
    .addCase(determineWinner.fulfilled, (state, action) => {
      state.result = action.payload
      state.phase = 'waiting'
      alert(`${action.payload}!`)
    })
    .addCase(determineWinner.rejected, (state) => {
      state.result = ''
      state.phase = 'waiting'
    })
  },
})

export const { changeMode, setPlayer, reset } = gameSlice.actions
export default gameSlice.reducer
