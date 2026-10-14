import {useState} from "react"
// import HeaderView from "./HeaderView"
// import MainControls from "./MainControls"
// import MainView from "./MainView"
// import AsideView from "./AsideView"
import UnitView from "./UnitView"
import TileGrid from "./TileGrid"

function Layout() {
  const [appMode, setAppMode] = useState("Map")

  const classesBtn = "btn-primary w-full"

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="border-b border-zinc-500 p-4 text-center">
        {/*<HeaderView/>*/}
        Header View
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="h-full flex flex-col md:flex-row">
          <aside className="w-full md:w-64 order-2 md:order-1 border-r border-zinc-500 p-4">
            {/*<MainControls/>*/}
            <div className="flex flex-col gap-1 items-center p-4">
              <button className={classesBtn} onClick={() => setAppMode("Map")}>Map</button>
              <button className={classesBtn} onClick={() => setAppMode("Hero")}>Hero</button>
            </div>
          </aside>

          <div className="w-full md:flex-1 order-1 md:order-2 p-4">
            {/*<MainView/>*/}
            {
              "Map" === appMode? <TileGrid/>: <UnitView/>
            }
          </div>

          <aside className="w-full md:w-72 order-3 md:order-3 border-l border-zinc-500 p-4">
            {/*<AsideView/>*/}
            Aside View
          </aside>
        </div>
      </main>

      <footer className="border-t border-zinc-500 p-4 text-center">
        <div className="container mx-auto">App Footer</div>
      </footer>
    </div>
  )
}

export default Layout
