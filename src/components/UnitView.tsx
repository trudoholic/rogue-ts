import {
  useUnitsStore,
} from "../store/useUnits"

function UnitView() {
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
    </div>

  )
}

export default UnitView
