import { create } from 'zustand'

type TQuest = {
  id: number
  active: boolean
}

const questList: TQuest[] = [
  {id: 1, active: false},
  {id: 2, active: true},
  {id: 3, active: true},
]

const initialState = {
  quests: questList,
}

type QuestsState = typeof initialState

interface QuestsActions {
  updateQuest: (idx: number, payload: Partial<TQuest>) => void
}

export const useQuestStore = create<QuestsState & QuestsActions>(
  (set) => ({
    ...initialState,

    updateQuest: (idx, payload) => set((state) => (
      {quests: state.quests.map((quest, i) => (idx === i? {...quest, ...payload}: quest))}
    )),
  })
)
