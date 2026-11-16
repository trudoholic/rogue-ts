import {useEffect} from "react"
import {useUnitsStore} from "../store/useUnitsStore"
import {useGameStatStore} from "../store/useGameStatStore"
import {useQuestStore} from "../store/useQuestStore"

let questCnt = 0n

function UnitView() {
  const quests = useQuestStore(s => s.quests)
  const updateQuest = useQuestStore(s => s.updateQuest)

  const gameStat = useGameStatStore(s => s.gameStat)
  const gameStatList = Object.entries(gameStat)
    .sort((a, b) => a[0].localeCompare(b[0]))
  const updateGameStat = useGameStatStore(s => s.updateGameStat)

  const cnt = useGameStatStore(s => s.cnt)
  const incCnt = useGameStatStore(s => s.incCnt)

  const units = useUnitsStore(s => s.units)
  const updateUnit = useUnitsStore(s => s.updateUnit)

  useEffect(() => {
    if (cnt) {
      console.log('cnt:', cnt)
    }
  }, [cnt])

  function hit(n:number) {
    const _hp = units[0].hp
    updateUnit(0, {hp: _hp - n})
  }

  function heal(n:number) {
    const _hp = units[0].hp
    updateUnit(0, {hp: _hp + n})
  }

  function doFoo() {
    updateGameStat("foo", 1)
    incCnt()
  }

  function doBar() {
    updateGameStat("bar", 2)
    incCnt()
  }

  function testQuest() {
    updateQuest(++ questCnt, {active: false})
  }

  return (
    <div className="flex flex-col gap-1">
      {
        units.map(unit => (
          <div key={unit.id} className="flex gap-1">
            <p>{unit.hp}</p>
            <p>{unit.mp}</p>
            <p>{unit.xp ?? 0}</p>
          </div>
        ))
      }
      <button className={'btn-primary w-25'} onClick={() => hit(10)}>Hit</button>
      <button className={'btn-primary w-25'} onClick={() => heal(10)}>Heal</button>
      <hr className="border-zinc-500 my-4" />

      {
        gameStatList.map(it => (
            <div key={it[0]} className="flex gap-1">
              <p>{it[0]}</p>
              <p>{it[1]}</p>
            </div>
          ))
      }
      <button className={'btn-primary w-25'} onClick={doFoo}>foo + 1</button>
      <button className={'btn-primary w-25'} onClick={doBar}>bar + 2</button>
      <hr className="border-zinc-500 my-4" />

      {
        quests.map(it => (
          <div key={it.id} className="flex gap-1">
            <p className={it.active? 'text-green-500': 'text-red-500'}>{`# ${it.id} ${it.active} #`}</p>
          </div>
        ))
      }
      <button className={'btn-primary w-25'} onClick={testQuest}>Test</button>
      <hr className="border-zinc-500 my-4" />

    </div>

  )
}

export default UnitView
