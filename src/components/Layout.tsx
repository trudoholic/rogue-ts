// import HeaderView from "./HeaderView"
// import MainControls from "./MainControls"
// import MainView from "./MainView"
// import AsideView from "./AsideView"
import TileGrid from "./TileGrid"
import {test_1} from "./test"

function Layout() {
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
            <div className="flex flex-col gap-1 items-center">
              <button className={"btn-primary" + " w-32"}>Button</button>
              <button
                className={"btn-primary" + " w-32"}
                onClick={test_1}
              >Button 1</button>
            </div>
          </aside>

          <div className="w-full md:flex-1 order-1 md:order-2 p-4">
            {/*<MainView/>*/}
            <TileGrid/>
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
