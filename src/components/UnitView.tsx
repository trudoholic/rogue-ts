import {useUnitsStore} from "../store/useUnitsStore"
import {useGameStatStore} from "../store/useGameStatStore"

function UnitView() {
  const gameStat = useGameStatStore(s => s.gameStat)
  const gameStatList = Object.entries(gameStat)
    .sort((a, b) => a[0].localeCompare(b[0]))
  // console.log(gameStat)
  // console.log(gameStatList)
  const updateGameStat = useGameStatStore(s => s.updateGameStat)

  const units = useUnitsStore(s => s.units)
  const updateUnit = useUnitsStore(s => s.updateUnit)

  function hit(n:number) {
    const _hp = units[0].hp
    updateUnit(0, {hp: _hp - n})
  }

  function heal(n:number) {
    const _hp = units[0].hp
    updateUnit(0, {hp: _hp + n})
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

      {
        gameStatList.map(it => (
            <div key={it[0]} className="flex gap-1">
              <p>{it[0]}</p>
              <p>{it[1]}</p>
            </div>
          ))
      }
      <button className={'btn-primary w-25'} onClick={() => updateGameStat("foo", 1)}>foo + 1</button>
      <button className={'btn-primary w-25'} onClick={() => updateGameStat("bar", 2)}>bar + 2</button>
    </div>

  )
}

export default UnitView
