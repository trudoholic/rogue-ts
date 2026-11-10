import { create } from 'zustand'

type TGameStat = {[key: string]: number}
type GameStatState = {gameStat: TGameStat}
// const initialState: GameStatState = {gameStat: {}}
const initialState: GameStatState = {gameStat: {test:42, foo:1, bar:2}}

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
