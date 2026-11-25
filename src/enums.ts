/** GameStat */
export const GS = {
  foo: "foo",
  bar: "bar",
} as const

export type TGameStat = typeof GS[keyof typeof GS]
