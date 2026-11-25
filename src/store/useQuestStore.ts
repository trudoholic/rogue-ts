import { create } from 'zustand'
import {type TGameStat} from "../enums"

let questId = 0n

type TQuest = {
  id: bigint
  active: boolean
  gameStat: TGameStat
  value: number
}

const testQuest = (key: TGameStat): TQuest => {
  ++questId
  return {
    id: questId,
    active: true,
    gameStat: key,
    value: +(questId + '0'),
  }
}

const questList: TQuest[] = []

const initialState = {
  quests: questList,
}

type QuestsState = typeof initialState

interface QuestsActions {
  addQuest: (key: TGameStat) => void
  updateQuest: (idx: bigint, payload: Partial<TQuest>) => void
}

export const useQuestStore = create<QuestsState & QuestsActions>(
  (set) => ({
    ...initialState,

    addQuest: (key) => set((state) => (
      {quests: [...state.quests, testQuest(key)]}
    )),

    updateQuest: (idx, payload) => set((state) => (
      {quests: state.quests.map(quest => (idx === quest.id? {...quest, ...payload}: quest))}
    )),
  })
)
