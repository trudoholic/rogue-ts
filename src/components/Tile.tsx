// import {useDeckStore} from "../store/useDeckStore"
// import {getCard} from "../store/cards"

const cardColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-amber-500']

type CardViewProps = {
  id: number
  row: number
  col: number
}

function Tile({id, row, col}: CardViewProps) {
  // const card = getCard(id)
  const cardColor = cardColors[1] ?? 'bg-zinc-500'
  const idActive = 42
  // const idActive = useDeckStore(s => s.idActive)
  // const setActive = useDeckStore(s => s.setActive)

  const classesOut = `
  size-16 
  flex items-center justify-center 
  border -mr-[1px] -mb-[1px] 
  ${idActive === id? 'bg-zinc-50': cardColor}
  `
  const classesIn = `
  size-8 
  flex items-center justify-center 
  ${cardColor}
  `

  return (
    <div
      className={classesOut}
      // onClick={() => setActive(idActive === id? 0: id)}
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
