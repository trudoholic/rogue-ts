import { create } from 'zustand'

let questId = 0n

type TQuest = {
  id: bigint
  active: boolean
  stat: string
  value: number
}

const testQuest = (): TQuest => {
  ++questId
  return {
    id: questId,
    active: true,
    stat: 'foo',
    value: +(questId + '0'),
  }
}

const questList: TQuest[] = []

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
      {quests: [...state.quests, testQuest()]}
    )),

    updateQuest: (idx, payload) => set((state) => (
      {quests: state.quests.map(quest => (idx === quest.id? {...quest, ...payload}: quest))}
    )),
  })
)
