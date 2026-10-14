import {
  useUnitsStore,
} from "../store/useUnits"

function UnitView() {
  const units = useUnitsStore(s => s.units)

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
    </div>

  )
}

export default UnitView
