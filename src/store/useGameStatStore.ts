import { create } from 'zustand'

type GameStatState = {[key: string]: number}
// const initialState: GameStatState = {}
const initialState: GameStatState = {test:42, foo:1, bar:2}

interface GameStatActions {
  updateGameStat: (key: string, value: number) => void
}

export const useGameStatStore = create<GameStatState & GameStatActions>(
  (set) => ({
    ...initialState,

    updateGameStat: (key, value) => set((state) => (
      {...state, [key]: value}
    )),
  })
)
