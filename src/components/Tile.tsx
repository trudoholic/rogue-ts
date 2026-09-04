import {useTileGrid, tileKey} from "../store/useTileGrid"

const tileColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-amber-500']

type CardViewProps = {
  row: number
  col: number
}

function Tile({row, col}: CardViewProps) {
  const tileId = tileKey(row, col)
  const tileColor = tileColors[1] ?? 'bg-zinc-500'
  const idActive = useTileGrid(s => s.idActive)
  const setActive = useTileGrid(s => s.setActive)

  // console.log(row, col, idActive, tileKey(row, col), idActive === tileKey(row, col))

  function handleClick() {
    setActive(idActive === tileId? '': tileId)
  }

  function handleRightClick () {
    setActive(idActive === tileId? '': tileId)
  }

  const classesOut = `
  size-16 
  flex items-center justify-center 
  border -mr-[1px] -mb-[1px] 
  ${idActive === tileId? 'bg-zinc-50': tileColor}
  `
  const classesIn = `
  size-14 
  flex items-center justify-center 
  ${tileColor}
  `

  return (
    <div
      className={classesOut}
      onClick={handleClick}
      onContextMenu={e => {
        e.preventDefault()
        handleRightClick()
      }}
    >
      <div className={classesIn}>
        <p className={`font-mono text-lg text-center select-none`}>
          {`${row}:${col}`}
        </p>
      </div>
    </div>
  )
}

export default Tile
