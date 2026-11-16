import { create } from 'zustand'

let questId = 0n

type TQuest = {
  id: bigint
  active: boolean
}

const questList: TQuest[] = [
  // {id: 1n, active: true},
  // {id: 2n, active: true},
  // {id: 3n, active: true},
]

const initialState = {
  quests: questList,
}

type QuestsState = typeof initialState

interface QuestsActions {
  addQuest: () => void
  updateQuest: (idx: bigint, payload: Partial<TQuest>) => void
}

export const useQuestStore = create<QuestsState & QuestsActions>(
  (set) => ({
    ...initialState,

    addQuest: () => set((state) => (
      {quests: [...state.quests, {id: ++ questId, active: true}]}
    )),

    updateQuest: (idx, payload) => set((state) => (
      {quests: state.quests.map(quest => (idx === quest.id? {...quest, ...payload}: quest))}
    )),
  })
)
