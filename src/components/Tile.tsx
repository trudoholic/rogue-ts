// import {useDeckStore} from "../store/useDeckStore"
// import {getCard} from "../store/cards"

const cardColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-amber-500']

type CardViewProps = {
  id: number
}

function Tile({id}: CardViewProps) {
  // const card = getCard(id)
  const cardColor = cardColors[1] ?? 'bg-zinc-500'
  const idActive = 42
  // const idActive = useDeckStore(s => s.idActive)
  // const setActive = useDeckStore(s => s.setActive)

  const classesOut = `size-10 flex items-center justify-center ${idActive === id? 'bg-zinc-50': cardColor}`
  const classesIn = `size-8 flex items-center justify-center ${cardColor}`

  const txt = "0:0"

  return (
    <div
      className={classesOut}
      // onClick={() => setActive(idActive === id? 0: id)}
    >
      <div className={classesIn}>
        <p className={`font-bold text-lg text-center select-none`}>
          {`${txt}`}
        </p>
      </div>
    </div>
  )
}

export default Tile
