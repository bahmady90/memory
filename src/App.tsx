import { useMemoryContext } from "./context/memory-context"

import SelectGame from "./components/SelectGame"
import Header from "./components/Header"
import GameAktive from "./components/GameAktive"
import FinishScreenModal from "./components/FinishScreenModal"
import Resultdiv from "./components/Resultdiv"
import MenuModal from "./components/MenuModal"
import MenuDiv from "./components/MenuDiv"




function App() {
  
  const {gameState, modalOpen} = useMemoryContext();

  // responsive rendering the gap between the main components
  const gapY = "lg:gap-y-[50px] sm:gap-y-[103px] gap-y-[50px]"

  return (
    <>
      <main className={`${gameState !== "initialising" ? "bg-white" : "bg-[#304859]"} w-screen h-screen lg:pt-16 sm:pt-12 pt-8`}>
          <MenuModal openModal={modalOpen} >
            <MenuDiv/>
          </MenuModal>
        <div className={`flex items-center ${gapY} gap-y-[45px] w-screen h-screen flex-col`}>
          <Header/>
          {gameState === "initialising" && <SelectGame/>}
          {gameState === "active" && 
            <>  
              <GameAktive/> 
            </>}
          {gameState === "finish" && 
            <FinishScreenModal openModal={true}>
              <Resultdiv/>
            </FinishScreenModal>
          }
        </div>
      </main>
      </>
    
  )
}

export default App
