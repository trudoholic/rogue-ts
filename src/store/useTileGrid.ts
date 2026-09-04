import { create } from 'zustand'

type TTile = {
  terrain: string
  site: string
}

type TTiles = {[key: string]: TTile}

export const tileKey = (row: number, col: number): string => `R${row}C${col}`
const idStart = tileKey(0, 0)

const initialTiles: TTiles = {
  [idStart]: {
    terrain: "0",
    site: "0",
  },
}

type TileGridState = {
  tiles: TTiles
  idActive: string
}

const initialState: TileGridState = {
  tiles: initialTiles,
  idActive: idStart,
}

interface TileGridActions {
  setActive: (id: string) => void
}

export const useTileGrid = create<TileGridState & TileGridActions>(
  (set) => ({
    ...initialState,

    setActive: (id) => set(() => ({idActive: id})),
  })
)
