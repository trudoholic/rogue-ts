import { create } from 'zustand'

type TUnit = {
  id: number
  mp: number
  hp: number
  xp?: number
}

const heroUnit: TUnit = {
  id: 1,
  mp: 100,
  hp: 100,
  xp: 0,
}


const unitList: TUnit[] = [heroUnit]

const initialState = {
  units: unitList,
}

type UnitsState = typeof initialState

interface UnitsActions {
  updateUnit: (idx: number, payload: Partial<TUnit>) => void
}

export const useUnitsStore = create<UnitsState & UnitsActions>(
  (set) => ({
    ...initialState,

    updateUnit: (idx, payload) => set((state) => (
      {units: state.units.map((p, i) => (idx === i? {...p, ...payload}: p))}
    )),
  })
)
