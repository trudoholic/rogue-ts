import { create } from 'zustand'

type TGameStat = {[key: string]: number}
type GameStatState = {
  gameStat: TGameStat
  cnt: bigint
}
const initialState: GameStatState = {
  gameStat: {},
  cnt: 0n,
}
// const initialState: GameStatState = {gameStat: {test:42, foo:1, bar:2}}

interface GameStatActions {
  updateGameStat: (key: string, value: number) => void
  incCnt: () => void
}

function incGameStat(stat: TGameStat, key: string, value: number) {
  return {...stat, [key]: (stat[key] ?? 0) +  value}
}

export const useGameStatStore = create<GameStatState & GameStatActions>(
  (set) => ({
    ...initialState,

    updateGameStat: (key, value) => set((state) => (
      {...state, gameStat: incGameStat(state.gameStat, key, value)}
    )),

    incCnt: () => set((state) => (
      {...state, cnt: ++state.cnt}
    )),
  })
)
