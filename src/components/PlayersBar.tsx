import { useMemoryContext } from "../context/memory-context"
import PlayerCard from "./PlayerCard";



export default function PlayersBar() {

    const {players} = useMemoryContext();
    
    const gridTemplateColumnsStyle = `repeat(${players.length}, 1fr)`

    if(players.length === 1){return}
  return (
    <div 
      className="grid sm:gap-x-8 gap-x-4"
      style={{gridTemplateColumns: gridTemplateColumnsStyle}}
      >
        {players.map((player, index) =>
             <PlayerCard key={index} id={index + 1}/>
        )}
    </div>
  )
}
