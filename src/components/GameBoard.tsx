import { ReactElement } from "react"
import { useMemoryContext } from "../context/memory-context"

type GameBoardPprops = {
    children: Array<ReactElement>
}


export default function GameBoard({children}: GameBoardPprops) {

    const {gridSize} = useMemoryContext();
    
  return (
    <div 
        className={`grid lg:gap-[20px] sm:gap-[15px] gap-[10px]`}
        style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`
        }}
    
    >
      {children}
    </div>
  )
}
