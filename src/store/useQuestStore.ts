import { create } from 'zustand'

/** GameStat */
export const GS = {
  foo: "foo",
  bar: "bar",
} as const

export type TGameStat = typeof GS[keyof typeof GS]

let questId = 0n

type TQuest = {
  id: bigint
  active: boolean
  stat: TGameStat
  value: number
}

const testQuest = (): TQuest => {
  ++questId
  return {
    id: questId,
    active: true,
    stat: GS.foo,
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
