import Tile from "./Tile"

const ROWS = 11, COLS = 11
const range = (n: number) => [...Array(n).keys()]

function TileGrid() {
  return (
    <div className="flex flex-col">
      {
        range(ROWS).map(row => (
          <div key={row} className="flex">
            {
              range(COLS).map(col => (
                <Tile key={col} row={row} col={col} />
              ))
            }
          </div>
        ))
      }
    </div>

  )
}

export default TileGrid
